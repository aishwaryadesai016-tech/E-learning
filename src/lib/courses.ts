export type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  topic: string;
};

export const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Python Programming",
    description:
      "A beginner-friendly course covering the fundamentals of Python, including data types, loops, functions, and object-oriented programming.",
    image: "https://picsum.photos/seed/python/600/400",
    tags: ["python", "beginner", "programming fundamentals"],
    topic: "Programming",
  },
  {
    id: 2,
    title: "Advanced Data Structures in Java",
    description:
      "Explore complex data structures like graphs, trees, and heaps. Learn to analyze their performance and apply them to real-world problems.",
    image: "https://picsum.photos/seed/java/600/400",
    tags: ["java", "data structures", "algorithms", "advanced"],
    topic: "Algorithms",
  },
  {
    id: 3,
    title: "Machine Learning with Scikit-Learn",
    description:
      "Dive into the world of machine learning. Implement models for classification, regression, and clustering using Python and Scikit-Learn.",
    image: "https://picsum.photos/seed/ml/600/400",
    tags: ["machine learning", "python", "scikit-learn", "data science"],
    topic: "AI/ML",
  },
  {
    id: 4,
    title: "Full-Stack Web Development with React and Node.js",
    description:
      "Build modern, scalable web applications from scratch. Master the MERN stack (MongoDB, Express, React, Node.js) and deploy your projects.",
    image: "https://picsum.photos/seed/react/600/400",
    tags: ["react", "nodejs", "web development", "full-stack", "mongodb"],
    topic: "Web Development",
  },
  {
    id: 5,
    title: "Introduction to SQL and Database Design",
    description:
      "Learn the language of databases. This course covers SQL from basic queries to advanced joins, along with principles of relational database design.",
    image: "https://picsum.photos/seed/sql/600/400",
    tags: ["sql", "databases", "data management", "beginner"],
    topic: "Databases",
  },
  {
    id: 6,
    title: "Computer Networking: A Top-Down Approach",
    description:
      "Understand the internet from the application layer down to the physical layer. Covers protocols like HTTP, TCP/IP, and DNS.",
    image: "https://picsum.photos/seed/networking/600/400",
    tags: ["networking", "tcp/ip", "internet protocols"],
    topic: "Systems",
  },
  {
    id: 7,
    title: "Cybersecurity Fundamentals",
    description:
      "An introduction to the world of cybersecurity. Learn about common threats, vulnerabilities, and the tools used to protect systems and networks.",
    image: "https://picsum.photos/seed/security/600/400",
    tags: ["cybersecurity", "security", "networking", "beginner"],
    topic: "Security",
  },
  {
    id: 8,
    title: "Cloud Computing with AWS",
    description:
      "Get hands-on experience with Amazon Web Services. Learn to deploy and manage applications on the cloud using services like EC2, S3, and Lambda.",
    image: "https://picsum.photos/seed/aws/600/400",
    tags: ["aws", "cloud computing", "devops"],
    topic: "Systems",
  },
];

export const courseTopics = [...new Set(courses.map((course) => course.topic))];
