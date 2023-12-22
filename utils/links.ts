import {
  BoltIcon,
  ClockIcon,
  Cog8ToothIcon,
  ExclamationTriangleIcon,
  FireIcon,
  FlagIcon,
  HandThumbUpIcon,
  MusicalNoteIcon,
  NewspaperIcon,
  PlayCircleIcon,
  PuzzlePieceIcon,
  QuestionMarkCircleIcon,
  TrophyIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";

export const MAIN_LINKS = [
  { id: 1, active: true, name: "Home", Icon: HomeIcon },
  { id: 2, active: false, name: "Shorts", Icon: BoltIcon },
  { id: 3, active: false, name: "Subscriptions", Icon: VideoCameraIcon },
];
export const NAV_LINKS = [
  { id: 1, active: true, name: "Home", Icon: HomeIcon },
  { id: 2, active: false, name: "Shorts", Icon: BoltIcon },
  { id: 3, active: false, name: "Subscriptions", Icon: VideoCameraIcon },
  { id: 4, active: false, name: "You", Icon: PlayCircleIcon },
];
export const MY_ACCOUNT_LINKS = [
  { id: 1, active: false, name: "History", Icon: ClockIcon },
  { id: 2, active: false, name: "Watch Later", Icon: ClockIcon },
  { id: 3, active: false, name: "Liked Videos", Icon: HandThumbUpIcon },
];
export const EXPLORE_LINKS = [
  { id: 1, active: false, name: "Trending", Icon: FireIcon },
  { id: 2, active: false, name: "Music", Icon: MusicalNoteIcon },
  { id: 3, active: false, name: "Gaming", Icon: PuzzlePieceIcon },
  { id: 4, active: false, name: "News", Icon: NewspaperIcon },
  { id: 5, active: false, name: "Sport", Icon: TrophyIcon },
];
export const OTHER_YT_LINKS = [
  { id: 1, active: false, name: "Settings", Icon: Cog8ToothIcon },
  { id: 2, active: false, name: "Report History", Icon: FlagIcon },
  { id: 3, active: false, name: "Help", Icon: QuestionMarkCircleIcon },
  {
    id: 4,
    active: false,
    name: "Send Feedback",
    Icon: ExclamationTriangleIcon,
  },
];
export const FIRST_BOTTOM_LINKS = [
  "About",
  "Press",
  "Copyright",
  "Contact us",
  "Creator",
  "Advertise",
  "Developers",
];
export const SECOND_BOTTOM_LINKS = [
  "Terms",
  "Privacy",
  "Policy & Safety",
  "How Youtube Works",
  "Test new features",
];
export const CATEGORIES = [
  "All",
  "Javascript",
  "Gaming",
  "Bodyweight Exercises",
  "Posture",
  "Editing",
  "Thougts",
  "Football",
  "Music",
  "Beauty",
  "Podcasts",
  "Live",
  "Drawing",
  "News",
  "Comedy",
  "Recently Uploaded",
  "Watched",
];
