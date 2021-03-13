import {
  InsertComment,
  Inbox,
  Drafts,
  BookmarkBorder,
  FileCopy,
  PeopleAlt,
  Apps,
  ExpandLess,
  ExpandMore,
  Add,
} from "@material-ui/icons";

export const menuOptions = [
  {
    Icon: InsertComment,
    title: "Threads",
  },
  {
    Icon: Inbox,
    title: "Mention & reactions",
  },
  {
    Icon: Drafts,
    title: "Saved items",
  },
  {
    Icon: BookmarkBorder,
    title: "Channel browser",
  },
  {
    Icon: FileCopy,
    title: "People & user groups",
  },
  {
    Icon: PeopleAlt,
    title: "Apps",
  },
  {
    Icon: Apps,
    title: "File browser",
  },
  {
    Icon: ExpandLess,
    title: "Show less",
    bottomLine: true,
  },
  {
    Icon: ExpandMore,
    title: "Channels",
    bottomLine: true,
  },
  {
    Icon: Add,
    title: "Add Channel",
    addChannelOption: true,
  },
];
