import styled from "styled-components";

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContent = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 200px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;

export { AppLoading, AppLoadingContent };
