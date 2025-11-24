
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
    week: number;
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
  image: string; // Added for card view
};

export const courses: Course[] = [
  {
    id: 'fs-dev-spec',
    title: 'Full Stack Web Development Specialization',
    category: 'Web Development',
    rating: 4.8,
    total_enrollments: '120K+',
    duration: '6 months (5 hours/week)',
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
        week: 1,
        title: 'Introduction to Frontend with React',
        topics: ['React Components & JSX', 'State and Props', 'Handling Events', 'Conditional Rendering'],
      },
      {
        week: 2,
        title: 'Advanced React and State Management',
        topics: ['React Hooks (useState, useEffect)', 'React Router', 'Context API for State Management', 'Introduction to Redux'],
      },
      {
        week: 3,
        title: 'Building a Backend with Node.js & Express',
        topics: ['Introduction to Node.js', 'Creating an Express Server', 'Routing and Middleware', 'Building a RESTful API'],
      },
      {
        week: 4,
        title: 'Database Integration with MongoDB',
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
    duration: '8 months (8 hours/week)',
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
        week: 1,
        title: 'Data Analysis with Pandas',
        topics: ['DataFrames and Series', 'Data Cleaning and Preprocessing', 'Exploratory Data Analysis (EDA)', 'Data Grouping and Aggregation'],
      },
      {
        week: 2,
        title: 'Machine Learning Fundamentals',
        topics: ['Supervised vs. Unsupervised Learning', 'Linear & Logistic Regression', 'Decision Trees & Random Forests', 'Model Evaluation Metrics'],
      },
      {
        week: 3,
        title: 'Introduction to Deep Learning',
        topics: ['Neural Networks Basics', 'Building models with Keras/TensorFlow', 'Convolutional Neural Networks (CNNs) for Image Data', 'Training and Optimization'],
      },
      {
        week: 4,
        title: 'Capstone Project',
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
    duration: '3 months (4 hours/week)',
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
            week: 1,
            title: "Getting Started with Python",
            topics: ["Why we program", "Variables and expressions", "Conditional code"]
        },
        {
            week: 2,
            title: "Python Data Structures",
            topics: ["Lists", "Dictionaries", "Tuples", "Strings and Files"]
        },
        {
            week: 3,
            title: "Using Python to Access Web Data",
            topics: ["Regular Expressions", "Networking with Sockets", "Web Scraping", "Working with APIs"]
        },
        {
            week: 4,
            title: "Using Databases with Python",
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
    duration: '4 weeks (6 hours/week)',
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
        week: 1,
        title: 'The Cybersecurity Landscape',
        topics: ['History of Cybersecurity', 'Common Attack Vectors', 'The CIA Triad', 'Malware Types'],
      },
      {
        week: 2,
        title: 'Defensive Measures',
        topics: ['Network Security (Firewalls, IDS/IPS)', 'Cryptography Fundamentals', 'Authentication vs. Authorization', 'Secure Configurations'],
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
    duration: '4 weeks (10 hours/week)',
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
        week: 1,
        title: 'Cloud Concepts and Technology',
        topics: ['Introduction to AWS', 'Cloud Architecture Design Principles', 'AWS Global Infrastructure'],
      },
      {
        week: 2,
        title: 'Core Services: Compute, Storage, and Databases',
        topics: ['Amazon EC2', 'Amazon S3', 'AWS Lambda', 'Amazon RDS and DynamoDB'],
      },
       {
        week: 3,
        title: 'Security and Networking',
        topics: ['Shared Responsibility Model', 'IAM (Identity and Access Management)', 'VPC (Virtual Private Cloud)', 'Security Groups'],
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
    duration: '4 weeks (5 hours/week)',
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
            week: 1,
            title: "Querying and Filtering Data",
            topics: ["SELECT and FROM", "Filtering with WHERE", "Sorting with ORDER BY", "Using logical operators"]
        },
        {
            week: 2,
            title: "Joining and Aggregating Data",
            topics: ["INNER, LEFT, and RIGHT JOINs", "Aggregate Functions (COUNT, SUM, AVG)", "Grouping data with GROUP BY", "Filtering groups with HAVING"]
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
  }
];

export const courseTopics = [...new Set(courses.map((course) => course.category))];
