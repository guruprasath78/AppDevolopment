// Import the new icons you want to use
import { AiOutlineDashboard, AiOutlinePlusCircle, AiOutlineSwapRight, AiOutlineFileText, AiOutlineMessage, AiOutlineQuestionCircle } from "react-icons/ai";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <AiOutlineDashboard />, // Change to AiOutlineDashboard
    cName: "nav-text",
    roles: ["ROLE_ADMIN"],
  },
  {
    title: "Add Product",
    path: "/addproduct",
    icon: <AiOutlinePlusCircle />, // Change to AiOutlinePlusCircle
    cName: "nav-text",
  },
  {
    title: "Sell",
    path: "/transfer",
    icon: <AiOutlineSwapRight />, // Change to AiOutlineSwapRight
    cName: "nav-text",
  },
  {
    title: "List all Products",
    path: "/products",
    icon: <AiOutlineFileText />, // Change to AiOutlineFileText
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/msg",
    icon: <AiOutlineMessage color="blue" />, // Change to AiOutlineMessage
    cName: "nav-text",
    roles: ["ROLE_ADMIN"],
  },
  {
    title: "Support",
    path: "/contact",
    icon: <AiOutlineQuestionCircle />, // Change to AiOutlineQuestionCircle
    cName: "nav-text",
    roles: ["ROLE_USER"],
  },
];
