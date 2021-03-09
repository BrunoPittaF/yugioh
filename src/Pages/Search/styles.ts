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
      figure {
        position: relative;
        &:active {
          > figcaption {
            transform: scale3d(1, 1, 1);
            visibility: visible;
            background-color: rgba(0, 0, 0, 1);
            opacity: 0.8;
            padding: 20px;
          }
        }
        &:focus {
          > figcaption {
            transform: scale3d(1, 1, 1);
            visibility: visible;
            background-color: rgba(0, 0, 0, 1);
            opacity: 0.8;
            padding: 20px;
          }
        }
        &:hover {
          > figcaption {
            transform: scale3d(1, 1, 1);
            visibility: visible;
            background-color: rgba(0, 0, 0, 1);
            opacity: 0.8;
            padding: 20px;
          }
        }
        figcaption {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: #000;
          opacity: 0;
          visibility: hidden;
          transform-origin: top center;
          transform: scale3d(1, 0, 1);
          transition: 1s;
          p {
            color: white;
            font-size: 16px;
          }
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
