/* eslint-disable no-unused-vars */
//components
import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard";
import AllUser from "../pages/Dashboard/User/AllUser/AllUser";
import ActiveUser from "../pages/Dashboard/User/ActiveUser/ActiveUser";
import BannedUser from "../pages/Dashboard/User/BannedUser/BannedUser";
import EmailUnverified from "../pages/Dashboard/User/EmailUnverified/EmailUnverified";
import EmailToUser from "../pages/Dashboard/User/EmailToUser/EmailToUser";
import NotificationToUser from "../pages/Dashboard/User/NotificationToUser/NotificationToUser";

//icons
import { TbDashboard } from "react-icons/tb";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  FaHandHoldingMedical,
  FaRegClipboard,
  FaHandHoldingUsd,
  FaClipboardList,
  FaUsers,
  FaCalendarTimes,
} from "react-icons/fa";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import {
  MdPeopleAlt,
  MdOutlineApartment,
  MdOutlineLocalPhone,
  MdFreeBreakfast,
  MdHomeWork,
} from "react-icons/md";
import {
  FaCartShopping,
  FaMoneyBillWave,
  FaClipboard,
  FaMoneyBillTransfer,
  FaMoneyBillTrendUp,
  FaPeopleRoof,
} from "react-icons/fa6";
import { IoPeopleCircle, IoApps } from "react-icons/io5";
import { IoIosPeople, IoIosSettings, IoIosTime } from "react-icons/io";
import { PiDotsThreeCircleFill, PiKeyReturnFill } from "react-icons/pi";
import { GrAnnounce } from "react-icons/gr";

export const userPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    icon: AiOutlineDashboard,
    element: <AdminDashboard />,
  },
  {
    name: "Manage Users",
    icon: IoIosPeople,
    children: [
      {
        name: "All Users",
        path: "all-users",
        icon: MdPeopleAlt,
        element: <AllUser />,
      },
      {
        name: "Active Users",
        path: "active-users",
        icon: MdPeopleAlt,
        element: <ActiveUser />,
      },
      {
        name: "Banned Users",
        path: "banned-users",
        icon: MdPeopleAlt,
        element: <BannedUser />,
      },
      {
        name: "Email Unverified",
        path: "email-unverified",
        icon: MdPeopleAlt,
        element: <EmailUnverified />,
      },
      {
        name: "Email To Users",
        path: "email-to-users",
        icon: MdPeopleAlt,
        element: <EmailToUser />,
      },
      {
        name: "Notification To Users",
        path: "notification-to-users",
        icon: MdPeopleAlt,
        element: <NotificationToUser />,
      },
    ],
  },
];
