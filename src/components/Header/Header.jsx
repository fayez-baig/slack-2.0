import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import {
  HeaderConatiner,
  HeaderLeft,
  HeaderSearch,
  HeaderRight,
  HeaderAvatar,
} from "./header.styled";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <HeaderConatiner>
      <HeaderLeft>
        <HeaderAvatar
          onClick={() => auth.signOut()}
          src={user?.photoURL}
          alt={user?.displayName}
        />
        <AccessTimeIcon />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderConatiner>
  );
};

export default Header;
