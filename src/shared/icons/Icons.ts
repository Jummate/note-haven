import { IoEyeOffOutline, IoHomeOutline, IoEyeOutline } from 'react-icons/io5';
import {
  MdOutlineArchive,
  MdSettingsBackupRestore,
  MdOutlineLightMode,
} from 'react-icons/md';
import { CiSearch, CiLock } from 'react-icons/ci';
import { BsTag } from 'react-icons/bs';
import { LuSettings, LuClock4 } from 'react-icons/lu';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa';
import {
  RiFontSize2,
  RiDeleteBin6Line,
  RiFontMono,
  RiFontSansSerif,
  RiFontSans,
} from 'react-icons/ri';
import { TbLogout, TbMoon2 } from 'react-icons/tb';
import { GrSystem } from 'react-icons/gr';
import { CgShapeCircle } from 'react-icons/cg';
import { GoCircle } from 'react-icons/go';

export const AppIcons = {
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
  changePasswordIcon: CiLock,
  colorTheme: MdOutlineLightMode,
  fontTheme: RiFontSize2,
  logout: TbLogout,
  hidePasswordIcon: IoEyeOutline,
  showPasswordIcon: IoEyeOffOutline,
  moon: TbMoon2,
  system: GrSystem,
  selectionIndicatorDefault: GoCircle,
  selectionIndicatorActive: CgShapeCircle,
  sansSerif: RiFontSans,
  serif: RiFontSansSerif,
  mono: RiFontMono,
} as const;
