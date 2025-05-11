import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineArchive } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsTag } from "react-icons/bs";
import { LuSettings, LuClock4 } from "react-icons/lu";

import { BiChevronRight } from "react-icons/bi";
import { FaPlus, FaTrash } from "react-icons/fa";
import { MdSettingsBackupRestore } from "react-icons/md";

export const Icons = {
  notes: IoHomeOutline,
  archived: MdOutlineArchive,
  home: IoHomeOutline,
  search: CiSearch,
  tags: BsTag,
  settings: LuSettings,
  chevronRight: BiChevronRight,
  plus: FaPlus,
  delete: FaTrash,
  clock: LuClock4,
  restore: MdSettingsBackupRestore,
} as const;
