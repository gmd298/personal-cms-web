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
    link: "/Home"
  },
  {
    title: "About",
    icon: <MenuBookIcon />,
    link: "/About"
  },
  {
    title: "Portfolio",
    icon: <ContactPageIcon />,
    link: "/Home"
  },
  {
    title: "Contact",
    icon: <ConnectWithoutContactIcon />,
    link: "/Contact"
  },
  {
    title: "Profile",
    icon: <PersonIcon />,
    link: "/Home"
  }
  
]
