import styled from "styled-components";

export const PWContainer = styled.div`
  background: white;
  padding: 1rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const PWReqs = styled.section`
  margin: 1rem 0;
  font-family: "DM Mono";
  font-size: 12px;

  p {
    &:before {
      content: "☑️ ";
    }
    margin-bottom: 0.5rem;
    &.success {
      color: mediumseagreen;
      &:before {
        content: "✅ ";
      }
    }
  }
`;

export const Success = styled.p`
  color: mediumseagreen;
  font-size: 2rem;
`;

export const Button = styled.button`
  background: black;
  border: none;
  outline: none;
  padding: 0.5rem;
  color: white;
  font-family: "IBM Plex Mono";
  cursor: pointer;
  &:hover {
    background: #333;
  }
  &:disabled {
    background: #ccc;
  }
`;

export const PWField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid black;
  padding: 0.5rem;

  input {
    border: none;
    width: 100%;
    font-family: "DM Mono";
    outline: none;
  }

  button {
    background: transparent;
    border: none;
    outline: none;
    font-family: "IBM Plex Mono";
    font-size: 1rem;
    line-height: 0;
    cursor: pointer;
    color: mediumslateblue;
  }
`;

export const Message = styled.p`
  margin-bottom: 1rem;
`;

export const StregthSection = styled.section`
  margin-bottom: 1rem;

  section {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    margin-bottom: 0.5rem;

    p {
      text-align: right;
    }
  }
`;

export const Meter = styled.div`
  background: #ddd;
  width: 100%;
  height: 4px;
`;

export const MeterBar = styled(Meter)`
  background: red;
  width: 70%;
  transition: width 0.7s ease;
`;
