import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import PersonIcon from '@mui/icons-material/Person';

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/"
  },
  {
    title: "About",
    icon: <MenuBookIcon />,
    link: "/about"
  },
  {
    title: "Portfolio",
    icon: <ContactPageIcon />,
    link: "/portfolio"
  },
  {
    title: "Contact",
    icon: <ConnectWithoutContactIcon />,
    link: "/contact"
  },
  {
    title: "Profile",
    icon: <PersonIcon />,
    link: "/profile"
  }
  
]
