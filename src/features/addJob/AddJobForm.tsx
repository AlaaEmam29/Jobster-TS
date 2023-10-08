/* eslint-disable react-hooks/exhaustive-deps */
import Box from "../../ui/Box";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import styled from "styled-components";
import Select from "../../ui/Select";
import { useAddJob } from "./useAddJob";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { JobState, jobSchemaType, schemaJob } from "./types";
import { getUser } from "../../utils/localStorageUser";
import { z } from "zod";
import { useCurrentLocation } from "../location/useCurrentLocation";
import LocationRow from "../../ui/LocationRow";
import { useEffect } from "react";
import { useEditJob } from "./useEditJob";
import { useNavigate, useParams } from "react-router";
import { useAppDispatch } from "../../hooks/hooks";
import { cancelEditJob } from "./addJobSlice";
const StyledButtons = styled.div`
  display: flex;

  justify-content: flex-end;
  gap: 2rem;
  button {
    width: 20rem;
  }
`;

const inputs = [
  {
    name: "position",
    label: "Position",
    type: "text",
    id: "position",
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    id: "company",
  },
];

const selects = [
  {
    name: "statusOptions",
    label: "Status",
    options: ["pending", "interview", "declined"],
    id: "status",
  },
  {
    name: "jobTypeOptions",
    label: "Job Title",
    options: ["full-time", "part-time", "remote", "internship"],
    id: "job_title",
  },
];
const schema = z.object({
  ...schemaJob.shape,
});
export default function AddJobForm() {
  const { isLoadingJob, addJob, job } = useAddJob();
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { isEditingJob, updateJob } = useEditJob();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
    setValue,
  } = useForm<JobState>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...job,
    },
  });
  function handleCancelEditJob() {
    dispatch(cancelEditJob());
    setValue("company", "");
    setValue("position", "");
    setValue("jobLocation", "");
    setValue("jobTypeOptions", "full-time");
    setValue("statusOptions", "pending");
  }
  useEffect(() => {
    if (id == undefined) {
      handleCancelEditJob();
    }
  }, [id]);
  const navigate = useNavigate();
  const onSubmit = (data: JobState) => {
    const objData = {
      position: data.position,
      company: data.company,
      jobLocation: data.jobLocation,
      jobType: data.jobTypeOptions,
      status: data.statusOptions,
    };
    if (isEditingJob && id) {
      const updateObj = {
        ...objData,
        _id: id,
      };
      updateJob(updateObj).then((res: any) => {
        const {
          meta: { requestStatus },
        } = res;
        if (requestStatus === "fulfilled") {
          navigate("/add-job");
        }
      });
    } else {
      const addObj = {
        ...objData,
      } as any;
      addJob(addObj ).then((res: any) => {
        const {
          meta: { requestStatus },
        } = res;
        if (requestStatus === "fulfilled") {
          reset();
        }
      });
    }
  };
  const onError = (error: any) => {
    console.log(error, "error from useForm");
  };
  const handleReset = () => {
    reset();
  };

  const cachedUser = getUser();
  const { location, currentLocation } = useCurrentLocation();
  const getCurrentLocation = async () => {
    await currentLocation();
  };
  useEffect(() => {
    if (location) setValue("jobLocation", location);
  }, [location]);

  return (
    <Box>
      <Box.Title as="h3">{isEditingJob ? "Edit Job" : "Add Job"}</Box.Title>
      <Box.Body>
        <Form gap={3} onSubmit={handleSubmit(onSubmit, onError)}>
          {inputs.map((input) => (
            <FormRow
              key={input.name}
              label={input.label}
              error={errors?.[input.name as keyof jobSchemaType]?.message}
            >
              <Input
                {...input}
                disabled={isLoadingJob}
                {...register(input.name as keyof jobSchemaType)}
              />
            </FormRow>
          ))}

          {selects.map((select) => (
            <FormRow
              key={select.name}
              label={select.label}
              error={errors?.[select.name as keyof jobSchemaType]?.message}
            >
              <Select
                {...select}
                disabled={isLoadingJob}
                {...register(select.name as keyof jobSchemaType)}
              >
                {select.options.map((option) => (
                  <option key={option} value={option}>
                    {option.replace("-", " ")}
                  </option>
                ))}
              </Select>
            </FormRow>
          ))}
          <LocationRow
            label="Job Location"
            error={errors?.jobLocation?.message}
          >
            <Input
              disabled={isLoadingJob}
              id="jobLocation"
              defaultValue={cachedUser?.location || location}
              {...register("jobLocation" as keyof jobSchemaType)}
            />
            <LocationRow.Button
              disabled={isLoadingJob}
              onClick={getCurrentLocation}
            >
              current location
            </LocationRow.Button>
          </LocationRow>
          <StyledButtons>
            <Button
              type="reset"
              size="large"
              color="tertiary"
              disabled={isLoadingJob}
              onClick={handleReset}
            >
              Clear
            </Button>
            <Button type="submit" size="large" disabled={isLoadingJob}>
              {isEditingJob ? "Update Job" : "Save Changes"}
            </Button>
          </StyledButtons>
        </Form>
      </Box.Body>
    </Box>
  );
}
