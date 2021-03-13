import { StarBorderOutlined, InfoOutlined } from "@material-ui/icons";
import {
  ChatHeader,
  ChatHeaderRight,
  ChatHeaderLeft,
} from "./chatHeader.styled";

const Header = ({ channelName }) => {
  return (
    <ChatHeader>
      <ChatHeaderLeft>
        <h4>
          <strong>#{channelName}</strong>
          <StarBorderOutlined />
        </h4>
      </ChatHeaderLeft>
      <ChatHeaderRight>
        <p>
          <InfoOutlined />
          Details
        </p>
      </ChatHeaderRight>
    </ChatHeader>
  );
};

export default Header;
