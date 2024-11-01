import { img, title } from "framer-motion/client";
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
    img: "/car-1.png",
    name: "Mercedes",
    model: " MF24K",
  },
  {
    id: 2,
    img: "/car-2.png",
    name: "DC",
    model: " DcK",
  },
  {
    id: 3,
    img: "/car-3.png",
    name: "Toyota",
    model: " T12K",
  },
  {
    id: 4,
    img: "/car-4.png",
    name: "Audi",
    model: "Audi500",
  },
  {
    id: 5,
    img: "/car-5.png",
    name: "Hundai",
    model: "HK250",
  },
  {
    id: 6,
    img: "/car-6.png",
    name: "Hundai",
    model: "HTX230",
  },
  {
    id: 7,
    img: "/car-7.png",
    name: "Ford",
    model: "FT220",
  },
  {
    id: 8,
    img: "/car-8.png",
    name: "PLussian",
    model: "hkMet42",
  },
];

export const cardDatabox = [
  {
    id: 1,
    img: "/car-1.png",
    name: "Mercedes",
    title: "2013 Subaru Forester",
    subtitle: "11 475 Miles .#20199884",
    color: "blue",
    amountone: "$21,480",
    amounttwo: "$14,000",
    bids: "10 bids",
  },
  {
    id: 2,
    img: "/car-2.png",
    name: "DC",
    title: "2013 dc Forester",
    subtitle: "11 475 Miles .#20199884",
    color: "white",
    amountone: "$61,480",
    amounttwo: "$8,000",
    bids: "18 bids",
  },
  {
    id: 3,
    img: "/car-3.png",
    name: "Toyota",
    title: "2013 Toyota Forester",
    subtitle: "11 475 Miles .#20199884",
    color: "yellow",
    amountone: "$20,480",
    amounttwo: "$13,000",
    bids: "14 bids",
  },
  {
    id: 4,
    img: "/car-4.png",
    name: "Audi",
    title: "2013 Subaru Forester",
    subtitle: "11 475 Miles .#20199884",
    color: "blue",
    amountone: "$45,480",
    amounttwo: "$16,000",
    bids: "17 bids",
  },
  {
    id: 5,
    img: "/car-5.png",
    name: "Hundai",
    title: "2013 Hundai Forester",
    subtitle: "11 475 Miles .#20199884",
    color: "blue",
    amountone: "$25,480",
    amounttwo: "$11,000",
    bids: "10 bids",
  },
  {
    id: 6,
    img: "/car-7.png",
    name: "hundai",
    title: "2013 hundai Forester",
    subtitle: "11 475 Miles .#20199884",
    color: "white",
    amountone: "$30,480",
    amounttwo: "$19,000",
    bids: "11 bids",
  },
];

export const reviewData = [
  {
    id: 1,
    img: "/review-1.png",
    title: "2021 Cadillac Escalade",
    desc: "The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",
    pic: "/pic-1.png",
    name: "Hironaka Hiroe",
    prof: "Chief Editor",
    rating: "4.91",
    num: "98",
  },
  {
    id: 2,
    img: "/review-2.png",
    title: "2021 Mercedes-Benz GLA250",
    desc: "If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra. ",
    pic: "/pic-2.png",
    name: "Lew Silverton",
    prof: "Chief Editor",
    rating: "4.51",
    num: "35",
  },
  {
    id: 3,
    img: "/review-3.png",
    title: "2021 Hyundai Elantra",
    desc: "The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain. ",
    pic: "/pic-3.png",
    name: "Debashis Bhuiyan",
    prof: "News Editor",
    rating: "4.65",
    num: "63",
  },
  {
    id: 4,
    img: "/review-4.png",
    title: "2021 Audi Mostug",
    desc: "The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",
    pic: "/pic-4.png",
    name: "Jontk LIitas",
    prof: "News Editor",
    rating: "4.00",
    num: "88",
  },
  {
    id: 5,
    img: "/review-5.png",
    title: "Ford Elantra",
    desc: "The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain.  ",
    pic: "/pic-5.png",
    name: "Deaddoga dogee",
    prof: "Marketing Senors",
    rating: "4.65",
    num: "45",
  },
  {
    id: 6,
    img: "/review-6.png",
    title: "2024 Totoya Elantra",
    desc: "Along with conventional advertising and below the line activities, organizations and corporate bodies have come to realize that.",
    pic: "/pic-6.png",
    name: "Monark lobida",
    prof: "Managing expart",
    rating: "4.65",
    num: "73",
  },
];
