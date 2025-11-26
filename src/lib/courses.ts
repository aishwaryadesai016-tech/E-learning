
export type Course = {
  id: string;
  title: string;
  category: string;
  rating: number;
  total_enrollments: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  language: string;
  platform: string;
  description: string;
  skills_gained: string[];
  learning_objectives: string[];
  modules: {
    title: string;
    topics: string[];
  }[];
  instructor: {
    name: string;
    designation: string;
    profile_image: string;
  };
  reviews: {
    user: string;
    rating: number;
    comment: string;
  }[];
  certificate_available: boolean;
  course_link: string;
  image: string;
};

// This data is now only used for fallback or seeding purposes.
// The primary source of truth is the Firestore 'courses' collection.
export const courses: Course[] = [
  {
    id: 'fs-dev-spec',
    title: 'Full Stack Web Development Specialization',
    category: 'Web Development',
    rating: 4.8,
    total_enrollments: '120K+',
    duration: 'Approx. 6 months',
    level: 'Intermediate',
    language: 'English',
    platform: 'Coursera',
    description:
      'Learn to design, build, and deploy dynamic, full-stack web applications. Master frontend development with React and backend development with Node.js and Express, connected to a MongoDB database.',
    skills_gained: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'RESTful APIs'],
    learning_objectives: [
      'Build responsive, interactive web applications using React.',
      'Design and implement robust backend APIs with Node.js and Express.',
      'Connect to and manage a NoSQL database (MongoDB) using Mongoose.',
      'Handle user authentication, sessions, and secure data transfer.',
      'Deploy full-stack applications to cloud platforms.',
    ],
    modules: [
      {
        title: 'Module 1: Frontend with React (10 Hours)',
        topics: ['React Components & JSX', 'State and Props', 'Handling Events', 'Conditional Rendering'],
      },
      {
        title: 'Module 2: Advanced React (12 Hours)',
        topics: ['React Hooks (useState, useEffect)', 'React Router', 'Context API for State Management', 'Introduction to Redux'],
      },
      {
        title: 'Module 3: Backend with Node.js & Express (15 Hours)',
        topics: ['Introduction to Node.js', 'Creating an Express Server', 'Routing and Middleware', 'Building a RESTful API'],
      },
      {
        title: 'Module 4: Database Integration with MongoDB (12 Hours)',
        topics: ['Introduction to NoSQL', 'MongoDB Atlas Setup', 'Mongoose Schemas and Models', 'CRUD Operations'],
      },
    ],
    instructor: {
      name: 'Dr. Sarah Johnson',
      designation: 'Professor of Computer Science, Stanford University',
      profile_image: 'https://picsum.photos/seed/ins1/100/100',
    },
    reviews: [
      {
        user: 'Emily R.',
        rating: 5,
        comment: 'Excellent course with great projects! Dr. Johnson explains complex topics very clearly.',
      },
       {
        user: 'John D.',
        rating: 4,
        comment: 'Very comprehensive. The backend part was a bit challenging but rewarding.',
      },
    ],
    certificate_available: true,
    course_link: 'https://www.coursera.org/learn/full-stack-web-dev',
    image: 'https://picsum.photos/seed/fs-dev/600/400',
  },
  {
    id: 'data-science-ml',
    title: 'Data Science & Machine Learning Bootcamp',
    category: 'AI/ML',
    rating: 4.9,
    total_enrollments: '250K+',
    duration: 'Approx. 8 months',
    level: 'Advanced',
    language: 'English',
    platform: 'Udacity',
    description:
      'Become a job-ready data scientist. Learn Python, data analysis, machine learning, and deep learning with hands-on projects and expert mentorship.',
    skills_gained: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Data Visualization', 'SQL'],
    learning_objectives: [
      'Clean, analyze, and visualize large datasets using Python libraries.',
      'Build and evaluate predictive models for regression and classification.',
      'Implement clustering algorithms to find hidden patterns in data.',
      'Construct and train neural networks using TensorFlow or PyTorch.',
    ],
    modules: [
      {
        title: 'Module 1: Data Analysis with Pandas (20 Hours)',
        topics: ['DataFrames and Series', 'Data Cleaning and Preprocessing', 'Exploratory Data Analysis (EDA)', 'Data Grouping and Aggregation'],
      },
      {
        title: 'Module 2: Machine Learning Fundamentals (25 Hours)',
        topics: ['Supervised vs. Unsupervised Learning', 'Linear & Logistic Regression', 'Decision Trees & Random Forests', 'Model Evaluation Metrics'],
      },
      {
        title: 'Module 3: Introduction to Deep Learning (30 Hours)',
        topics: ['Neural Networks Basics', 'Building models with Keras/TensorFlow', 'Convolutional Neural Networks (CNNs) for Image Data', 'Training and Optimization'],
      },
      {
        title: 'Module 4: Capstone Project (40 Hours)',
        topics: ['Problem Definition', 'Data Collection and Scoping', 'Model Development and Deployment', 'Presenting Results'],
      },
    ],
    instructor: {
      name: 'Alex Chen',
      designation: 'Senior Machine Learning Engineer, Google',
      profile_image: 'https://picsum.photos/seed/ins2/100/100',
    },
    reviews: [
      {
        user: 'Michael B.',
        rating: 5,
        comment: 'The capstone project was an amazing experience. This is the best ML course out there.',
      },
    ],
    certificate_available: true,
    course_link: 'https://www.udacity.com/course/data-scientist-nanodegree',
    image: 'https://picsum.photos/seed/data-science/600/400',
  },
  {
    id: 'python-for-everybody',
    title: 'Python for Everybody',
    category: 'Programming',
    rating: 4.9,
    total_enrollments: '2.5M+',
    duration: 'Approx. 3 months',
    level: 'Beginner',
    language: 'English',
    platform: 'Coursera',
    description: 'This Specialization builds on the success of the Python for Everybody course and will introduce fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language.',
    skills_gained: ['Python Programming', 'Data Structures', 'Web Scraping', 'SQL', 'JSON', 'XML'],
    learning_objectives: [
        'Install and use Python in a development environment.',
        'Write programs that query and process data.',
        'Understand fundamental programming concepts like variables, loops, and functions.',
        'Work with data structures such as lists, dictionaries, and tuples.',
    ],
    modules: [
        {
            title: "Module 1: Getting Started with Python (8 Hours)",
            topics: ["Why we program", "Variables and expressions", "Conditional code"]
        },
        {
            title: "Module 2: Python Data Structures (10 Hours)",
            topics: ["Lists", "Dictionaries", "Tuples", "Strings and Files"]
        },
        {
            title: "Module 3: Using Python to Access Web Data (12 Hours)",
            topics: ["Regular Expressions", "Networking with Sockets", "Web Scraping", "Working with APIs"]
        },
        {
            title: "Module 4: Using Databases with Python (10 Hours)",
            topics: ["Object-Oriented Python", "Basic SQL", "Data Modeling", "Building a data retrieval application"]
        }
    ],
    instructor: {
        name: "Dr. Charles R. Severance",
        designation: "Clinical Professor, University of Michigan School of Information",
        profile_image: "https://picsum.photos/seed/ins3/100/100"
    },
    reviews: [
        {
            user: "Laura T.",
            rating: 5,
            comment: "Dr. Chuck is the best teacher! Makes learning Python fun and accessible."
        }
    ],
    certificate_available: true,
    course_link: "https://www.coursera.org/specializations/python",
    image: "https://picsum.photos/seed/python-for-everybody/600/400",
  },
   {
    id: 'cyber-sec-intro',
    title: 'Introduction to Cybersecurity',
    category: 'Security',
    rating: 4.7,
    total_enrollments: '300K+',
    duration: 'Approx. 4 weeks',
    level: 'Beginner',
    language: 'English',
    platform: 'edX',
    description: 'Learn the fundamentals of cybersecurity, including how to identify threats, protect systems and networks, and anticipate potential attacks.',
    skills_gained: ['Cybersecurity Principles', 'Risk Management', 'Network Security', 'Cryptography Basics', 'Incident Response'],
    learning_objectives: [
      'Understand the core concepts of the CIA Triad (Confidentiality, Integrity, Availability).',
      'Identify common types of cyber threats and vulnerabilities.',
      'Learn about defensive measures like firewalls, VPNs, and antivirus software.',
      'Grasp the basics of encryption and access control.',
    ],
    modules: [
      {
        title: 'Module 1: The Cybersecurity Landscape (6 Hours)',
        topics: ['History of Cybersecurity', 'Common Attack Vectors', 'The CIA Triad', 'Malware Types'],
      },
      {
        title: 'Module 2: Defensive Measures (8 Hours)',
        topics: ['Network Security (Firewalls, IDS/IPS)', 'Cryptography Fundamentals', 'Authentication vs. Authorization', 'Secure Configurations'],
      },
       {
        title: 'Module 3: Security Operations (8 Hours)',
        topics: ['Incident Response', 'Security Auditing', 'Vulnerability Management', 'Disaster Recovery'],
      },
    ],
    instructor: {
      name: 'Maria Garcia',
      designation: 'Cybersecurity Analyst, Cisco',
      profile_image: 'https://picsum.photos/seed/ins4/100/100',
    },
    reviews: [
      {
        user: 'David L.',
        rating: 5,
        comment: 'A great starting point for anyone interested in cybersecurity. The content is very practical.',
      },
    ],
    certificate_available: true,
    course_link: 'https://www.edx.org/learn/cybersecurity',
    image: 'https://picsum.photos/seed/cyber-sec/600/400',
  },
  {
    id: 'aws-cloud-practitioner',
    title: 'AWS Certified Cloud Practitioner',
    category: 'Systems',
    rating: 4.7,
    total_enrollments: '1M+',
    duration: 'Approx. 4 weeks',
    level: 'Beginner',
    language: 'English',
    platform: 'Udemy',
    description:
      'Prepare for the AWS Certified Cloud Practitioner exam. This course provides a detailed overview of AWS core services, security, architecture, and pricing.',
    skills_gained: ['Cloud Computing Concepts', 'AWS Core Services (EC2, S3, RDS)', 'AWS Security and Compliance', 'AWS Pricing and Billing'],
    learning_objectives: [
      'Define the AWS Cloud and its value proposition.',
      'Identify key AWS services and their common use cases.',
      'Understand the AWS shared responsibility model.',
      'Describe basic AWS Cloud architectural principles.',
    ],
    modules: [
      {
        title: 'Module 1: Cloud Concepts and Technology (10 Hours)',
        topics: ['Introduction to AWS', 'Cloud Architecture Design Principles', 'AWS Global Infrastructure'],
      },
      {
        title: 'Module 2: Core Services (15 Hours)',
        topics: ['Amazon EC2', 'Amazon S3', 'AWS Lambda', 'Amazon RDS and DynamoDB', 'VPC and Networking'],
      },
       {
        title: 'Module 3: Security and Billing (15 Hours)',
        topics: ['Shared Responsibility Model', 'IAM (Identity and Access Management)', 'AWS Pricing Models', 'Cost Management Tools'],
      },
    ],
    instructor: {
      name: 'Frank Kane',
      designation: 'Founder, Sundog Education',
      profile_image: 'https://picsum.photos/seed/ins5/100/100',
    },
    reviews: [
      {
        user: 'Jessica P.',
        rating: 5,
        comment: 'Passed my exam on the first try thanks to this course. Highly recommend!',
      },
    ],
    certificate_available: true,
    course_link: 'https://www.udemy.com/course/aws-certified-cloud-practitioner-new/',
    image: 'https://picsum.photos/seed/aws-cloud/600/400',
  },
   {
    id: 'sql-for-data-analysis',
    title: 'SQL for Data Analysis',
    category: 'Databases',
    rating: 4.6,
    total_enrollments: '450K+',
    duration: 'Approx. 4 weeks',
    level: 'Beginner',
    language: 'English',
    platform: 'DataCamp',
    description: 'Master the art of data analysis using SQL. From basic queries to advanced window functions, this course will empower you to extract powerful insights from data.',
    skills_gained: ['SQL', 'Data Analysis', 'Joins', 'Aggregate Functions', 'Subqueries', 'Window Functions'],
    learning_objectives: [
        'Retrieve and filter data from relational databases.',
        'Combine data from multiple tables using JOINs.',
        'Perform complex calculations using aggregate functions and subqueries.',
        'Analyze trends over time using window functions.'
    ],
    modules: [
        {
            title: "Module 1: Querying and Filtering (5 Hours)",
            topics: ["SELECT and FROM", "Filtering with WHERE", "Sorting with ORDER BY", "Using logical operators"]
        },
        {
            title: "Module 2: Joining and Aggregating Data (8 Hours)",
            topics: ["INNER, LEFT, and RIGHT JOINs", "Aggregate Functions (COUNT, SUM, AVG)", "Grouping data with GROUP BY", "Filtering groups with HAVING"]
        },
        {
            title: "Module 3: Advanced SQL (7 Hours)",
            topics: ["Subqueries", "Common Table Expressions (CTEs)", "Window Functions", "CASE statements"]
        }
    ],
    instructor: {
        name: "Nick Singh",
        designation: "Data Engineer & Author",
        profile_image: "https://picsum.photos/seed/ins6/100/100"
    },
    reviews: [
        {
            user: "Chris N.",
            rating: 5,
            comment: "The best SQL course for analysts. The exercises are very practical and relevant to real-world tasks."
        }
    ],
    certificate_available: true,
    course_link: "https://www.datacamp.com/courses/sql-for-data-analysis",
    image: "https://picsum.photos/seed/sql-analysis/600/400"
  },
  {
    id: 'js-algos-data-structures',
    title: 'JavaScript Algorithms and Data Structures',
    category: 'Programming',
    rating: 4.8,
    total_enrollments: '800K+',
    duration: 'Approx. 300 hours',
    level: 'Intermediate',
    language: 'English',
    platform: 'freeCodeCamp',
    description: 'Learn fundamental data structures and algorithms and how to implement them in JavaScript. Covers concepts like recursion, sorting algorithms, and Big O notation.',
    skills_gained: ['JavaScript', 'Algorithms', 'Data Structures', 'Big O Notation', 'Recursion', 'Problem Solving'],
    learning_objectives: [
      'Understand and implement common data structures like arrays, objects, stacks, and queues.',
      'Analyze the time and space complexity of algorithms using Big O notation.',
      'Implement various sorting algorithms such as bubble sort, insertion sort, and quicksort.',
      'Solve complex problems using recursion and functional programming.',
    ],
    modules: [
        {
            title: "Module 1: Basic JavaScript and ES6",
            topics: ["Variables, Data Types", "Arrays and Objects", "ES6 Features (let, const, arrow functions)"]
        },
        {
            title: "Module 2: Basic Data Structures",
            topics: ["Arrays", "Objects", "Stacks", "Queues", "Linked Lists"]
        },
        {
            title: "Module 3: Basic Algorithm Scripting",
            topics: ["String Manipulation", "Factorials", "Finding the Longest Word", "Title Case a Sentence"]
        },
         {
            title: "Module 4: Intermediate Algorithm Scripting",
            topics: ["Sum All Numbers in a Range", "Diff Two Arrays", "Seek and Destroy", "Spinal Tap Case"]
        }
    ],
    instructor: {
      name: 'Quincy Larson',
      designation: 'Founder, freeCodeCamp',
      profile_image: 'https://picsum.photos/seed/ins7/100/100',
    },
    reviews: [
      {
        user: 'Aisha K.',
        rating: 5,
        comment: 'An incredible free resource. The project-based learning is fantastic.',
      },
    ],
    certificate_available: true,
    course_link: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/',
    image: 'https://picsum.photos/seed/js-algos/600/400',
  },
  {
    id: 'advanced-css-sass',
    title: 'Advanced CSS and Sass',
    category: 'Web Development',
    rating: 4.7,
    total_enrollments: '150K+',
    duration: 'Approx. 28 hours',
    level: 'Advanced',
    language: 'English',
    platform: 'Udemy',
    description: 'Master advanced CSS techniques, including Flexbox, CSS Grid, responsive design, and the Sass preprocessor to write more efficient, maintainable, and powerful CSS.',
    skills_gained: ['Advanced CSS', 'Flexbox', 'CSS Grid', 'Sass', 'Responsive Design', 'CSS Animations'],
    learning_objectives: [
      'Build complex, responsive layouts with Flexbox and CSS Grid.',
      'Write clean, modular, and reusable CSS with Sass.',
      'Create stunning animations and effects with CSS transitions and keyframes.',
      'Understand modern CSS architecture patterns like BEM.',
    ],
     modules: [
        {
            title: "Module 1: Advanced CSS Layouts",
            topics: ["Flexbox deep dive", "CSS Grid fundamentals", "Combining Flexbox and Grid"]
        },
        {
            title: "Module 2: Sass Preprocessor",
            topics: ["Variables and Nesting", "Mixins and Functions", "Inheritance with @extend"]
        },
        {
            title: "Module 3: CSS Animations",
            topics: ["Transitions", "Keyframe Animations", "Performance considerations"]
        }
    ],
    instructor: {
      name: 'Jonas Schmedtmann',
      designation: 'Web Developer, Designer, and Teacher',
      profile_image: 'https://picsum.photos/seed/ins8/100/100',
    },
    reviews: [
      {
        user: 'Robert P.',
        rating: 5,
        comment: 'Jonas is a fantastic instructor. My CSS skills have improved tenfold.',
      },
    ],
    certificate_available: true,
    course_link: 'https://www.udemy.com/course/advanced-css-and-sass/',
    image: 'https://picsum.photos/seed/advanced-css/600/400',
  },
  {
    id: 'react-complete-guide',
    title: 'React - The Complete Guide (incl Hooks, React Router, Redux)',
    category: 'Web Development',
    rating: 4.6,
    total_enrollments: '700K+',
    duration: 'Approx. 50 hours',
    level: 'Intermediate',
    language: 'English',
    platform: 'Udemy',
    description: 'Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Router, Next.js, Best Practices and way more!',
    skills_gained: ['React', 'Hooks', 'Redux', 'React Router', 'Next.js', 'State Management'],
    learning_objectives: [
      'Build powerful, fast, user-friendly and reactive web apps.',
      'Master the latest features in React, including Hooks.',
      'Manage complex state with Redux and Redux Toolkit.',
      'Create single-page applications with React Router.',
    ],
    modules: [
        {
            title: "Module 1: React Fundamentals (10 Hours)",
            topics: ["Components and JSX", "Props vs State", "Handling Events", "Conditional Rendering"]
        },
        {
            title: "Module 2: State, Events, and Forms (12 Hours)",
            topics: ["The useState Hook", "Controlled Components", "Form Submission", "State Lifting"]
        },
        {
            title: "Module 3: Advanced Hooks & Side Effects (15 Hours)",
            topics: ["The useEffect Hook", "Data Fetching", "useContext", "useReducer", "Custom Hooks"]
        },
        {
            title: "Module 4: Redux & Advanced State Management (13 Hours)",
            topics: ["Introduction to Redux", "Redux Toolkit", "Async Logic with Thunks", "Connecting React to Redux"]
        }
    ],
    instructor: {
        name: 'Maximilian Schwarzmüller',
        designation: 'Professional Web Developer and Instructor',
        profile_image: 'https://picsum.photos/seed/ins9/100/100'
    },
    reviews: [
        {
            user: 'Anna L.',
            rating: 5,
            comment: 'This is THE most comprehensive React course. Max explains everything so well.'
        }
    ],
    certificate_available: true,
    course_link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
    image: 'https://picsum.photos/seed/react-guide/600/400'
  },
  {
    id: 'nlp-specialization',
    title: 'Natural Language Processing Specialization',
    category: 'AI/ML',
    rating: 4.7,
    total_enrollments: '100K+',
    duration: 'Approx. 4 months',
    level: 'Advanced',
    language: 'English',
    platform: 'Coursera',
    description: 'Become a Natural Language Processing expert. Master cutting-edge NLP techniques to build models for sentiment analysis, machine translation, and text generation.',
    skills_gained: ['NLP', 'Word Embeddings', 'RNNs', 'LSTMs', 'Attention Models', 'Transformers'],
    learning_objectives: [
      'Build a sentiment analysis model using logistic regression and Naive Bayes.',
      'Create word embeddings to represent words as vectors.',
      'Develop sequence models like RNNs and LSTMs for text processing.',
      'Implement attention models for machine translation and text summarization.',
    ],
    modules: [
        {
            title: "Module 1: Classification and Vector Spaces (18 Hours)",
            topics: ["Sentiment Analysis", "Logistic Regression", "Naive Bayes", "Vector Space Models"]
        },
        {
            title: "Module 2: Word Embeddings and Neural Networks (20 Hours)",
            topics: ["Word2Vec", "GloVe", "Recurrent Neural Networks (RNNs)", "LSTMs and GRUs"]
        },
        {
            title: "Module 3: Sequence to Sequence Models and Attention (22 Hours)",
            topics: ["Seq2Seq Architecture", "Beam Search", "Attention Mechanism", "Transformers"]
        }
    ],
    instructor: {
        name: 'Younes Bensouda Mourri & Łukasz Kaiser',
        designation: 'AI Instructors, DeepLearning.AI',
        profile_image: 'https://picsum.photos/seed/ins10/100/100'
    },
    reviews: [
        {
            user: 'Sophia K.',
            rating: 5,
            comment: 'The explanations of complex topics like Transformers are the best I\'ve seen.'
        }
    ],
    certificate_available: true,
    course_link: 'https://www.coursera.org/specializations/natural-language-processing',
    image: 'https://picsum.photos/seed/nlp-spec/600/400'
  },
  {
    id: 'go-programming',
    title: 'Go: The Complete Developer\'s Guide (Golang)',
    category: 'Programming',
    rating: 4.6,
    total_enrollments: '95K+',
    duration: 'Approx. 9 hours',
    level: 'Beginner',
    language: 'English',
    platform: 'Udemy',
    description: 'Master the fundamentals and advanced features of the Go Programming Language (Golang). Learn about concurrency, channels, and building real-world applications.',
    skills_gained: ['Go (Golang)', 'Concurrency', 'Goroutines', 'Channels', 'Testing', 'Interfaces'],
    learning_objectives: [
      'Understand the fundamental syntax and control structures of Go.',
      'Apply Go\'s concurrency model to build highly concurrent programs.',
      'Organize code into packages for reusability.',
      'Write effective tests to ensure your code is robust.',
    ],
    modules: [
        {
            title: "Module 1: Go Fundamentals (4 Hours)",
            topics: ["Go Syntax", "Data Types", "Slices and Maps", "Structs and Interfaces"]
        },
        {
            title: "Module 2: Concurrency in Go (5 Hours)",
            topics: ["Goroutines", "Channels", "Select Statement", "Concurrency Patterns"]
        }
    ],
    instructor: {
        name: 'Stephen Grider',
        designation: 'Engineering Architect',
        profile_image: 'https://picsum.photos/seed/ins11/100/100'
    },
    reviews: [
        {
            user: 'Mark T.',
            rating: 5,
            comment: 'Stephen\'s diagrams are a lifesaver for understanding concurrency. Great course!'
        }
    ],
    certificate_available: true,
    course_link: 'https://www.udemy.com/course/go-the-complete-developers-guide/',
    image: 'https://picsum.photos/seed/go-lang/600/400'
  },
  {
    id: 'ethical-hacking-intro',
    title: 'Learn Ethical Hacking From Scratch',
    category: 'Security',
    rating: 4.6,
    total_enrollments: '480K+',
    duration: 'Approx. 16 hours',
    level: 'Beginner',
    language: 'English',
    platform: 'Udemy',
    description: 'Become an ethical hacker that can hack computer systems like black hat hackers and secure them like security experts.',
    skills_gained: ['Ethical Hacking', 'Penetration Testing', 'Nmap', 'Metasploit', 'Web Application Security', 'SQL Injection'],
    learning_objectives: [
      'Understand the five phases of ethical hacking.',
      'Use Nmap to scan networks and discover vulnerabilities.',
      'Exploit vulnerabilities using Metasploit to gain control over systems.',
      'Identify and mitigate common web application vulnerabilities like SQL injection and XSS.',
    ],
    modules: [
        {
            title: "Module 1: Introduction to Ethical Hacking (4 Hours)",
            topics: ["Hacking Methodologies", "Legal Framework", "Setting up a Hacking Lab"]
        },
        {
            title: "Module 2: Scanning and Enumeration (6 Hours)",
            topics: ["Network Scanning with Nmap", "Vulnerability Scanning", "Enumerating Services"]
        },
        {
            title: "Module 3: System Hacking and Web Exploitation (6 Hours)",
            topics: ["Gaining Access with Metasploit", "Password Cracking", "OWASP Top 10", "SQL Injection"]
        }
    ],
    instructor: {
        name: 'Zaid Sabih',
        designation: 'Ethical Hacker, Pentester & Computer Scientist',
        profile_image: 'https://picsum.photos/seed/ins12/100/100'
    },
    reviews: [
        {
            user: 'Kevin M.',
            rating: 5,
            comment: 'Zaid is a master. This course is packed with practical, hands-on examples.'
        }
    ],
    certificate_available: true,
    course_link: 'https://www.udemy.com/course/learn-ethical-hacking-from-scratch/',
    image: 'https://picsum.photos/seed/hacking-course/600/400'
  },
  {
    id: 'docker-kubernetes',
    title: 'Docker & Kubernetes: The Complete Guide',
    category: 'Systems',
    rating: 4.7,
    total_enrollments: '300K+',
    duration: 'Approx. 21 hours',
    level: 'Intermediate',
    language: 'English',
    platform: 'Udemy',
    description: 'Build, test, and deploy Docker applications with Kubernetes while learning the best practices of containerization.',
    skills_gained: ['Docker', 'Kubernetes', 'CI/CD', 'Microservices', 'Docker Compose', 'Helm'],
    learning_objectives: [
      'Master the Docker CLI to build and run containers.',
      'Write Dockerfiles and Docker Compose files for multi-container applications.',
      'Understand the architecture of Kubernetes.',
      'Deploy applications to a Kubernetes cluster and manage them.',
    ],
    modules: [
        {
            title: "Module 1: Introduction to Containers & Docker (10 Hours)",
            topics: ["The Docker Engine", "Writing Dockerfiles", "Docker Compose", "Image Management"]
        },
        {
            title: "Module 2: Introduction to Kubernetes (11 Hours)",
            topics: ["Kubernetes Architecture", "Pods, Services, and Deployments", "The Kubectl CLI", "State management with Volumes"]
        }
    ],
    instructor: {
        name: 'Stephen Grider',
        designation: 'Engineering Architect',
        profile_image: 'https://picsum.photos/seed/ins13/100/100'
    },
    reviews: [
        {
            user: 'Jane D.',
            rating: 5,
            comment: 'Another amazing course by Stephen. He makes complex topics like Kubernetes so easy to understand.'
        }
    ],
    certificate_available: true,
    course_link: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/',
    image: 'https://picsum.photos/seed/docker-k8s/600/400'
  },
  {
    id: 'database-design',
    title: 'Database Design Introduction',
    category: 'Databases',
    rating: 4.7,
    total_enrollments: '50K+',
    duration: 'Approx. 12 hours',
    level: 'Beginner',
    language: 'English',
    platform: 'Coursera',
    description: 'Learn how to create a relational database structure that is both efficient and scalable. Understand the process of normalization and data modeling.',
    skills_gained: ['Database Design', 'Relational Databases', 'Normalization', 'SQL', 'Data Modeling', 'ERD'],
    learning_objectives: [
      'Understand the core principles of the relational database model.',
      'Apply normalization techniques to reduce data redundancy.',
      'Create Entity-Relationship Diagrams (ERDs) to model data.',
      'Translate a logical data model into a physical database schema.',
    ],
    modules: [
        {
            title: "Module 1: Relational Database Fundamentals (4 Hours)",
            topics: ["The Relational Model", "Keys (Primary, Foreign)", "Introduction to SQL"]
        },
        {
            title: "Module 2: Normalization (5 Hours)",
            topics: ["First, Second, and Third Normal Forms", "Data Anomalies", "Decomposition"]
        },
        {
            title: "Module 3: Physical Design and Data Modeling (3 Hours)",
            topics: ["Entity-Relationship Diagrams (ERDs)", "Cardinality", "Translating ERD to SQL"]
        }
    ],
    instructor: {
        name: 'Dr. Daniel S.',
        designation: 'Database Architect & Researcher',
        profile_image: 'https://picsum.photos/seed/ins14/100/100'
    },
    reviews: [
        {
            user: 'Tom H.',
            rating: 5,
            comment: 'Finally, a course that properly explains normalization. This was a game-changer for me.'
        }
    ],
    certificate_available: true,
    course_link: 'https://www.coursera.org/learn/database-design',
    image: 'https://picsum.photos/seed/db-design/600/400'
  }
];

export const courseTopics = [...new Set(courses.map((course) => course.category))];
