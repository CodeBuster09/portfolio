export const profile = {
  name: 'Shreyansh Jaiswal',
  role: 'Software Engineer',
  focus: 'Full-Stack & E-Commerce',
  location: 'Pune, India',
  email: 'sjaiswal0902@gmail.com',
  resumeUrl: 'https://drive.google.com/file/d/1mdCZJew1C13xI9tyE_9Y28pZhb1C67Bo/view?usp=sharing',
  links: {
    github: 'https://github.com/CodeBuster09',
    linkedin: 'https://www.linkedin.com/in/shreyanshjaiswal09/',
    leetcode: 'https://leetcode.com/u/codebuster09/',
    codeforces: 'https://codeforces.com/profile/CodeBuster09',
  },
}

export const experience = [
  {
    company: 'Hummingbird Web Solutions',
    file: 'hummingbird.config.js',
    role: 'Software Engineer L2',
    date: 'Sept 2025 — Present',
    location: 'Pune, Maharashtra',
    points: [
      'Implemented Algolia search for The Distribution Point, adding advanced facets/filtering, search refinement, dynamic product metadata rendering, and metafield fetching via Shopify GraphQL Storefront APIs.',
      'Improved the Product Listing Page UI with JS, CSS, HTML, and Liquid — grid/list toggles, refined facet design, and a more responsive layout across devices.',
      'Trained across core workflows in JavaScript, PHP, Adobe Magento Commerce, Linux, and Git/GitHub.',
    ],
    tags: ['JavaScript', 'Shopify', 'Algolia', 'Liquid', 'GraphQL', 'PHP'],
  },
  {
    company: 'Amazon',
    file: 'amazon.internship.ts',
    role: 'Software Engineer Intern',
    date: 'June 2024 — July 2024',
    location: 'Bengaluru, Karnataka',
    points: [
      "Developed a self-serve onboarding application enabling merchants to integrate with Amazon's Multi-Channel Fulfillment (MCF) via the BuyWithAmazon feature.",
      'Designed and implemented a dashboard for managing SKU mappings between e-commerce platforms and Amazon SKUs to streamline order fulfillment through MCF.',
      'Built with React and Meridian UI, TypeScript, Kotlin, and Java, alongside AWS services including S3, DynamoDB, CloudWatch, and IAM.',
    ],
    tags: ['React', 'TypeScript', 'Kotlin', 'Java', 'AWS'],
  },
]

export const projects = [
  {
    name: 'FoodRage',
    file: 'foodrage.jsx',
    tagline: 'Food donation platform',
    desc: 'A full-stack food donation system connecting donors, admins, and agents through role-based dashboards to streamline donations and collections.',
    points: [
      'Role-based dashboards for Admin, Donor, and Agent',
      'Admins review requests, manage agents, and track status',
      'Secure JWT auth with media storage via Cloudinary',
    ],
    tags: ['React', 'Node.js', 'MongoDB', 'JWT', 'Cloudinary'],
    live: 'https://foodrage-app-frontend.onrender.com/',
    source: 'https://github.com/CodeBuster09/FoodRage',
    featured: true,
  },
  {
    name: 'WorkPlace',
    file: 'workplace.jsx',
    tagline: 'Job portal',
    desc: 'A job portal connecting employers and job-seekers, with real-time chat and a built-in resume builder.',
    points: [
      'Employers post vacancies; candidates apply online',
      'Real-time chat between employers and job seekers',
      'Inbuilt resume builder for candidates',
    ],
    tags: ['React.js', 'Node.js', 'MongoDB', 'Socket.io'],
    source: 'https://github.com/ShrishRajGupta/Workplace/tree/main',
    featured: false,
  },
]

export const skillGroups = [
  { label: 'Languages', items: ['C', 'C++', 'JavaScript', 'Java'] },
  { label: 'Libraries & Frameworks', items: ['React.js', 'Next.js', 'Node.js', 'Express.js'] },
  { label: 'Databases', items: ['SQL', 'MongoDB', 'AWS DynamoDB'] },
  { label: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'Postman'] },
]

export const marqueeSkills = [
  'JavaScript', 'React', 'Node.js', 'TypeScript', 'MongoDB', 'AWS', 'Shopify', 'GraphQL', 'Java', 'C++',
]

export const education = {
  degree: 'B.Tech, Electronics & Communication Engineering',
  school: 'Motilal Nehru National Institute of Technology, Allahabad',
  date: '2021 — 2025',
  detail: 'CPI (till 8th semester): 8.59',
}

export const achievements = [
  'Institute Merit Scholarship for ranking 1st in department, first year',
  'Knight @ LeetCode — coding rating above 1900',
]
