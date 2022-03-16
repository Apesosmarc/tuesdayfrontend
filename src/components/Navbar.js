import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useGlobalContext } from "../context/appContext";
import BackgroundAvatar from "./BackgroundAvatar";

const Navbar = () => {
  const { user, logout, userAvatar, getRandomAvatar } = useGlobalContext();
  useEffect(() => {
    getRandomAvatar();
  }, []);

  const [showLogout, setShowLogout] = useState(false);
  return (
    <Wrapper>
      <div className="nav-center">
        <img src="./images/tuesdaylogo.png" alt="jobs app" height="100px" />
        {user && (
          <div className="btn-container">
            <button className="btn" onClick={() => setShowLogout(!showLogout)}>
              {/* <img
                height="75%"
                src={userAvatar}
                alt={`user ${user}'s avatar image`}
              /> */}
              <BackgroundAvatar name={user} />
              {user}
              <FaCaretDown />
            </button>
            <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
              <button onClick={() => logout()} className="dropdown-btn">
                logout
              </button>
            </div>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .nav-center {
    width: var(--fluid-width);
    max-width: var(--max-width);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    width: 200px;
    height: 60px;
  }

  .dropdown {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: var(--white);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    transition: var(--transition);
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
`;

export default Navbar;
