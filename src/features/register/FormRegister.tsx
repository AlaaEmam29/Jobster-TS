/* eslint-disable react-hooks/exhaustive-deps */
import ButtonLink from "../../ui/ButtonLink";
import FormSign from "../../ui/FormSign";
import FormCol from "../../ui/FormCol";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { useForm, FieldErrors } from "react-hook-form";
import { z } from "zod";
import { useEffect } from "react";
import RegisterFormInput from "./types";
import { useRegister } from "./useRegister";
import { useNavigate } from "react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginDemo } from "../user/useLoginDemo";

const inputs = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Name",
  },
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
  name: z
    .string()
    .nonempty({ message: "Name is required" })
    .min(5, { message: "Name must be at least 5 characters long" })
    .max(20, { message: "Name cannot exceed 20 characters" }),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid email format" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(30, { message: "Password cannot exceed 30 characters" }),
});
type RegisterSchemaType = z.infer<typeof schema>;

export default function FormRegister() {
  const {
    user,
    isLoading: isLoadingRegister,
    registerUser,
    flag,
  } = useRegister();
  const { isLoadingDemo, loginUserDemo } = useLoginDemo();
  const isLoading = isLoadingDemo || isLoadingRegister;
  const navigate = useNavigate();
  const handleRegisterDemo = (): void => {
    loginUserDemo();

  };
  useEffect(() => {
    if (user?.email && flag === "toLoginPage") {
      navigate("/login");
    } else {
      navigate("/register");
    }
  }, [user?.email, flag]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({ resolver: zodResolver(schema) });
  const onSubmitForm = (data: RegisterSchemaType) => {
    registerUser(data);
  };
  const onErrorFrom = (error: FieldErrors<RegisterFormInput>) => {
    console.log(error, "error from useForm");
  };

  return (
    <FormSign onSubmit={handleSubmit(onSubmitForm, onErrorFrom)}>
      <FormSign.Logo />
      <FormSign.Title>Register</FormSign.Title>
      <FormSign.Inputs>
        {inputs.map((input) => {
          const { name, type, placeholder, label } = input;
          const error = errors?.[name as keyof RegisterFormInput];
          return (
            <FormCol key={name} label={label} error={error && error.message}>
              <Input
                type={type}
                disabled={isLoading}
                placeholder={placeholder}
                {...register(name as keyof RegisterFormInput)}
              />
            </FormCol>
          );
        })}
      </FormSign.Inputs>
      <FormSign.Buttons>
        <Button type="submit" size="large" disabled={isLoading}>
          Submit
        </Button>
        <Button
          color="secondary"
          size="large"
          disabled={isLoading}
          onClick={handleRegisterDemo}
        >
          Demo
        </Button>
      </FormSign.Buttons>
      <FormSign.Member>
        Already a member? <ButtonLink to="/login">Login</ButtonLink>
      </FormSign.Member>
    </FormSign>
  );
}
