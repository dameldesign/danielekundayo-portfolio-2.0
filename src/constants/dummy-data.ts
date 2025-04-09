import { Project, Projects } from "@/types";

// Dummy reviews data
export const dummyReviews = [
  {
    id: "1",
    name: "John Smith",
    company: "United States",
    review:
      "Daniel delivered an exceptional website that perfectly captured our brand identity. His attention to detail and creative approach exceeded our expectations.",
    image: "/images/testimonials/john.jpg",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    company: "Canada",
    review:
      "Working with Daniel was a pleasure! He understood our requirements quickly and delivered a stunning website that has significantly improved our online presence.",
    image: "/images/testimonials/sarah.jpg",
  },
  {
    id: "3",
    name: "Michael Brown",
    company: "United Kingdom",
    review:
      "Daniel's expertise in web development is impressive. He created a user-friendly interface that has received numerous compliments from our customers.",
    image: "/images/testimonials/michael.jpg",
  },
  {
    id: "4",
    name: "Emily Davis",
    company: "Australia",
    review:
      "I highly recommend Daniel for any web development project. His professionalism, technical skills, and creative vision make him stand out from other developers.",
    image: "/images/testimonials/emily.jpg",
  },
];

// Dummy projects data
export const dummyProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Farmvesto connects investors with high-potential farming ventures, ensuring profitable, secure and sustainable agricultural investments.",
    image: [{ url: "/images/Farmvesto.jpeg" }],
    github: "https://github.com/dameldesign/ecommerce-platform",
    view: "https://ecommerce-platform-demo.vercel.app",
  },
  {
    id: "2",
    title: "Portfolio Website",
    description:
      "A responsive portfolio website with smooth animations and dark mode support. Features project showcases and contact form integration.",
    image: [{ url: "/images/Farmvesto.jpeg" }],
    github: "https://github.com/dameldesign/portfolio-website",
    view: "https://portfolio-website-demo.vercel.app",
  },
  {
    id: "3",
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, task assignment, and progress tracking features.",
    image: [{ url: "/images/Farmvesto.jpeg" }],
    github: "https://github.com/dameldesign/task-management-app",
    view: "https://task-management-app-demo.vercel.app",
  },
  {
    id: "4",
    title: "Weather Dashboard",
    description:
      "An interactive weather dashboard that provides real-time weather information, forecasts, and location-based services.",
    image: [{ url: "/images/Farmvesto.jpeg" }],
    github: "https://github.com/dameldesign/weather-dashboard",
    view: "https://weather-dashboard-demo.vercel.app",
  },
  {
    id: "5",
    title: "Blog Platform",
    description:
      "A feature-rich blog platform with content management system, user authentication, and comment functionality.",
    image: [{ url: "/images/Farmvesto.jpeg" }],
    github: "https://github.com/dameldesign/blog-platform",
    view: "https://blog-platform-demo.vercel.app",
  },
  {
    id: "6",
    title: "Fitness Tracker",
    description:
      "A comprehensive fitness tracking application that allows users to monitor workouts, set goals, and track progress over time.",
    image: [{ url: "/images/Farmvesto.jpeg" }],
    github: "https://github.com/dameldesign/fitness-tracker",
    view: "https://fitness-tracker-demo.vercel.app",
  },
];

// Dummy projects data
export const dummySingleProjects: Projects[] = [
  {
    id: "1",
    title: "Farmvesto",
    description:
      "Farmvesto connects investors with high-potential farming ventures, ensuring profitable, secure and sustainable agricultural investments.",
    featuredImage: { url: "/images/Farmvesto.jpeg" },
    view: "https://farmvesto.com",
    stack: [
      "Next.js",
      "Tailwind CSS",
      "Flutterwave",
      "Paystack",
      "PostMan",
      "shadcn/ui",
      "magic ui",
      "TypeScript",
    ],
    createdAt: "2023-06-15",
    publishedAt: "2023-06-20",
  },
  {
    id: "2",
    title: "SavetoBuy: Save, Donate, Pay",
    description:
      "SavetoBuy is an All in One Money App for young Nigerians to build wealth and own the things they desire.We enable you to Save, Pay small small to buy from your favorite brands, and Invest your money wisely. Dream it! Save it! Own it!",
    featuredImage: { url: "/images/SavetoBuy.jpeg" },
    view: "https://play.google.com/store/apps/details?id=com.savetobuy.io&pcampaignid=web_share",
    stack: ["React Native", "PostMan", "Firebase", "Paystack", "TypeScript"],
    createdAt: "2023-07-10",
    publishedAt: "2023-07-15",
  },
  {
    id: "3",
    title: "ConnectNigeria",
    description: "Discover Real Estate and lots more in Nigeria",
    featuredImage: { url: "/images/Connect.jpeg" },
    view: "https://connectnigeria.com",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Gitbucket"],
    createdAt: "2023-08-05",
    publishedAt: "2023-08-12",
  },
  {
    id: "4",
    title: "Thryb",
    description:
      "Thryb! Start a trend Stay curious! Discover stories, perspectives and experiences fromdiverse creators. Connect, explore, stay updated.",
    featuredImage: { url: "/images/Thryb.jpeg" },
    view: "https://thryb.com/",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Nodejs"],
    createdAt: "2023-09-01",
    publishedAt: "2023-09-10",
  },
  {
    id: "5",
    title: "Rare Eat",
    description:
      "We are a premier marketplace specialising in African frozen ready-to-cook meals, offering a curated selection that tells the diverse stories of African cultures..",
    featuredImage: { url: "/images/Rare-Eat.jpeg" },
    github: "https://github.com/dameldesign/blog-platform",
    view: "https://blog-platform-demo.vercel.app",
    stack: ["Next.js", "MongoDB", "Tailwind CSS", "NextAuth"],
    createdAt: "2023-10-15",
    publishedAt: "2023-10-25",
  },
  {
    id: "6",
    title: "Bammby: Smart Dating & Matches /Contract",
    description:
      "Bammby is an AI-powered dating app that leverages real, verified identities and artificial intelligence to facilitate meaningful connections between like-minded individuals. ",
    featuredImage: { url: "/images/Bammby.jpeg" },

    view: "https://play.google.com/store/apps/details?id=com.bammby.app&pcampaignid=web_share",
    stack: ["React Native", "Expo", "Firebase", "Redux", "Axios"],
    createdAt: "2023-11-10",
    publishedAt: "2023-11-20",
  },
];
