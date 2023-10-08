import Box from "../../ui/Box";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import styled from "styled-components";
import Select from "../../ui/Select";
import { useForm } from "react-hook-form";
import { searchSchema, searchSchemaType } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFilter } from "./useFilter";

const StyledButton = styled.div`
  display: flex;
  gap: 2rem;

  justify-content: flex-end;
  grid-column: 1 / -1;
  margin-top: 2rem;
  button {
    width: 20rem;
  }
`;

const selects = [
  {
    name: "searchStatus",
    label: "Status",
    options: ["all", "pending", "interview", "declined"],
    id: "searchStatus",
  },
  {
    name: "searchType",
    label: "Job Title",
    options: ["all", "full-time", "part-time", "remote", "internship"],
    id: "searchType",
  },
  {
    name: "sortOptions",
    label: "Sort",
    options: ["latest", "oldest", "a-z", "z-a"],
    id: "sortOptions",
  },
];

export default function SearchForm() {
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<searchSchemaType>({
    resolver: zodResolver(searchSchema),
  });

  const { isFiltering, filterJobs, resetFilter } = useFilter();
  const handleClearFilter = () => {
    reset();
    resetFilter();
  };
  const onSubmitForm = (data: searchSchemaType) => {
    filterJobs(data);
  };
  const onErrorFrom = (error: any) => {
    console.log(error, "error from useForm");
  };

  return (
    <Box>
      <Box.Title as="h3">Search Form</Box.Title>
      <Box.Body>
        <Form
          gap={1}
          layout="grid"
          onSubmit={handleSubmit(onSubmitForm, onErrorFrom)}
        >
          <FormRow label="Search" extra={true} error={errors?.search?.message}>
            <Input
              id="search"
              type="text"
              {...register("search")}
              disabled={isFiltering}
            />
          </FormRow>
          {selects.map((select) => (
            <FormRow
              extra={true}
              key={select.name}
              label={select.label}
              error={errors?.[select.name as keyof searchSchemaType]?.message}
            >
              <Select
                {...select}
                {...register(select.name as keyof searchSchemaType)}
                disabled={isFiltering}
              >
                {select.options.map((option) => (
                  <option key={option} value={option}>
                    {select.name === "sortOptions"
                      ? option
                      : option.replace(/-/g, " ")}
                  </option>
                ))}
              </Select>
            </FormRow>
          ))}

          <StyledButton>
            <Button
              type="button"
              size="large"
              color="danger"
              onClick={handleClearFilter}
              disabled={isFiltering}
            >
              Clear Filter
            </Button>
            <Button
              type="submit"
              size="large"
              color="primary"
              disabled={isFiltering}
            >
              Search
            </Button>
          </StyledButton>
        </Form>
      </Box.Body>
    </Box>
  );
}
