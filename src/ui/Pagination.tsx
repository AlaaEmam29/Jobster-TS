import styled from "styled-components";
import Button from "./Button";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { usePagination } from "../features/allJob/usePagination";
const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export default function Pagination() {
  const { page, nextPage, prevPage, goToPage, numberOFJobs } =
    usePagination();

  return (
    <StyledPagination>
      <Button color="clear" onClick={prevPage}>
        <AiOutlineDoubleLeft />
      </Button>
      {Array(numberOFJobs)
        .fill(0)
        .map((_, index) => (
          <Button
            color="clear"
            key={index}
            active={page === index + 1}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </Button>
        ))}

      <Button color="clear" onClick={nextPage}>
        <AiOutlineDoubleRight />
      </Button>
    </StyledPagination>
  );
}
