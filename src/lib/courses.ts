
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
      { 
        title: "Getting Started", 
        content: "Welcome to the world of Python! First, you'll need to set up your environment. Download the latest version of Python from python.org. The installer includes IDLE, a basic development environment. You'll also get 'pip', Python's package installer. To write your first program, open a text file, save it as 'hello.py', and type: `print('Hello, World!')`. Run it from your terminal using `python hello.py`. Congratulations, you're a Python programmer!" 
      },
      { 
        title: "Variables and Data Types", 
        content: "Variables are containers for storing data values. Python has various data types. Numbers can be integers (e.g., 5) or floating-point numbers (e.g., 3.14). Strings are sequences of characters, enclosed in single or double quotes (e.g., 'hello'). Booleans represent truth values: 'True' or 'False'. You can create a variable like this: `x = 10` or `name = \"Alice\"`." 
      },
      { 
        title: "Control Flow", 
        content: "Control flow statements allow you to execute code based on conditions. The `if` statement runs a block of code only if a condition is true. Use `else` for an alternative block. For repetition, `for` loops iterate over a sequence (like a list), and `while` loops continue as long as a condition is true. Example: `for i in range(5): print(i)` will print numbers 0 through 4."
      },
      { 
        title: "Functions", 
        content: "Functions are reusable blocks of code. You define a function using the `def` keyword, followed by a name and parentheses. You can pass data, known as parameters, into a function. A function can also return data. Example: `def greet(name): return f'Hello, {name}!'`. To use it, you 'call' it: `print(greet('Bob'))`." 
      },
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
      { 
        title: "Introduction to Data Structures", 
        content: "This chapter reviews fundamental data structures like Arrays, LinkedLists, Stacks, and Queues. We'll introduce the concept of Asymptotic Analysis (Big O notation) to measure the efficiency of algorithms in terms of time and space complexity, which is crucial for selecting the right data structure for a given problem." 
      },
      { 
        title: "Trees and Tries", 
        content: "Trees are hierarchical data structures. We'll focus on Binary Search Trees (BSTs) and their properties. To ensure efficiency, we will cover self-balancing trees like AVL trees, which maintain a logarithmic height. We'll also explore Tries (prefix trees), which are specialized trees used for efficient retrieval of string data." 
      },
      { 
        title: "Heaps and Priority Queues", 
        content: "A Heap is a tree-based data structure that satisfies the heap property. We will focus on binary heaps (min-heaps and max-heaps). Heaps are commonly used to implement Priority Queues, an abstract data type where each element has a 'priority' and elements with higher priority are served before elements with lower priority." 
      },
      { 
        title: "Graphs", 
        content: "Graphs represent relationships among items. We'll cover two main ways to represent a graph: adjacency lists and adjacency matrices. Then, we will explore fundamental graph traversal algorithms: Breadth-First Search (BFS), which explores neighbor nodes first, and Depth-First Search (DFS), which explores as far as possible along each branch before backtracking."
      },
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
      { 
        title: "Foundations of Machine Learning", 
        content: "Machine learning involves training models on data to make predictions. Supervised learning uses labeled data (input-output pairs) for tasks like classification and regression. Unsupervised learning finds patterns in unlabeled data, for tasks like clustering. This chapter covers the entire workflow: data preprocessing, model training, evaluation, and tuning."
      },
      { 
        title: "Regression Models", 
        content: "Regression predicts a continuous output. We'll start with Linear Regression, which fits a straight line to data. Then, we'll explore Polynomial Regression to model non-linear relationships. You'll learn to implement these models using Scikit-Learn and evaluate their performance using metrics like Mean Squared Error (MSE) and R-squared."
      },
      { 
        title: "Classification Models", 
        content: "Classification predicts a categorical label. This chapter covers several key algorithms: Logistic Regression for binary classification, Support Vector Machines (SVMs) for finding the optimal decision boundary, and Decision Trees, which create a tree-like model of decisions. We will evaluate models using accuracy, precision, recall, and the confusion matrix."
      },
      { 
        title: "Clustering Algorithms", 
        content: "Clustering is an unsupervised task that groups similar data points together. We'll implement K-Means, which partitions data into K clusters based on distance to a centroid, and DBSCAN (Density-Based Spatial Clustering of Applications with Noise), which groups together points that are closely packed together, marking as outliers points that lie alone in low-density regions."
      },
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
        { 
          title: "Building a REST API with Node.js and Express", 
          content: "The backend is the engine of your application. We'll use Node.js as the runtime environment and Express.js as the web framework to create a robust RESTful API. You'll learn to define routes, handle HTTP requests (GET, POST, PUT, DELETE), and structure your application for scalability. We will use tools like Postman to test our API endpoints."
        },
        { 
          title: "Creating a Dynamic Frontend with React", 
          content: "React is a powerful library for building user interfaces. We'll cover core concepts like components, JSX, props, and state. You'll learn to build a single-page application (SPA) that communicates with your backend API to fetch and display data. We will use hooks like useState and useEffect to manage component state and side effects."
        },
        { 
          title: "State Management with Redux", 
          content: "As applications grow, managing state can become complex. Redux provides a predictable state container. We will introduce the core principles of Redux: actions, reducers, and the store. You'll learn how to use the Redux Toolkit to simplify state management and connect your React components to the global state, ensuring a consistent data flow."
        },
        { 
          title: "Connecting to MongoDB", 
          content: "MongoDB is a popular NoSQL database that stores data in flexible, JSON-like documents. We'll use Mongoose, an Object Data Modeling (ODM) library, to define schemas for our data and interact with a MongoDB database from our Node.js application. You will learn to perform CRUD (Create, Read, Update, Delete) operations."
        },
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
        { 
          title: "Basic SQL Queries", 
          content: "SQL (Structured Query Language) is the standard language for relational databases. This chapter introduces the foundational SELECT statement. You'll learn how to retrieve data from specific columns using `SELECT`, specify the table using `FROM`, and filter rows based on conditions with the `WHERE` clause. We'll also cover sorting results with `ORDER BY`."
        },
        { 
          title: "Joins and Subqueries", 
          content: "Real-world data is often split across multiple tables. `JOIN` clauses are used to combine rows from two or more tables based on a related column. We will cover `INNER JOIN`, `LEFT JOIN`, and `RIGHT JOIN`. Subqueries, or nested queries, allow you to use the result of one query as an input to another, enabling more complex data retrieval."
        },
        { 
          title: "Data Definition Language (DDL)", 
          content: "DDL statements are used to define and manage the database structure. You will learn how to create new tables with the `CREATE TABLE` statement, specifying column names and data types. We'll also cover how to modify existing tables using `ALTER TABLE` (e.g., adding a new column) and how to delete tables entirely with `DROP TABLE`."
        },
        { 
          title: "Normalization", 
          content: "Database normalization is the process of organizing columns and tables to minimize data redundancy. We'll cover the first three normal forms (1NF, 2NF, 3NF). Proper normalization leads to a more efficient, reliable, and scalable database by reducing the risk of data anomalies during insertion, update, or deletion."
        },
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
        { 
          title: "The Application Layer", 
          content: "This layer is where network applications and their protocols reside. We'll explore key protocols like HTTP (for the web), SMTP (for email), FTP (for file transfer), and DNS (the Domain Name System), which translates human-readable domain names into machine-readable IP addresses. We'll examine the client-server and peer-to-peer paradigms."
        },
        { 
          title: "The Transport Layer", 
          content: "The transport layer provides logical communication between application processes running on different hosts. We will study the two main protocols: TCP (Transmission Control Protocol), which provides reliable, connection-oriented service, and UDP (User Datagram Protocol), which offers a connectionless, best-effort service. We'll discuss concepts like multiplexing and demultiplexing."
        },
        { 
          title: "The Network Layer", 
          content: "The network layer is responsible for routing datagrams from one host to another. We'll dive deep into the Internet Protocol (IP), covering IP addressing (IPv4 and IPv6) and subnetting. We'll also explore how routing algorithms like Link State and Distance Vector work to determine the best path for data packets through the network."
        },
        { 
          title: "The Link Layer", 
          content: "The link layer handles the transmission of data between adjacent nodes in a network, such as over an Ethernet cable or Wi-Fi. We'll cover error detection and correction techniques, multiple access protocols (how nodes share a broadcast channel), and technologies like Ethernet and MAC addresses, which uniquely identify network interface controllers."
        },
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
        { 
          title: "Common Cyber Threats", 
          content: "This chapter introduces the threat landscape. We'll define different types of malware like viruses, worms, trojans, and ransomware. We'll also dissect social engineering attacks like phishing, where attackers trick users into revealing sensitive information, and Denial-of-Service (DoS) attacks, which aim to make a machine or network resource unavailable to its intended users."
        },
        { 
          title: "Network Security", 
          content: "Securing networks is a critical first line of defense. We will cover firewalls, which control incoming and outgoing network traffic based on predetermined security rules. We'll also discuss Intrusion Detection Systems (IDS) that monitor for malicious activity, and Virtual Private Networks (VPNs) which create a secure, encrypted connection over a public network."
        },
        { 
          title: "Cryptography", 
          content: "Cryptography is the science of secure communication. This chapter covers the core concepts of symmetric encryption (where the same key is used for encryption and decryption) and asymmetric encryption (which uses a public/private key pair). We'll also discuss hashing, which creates a fixed-size, unique fingerprint of data, used to verify data integrity."
        },
        { 
          title: "Ethical Hacking", 
          content: "To beat a hacker, you need to think like one. Ethical hacking involves legally testing an organization's defenses. We'll introduce the concept of penetration testing, a simulated cyber attack against your computer system to check for exploitable vulnerabilities. We will also cover vulnerability assessment, the process of identifying, quantifying, and prioritizing the vulnerabilities in a system."
        },
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
        { 
          title: "Introduction to AWS", 
          content: "Amazon Web Services (AWS) is the world's most comprehensive and broadly adopted cloud platform. This chapter provides an overview of the benefits of cloud computing, including cost-effectiveness, scalability, and flexibility. We will introduce the AWS Global Infrastructure (Regions and Availability Zones) and key services."
        },
        { 
          title: "EC2 and Virtual Servers", 
          content: "Amazon Elastic Compute Cloud (EC2) provides scalable computing capacity in the cloud. You'll learn how to launch a virtual server, known as an instance, choose an Amazon Machine Image (AMI), and configure security groups to control network access. We will also cover instance types and pricing models like On-Demand and Spot Instances."
        },
        { 
          title: "S3 and Cloud Storage", 
          content: "Amazon Simple Storage Service (S3) is an object storage service offering industry-leading scalability, data availability, security, and performance. You'll learn how to create S3 buckets, upload and download objects, manage access permissions with bucket policies and IAM, and understand different storage classes for cost optimization."
        },
        { 
          title: "Serverless with Lambda", 
          content: "AWS Lambda lets you run code without provisioning or managing servers. This is known as 'serverless' computing. You will learn to write a simple Lambda function in Python or Node.js. We will cover how to trigger this function in response to events, such as an object being uploaded to S3 or a new entry in a database, and how Lambda automatically scales with your workload."
        },
    ],
  },
  {
    id: 9,
    title: "Software Engineering Principles",
    description: "Learn the methodologies and practices for designing, developing, and maintaining high-quality software systems.",
    image: "https://picsum.photos/seed/swe/600/400",
    tags: ["software engineering", "agile", "sdlc", "design patterns"],
    topic: "Programming",
    chapters: [
      {
        title: "The Software Development Life Cycle (SDLC)",
        content: "The SDLC provides a structured process for building software. We'll explore classic models like the Waterfall model, which is sequential and linear, and contrast it with iterative models like the Spiral model. Understanding these frameworks is key to managing complexity and ensuring project success from requirements gathering to deployment and maintenance."
      },
      {
        title: "Agile Methodologies",
        content: "Agile is a modern approach to software development that emphasizes flexibility and collaboration. We will focus on Scrum, a popular Agile framework. You'll learn about its core components: Sprints (short development cycles), daily stand-up meetings, sprint planning, and retrospectives. We'll also touch upon Kanban, another visual and flexible Agile method."
      },
      {
        title: "Software Design Patterns",
        content: "Design patterns are reusable solutions to commonly occurring problems within a given context in software design. We will cover several foundational patterns, such as the Singleton pattern for ensuring a single instance of a class, the Factory pattern for creating objects without specifying the exact class, and the Observer pattern for managing dependencies between objects."
      },
      {
        title: "Testing and Quality Assurance",
        content: "Ensuring software quality is paramount. This chapter covers different levels of testing: Unit Testing (testing individual components), Integration Testing (testing how components work together), and System Testing (testing the complete system). We'll also discuss the importance of automated testing and continuous integration to catch bugs early."
      }
    ]
  },
  {
    id: 10,
    title: "Operating Systems Concepts",
    description: "A deep dive into the core concepts of operating systems, including process management, memory management, and file systems.",
    image: "https://picsum.photos/seed/os/600/400",
    tags: ["operating systems", "systems programming", "concurrency"],
    topic: "Systems",
    chapters: [
      {
        title: "Process Management",
        content: "A process is a program in execution. The OS is responsible for managing multiple processes. We'll cover process states (new, running, waiting), the Process Control Block (PCB), and CPU scheduling algorithms like First-Come, First-Served (FCFS), Shortest Job First (SJF), and Round Robin, which determine how processes share CPU time."
      },
      {
        title: "Memory Management",
        content: "Memory management is the function responsible for managing primary memory. We'll explore techniques like paging, which divides memory into fixed-size blocks, and segmentation, which divides it into logical units. We will also discuss virtual memory, a technique that allows the execution of processes that are not completely in memory."
      },
      {
        title: "Concurrency and Synchronization",
        content: "Concurrency is the ability of different parts of a program to be executed out-of-order or in partial order, without affecting the final outcome. This leads to challenges like race conditions. We'll study synchronization primitives like mutexes and semaphores, which are used to control access to shared resources and prevent these issues."
      },
      {
        title: "File Systems",
        content: "A file system controls how data is stored and retrieved. This chapter covers file concepts, access methods (sequential, direct), and directory structures (single-level, tree-structured). We'll also look at file system implementation, including how disk space is allocated using methods like contiguous, linked, and indexed allocation."
      }
    ]
  },
  {
    id: 11,
    title: "Introduction to DevOps and CI/CD",
    description: "Learn the culture and practices of DevOps, and implement a continuous integration and continuous delivery (CI/CD) pipeline.",
    image: "https://picsum.photos/seed/devops/600/400",
    tags: ["devops", "ci/cd", "automation", "cloud"],
    topic: "Systems",
    chapters: [
      {
        title: "What is DevOps?",
        content: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. This chapter explores the core principles of culture, automation, measurement, and sharing (CAMS)."
      },
      {
        title: "Version Control with Git",
        content: "Version control is the foundation of DevOps. We'll do a deep dive into Git, the distributed version control system. You'll learn about branching strategies like GitFlow, how to collaborate with pull requests, and the importance of a centralized repository on platforms like GitHub or GitLab for effective team collaboration."
      },
      {
        title: "Continuous Integration (CI)",
        content: "Continuous Integration is the practice of automatically building and testing your code every time a change is pushed to the version control repository. We will use tools like Jenkins or GitHub Actions to create a CI pipeline that compiles code, runs unit and integration tests, and provides rapid feedback to developers."
      },
      {
        title: "Continuous Delivery/Deployment (CD)",
        content: "Continuous Delivery extends CI by automatically deploying all code changes to a testing and/or production environment after the build stage. We will differentiate between Continuous Delivery (manual deployment to production) and Continuous Deployment (automated deployment to production) and discuss strategies like blue-green and canary deployments."
      }
    ]
  },
  {
    id: 12,
    title: "Introduction to Computer Graphics",
    description: "Explore the fundamentals of rendering 2D and 3D graphics, including topics like geometric transformations, lighting, and shading.",
    image: "https://picsum.photos/seed/graphics/600/400",
    tags: ["computer graphics", "rendering", "opengl", "3d"],
    topic: "Algorithms",
    chapters: [
      {
        title: "The Graphics Pipeline",
        content: "The rendering pipeline is the sequence of steps used to create a 2D image from a 3D scene. We will walk through the main stages: vertex processing, rasterization (converting vectors to pixels), fragment processing (coloring pixels), and output merging. Understanding this pipeline is fundamental to real-time graphics programming."
      },
      {
        title: "2D and 3D Transformations",
        content: "Geometric transformations are used to manipulate the position, orientation, and size of objects in a scene. We will cover the essential transformations: translation (moving), rotation, and scaling. You'll learn how to represent these transformations using matrices and how to combine them using matrix multiplication."
      },
      {
        title: "Lighting and Shading",
        content: "Lighting and shading bring realism to a 3D scene. We'll explore different light sources (ambient, diffuse, specular) and how they interact with material properties. We'll implement basic shading models like the Phong reflection model, which calculates the color of a pixel based on these interactions to create the illusion of depth and texture."
      },
      {
        title: "Introduction to WebGL",
        content: "WebGL (Web Graphics Library) is a JavaScript API for rendering interactive 2D and 3D graphics within any compatible web browser without the use of plug-ins. We will use a library like Three.js, which simplifies WebGL, to create a basic 3D scene, add objects, set up a camera, and render the result in a web page."
      }
    ]
  },
  {
    id: 13,
    title: "Advanced JavaScript: ES6 and Beyond",
    description: "Master modern JavaScript features including arrow functions, promises, async/await, modules, and more to write cleaner and more efficient code.",
    image: "https://picsum.photos/seed/js-advanced/600/400",
    tags: ["javascript", "es6", "asynchronous", "advanced", "programming"],
    topic: "Programming",
    chapters: [
      {
        title: "Arrow Functions and `this`",
        content: "ES6 introduced arrow functions, providing a more concise syntax for writing function expressions. Unlike traditional functions, they do not have their own `this` context; instead, they inherit `this` from the parent scope. This lexical scoping of `this` solves common problems and simplifies code, especially in event handlers and callbacks."
      },
      {
        title: "Promises and Asynchronous Operations",
        content: "Promises provide a cleaner way to handle asynchronous operations, avoiding 'callback hell'. A Promise is an object representing the eventual completion or failure of an async operation. We'll cover creating promises, chaining them with `.then()`, and handling errors with `.catch()`. This is fundamental for working with APIs."
      },
      {
        title: "Async/Await",
        content: "Async/await is syntactic sugar built on top of promises, making asynchronous code look and behave more like synchronous code. This makes it easier to read and reason about. An `async` function implicitly returns a promise, and the `await` keyword pauses execution until a promise is settled, returning its result."
      },
      {
        title: "ES Modules",
        content: "ES Modules provide a standardized module system for JavaScript. You'll learn how to use the `export` keyword to expose functions, objects, or values from a module, and the `import` keyword to use them in other files. This enables better code organization, reusability, and dependency management in large applications."
      }
    ]
  },
  {
    id: 14,
    title: "Dynamic Programming Patterns",
    description: "Learn to recognize and solve problems using dynamic programming, a powerful technique for optimizing algorithms with overlapping subproblems.",
    image: "https://picsum.photos/seed/dp/600/400",
    tags: ["dynamic programming", "algorithms", "optimization", "advanced"],
    topic: "Algorithms",
    chapters: [
      {
        title: "Introduction to DP: Memoization and Tabulation",
        content: "Dynamic Programming solves complex problems by breaking them down into simpler subproblems. We'll cover the two main approaches: Memoization (top-down), where you store the results of expensive function calls and return the cached result when the same inputs occur again, and Tabulation (bottom-up), where you build up a table of results from the smallest subproblem."
      },
      {
        title: "Fibonacci Sequence",
        content: "The Fibonacci sequence is the classic introductory problem for DP. We'll first analyze the naive recursive solution and its exponential time complexity. Then, we'll apply both memoization and tabulation to optimize it to linear time complexity, clearly illustrating the power and core concepts of dynamic programming."
      },
      {
        title: "0/1 Knapsack Problem",
        content: "The Knapsack Problem is a classic optimization problem. Given a set of items, each with a weight and a value, determine the number of each item to include in a collection so that the total weight is less than or equal to a given limit and the total value is as large as possible. We will solve this using a 2D DP table."
      },
      {
        title: "Longest Common Subsequence",
        content: "This chapter tackles the Longest Common Subsequence (LCS) problem, which aims to find the longest subsequence common to two sequences. This pattern is widely used in bioinformatics (like DNA sequence comparison) and version control systems (like diff utilities). We'll use a 2D DP table to find the length of the LCS and reconstruct the subsequence itself."
      }
    ]
  },
  {
    id: 15,
    title: "Deep Learning with PyTorch",
    description: "Build and train neural networks for tasks like image classification and natural language processing using the popular PyTorch framework.",
    image: "https://picsum.photos/seed/pytorch/600/400",
    tags: ["deep learning", "pytorch", "neural networks", "ai/ml"],
    topic: "AI/ML",
    chapters: [
      {
        title: "Tensors and Autograd",
        content: "PyTorch's fundamental data structure is the tensor, a multi-dimensional array similar to NumPy arrays but with the ability to run on GPUs. We will also explore Autograd, PyTorch's automatic differentiation engine. It tracks all operations on tensors, allowing you to automatically compute gradients, which is essential for training neural networks."
      },
      {
        title: "Building a Neural Network",
        content: "You'll learn to build your first neural network using PyTorch's `nn` module. We'll define a network architecture with layers (like linear and activation layers), implement a forward pass to process input data, and understand how the network's parameters (weights and biases) are initialized and stored."
      },
      {
        title: "Training and Optimization",
        content: "This chapter covers the full training loop. You'll learn to define a loss function (e.g., Cross-Entropy Loss) to measure the model's error, and an optimizer (e.g., Adam or SGD) to update the model's parameters using backpropagation. We'll iterate over a dataset, train the model, and monitor its performance."
      },
      {
        title: "Convolutional Neural Networks (CNNs)",
        content: "CNNs are a specialized type of neural network designed for processing grid-like data, such as images. We'll cover the key layers of a CNN: convolutional layers for feature extraction, pooling layers for down-sampling, and fully connected layers for classification. You'll build a CNN to classify images from a standard dataset like CIFAR-10."
      }
    ]
  },
  {
    id: 16,
    title: "Building Scalable Microservices",
    description: "Design and develop resilient, and scalable applications using a microservice architecture. Covers service communication, discovery, and deployment.",
    image: "https://picsum.photos/seed/microservices/600/400",
    tags: ["microservices", "architecture", "distributed systems", "web development"],
    topic: "Web Development",
    chapters: [
      {
        title: "Monolith vs. Microservices",
        content: "We'll start by comparing the traditional monolithic architecture, where an application is built as a single, indivisible unit, with the microservice architecture, which structures an application as a collection of loosely coupled services. We'll discuss the pros and cons of each approach in terms of development, scalability, and maintenance."
      },
      {
        title: "Service Communication",
        content: "In a microservices architecture, services need to communicate with each other. We'll explore two primary patterns: synchronous communication using REST APIs over HTTP, and asynchronous communication using a message broker like RabbitMQ or Kafka. We'll discuss when to use each pattern and the concept of service discovery."
      },
      {
        title: "API Gateways",
        content: "An API Gateway acts as a single entry point for all clients. It simplifies the client-side by routing requests to the appropriate microservice, and can also handle cross-cutting concerns like authentication, rate limiting, and logging. We'll explore how to implement an API Gateway to aggregate results from multiple services."
      },
      {
        title: "Containerization with Docker",
        content: "Docker makes it easy to package and deploy microservices consistently across different environments. You'll learn to write a Dockerfile to create an image for a single microservice, and use Docker Compose to define and run a multi-container application, enabling local development of a complete microservice-based system."
      }
    ]
  },
  {
    id: 17,
    title: "NoSQL Databases Deep Dive",
    description: "Explore the world beyond relational databases. Learn about different NoSQL models like document, key-value, and column-family stores with hands-on examples.",
    image: "https://picsum.photos/seed/nosql/600/400",
    tags: ["nosql", "databases", "mongodb", "big data"],
    topic: "Databases",
    chapters: [
      {
        title: "The CAP Theorem",
        content: "The CAP theorem is a fundamental principle in distributed systems. It states that a distributed data store can only provide two of the following three guarantees: Consistency, Availability, and Partition Tolerance. We'll explore what each of these guarantees means and how NoSQL databases often allow developers to choose which to prioritize."
      },
      {
        title: "Document Databases (MongoDB)",
        content: "Document databases store data in flexible, JSON-like documents. This model is intuitive for developers and maps directly to objects in code. We'll use MongoDB to perform CRUD operations, design schemas with embedded documents and references, and use its rich query language to filter and aggregate data."
      },
      {
        title: "Key-Value Stores (Redis)",
        content: "Key-value stores are the simplest NoSQL database model, storing data as a collection of key-value pairs. They are incredibly fast and often used for caching. We'll use Redis to store and retrieve data, explore its various data structures (strings, lists, hashes), and see how it can be used to improve application performance."
      },
      {
        title: "Wide-Column Stores (Cassandra)",
        content: "Wide-column stores like Cassandra are designed for handling massive amounts of data across many commodity servers. They partition data by row and organize it into flexible columns, making them highly scalable and available. We'll discuss the architecture of Cassandra and its query language (CQL), which is similar to SQL."
      }
    ]
  },
  {
    id: 18,
    title: "Docker and Kubernetes: The Complete Guide",
    description: "From development to production, master containerization with Docker and orchestrate your applications at scale with Kubernetes.",
    image: "https://picsum.photos/seed/kubernetes/600/400",
    tags: ["docker", "kubernetes", "devops", "containerization", "systems"],
    topic: "Systems",
    chapters: [
      {
        title: "Creating Docker Images",
        content: "This chapter covers the fundamentals of Docker. You'll learn to write a Dockerfile, a text document that contains all the commands a user could call on the command line to assemble an image. We'll build images for a simple web application, manage them, and push them to a container registry like Docker Hub."
      },
      {
        title: "Kubernetes Core Concepts",
        content: "Kubernetes is a powerful container orchestration system. We'll introduce the core architectural components: Pods (the smallest deployable units), Services (a stable networking endpoint for Pods), Deployments (for managing stateless applications), and ReplicaSets (for ensuring a specified number of Pod replicas are running)."
      },
      {
        title: "Managing Deployments",
        content: "You'll learn how to manage your applications on Kubernetes using declarative YAML files. We will cover scaling deployments up and down to handle load, and performing rolling updates to deploy new versions of your application with zero downtime. We'll also explore strategies for rolling back to a previous version if something goes wrong."
      },
      {
        title: "Stateful Applications with Volumes",
        content: "While containers are ephemeral, many applications need to persist data. Kubernetes provides Persistent Volumes (PVs) and Persistent Volume Claims (PVCs) to manage storage. You'll learn how to attach persistent storage to your Pods, enabling you to run stateful applications like databases on Kubernetes."
      }
    ]
  },
  {
    id: 19,
    title: "Web Security: Preventing Common Attacks",
    description: "Learn to identify and prevent common web vulnerabilities like Cross-Site Scripting (XSS), SQL Injection, and Cross-Site Request Forgery (CSRF).",
    image: "https://picsum.photos/seed/web-security/600/400",
    tags: ["web security", "cybersecurity", "owasp", "full-stack"],
    topic: "Security",
    chapters: [
      {
        title: "Cross-Site Scripting (XSS)",
        content: "XSS is an attack where malicious scripts are injected into otherwise benign and trusted websites. We'll explore the three main types: Stored, Reflected, and DOM-based XSS. You'll learn how attackers exploit these vulnerabilities and, more importantly, how to prevent them using techniques like context-aware output encoding and Content Security Policy (CSP)."
      },
      {
        title: "SQL Injection",
        content: "SQL Injection is a code injection technique used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution. We will demonstrate how an attacker can bypass authentication or extract sensitive data. You will learn how to prevent these attacks by using prepared statements (parameterized queries)."
      },
      {
        title: "Cross-Site Request Forgery (CSRF)",
        content: "CSRF is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated. We'll demonstrate how an attacker can trick a user's browser into making a request to another site. The primary defense is the synchronizer token pattern, where a unique, unpredictable token is required for each state-changing request."
      },
      {
        title: "Secure Authentication and Session Management",
        content: "Improper authentication and session management can lead to account takeovers. This chapter covers best practices for handling user credentials, such as secure password storage using strong hashing algorithms (like bcrypt). We'll also discuss how to manage session tokens securely, including using secure cookies and implementing proper logout functionality."
      }
    ]
  }
];

export const courseTopics = [...new Set(courses.map((course) => course.topic))];
