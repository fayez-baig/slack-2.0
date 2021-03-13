import SidebarOption from "./Sidebar Option/SidebarOption";
import { menuOptions } from "./menuOptions";
const SidebarMenu = ({ channels }) => {
  return (
    <>
      {menuOptions.map(
        ({ Icon, title, addChannelOption, bottomLine }, index) => (
          <SidebarOption
            key={index}
            Icon={Icon}
            title={title}
            addChannelOption={addChannelOption}
            bottomLine={bottomLine}
          />
        )
      )}

      {channels?.docs.map((doc) => (
        <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
      ))}
    </>
  );
};

export default SidebarMenu;
