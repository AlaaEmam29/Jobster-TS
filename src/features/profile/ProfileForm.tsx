/* eslint-disable react-hooks/exhaustive-deps */
import Box from "../../ui/Box";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import styled from "styled-components";
import { getUser } from "../../utils/localStorageUser";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldErrors, useForm } from "react-hook-form";
import { useUpdate } from "./useUpdate";
import LocationRow from "../../ui/LocationRow";
import { useCurrentLocation } from "../location/useCurrentLocation";
import { useEffect } from "react";
const inputs = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    id: "first_name",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    id: "last_name",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    id: "email",
  },
];

const StyledButton = styled.div`
  text-align: end;
  button {
    width: 20rem;
  }
`;
const schema = z.object({
  firstName: z
    .string()
    .nonempty({ message: "Name is required" })
    .min(1, { message: "Name must be at least 1 characters long" })
    .max(20, { message: "Name cannot exceed 20 characters" }),
  lastName: z
    .string()
    .nonempty({ message: "Name is required" })
    .min(1, { message: "Name must be at least 1 characters long" })
    .max(20, { message: "Name cannot exceed 20 characters" }),

  email: z
    .string()
    .email({ message: "Invalid email format" })
    .nonempty({ message: "Email is required" }),
  location: z
    .string()
    .nonempty({ message: "Location is required" })
    .min(1, { message: "Location must be at least 1 characters long" })
    .max(20, { message: "Location cannot exceed 20 characters" }),
});
const defaultValue = (input: any, cachedUser: any) => {
  const [firstName, lastName] = cachedUser.name.split(" ");
  if (input.name === "firstName") {
    return firstName;
  } else if (input.name === "lastName") {
    return lastName;
  } else {
    return cachedUser[input.name];
  }
};
type ProfileSchemaType = z.infer<typeof schema>;

export default function ProfileForm() {
  const { isLoading, updateUser } = useUpdate();
  const cachedUser = getUser();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileSchemaType>({ resolver: zodResolver(schema) });
  const onSubmitForm = (data: ProfileSchemaType) => {
    const user = {
      name: `${data.firstName} ${data.lastName}`,
      lastName: data.lastName,
      email: data.email,
      location: data.location,
    };
    updateUser(user);
  };
  const onErrorFrom = (error: FieldErrors<ProfileSchemaType>) => {
    console.log(error, "error from useForm");
  };
  const { location, currentLocation } = useCurrentLocation();
  const getCurrentLocation = async () => {
    await currentLocation();
  };
  useEffect(() => {
    if (location) {
      setValue("location", location);
    }
  }, [location]);
  return (
    <Box>
      <Box.Title as="h3">Profile</Box.Title>
      <Box.Body>
        <Form gap={3} onSubmit={handleSubmit(onSubmitForm, onErrorFrom)}>
          {inputs.map((input) => {
            const error = errors?.[input.name as keyof ProfileSchemaType];
            const value = defaultValue(input, cachedUser);
            return (
              <FormRow
                key={input.name}
                label={input.label}
                error={error && error.message}
              >
                <Input
                  {...input}
                  defaultValue={value}
                  {...register(input.name as keyof ProfileSchemaType)}
                  disabled={isLoading}
                />
              </FormRow>
            );
          })}
          <LocationRow label="Job Location" error={errors?.location?.message}>
            <Input
              disabled={isLoading}
              defaultValue={location || cachedUser?.location}
              id="location"
              {...register("location" as keyof ProfileSchemaType)}
            />
            <LocationRow.Button
              disabled={isLoading}
              onClick={getCurrentLocation}
            >
              current location
            </LocationRow.Button>
          </LocationRow>
          <StyledButton>
            <Button type="submit" size="large" disabled={isLoading}>
              Save Changes
            </Button>
          </StyledButton>
        </Form>
      </Box.Body>
    </Box>
  );
}
