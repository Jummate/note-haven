import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineArchive } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsTag } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";

import { BiChevronRight } from "react-icons/bi";

export const Icons = {
  notes: IoHomeOutline,
  archived: MdOutlineArchive,
  home: IoHomeOutline,
  search: CiSearch,
  tags: BsTag,
  settings: LuSettings,
  chevronRight: BiChevronRight,
} as const;
