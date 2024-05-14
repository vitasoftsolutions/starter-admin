//components
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import AllUser from "../pages/Dashboard/User/AllUser/AllUser";
import ActiveUser from "../pages/Dashboard/User/ActiveUser/ActiveUser";
import BannedUser from "../pages/Dashboard/User/BannedUser/BannedUser";
import EmailUnverified from "../pages/Dashboard/User/EmailUnverified/EmailUnverified";
import EmailToUser from "../pages/Dashboard/User/EmailToUser/EmailToUser";
import NotificationToUser from "../pages/Dashboard/User/NotificationToUser/NotificationToUser";
import SubscriberList from "../pages/Dashboard/Subscriber/SubscriberList";
import Donation from "../pages/Dashboard/Donation/Donation";
import ManageCategory from "../pages/Dashboard/Event/ManageCategory/ManageCategory";
import EventIndex from "../pages/Dashboard/Event/EventIndex/EventIndex";

//icons
import { AiOutlineDashboard } from "react-icons/ai";
import {
  FaUsersCog,
  FaUserClock,
  FaBell,
  FaUserShield,
  FaMoneyBillAlt,
} from "react-icons/fa";
import {
  MdMarkEmailUnread,
  MdMarkEmailRead,
  MdEventAvailable,
  MdEvent,
  MdEventNote,
} from "react-icons/md";

import { IoIosPeople } from "react-icons/io";
import { RiUserForbidFill } from "react-icons/ri";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: AiOutlineDashboard,
    element: <AdminDashboard />,
  },
  {
    name: "Manage Users",
    icon: FaUsersCog,
    children: [
      {
        name: "All Users",
        path: "all-users",
        icon: IoIosPeople,
        element: <AllUser />,
      },
      {
        name: "Active Users",
        path: "active-users",
        icon: FaUserClock,
        element: <ActiveUser />,
      },
      {
        name: "Banned Users",
        path: "banned-users",
        icon: RiUserForbidFill,
        element: <BannedUser />,
      },
      {
        name: "Email Unverified",
        path: "email-unverified",
        icon: FaUserShield,
        element: <EmailUnverified />,
      },
      {
        name: "Email To Users",
        path: "email-to-users",
        icon: MdMarkEmailRead,
        element: <EmailToUser />,
      },
      {
        name: "Notification To Users",
        path: "notification-to-users",
        icon: MdMarkEmailUnread,
        element: <NotificationToUser />,
      },
    ],
  },
  {
    name: "Subscribers List",
    path: "subscriber-list",
    icon: FaBell,
    element: <SubscriberList />,
  },
  {
    name: "Donations",
    path: "donations",
    icon: FaMoneyBillAlt,
    element: <Donation />,
  },
  {
    name: "Event Manage",
    icon: MdEventAvailable,
    children: [
      {
        name: "Manage Category",
        path: "manage-category",
        icon: MdEvent,
        element: <ManageCategory />,
      },
      {
        name: "Event Index",
        path: "event-index",
        icon: MdEventNote,
        element: <EventIndex />,
      },
    ],
  },
];
