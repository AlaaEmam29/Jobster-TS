/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from "react-hook-form";
import { z } from "zod";
import ButtonLink from "../../ui/ButtonLink";
import FormSign from "../../ui/FormSign";
import FormCol from "../../ui/FormCol";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useEffect } from "react";
import LoginFormInput from "./types";
import { useLogin } from "./useLogin";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginDemo } from "../user/useLoginDemo";
const inputs = [
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "Password",
  },
];

const schema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .nonempty({ message: "Email is required" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(30, { message: "Password cannot exceed 30 characters" }),
});
type LoginSchemaType = z.infer<typeof schema>;

export default function FormLogin() {
  const {
    user,
    isLoading: isLoadingLogin,
    loginUser,
    flag,
  } = useLogin();
  const { isLoadingDemo, loginUserDemo } = useLoginDemo();
  const isLoading = isLoadingDemo || isLoadingLogin;
  const navigate = useNavigate();
  const handleLoginDemo = (): void => {
    loginUserDemo();
  };
  useEffect(() => {
    if (user?.email && flag === "toHomePage") {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [user?.email, flag]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({ resolver: zodResolver(schema) });
  const onSubmitForm = (data: LoginSchemaType) => {
    loginUser(data);
  };
  const onErrorFrom = (error: any) => {
    console.log(error, "error from useForm");
  };
  return (
    <FormSign onSubmit={handleSubmit(onSubmitForm, onErrorFrom)}>
      <FormSign.Logo />
      <FormSign.Title>Login</FormSign.Title>
      <FormSign.Inputs>
        {inputs.map((input: any) => {
          const { name, type, placeholder, label } = input;
          const error = errors?.[name as keyof LoginFormInput];
          return (
            <FormCol key={label} label={label} error={error && error.message}>
              <Input
                type={type}
                placeholder={placeholder}
                disabled={isLoading}
                {...register(name as keyof LoginFormInput, {
                  required: `${label} is required`,
                })}
              />
            </FormCol>
          );
        })}
      </FormSign.Inputs>
      <FormSign.Buttons>
        <Button type="submit" size="large" disabled={isLoading}>
          Submit{" "}
        </Button>
        <Button
          color="secondary"
          size="large"
          disabled={isLoading}
          onClick={handleLoginDemo}
        >
          Demo
        </Button>
      </FormSign.Buttons>
      <FormSign.Member>
        Not a member yet? <ButtonLink to="/register">Register</ButtonLink>
      </FormSign.Member>
    </FormSign>
  );
}
