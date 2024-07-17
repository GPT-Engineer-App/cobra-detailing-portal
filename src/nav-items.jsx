import { Home, Wrench, Users, Phone } from "lucide-react";
import Index from "./pages/Index.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "Services",
    to: "/#services",
    icon: <Wrench className="h-4 w-4" />,
  },
  {
    title: "About Us",
    to: "/#about",
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: "Contact",
    to: "/#contact",
    icon: <Phone className="h-4 w-4" />,
  },
];