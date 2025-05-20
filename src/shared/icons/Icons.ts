import { IoHomeOutline } from "react-icons/io5";
import {
  MdOutlineArchive,
  MdSettingsBackupRestore,
  MdOutlineLightMode,
} from "react-icons/md";
import { CiSearch, CiLock } from "react-icons/ci";
import { BsTag } from "react-icons/bs";
import { LuSettings, LuClock4 } from "react-icons/lu";

import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { RiFontSize2 } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";

export const Icons = {
  notes: IoHomeOutline,
  archived: MdOutlineArchive,
  home: IoHomeOutline,
  search: CiSearch,
  tags: BsTag,
  settings: LuSettings,
  chevronRight: BiChevronRight,
  chevronLeft: BiChevronLeft,
  plus: FaPlus,
  delete: RiDeleteBin6Line,
  clock: LuClock4,
  restore: MdSettingsBackupRestore,
  "change-password": CiLock,
  "color-theme": MdOutlineLightMode,
  "font-theme": RiFontSize2,
  logout: TbLogout,
} as const;
