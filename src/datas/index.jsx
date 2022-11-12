import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaHome,
  FaUser,
  FaImage,
  FaPaperPlane,
} from "react-icons/fa";

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaFacebookF />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
  {
    id: 4,
    url: "https://www.pinterest.com",
    icon: <FaPinterestP />,
  },
];

export const links = [
  {
    id: 1,
    icon: <FaHome />,
    text: "Home",
    url: "/",
  },
  {
    id: 2,
    icon: <FaImage />,
    text: "Gallery",
    url: "/gallery",
  },
  {
    id: 3,
    icon: <FaUser />,
    text: "About Me",
    url: "/about",
  },
  {
    id: 4,
    icon: <FaPaperPlane />,
    text: "Contact Me",
    url: "/contact",
  },
];

export const aboutContent = [
  "In my early 20s, if you ask me what I want to do or what's my plan, I would tell you I don't know. And that's the truth. I'd never thought I can be good at anything, let alone turn a passion into a profession. God has a plan for me.",
  "My love for creating beautiful images has taken me to places, meeting the kindest and friendliest people, listening to their stories, sharing their emotions, and learning about their life and culture. I'd captured those very rare moments of pure love, strength, and joy, or sometimes sadness, anger, and frustration. I laugh with them and cry with them. Unforgettable real-life moments that I get to document for my clients, or more selfishly, for me. These experiences are mine to keep and tell whenever there's an opportunity to share.",
  "I would love to showcase what you do and capture your memories, whether you're in business, in love or simply just being the best version of you. I take each assignment as an opportunity to challenge myself to be creative and produce the most professional images. Furthermore, I like to consider myself to be an advocator for documentation and preserving history, but most importantly, making beautiful images with YOU and building this dream until I no longer need to introduce myself. I’d like to invite you to follow me as I grow, learn and mature on this journey.",
];

export const people = [
  {
    id: 1,
    image: "/assets/person-1.png",
    name: "maria ferguson",
    content:
      "Tom is extremely friendly and easy to work with. Tom has an amazing talent for photography and is able to capture an object or person in a unique way. Would highly recommend.",
  },
  {
    id: 2,
    image: "/assets/person-2.png",
    name: "john doe",
    content:
      "Tom is just a fantastic guy and a great photographer. Highly recommend his services for any special occasion you might have.",
  },
  {
    id: 3,
    image: "/assets/person-3.png",
    name: "susan andersen",
    content:
      "Tom did amazing at capturing photos for my car, he was the perfect mix of being professional as well as quite funny which made for a great shoot!",
  },
  {
    id: 4,
    image: "/assets/person-4.png",
    name: "peter smith",
    content: "Amazing photos, great communication and professional work ethic!",
  },
];

export const categories = [
  {
    id: 1,
    text: "all",
  },
  {
    id: 2,
    text: "wedding",
  },
  {
    id: 3,
    text: "nature",
  },
  {
    id: 4,
    text: "halloween",
  },
];

export default people;
