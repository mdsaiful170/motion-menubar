import { Bolt } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { BellDot } from "lucide-react";
import { BookOpenText } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { TriangleAlert } from "lucide-react";
import { Users } from "lucide-react";
import { Lock } from "lucide-react";
import { Dessert } from "lucide-react";
import { ShieldPlus } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Images } from "lucide-react";
import { Figma } from "lucide-react";
import { Play } from "lucide-react";
import { MapPin } from "lucide-react";
import { Database } from "lucide-react";
import { PanelsTopLeft } from "lucide-react";
import { PanelTop } from "lucide-react";

import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";
import { Facebook } from "lucide-react";
import { Phone } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

export const Menus = [
  {
    name: "Features",
    subMenuHeading: ["Design", "Scale"],
    subMenu: [
      {
        name: "Design",
        desc: "Responsive design",
        icon: PanelsTopLeft,
      },
      {
        name: "Management",
        desc: "Site control",
        icon: Bolt,
      },
      {
        name: "Navigation",
        desc: "Link pages",
        icon: PanelTop,
      },
      {
        name: "CMS",
        desc: "Management content",
        icon: Database,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Resources",
    subMenuHeading: ["Get started", "Programs", "Recent"],
    subMenu: [
      {
        name: "Markplace",
        desc: "Browse templates",
        icon: ShoppingBag,
      },
      {
        name: "Meetups",
        desc: "Upcoming events",
        icon: MapPin,
      },
      {
        name: "Updates",
        desc: "Changelog",
        icon: BellDot,
      },
      {
        name: "Academy",
        desc: "Watch lessions",
        icon: Play,
      },
      {
        name: "Blog",
        desc: "Posts",
        icon: BookOpenText,
      },
      {
        name: "Figma",
        desc: "Plugin",
        icon: Figma,
      },
      {
        name: "Experts",
        desc: "Jobs",
        icon: BriefcaseBusiness,
      },
      {
        name: "Gallery",
        desc: "Images",
        icon: Images,
      },
    ],
    gridCols: 3,
  },
  {
    name: "Support",
    subMenuHeading: ["suppots", "media", "center"],
    subMenu: [
      {
        name: "Help",
        desc: "Center",
        icon: CircleHelp,
      },
      {
        name: "Youtube",
        desc: "Video Support",
        icon: Youtube,
      },
      {
        name: "linkedin",
        desc: "linkeding Support",
        icon: Linkedin,
      },

      {
        name: "Emergency",
        desc: "Urgent issues",
        icon: TriangleAlert,
      },
      {
        name: "Twitter",
        desc: "Twitter support",
        icon: Twitter,
      },
      {
        name: "Phone",
        desc: "live Coling",
        icon: Phone,
      },
      {
        name: "Community",
        desc: "Project help",
        icon: MessageCircle,
      },
      {
        name: "Facebook",
        desc: "Facebook Support",
        icon: Facebook,
      },
      {
        name: "Email",
        desc: "Send Email",
        icon: Mail,
      },
    ],
    gridCols: 3,
  },
  {
    name: "Enterprise",
    subMenuHeading: ["Overview", "Features"],
    subMenu: [
      {
        name: "Enterprise",
        desc: "Overview",
        icon: ShieldPlus,
      },
      {
        name: "Collaboration",
        desc: "Design together",
        icon: Users,
      },
      {
        name: "Customers",
        desc: "Stories",
        icon: Dessert,
      },
      {
        name: "Security",
        desc: "Your site secured",
        icon: Lock,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Pricing",
  },
  {
    name: "Contact",
  },
];


export const carData = [
  {
    id: 1,
    img:"/car-1.png",
    name: "Mercedes",
    model: " MF24K",
  },
  {
    id: 2,
    img:"/car-2.png",
    name: "DC",
    model: " DcK",
  },
  {
    id: 3,
    img:"/car-3.png",
    name: "Toyota",
    model: " T12K",
  },
  {
    id: 4,
    img:"/car-4.png",
    name: "Audi",
    model: "Audi500",
  },
  {
    id: 5,
    img:"/car-5.png",
    name: "Hundai",
    model: "HK250",
  },
  {
    id: 6,
    img:"/car-6.png",
    name: "Hundai",
    model: "HTX230",
  },
  {
    id: 7,
    img:"/car-7.png",
    name: "Ford",
    model: "FT220",
  },
  {
    id: 8,
    img:"/car-8.png",
    name: "PLussian",
    model: "hkMet42",
  },
]