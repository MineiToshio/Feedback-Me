import { lazy } from "react";

const ArrowDownIcon = lazy(() => import("./ArrowDownIcon"));
const ArrowLeftIcon = lazy(() => import("./ArrowLeftIcon"));
const ArrowUpIcon = lazy(() => import("./ArrowUpIcon"));
const CheckIcon = lazy(() => import("./CheckIcon"));
const CloseIcon = lazy(() => import("./CloseIcon"));
const CommentsIcon = lazy(() => import("./CommentsIcon"));
const EditFeedbackIcon = lazy(() => import("./EditFeedbackIcon"));
const HamburgerIcon = lazy(() => import("./HamburgerIcon"));
const NewFeedbackIcon = lazy(() => import("./NewFeedbackIcon"));
const PlusIcon = lazy(() => import("./PlusIcon"));

export type IconType =
  | typeof ArrowDownIcon
  | typeof ArrowLeftIcon
  | typeof ArrowUpIcon
  | typeof CheckIcon
  | typeof CloseIcon
  | typeof CommentsIcon
  | typeof EditFeedbackIcon
  | typeof HamburgerIcon
  | typeof NewFeedbackIcon
  | typeof PlusIcon;

const Icon = {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowUpIcon,
  CheckIcon,
  CloseIcon,
  CommentsIcon,
  EditFeedbackIcon,
  HamburgerIcon,
  NewFeedbackIcon,
  PlusIcon,
};

export default Icon;
