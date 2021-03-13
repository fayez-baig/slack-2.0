import { useCollection } from "react-firebase-hooks/firestore";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SidebarMenu from "./Sidebar Menu/sidebarMenu";
import { SidebarContainer, SidebarHeader, SidebarInfo } from "./sidebar.styled";
import { db, auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Sidebar = () => {
  const [channels] = useCollection(db.collection("rooms"));
  const [user] = useAuthState(auth);

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Developer Community</h2>
          <h3>
            <FiberManualRecordIcon />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <CreateIcon />
      </SidebarHeader>
      <SidebarMenu channels={channels} />
    </SidebarContainer>
  );
};

export default Sidebar;
