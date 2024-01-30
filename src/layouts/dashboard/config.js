import HomeIcon from "@heroicons/react/24/solid/HomeIcon";
import CogIcon from "@heroicons/react/24/solid/CogIcon";
import LockClosedIcon from "@heroicons/react/24/solid/LockClosedIcon";
import ChatBubbleOvalLeftIcon from "@heroicons/react/24/solid/ChatBubbleOvalLeftIcon";
import FlagIcon from "@heroicons/react/24/solid/FlagIcon";
import ArrowPathIcon from "@heroicons/react/24/solid/ArrowPathIcon";

import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import { SvgIcon } from "@mui/material";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

// Definition of sidebar navigation items
export const items = [
  // Dashboard item
  {
    title: "Dashboard",
    path: "/",
    icon: (
      // Using MUI's SvgIcon to customize the size, wrapping HomeIcon
      <SvgIcon fontSize="small">
        <HomeIcon />
      </SvgIcon>
    ),
  },
  // Members item with sub-navigation
  {
    title: "Members",
    icon: (
      // Using MUI's SvgIcon to customize the size, wrapping UsersIcon
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
    // Sub-navigation items
    subNav: [
      {
        title: "Member List",
        path: "/member-list",
        icon: (
          // Using MUI's SvgIcon to customize the size, wrapping UsersIcon
          <SvgIcon fontSize="small">
            <UsersIcon />
          </SvgIcon>
        ),
      },
      {
        title: "Pending Members",
        path: "/member-pending-list",
        icon: (
          // Using MUI's SvgIcon to customize the size, wrapping ArrowPathIcon
          <SvgIcon fontSize="small">
            <ArrowPathIcon />
          </SvgIcon>
        ),
      },
    ],
  },
  // Assistants item
  {
    title: "Assistants",
    path: "/assistant-list",
    icon: (
      // Using MUI's SvgIcon to customize the size, wrapping ChatBubbleOvalLeftIcon
      <SvgIcon fontSize="small">
        <ChatBubbleOvalLeftIcon />
      </SvgIcon>
    ),
  },
  // Reports item
  {
    title: "Reports",
    path: "/reports",
    icon: (
      // Using MUI's SvgIcon to customize the size, wrapping FlagIcon
      <SvgIcon fontSize="small">
        <FlagIcon />
      </SvgIcon>
    ),
  },
  // Account item
  {
    title: "Account",
    path: "/account",
    icon: (
      // Using MUI's SvgIcon to customize the size, wrapping UserIcon
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  // Settings item
  {
    title: "Settings",
    path: "/settings",
    icon: (
      // Using MUI's SvgIcon to customize the size, wrapping CogIcon
      <SvgIcon fontSize="small">
        <CogIcon />
      </SvgIcon>
    ),
  },
  // Login item
  {
    title: "Login",
    path: "/auth/login",
    icon: (
      // Using MUI's SvgIcon to customize the size, wrapping LockClosedIcon
      <SvgIcon fontSize="small">
        <LockClosedIcon />
      </SvgIcon>
    ),
  },
  // Register item
  {
    title: "Register",
    path: "/auth/register",
    icon: (
      // Using MUI's SvgIcon to customize the size, wrapping UserPlusIcon
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    ),
  },

  {
    title: "Change Branch",
    path: "/auth/change-branch",
    icon: (
      // Using MUI's SvgIcon to customize the size, wrapping UserPlusIcon
      <SvgIcon fontSize="small">
        <ArrowLeftCircleIcon />
      </SvgIcon>
    ),
  },

  // Error item
  {
    title: "Error",
    path: "/404",
    icon: (
      // Using MUI's SvgIcon to customize the size, wrapping XCircleIcon
      <SvgIcon fontSize="small">
        <XCircleIcon />
      </SvgIcon>
    ),
  },
];
