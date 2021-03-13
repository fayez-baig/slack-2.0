import { useSelector } from "react-redux";
import Header from "./components/Chat Header/ChatHeader";
import ChatBody from "./components/Chat Body/ChatBody";
import ChatInput from "./components/Chat Input/ChatInput";
import { ChatContainer } from "./chat.styled";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { createRef } from "react";
import Loader from "./../../components/Loader/Loader";
const Chat = () => {
  const chatRef = createRef();
  const roomId = useSelector(({ app }) => app.roomId);

  const [roomDetails] = useDocument(
    roomId && db.collection("rooms").doc(roomId)
  );

  const [roomMessages, loading] = useCollection(
    roomId &&
      db
        .collection("rooms")
        .doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
  );

  return (
    <ChatContainer>
      {loading ? (
        <Loader />
      ) : (
        roomDetails && (
          <>
            <Header channelName={roomDetails?.data().name} />
            <ChatBody
              chatMessages={roomMessages}
              loading={loading}
              channelId={roomId}
              chatRef={chatRef}
              channelName={roomDetails?.data().name}
            />
          </>
        )
      )}
    </ChatContainer>
  );
};

export default Chat;
