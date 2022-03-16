import { useGlobalContext } from "../context/appContext";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import JobColumns from "./JobColumns";
import DropdownPrio from "./DropdownPrio";
import DropdownStatus from "./DropdownStatus";
import BackgroundAvatar from "./BackgroundAvatar";

const Jobs = () => {
  const { jobs, isLoading, deleteJob, user } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }

  if (jobs.length < 1) {
    return (
      <EmptyContainer>
        <h5>
          Currently, you have no <span>JOBS </span>
          to display
        </h5>
      </EmptyContainer>
    );
  }

  const userJob = (name) => {
    if (user === name) {
      return true;
    }
    return false;
  };

  return (
    <>
      <JobColumns />
      <Container>
        {jobs.map((item) => {
          const {
            _id: id,
            title,
            status,
            priority,
            createdAt,
            createdBy,
            name,
          } = item;
          // let date = moment(createdAt);
          // date = date.format("MMMM Do, YYYY");

          return (
            <article key={id} className="job">
              <span className="icon"></span>
              <span className="position">{title}</span>
              <span className="date">
                <BackgroundAvatar name={name} />

                {userJob(name) ? "(You)" : name}
              </span>
              {userJob(name) ? (
                <DropdownPrio priority={priority} id={id} />
              ) : (
                <PrioContainer className="priority">{priority}</PrioContainer>
              )}
              {userJob(name) ? (
                <DropdownStatus status={status} id={id} />
              ) : (
                <StatusContainer className="status">{status}</StatusContainer>
              )}

              <div className="action-div">
                <Link to={`/edit/${id}`} className="edit-btn" type="button">
                  {/* <FaEdit /> */}
                </Link>
                <button
                  className=" delete-btn"
                  type="button"
                  onClick={() => deleteJob(id)}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </Container>
    </>
  );
};
const EmptyContainer = styled.section`
  text-align: center;
  h5 {
    text-transform: none;
  }
  span {
    color: var(--primary-500);
  }
`;
const Container = styled.section`
  .job {
    background: var(--white);
    border-radius: var(--borderRadius);
    margin-bottom: 2rem;
    display: grid;
    align-items: center;
    padding: 2rem 0;
    justify-content: center;
    text-align: center;
  }

  span {
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
  }
  .position {
    font-weight: 600;
  }
  .date {
    color: var(--grey-500);
  }
  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    margin: 0.75rem auto;
    width: 200px;
  }
  .edit-btn {
    color: var(--green-dark);
    border-color: transparent;
    background: transparent !important;
    outline: transparent;
    border-radius: var(--borderRadius);
    cursor: pointer;
    display: inline-block;
    appearance: none;
  }
  .delete-btn {
    color: var(--red-dark);
    border-color: transparent;
    border-radius: var(--borderRadius);
    cursor: pointer;
    background: transparent;
  }
  .edit-btn,
  .delete-btn {
    font-size: 1rem;
    line-height: 1.15;
    margin-bottom: -3px;
  }

  .action-div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr;
    .icon {
      display: none;
    }
    background: var(--white);
    border-bottom-left-radius: var(--borderRadius);
    border-bottom-right-radius: var(--borderRadius);

    .job {
      border-radius: 0;
      justify-content: left;
      text-align: left;
      border-bottom: 1px solid var(--grey-200);
      grid-template-columns: 1fr 150px 200px 200px 100px;
      align-items: center;
      padding: 1rem 1.5rem;
      column-gap: 1rem;
      margin-bottom: 0;
    }
    .job:last-child {
      border-bottom: none;
    }
    span {
      font-size: var(--small-text);
    }
    .company,
    .position {
      font-weight: 400;
      text-transform: capitalize;
    }
    .date {
      font-weight: 400;
      color: var(--grey-500);
    }

    .status {
      font-size: var(--smallText);
      height: 30px;

      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }
    .priority {
      font-size: var(--smallText);
      height: 30px;

      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
    }

    .action-div {
      margin-left: 1rem;
      justify-content: left;
    }
  }
`;
const setStatusBackground = (status) => {
  if (status === "Done") return "#00ca72";
  if (status === "Working On It") return "#fdab3d";
  if (status === "Stuck") return "#e44258";
  if (status === "Waiting For Review") return "#579bfc";
  if (status === "Paused") return "#a25ddc";
  return "#f7f3d7";
};
// const setStatusBackground = (status) => {

// };

const setPriorityBackground = (priority) => {
  if (priority === "Low") return "#579bfc";
  if (priority === "Medium") return "#fdab3d";
  if (priority === "High") return "#e2445c";
  // return "#927238";
};

const PrioContainer = styled.span`
  border-radius: var(--borderRadius);
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
  text-align: center;
  color: white;
  background: ${(props) => setPriorityBackground(props.children)};
`;

const StatusContainer = styled.span`
  border-radius: var(--borderRadius);
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
  text-align: center;
  color: white;

  background: ${(props) => setStatusBackground(props.children)};
`;
export default Jobs;
