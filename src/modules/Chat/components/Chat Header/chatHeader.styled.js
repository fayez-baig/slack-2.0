import styled from "styled-components";

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;

const ChatHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: uppercase;
    font-size: 18px;
    margin-right: 10px;
    > .MuiSvgIcon-root {
      margin-left: 10px;
      font-size: 18px;
    }
  }
`;

const ChatHeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
`;

export { ChatHeader, ChatHeaderRight, ChatHeaderLeft };
