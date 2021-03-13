import { useEffect, useRef } from "react";
import { ChatMessages, ChatBottom } from "./chatbody.styled";
import Message from "./Message/Message";
import ChatInput from "./../Chat Input/ChatInput";

const ChatBody = ({ chatMessages, channelId, loading, channelName }) => {
  const chatRef = useRef(null);
  useEffect(() => {
    chatRef?.current?.scrollIntoView({
      behaviour: "smooth",
    });
  }, [channelId, loading, chatRef]);
  return (
    <ChatMessages>
      {chatMessages?.docs.map((doc) => {
        const { message, timestamp, user, userImage } = doc.data();

        return (
          <Message
            key={doc.id}
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
          />
        );
      })}
      <ChatInput
        channelName={channelName}
        channelId={channelId}
        chatRef={chatRef}
      />

      <ChatBottom ref={chatRef} />
    </ChatMessages>
  );
};

export default ChatBody;
