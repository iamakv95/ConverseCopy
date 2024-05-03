import { PiUser, PiHeart, PiShoppingBag } from "react-icons/pi";
import { lowTop, highTop, slipon, platform } from "../assets/images";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
export const navLinks = [
  { href: "#women", label: "Women" },
  { href: "#men", label: "Men" },
  { href: "#kids", label: "Kids" },
  { href: "#sale", label: "Sale", linkHighlight: "true" },
  { href: "#contact-us", label: "Connect With The Unexpected" },
];

export const userIcons = [
  { src: PiUser, href: "/", key: "account" },
  { src: PiHeart, href: "/", key: "favorite" },
  { src: PiShoppingBag, href: "/", key: "cart" },
];

export const socialMedia = [
  { src: FaFacebookF, href: "/", key: "facebook" },
  { src: FaTwitter, href: "/", key: "twitter" },
  { src: FaInstagram, href: "/", key: "instagram" },
  { src: FaYoutube, href: "/", key: "youtube" },
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

// export const footerLinks = [
//     {
//         title: "Products",
//         links: [
//             { name: "Air Force 1", link: "/" },
//             { name: "Air Max 1", link: "/" },
//             { name: "Air Jordan 1", link: "/" },
//             { name: "Air Force 2", link: "/" },
//             { name: "Nike Waffle Racer", link: "/" },
//             { name: "Nike Cortez", link: "/" },
//         ],
//     },
//     {
//         title: "Help",
//         links: [
//             { name: "About us", link: "/" },
//             { name: "FAQs", link: "/" },
//             { name: "How it works", link: "/" },
//             { name: "Privacy policy", link: "/" },
//             { name: "Payment policy", link: "/" },
//         ],
//     },
//     {
//         title: "Get in touch",
//         links: [
//             { name: "customer@nike.com", link: "mailto:customer@nike.com" },
//             { name: "+92554862354", link: "tel:+92554862354" },
//         ],
//     },
// ];
