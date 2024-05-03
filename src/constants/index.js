import {
  PiUser,
  PiHeart,
  PiShoppingBag,
  PiMagnifyingGlass,
} from "react-icons/pi";
import {
  lowTop,
  highTop,
  slipon,
  platform,
  heroBig,
  heroSmall,
  offcourtSmall,
  offcourtBig,
  summerlookBig,
  summerlookSmall,
  summerClassic,
  community,
  communityshop,
  converseWhite,
} from "../assets/images";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaArrowRightLong,
} from "react-icons/fa6";

export const navLinks = [
  { href: "#women", label: "Women" },
  { href: "#men", label: "Men" },
  { href: "#kids", label: "Kids" },
  { href: "#sale", label: "Sale", linkHighlight: "true" },
  { href: "#contact-us", label: "Connect With The Unexpected" },
];

export const userIcons = [
  { iconURL: PiUser, href: "/", key: "account" },
  { iconURL: PiHeart, href: "/", key: "favorite" },
  { iconURL: PiShoppingBag, href: "/", key: "cart" },
  { iconURL: PiMagnifyingGlass, href: "/", key: "search" },
];


export const hero = [
  {
    title: "The Next Generation",
    button: "SHOP NOW",
    desc: "Designed to pay homage to counter-culture fashion, the Chuck Taylor All Star Cruise pairs a classic canvas upper with retro-inspired details.",
    imgBig: heroBig,
    imgSmall:heroSmall,
  },
];

export const shopStyle = [
  {
    src: lowTop,
    label: "low top",
  },
  {
    src: highTop,
    label: "high top",
  },
  {
    src: platform,
    label: "platform",
  },
  {
    src: slipon,
    label: "slip-on",
  },
];

export const offcourticon = [
  {
    title: "Consistent Classic",
    button: "SHOP NOW",
    desc: "The Star Player '76 stays true to its iconic elements while brining in fresh design details like a leather Star Chevron and summer-inspired colors that'll amp up any outfit.",
    imgBig: offcourtBig,
    imgSmall:offcourtSmall,
  },
];

export const summerlook = [
  {
    title: "Higher Love",
    button: "SHOP NOW",
    desc: "It's a fresh altitude from a style with timeless attitude—the Chuck Taylor All Star Lift Platform. An amped-up sole gives these Chucks elevated edge. While fresh colors make 'em an easy add to any close.",
    imgBig: summerlookBig,
    imgSmall:summerlookSmall,
  },
];

export const foreverclassic = [
  {
    title: "Summer Aura",
    button: "SHOP NOW",
    desc: "A new summer-inspired color palette means you can tout your mood on these classic All Stars. Of course, feelings change— so you should probably get one in every color.",
    imgBig:summerClassic,
  },
];

export const ourcommunity = [
  {
    title: "Shop By Style",
    button: "SHOP NOW",
    desc: "Use #InMyConverse and tag us on instagram to be featureed.",
    imgBig: community,
    imgSmall:communityshop,
  },
];

export const newsletterBig = [
  {
    title: "Never Miss a Beat",
    button: "Sign up for emails",
    desc: "Be the first to hear about product launches, collaborations, and more when you sign up for our emails.",
    imgBig: converseWhite,
  },
];

export const highlights = [
  {
    title: "The Next Generation",
    button: "SHOP NOW",
    desc: "Designed to pay homage to counter-culture fashion, the Chuck Taylor All Star Cruise pairs a classic canvas upper with retro-inspired details.",
    imgBig: heroBig,
    imgSmall:heroSmall,
  },
];

export const newsletter = [
  {
    title: "Never Miss a Beat",
    placeholder: "Enter your email address",
    desc: "Be the first to hear about product launches, collaborations, and more when you sign up for our emails.",
    iconURL: FaArrowRightLong,
  },
];

export const socialMedia = [
  { iconURL: FaFacebookF, href: "/", key: "facebook" },
  { iconURL: FaTwitter, href: "/", key: "twitter" },
  { iconURL: FaInstagram, href: "/", key: "instagram" },
  { iconURL: FaYoutube, href: "/", key: "youtube" },
];

export const footerLinks = [
  { href: "/", label: "FAQs" },
  { href: "/", label: "Order Status" },
  { href: "/", label: "Shipping & Delivery" },
  { href: "/", label: "Returns & Refunds" },
  { href: "/", label: "Payments" },
  { href: "/", label: "Contact Us" },
  { href: "/", label: "Size Guide" },
  { href: "/", label: "Student Discount" },
];

// export const products = [
//     {
//         imgURL: shoe4,
//         name: "Nike Air Jordan-01",
//         price: "$200.20",
//     },
//     {
//         imgURL: shoe5,
//         name: "Nike Air Jordan-10",
//         price: "$210.20",
//     },
//     {
//         imgURL: shoe6,
//         name: "Nike Air Jordan-100",
//         price: "$220.20",
//     },
//     {
//         imgURL: shoe7,
//         name: "Nike Air Jordan-001",
//         price: "$230.20",
//     },
// ];

// export const reviews = [
//     {
//         imgURL: customer1,
//         customerName: 'Morich Brown',
//         rating: 4.5,
//         feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
//     },
//     {
//         imgURL: customer2,
//         customerName: 'Lota Mongeskar',
//         rating: 4.5,
//         feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
//     }
// ];
