import React from "react";

import {BsVolumeUpFill,BsFillPersonFill} from 'react-icons/bs'

import {AiFillHome} from 'react-icons/ai'

import {MdOutlineProductionQuantityLimits} from 'react-icons/md'

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "Campaign",
    path: "/campaign",
    icon: <BsVolumeUpFill />,
    cName: "nav-text"
  },
  {
    title: "Products",
    path: "/",
    icon: <MdOutlineProductionQuantityLimits />,
    cName: "nav-text"
  },
  {
    title: "Customers",
    path: "/",
    icon: <BsFillPersonFill />,
    cName: "nav-text"
  },

];
