export const profile = {
  name: 'idrees',
  fullName: 'Muhammad Idrees',
  title: 'Software Engineering Student',
  tagline: 'a software engineering student driven by building thoughtful, reliable software',
  city: 'Lahore',
  country: 'Pakistan',
  email: 'midreeshafeez@gmail.com',
  phone: '+92 308 4371505',
  whatsapp: '+92 317 4648201',
  linkedin: 'https://www.linkedin.com/in/malik-idrees-9b29443a6',
  github: 'https://github.com/Idreessofteng',
  resumeUrl: '/resume.pdf',
}

export const about = {
  intro:
    "I am a passionate Software Engineering student with a strong interest in Artificial Intelligence, Machine Learning, and modern software development. I enjoy learning new technologies, solving challenging problems, and building intelligent applications that address real-world needs. Through academic projects and self-directed learning, I am continuously strengthening my programming, problem-solving, and analytical skills. My goal is to combine software engineering principles with AI technologies to create innovative, scalable, and impactful solutions.",
  qa: [
    {
      q: 'Why did you choose Software Engineering?',
      a: "I chose Software Engineering because it provides the foundation to build innovative software that can solve real-world problems. As I explored the field, I became especially interested in Artificial Intelligence and Machine Learning because of their potential to transform industries and improve everyday life. The combination of software development and intelligent systems motivates me to keep learning and growing.",
    },
    {
      q: 'What type of developer do you want to become?',
      a: 'My goal is to become an AI and Machine Learning Engineer with strong Full Stack development skills. I want to develop intelligent applications, build scalable software systems, and work with modern AI technologies such as deep learning, computer vision, and natural language processing. I also aspire to contribute to open-source projects and create AI-powered solutions that make a meaningful impact.',
    },
    {
      q: 'What motivates you?',
      a: 'I am motivated by curiosity, continuous learning, and the opportunity to solve complex problems through technology. I enjoy exploring new ideas, improving my technical skills, and transforming concepts into practical software solutions. The rapid advancement of Artificial Intelligence inspires me to keep learning and contribute to the future of intelligent technology.',
    },
    {
      q: 'What are your career goals for the next 5 years?',
      a: 'Over the next five years, I aim to graduate with a strong academic foundation in Software Engineering while developing expertise in Artificial Intelligence and Machine Learning. I plan to build a portfolio of AI-powered projects, earn industry-recognized certifications, and gain practical experience through internships and collaborative projects. My long-term goal is to work as an AI Engineer or Machine Learning Engineer, developing intelligent systems that solve meaningful real-world challenges and create positive impact.',
    },
  ],
}

export const education = [
  {
    institution: 'University of Lahore',
    degree: 'Software Engineering',
    level: 'Bachelor',
    period: '2024 – Present',
    detail: '5th Semester · Expected Graduation 2028',
    gpa: '3.43',
  },
  {
    institution: 'Punjab Group of Colleges',
    degree: 'Pre-Engineering',
    level: 'Intermediate',
    period: '2022 – 2024',
    detail: '',
    gpa: '',
  },
]

// Self-assessed proficiency (0-100) -- these are starting estimates,
// adjust the `level` values to match how you'd actually rate yourself.
export const technicalSkills = [
  { name: 'Python', level: 85 },
  { name: 'C++', level: 80 },
  { name: 'SQL', level: 75 },
  { name: 'OOP', level: 80 },
  { name: 'Data Structures', level: 75 },
  { name: 'Git', level: 70 },
]

export const marqueeSkills = [
  'PYTHON', 'C++', 'OOP', 'DATA STRUCTURES', 'ALGORITHMS', 'SQL', 'DATABASE DESIGN',
  'GIT', 'GITHUB', 'VS CODE', 'LINUX', 'AI & ML', 'PROBLEM SOLVING',
]

export const services = [
  {
    number: '01',
    name: 'Software Development',
    description: 'Building applications and tools grounded in object-oriented programming and clean, modular code.',
  },
  {
    number: '02',
    name: 'AI & Machine Learning',
    description: 'Exploring intelligent systems and applying machine learning concepts to real, hands-on projects.',
  },
  {
    number: '03',
    name: 'Database Design',
    description: 'Modeling and managing structured data with SQL and relational database management systems.',
  },
  {
    number: '04',
    name: 'Problem Solving',
    description: 'Breaking down complex problems with data structures and algorithms, then building it back up in code.',
  },
  {
    number: '05',
    name: 'Web Development',
    description: 'Building responsive, modern interfaces with attention to layout, structure, and usability.',
  },
]

export const projects = [
  {
    number: '01',
    category: 'Personal Project',
    name: 'Personal Portfolio Website',
    stack: 'HTML · CSS · JavaScript',
    description: 'A responsive portfolio website built with modern CSS techniques.',
    codeUrl: 'https://github.com/Idreessofteng/portfolio-website',
    demoUrl: 'https://portfolio-website-mu-drab-62.vercel.app',
  },
  {
    number: '02',
    category: 'DSA Project',
    name: 'Shortest Route Finder',
    stack: "C++ · Dijkstra's Algorithm",
    description: "A website that finds the shortest route between points on a graph using Dijkstra's algorithm, applying core data structures and algorithms concepts to a practical routing problem.",
    codeUrl: '',
    demoUrl: '',
  },
  {
    number: '03',
    category: 'AI/ML Project',
    name: 'AI Resume Analyzer',
    // Stack guessed based on the project name -- adjust in content.ts if it's built differently.
    stack: 'Python · AI/NLP',
    description: 'A tool that analyzes resumes using AI to help evaluate and improve them.',
    codeUrl: 'https://github.com/Idreessofteng/ai-resume-analyzer',
    demoUrl: 'https://ai-resume-analyzer-psi-wine.vercel.app',
  },
]

export const certifications = [
  {
    title: 'Certificate in Artificial Intelligence',
    issuer: 'Add issuing organization',
    date: 'Add date',
  },
  {
    title: 'Certificate in Cloud Computing',
    issuer: 'Add issuing organization',
    date: 'Add date',
  },
]
