import styled from "styled-components";

export const Container = styled.div`
  h1 {
    color: #000;
    text-align: center;
    margin: 20px 0px;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
    input {
      width: 300px;
      padding: 5px;
      border-radius: 4px;
      outline: none;
      border: none;
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px 20px;
    .favorite-card {
      display: flex;
      flex-direction: column;
      svg {
        align-self: flex-end;
        margin: 10px 0px;
        font-size: 1.5rem;
        &.active {
          color: red;
        }
      }
    }
  }

  @media (max-width: 475px) {
    .grid {
      grid-template-columns: 1fr;
      grid-gap: 20px 0px;
      figure {
        picture {
          img {
            width: 100%;
          }
        }
      }
    }
  }
`;
