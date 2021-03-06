import { Link } from "react-router-dom";
import styled from "styled-components";
import { useGlobalContext } from "../context/appContext";
import { Redirect } from "react-router-dom";

function Home() {
  const { user } = useGlobalContext();

  return (
    <>
      {user && <Redirect to="/dashboard" />}
      <Wrapper>
        <nav></nav>
        <div className="container page">
          <div className="info">
            <h1>job tracking app</h1>
            <p>
              I'm baby viral enamel pin chartreuse cliche retro af selfies
              kinfolk photo booth plaid jianbing actually squid 3 wolf moon
              lumbersexual. Hell of humblebrag gluten-free lo-fi man braid
              leggings.
            </p>

            <Link to="/register" className="btn hero-btn">
              Login / Register
            </Link>
          </div>
          <img
            alt="job hunt"
            className="img main-img"
            src="./images/tuesdaylogo.png"
          />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .container {
    min-height: calc(100vh - 6rem);
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: 6rem;
    display: flex;
    align-items: center;
  }
  h1 {
    font-weight: 700;
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .container {
      grid-template-columns: 1fr 1fr;
      column-gap: 6rem;
    }
    .main-img {
      display: block;
      width: auto;
    }
  }
`;

export default Home;
