import styled from "styled-components";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context/appContext";
import FormRow from "../components/FormRow";
import Jobs from "../components/Jobs";
import DropdownPrio from "../components/DropdownPrio";
import DropdownStatus from "../components/DropdownStatus";
import InputField from "../components/InputField";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [values, setValues] = useState({
    title: "",
    status: "Working On It",
    priority: "Medium",
  });

  const { isLoading, fetchJobs, jobs, user, createJob, showAlert } =
    useGlobalContext();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, status, priority } = values;

    if (title && status && priority) {
      createJob(values);
      setValues({
        title: "",
        status: "Working On It",
        priority: "Medium",
      });
    }
  };

  console.log("rereender");
  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />

      <Wrapper className="page">
        {showAlert && (
          <div className="alert alert-danger">
            there was an error, please try again
          </div>
        )}
        <form className="job-form" onSubmit={handleSubmit}>
          {/* <FormRow
            type="name"
            name="title"
            value={values.title}
            handleChange={handleChange}
            placeholder="Task"
          /> */}

          <InputField handleChange={handleChange} input={values.title} />

          <DropdownStatus handleCreateChange={handleChange} />
          <DropdownPrio handleCreateChange={handleChange} />

          <button type="submit" className="btn" disabled={isLoading}>
            {isLoading ? "Adding New Job..." : "Add Job"}
          </button>
        </form>

        <Jobs />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  padding: 3rem 0;

  .job-form {
    background: var(--white);
    display: grid;
    row-gap: 2rem;
    column-gap: 0.5rem;
    align-items: center;
    margin-bottom: 3rem;
    border-radius: var(--borderRadius);
    padding: 1.5rem;
    .form-input {
      padding: 0.75rem;
    }

    .form-input:focus {
      outline: 1px solid var(--primary-500);
    }
    .form-row {
      margin-bottom: 0;
    }
    .btn {
      padding: 0.75rem;
      color: white;
    }
    @media (min-width: 776px) {
      grid-template-columns: 1fr 200px auto;
      .btn {
        height: 100%;
        width: 100%;
        align-self: center;
        justify-self: left;
        grid-column: 3/3;
        color: white;
      }
      column-gap: 2rem;
    }
  }
  .alert {
    max-width: var(--max-width);
    margin-bottom: 1rem;
  }
`;

export default Dashboard;
