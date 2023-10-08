import { useEffect, useState } from "react";
import Button from "../../ui/Button";
import { useAddJob } from "../addJob/useAddJob";

export default function AddButtonTest() {
  const [jobs, setJobs] = useState([]);
  const handleAddJob = async () => {
    if (jobs.length > 0) {
      console.log("clicked");
      for (let i = 0; i < jobs.length; i++) {
        await addJob(jobs[i]);
      }
    }
  };

  const { addJob } = useAddJob();
  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return <Button onClick={handleAddJob}>Add Job Dummy</Button>;
}
