import resume from "../assets/Ramkumar_Resume_24102026.pdf";
export const profile = {
  name: "Ramkumar P",
  email: "ramkumarperaman.p@gmail.com",
  phone: "+91 6380707550",
  github: "https://github.com/RamkumarPeraman",
  linkedin: "https://www.linkedin.com/in/ramkumarperaman/",
  leetcode: "https://leetcode.com/u/ramkumarperaman/",
  resume,
};
export const navigation = ["Work", "About", "Experience", "Skills"];
export const projects = [
  {
    id: "trust",
    ownership: "Personal project",
    role: "Independent full-stack development",
    name: "Raavana Thalaigal Trust",
    category: "FULL-STACK DEVELOPMENT",
    description:
      "A responsive web platform for a trust, connecting a React frontend with RESTful APIs and PostgreSQL.",
    tags: ["React", "Tailwind CSS", "Express", "PostgreSQL"],
    details: [
      "Built reusable interfaces for desktop and mobile.",
      "Integrated RESTful APIs and PostgreSQL for application data.",
      "Deployed with Vercel and Render, including custom domain setup.",
    ],
    url: "https://www.raavanathalaigal.in/",
  },
  {
    id: "predictor",
    ownership: "Company project",
    role: "Frontend development · team contribution",
    name: "Predictor-M",
    category: "DATA VISUALIZATION",
    description:
      "Turning application data into clear, interactive dashboards with charts, tables, and reusable React modules.",
    tags: ["React", "JavaScript", "Material UI", "REST APIs"],
    details: [
      "Developed interactive charts, tables, and visual modules.",
      "Connected backend APIs to display dynamic application data.",
      "Improved usability through responsive layouts, debugging, and feature enhancements.",
    ],
    url: "",
  },
  {
    id: "grant",
    ownership: "Company project",
    role: "Frontend development · team contribution",
    name: "GrantGo",
    category: "INTERNAL WORKFLOW APPLICATION",
    description:
      "A streamlined workspace to create, track, and manage approval requests and tickets across organizational workflows.",
    tags: ["React", "TypeScript", "Zustand", "shadcn/ui"],
    details: [
      "Built maintainable components with React, TypeScript, and shadcn/ui.",
      "Handled application state and workflows using Zustand.",
      "Developed responsive screens and deployed the application with IIS.",
    ],
    url: "",
  },
];
export const experience = [
  {
    company: "TVM Signalling and Transportation Systems",
    role: "Front-End Developer",
    period: "Jul 2025 — Present",
    place: "Bangalore, Karnataka",
    current: true,
    bullets: [
      "Developed 20+ reusable, responsive UI components with React, Tailwind CSS, and Material UI.",
      "Integrated REST APIs with Axios across dashboards, tables, charts, and detailed views.",
      "Built interactive visualizations and heatmaps; improved reliability through debugging and team code reviews.",
    ],
  },
  {
    company: "ZOHO Corporation",
    role: "Project Trainee",
    period: "Oct 2024 — Jan 2025",
    place: "Tirunelveli, Tamil Nadu",
    current: false,
    bullets: [
      "Developed an Active Directory dashboard using React and Tailwind CSS for system information, components, and logs.",
      "Contributed to C++ agent-side development for collecting and processing system data.",
      "Worked with Linux and Windows Server 2019 for testing, deployment, and troubleshooting.",
    ],
  },
];
export const skillGroups = [
  {
    title: "Frontend development",
    description: "Interfaces built to feel intuitive.",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "UI & application state",
    description: "Consistent, reusable, responsive.",
    items: ["Tailwind CSS", "shadcn/ui", "Material UI", "Zustand", "Axios"],
  },
  {
    title: "Backend & tools",
    description: "Connecting the pieces that matter.",
    items: [
      "Express.js",
      "PostgreSQL",
      "Git",
      "GitHub",
      "SVN",
      "Java",
      "Active Directory",
    ],
  },
];
