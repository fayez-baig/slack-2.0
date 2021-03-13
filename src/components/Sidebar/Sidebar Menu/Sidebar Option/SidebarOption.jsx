import { useDispatch } from "react-redux";
import { enterRoom } from "../../../../Slice/appSlice";
import { db } from "../../../../firebase";
import {
  SidebarOptionContainer,
  SiderbarOptionChannel,
} from "./sidebarOption.styled";

const SidebarOption = ({ Icon, title, addChannelOption, bottomLine, id }) => {
  const dispatch = useDispatch();

  const addChannel = () => {
    const channelName = prompt("Please Enter Channel Name");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const selectedChannel = () => {
    if (id) {
      dispatch(enterRoom({ roomId: id }));
    }
  };

  return (
    <>
      <SidebarOptionContainer
        onClick={addChannelOption ? addChannel : selectedChannel}
      >
        {Icon && <Icon fontSize="small" style={{ padding: "20px" }} />}
        {Icon ? (
          <h3>{title}</h3>
        ) : (
          <SiderbarOptionChannel>
            <span>#</span> {title}
          </SiderbarOptionChannel>
        )}
      </SidebarOptionContainer>
      {bottomLine && <hr />}
    </>
  );
};

export default SidebarOption;
