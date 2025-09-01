export type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  topic: string;
  chapters: { title: string; content: string }[];
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
    chapters: [
      { title: "Getting Started", content: "Setting up your Python environment and writing your first program." },
      { title: "Variables and Data Types", content: "Understanding numbers, strings, booleans, and other core data types." },
      { title: "Control Flow", content: "Using loops and conditional statements to control the flow of your code." },
      { title: "Functions", content: "Defining and calling functions to organize your code." },
    ],
  },
  {
    id: 2,
    title: "Advanced Data Structures in Java",
    description:
      "Explore complex data structures like graphs, trees, and heaps. Learn to analyze their performance and apply them to real-world problems.",
    image: "https://picsum.photos/seed/java/600/400",
    tags: ["java", "data structures", "algorithms", "advanced"],
    topic: "Algorithms",
    chapters: [
      { title: "Introduction to Data Structures", content: "Review of basic data structures and their importance." },
      { title: "Trees and Tries", content: "Deep dive into binary search trees, AVL trees, and tries." },
      { title: "Heaps and Priority Queues", content: "Implementing heaps and using them for priority queues." },
      { title: "Graphs", content: "Exploring graph representations and common traversal algorithms like BFS and DFS." },
    ],
  },
  {
    id: 3,
    title: "Machine Learning with Scikit-Learn",
    description:
      "Dive into the world of machine learning. Implement models for classification, regression, and clustering using Python and Scikit-Learn.",
    image: "https://picsum.photos/seed/ml/600/400",
    tags: ["machine learning", "python", "scikit-learn", "data science"],
    topic: "AI/ML",
    chapters: [
      { title: "Foundations of Machine Learning", content: "Understanding the core concepts of supervised and unsupervised learning." },
      { title: "Regression Models", content: "Building linear and polynomial regression models." },
      { title: "Classification Models", content: "Using logistic regression, SVMs, and decision trees for classification tasks." },
      { title: "Clustering Algorithms", content: "Applying K-Means and DBSCAN for unsupervised clustering." },
    ],
  },
  {
    id: 4,
    title: "Full-Stack Web Development with React and Node.js",
    description:
      "Build modern, scalable web applications from scratch. Master the MERN stack (MongoDB, Express, React, Node.js) and deploy your projects.",
    image: "https://picsum.photos/seed/react/600/400",
    tags: ["react", "nodejs", "web development", "full-stack", "mongodb"],
    topic: "Web Development",
    chapters: [
        { title: "Building a REST API with Node.js and Express", content: "Creating the backend foundation for your application." },
        { title: "Creating a Dynamic Frontend with React", content: "Developing interactive user interfaces with React components." },
        { title: "State Management with Redux", content: "Managing complex application state on the client-side." },
        { title: "Connecting to MongoDB", content: "Integrating a NoSQL database into your full-stack application." },
    ],
  },
  {
    id: 5,
    title: "Introduction to SQL and Database Design",
    description:
      "Learn the language of databases. This course covers SQL from basic queries to advanced joins, along with principles of relational database design.",
    image: "https://picsum.photos/seed/sql/600/400",
    tags: ["sql", "databases", "data management", "beginner"],
    topic: "Databases",
    chapters: [
        { title: "Basic SQL Queries", content: "Learning SELECT, FROM, WHERE, and basic filtering." },
        { title: "Joins and Subqueries", content: "Combining data from multiple tables to answer complex questions." },
        { title: "Data Definition Language (DDL)", content: "Creating and modifying database schemas with CREATE, ALTER, and DROP." },
        { title: "Normalization", content: "Designing efficient and reliable database schemas." },
    ],
  },
  {
    id: 6,
    title: "Computer Networking: A Top-Down Approach",
    description:
      "Understand the internet from the application layer down to the physical layer. Covers protocols like HTTP, TCP/IP, and DNS.",
    image: "https://picsum.photos/seed/networking/600/400",
    tags: ["networking", "tcp/ip", "internet protocols"],
    topic: "Systems",
    chapters: [
        { title: "The Application Layer", content: "Exploring protocols like HTTP, FTP, and SMTP." },
        { title: "The Transport Layer", content: "Understanding TCP and UDP and their role in reliable data transfer." },
        { title: "The Network Layer", content: "Diving into IP addressing and routing algorithms." },
        { title: "The Link Layer", content: "How data is transmitted over physical connections." },
    ],
  },
  {
    id: 7,
    title: "Cybersecurity Fundamentals",
    description:
      "An introduction to the world of cybersecurity. Learn about common threats, vulnerabilities, and the tools used to protect systems and networks.",
    image: "https://picsum.photos/seed/security/600/400",
    tags: ["cybersecurity", "security", "networking", "beginner"],
    topic: "Security",
    chapters: [
        { title: "Common Cyber Threats", content: "Understanding malware, phishing, and denial-of-service attacks." },
        { title: "Network Security", content: "Implementing firewalls, IDS, and VPNs to secure networks." },
        { title: "Cryptography", content: "The basics of encryption and how it protects data." },
        { title: "Ethical Hacking", content: "An introduction to penetration testing and vulnerability assessment." },
    ],
  },
  {
    id: 8,
    title: "Cloud Computing with AWS",
    description:
      "Get hands-on experience with Amazon Web Services. Learn to deploy and manage applications on the cloud using services like EC2, S3, and Lambda.",
    image: "https://picsum.photos/seed/aws/600/400",
    tags: ["aws", "cloud computing", "devops"],
    topic: "Systems",
    chapters: [
        { title: "Introduction to AWS", content: "An overview of the AWS ecosystem and its core services." },
        { title: "EC2 and Virtual Servers", content: "Launching and managing virtual machines in the cloud." },
        { title: "S3 and Cloud Storage", content: "Storing and retrieving data with Amazon S3." },
        { title: "Serverless with Lambda", content: "Building and deploying serverless functions with AWS Lambda." },
    ],
  },
];

export const courseTopics = [...new Set(courses.map((course) => course.topic))];
