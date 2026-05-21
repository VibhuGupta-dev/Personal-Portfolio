import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Vibhu Gupta",
  initials: "HR",
  url: "https://github.com/VibhuGupta-dev",
  location: "Lucknow, India",
  locationLink: "https://maps.app.goo.gl/JiXqDLT6Hg1Bz6e4A",
  description:
    "Tech Enthusiast turned Software Engineer . I love building things and helping people. Active on Twitter.",
  summary:
    "I’m a passionate [pre-final year undergrad](#education) with a deep love for coding and technology. I thrive on building innovative [products](#projects) and sharing my insights through blogging. Always eager to expand my skills and tackle new challenges, I’m actively seeking lucrative opportunities to leverage my tech expertise and drive impactful projects. Whether it’s through creating seamless web experiences or exploring the future of decentralized applications, I’m excited to contribute to the tech landscape and grow alongside it.",
  avatarUrl: "/vibhu.jpg",
  skills: [
    "React",
    "Next.js",
    "Javascript",
    "Typescript",
    "Node.js",
    "Git",
    "MongoDB",
    "Linux",
    "WebSocket",
    "WebRTC",
    "Redis",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "vibhugupta022@gmail.com",
    tel: "+91 9044429919",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/VibhuGupta-dev",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vibhu-gupta-2b9181325",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/_VibhuGupta_",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "vibhugupta022@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance Web Developer",
      href: "",
      badges: [],
      location: "Remote",
      title: "Full Stack Developer",
      logoUrl: "/memoji.jpeg",
      start: "2026",
      end: "Present",
      description: "",
    },
    {
      company: "Open Source",
      badges: [],
      href: "https://github.com/VibhuGupta-dev",
      location: "Remote",
      title: "Contributor",
      logoUrl: "/github-mark.png",
      start: "2026",
      end: "Present",
      description: "",
    },
  ],
  education: [
  
    {
      school: "Shri Ramswaroop memorial college of engineering and management, India",
      href: "https://srmcem.ac.in/",
      degree: "Bachelor's Degree of Engineering",
      logoUrl: "/srmcem.jpg",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Intract - Video Confrence App",
      href: "https://interact-seven-delta.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "Interact leverages WebRTC for peer-to-peer media streaming and Socket.IO for real-time signaling and chat — giving users low-latency, high-quality video and audio communication directly in the browser. No plugins. No downloads.",
      technologies: [
        "Redis",
        "Redux",
        "ReactJS",
        "Typescript",
        "TailwindCSS",
        "socket",
        "webrtc"
      ],
      links: [
        {
          type: "Website",
          href: "https://interact-seven-delta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/VibhuGupta-dev/Interact",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/interact.png",
      video: "",
    },
    {
      title: "Ristrict",
      href: "https://movie-ticket-booking-app-kappa.vercel.app/",
      dates: "September 2024",
      active: true,
      description:
        "Ristrict is a full-stack movie ticket booking web application built with the MERN stack + Socket.IO — inspired by District by Zomato. Users can browse movies and cinemas by location, select showtimes, lock seats in real time (10-minute hold), pay via Razorpay (test mode), and instantly receive digital tickets — all with clean admin and owner dashboards for cinema and showtime management. ",
       technologies: [
        "React.js",
        "Javascript",
        "mongoDB",
        "TailwindCSS",
        "Redis",
      ],
      links: [
        {
          type: "Website",
          href: "https://movie-ticket-booking-app-kappa.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/VibhuGupta-dev/MovieTicketBookingApp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ristrict.png",
      video: "",
    },
    {
      title: "PabloNote.AI",
      href: "https://pablo-notes.vercel.app/",
      dates: "May 2026",
      active: true,
      description:
        "This Project replicates all the core features of the popular task management app, offering a seamless and intuitive experience for organizing tasks, setting priorities, and tracking progress. Designed with a user-friendly interface, it enables efficient task management for individuals and teams alike.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "OpenAI API",
        "Convex",
      ],
      links: [
        {
          type: "Website",
          href: "https://pablo-notes.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/VibhuGupta-dev/Pablo-notes",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/pablo.png",
      video: "",
    },
    {
      title: "WebSync Portfolio",
      href: "",
      dates: "September 2025",
      active: true,
      description:
        "Developed an amazing Portfolio to showase my work to potentiol recruiters. I used latest web desiging techniques like [TailwindCSS](https://tailwindcss.com/) and [Shadcn UI](https://ui.shadcn.com/) to make it look good and [Next.js](https://nextjs.org/) to make it fast.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://portfolio-pied-two-59.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/VibhuGupta-dev/PORTFOLIO",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/Portfolio.png",
      video: "",
    },
  ],
  freelance: [
    {
      title: "AI Landing Page",
      href: "https://diligenceai.dev",
      dates: "January 2025",
      active: true,
      description:
        "Developed a stunning landing page, built with Astro Js, React.js, Tailwind CSS, and Framer Motion, offers a highly responsive and visually engaging experience. Designed with a strong focus on aesthetics and fluid animations, it provides a seamless user interface across all devices, ensuring a captivating first impression for visitors.",
      technologies: [
        "Astro.js",
        "ReactJS",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Framer Motion",
      ],
      links: [
        {
          type: "Website",
          href: "https://diligenceai.dev",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/diligence-landing.png",
      video: "",
    },
    {
      title: "NFTech Landing Page",
      href: "https://nftech.pro",
      dates: "April 2025",
      active: true,
      description:
        "Developed a stunning landing page, built with Next.js, React.js, Tailwind CSS, and Framer Motion, offers a highly responsive and visually engaging experience. Designed with a strong focus on aesthetics and fluid animations, it provides a seamless user interface across all devices, ensuring a captivating first impression for visitors.",
      technologies: [
        "Next.js",
        "ReactJS",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://nftech.pro",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/nftech-landing.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Portia AI",
      dates: "February 2025",
      location: "Lucknow, India",
      description:
        "Dr. Portia, an innovative AI-driven health assistant designed for village people in India and others with limited access to medical care. Built during a hackathon, this project leverages modern web technologies and AI to provide preliminary health advice in Hinglish (a mix of Hindi and English), bridging the healthcare gap in underserved communities.",
      image: "sparkhack.png",
      links: [
        
         {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/VibhuGupta-dev/Dr-Portia-AI",
        },
      ],
    },
    {
      title: "SIH Hackathon",
      dates: "September 2024",
      location: "Lucknow, India",
      description:
        
      "HelloMind is a mental health support platform offering community posts, anonymous chats, 24/7 AI chatbot assistance, and a 30-day motivational video program to combat depression.",
      image: "Smart-India-Hackathon-2023.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/VibhuGupta-dev/SIH",
        },
      ],
    },
  ],
} as const;
