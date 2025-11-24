
export type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  topic: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  chapters: { title: string; content: string }[];
  averageRating: number;
  ratingCount: number;
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
    difficulty: "Beginner",
    duration: "6 hours",
    averageRating: 4.7,
    ratingCount: 1250,
    chapters: [
      { 
        title: "Getting Started", 
        content: "Welcome to the world of Python! First, you'll need to set up your environment. Download the latest version of Python from python.org.\n\nThe installer includes IDLE, a basic development environment, and 'pip', Python's package installer. It's best practice to work within a virtual environment to manage project dependencies. Create one using `python -m venv myenv` and activate it.\n\nTo write your first program, open a text file, save it as 'hello.py', and type:\n\n```python\nprint('Hello, World!')\n```\n\nRun it from your terminal using `python hello.py`. Congratulations, you're a Python programmer!"
      },
      { 
        title: "Variables and Data Types", 
        content: "Variables are containers for storing data values. Python has various built-in data types. Numbers can be integers (e.g., `5`), floats (e.g., `3.14`), and complex numbers.\n\nStrings are sequences of characters, enclosed in single or double quotes (e.g., `'hello'`). Booleans represent truth values: `True` or `False`.\n\nPython also has powerful collection types like lists (mutable, ordered), tuples (immutable, ordered), and dictionaries (key-value pairs):\n\n```python\nmy_list = [1, 'apple', True]\nmy_tuple = (1, 'apple')\nmy_dict = {'key': 'value'}\n```"
      },
      { 
        title: "Control Flow", 
        content: "Control flow statements allow you to execute code based on conditions. The `if` statement runs a block of code only if a condition is true. Use `elif` for additional conditions and `else` for an alternative block.\n\nFor repetition, `for` loops iterate over a sequence (like a list), and `while` loops continue as long as a condition is true.\n\n```python\nfor i in range(5):\n  if i % 2 == 0:\n    print(f'{i} is even')\n  else:\n    print(f'{i} is odd')\n```"
      },
      { 
        title: "Functions", 
        content: "Functions are reusable blocks of code that perform a specific action. You define a function using the `def` keyword, followed by a name and parentheses. You can pass data, known as parameters, into a function, and they can have default values.\n\nA function can return data using the `return` keyword. Variables defined inside a function have local scope, meaning they only exist within that function.\n\n```python\ndef greet(name='Guest'):\n  return f'Hello, {name}!'\n\nmessage = greet('Alice')\nprint(message) # Output: Hello, Alice!\n```"
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
    difficulty: "Advanced",
    duration: "12 hours",
    averageRating: 4.9,
    ratingCount: 980,
    chapters: [
      { 
        title: "Introduction to Data Structures", 
        content: "This chapter reviews fundamental data structures like Arrays, LinkedLists, Stacks, and Queues. We'll introduce Asymptotic Analysis (Big O, Big Omega, Big Theta) to measure the efficiency of algorithms in terms of time and space complexity.\n\nFor example, accessing an element in an array is O(1), while in a linked list it's O(n). This is crucial for selecting the right data structure."
      },
      { 
        title: "Trees and Tries", 
        content: "Trees are hierarchical data structures. We'll focus on Binary Search Trees (BSTs), covering insertion, deletion, and traversal (in-order, pre-order, post-order). To ensure O(log n) performance, we will cover self-balancing trees like AVL trees, which maintain balance using rotations.\n\nWe'll also implement Tries (prefix trees), specialized for efficient string retrieval and auto-completion tasks." 
      },
      { 
        title: "Heaps and Priority Queues", 
        content: "A Heap is a tree-based data structure that satisfies the heap property. We will implement binary heaps (min-heaps and max-heaps) using arrays. Key operations include `insert` (heapify-up) and `extract-min/max` (heapify-down).\n\n```java\nPriorityQueue<Integer> minHeap = new PriorityQueue<>();\nminHeap.add(10);\nminHeap.add(5);\nSystem.out.println(minHeap.peek()); // 5\n```\n\nHeaps are the perfect underlying structure for Priority Queues, an abstract data type essential for algorithms like Dijkstra's."
      },
      { 
        title: "Graphs", 
        content: "Graphs represent relationships among items. We'll cover representations like adjacency lists and matrices. Then, we will implement fundamental graph traversal algorithms: Breadth-First Search (BFS), used for finding the shortest path in unweighted graphs, and Depth-First Search (DFS), which is useful for cycle detection, topological sorting, and finding connected components."
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
    difficulty: "Intermediate",
    duration: "10 hours",
    averageRating: 4.8,
    ratingCount: 2100,
    chapters: [
      { 
        title: "Foundations of Machine Learning", 
        content: "Machine learning involves training models on data to make predictions. We'll cover the full workflow: data collection, cleaning (handling missing values, feature scaling), and splitting data into training and testing sets.\n\nSupervised learning uses labeled data for tasks like classification and regression. Unsupervised learning finds patterns in unlabeled data, for tasks like clustering. We'll also discuss the bias-variance tradeoff."
      },
      { 
        title: "Regression Models", 
        content: "Regression predicts a continuous output. We'll implement Linear Regression from scratch to understand its mechanics, then use Scikit-Learn's implementation.\n\n```python\nfrom sklearn.linear_model import LinearRegression\nfrom sklearn.model_selection import train_test_split\n\nX_train, X_test, y_train, y_test = train_test_split(X, y)\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)\npredictions = model.predict(X_test)\n```\n\nWe'll explore regularization techniques like Ridge and Lasso to prevent overfitting and evaluate models using metrics like Mean Squared Error (MSE)."
      },
      { 
        title: "Classification Models", 
        content: "Classification predicts a categorical label. This chapter covers: Logistic Regression, Support Vector Machines (SVMs) with different kernels, and ensemble methods like Random Forests, which combine multiple decision trees to improve accuracy and control overfitting.\n\nWe will evaluate models using accuracy, precision, recall, F1-score, and ROC curves."
      },
      { 
        title: "Clustering Algorithms", 
        content: "Clustering is an unsupervised task that groups similar data points. We'll implement K-Means, discussing how to choose the optimal number of clusters (K) using the elbow method.\n\nWe'll also cover DBSCAN, a density-based algorithm that can find arbitrarily shaped clusters and is robust to outliers, a key advantage over K-Means."
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
    difficulty: "Intermediate",
    duration: "20 hours",
    averageRating: 4.8,
    ratingCount: 3200,
    chapters: [
        { 
          title: "Building a REST API with Node.js and Express", 
          content: "The backend is the engine of your application. We'll use Node.js and Express.js to create a RESTful API. You'll learn to define routes, handle HTTP requests, and implement middleware.\n\n```javascript\nconst express = require('express');\nconst app = express();\n\napp.get('/api/hello', (req, res) => {\n  res.json({ message: 'Hello from the server!' });\n});\n\napp.listen(3001, () => console.log('Server is running'));\n```\n\nWe'll use tools like Postman to test our API endpoints."
        },
        { 
          title: "Creating a Dynamic Frontend with React", 
          content: "React is a library for building user interfaces with components. We'll cover JSX, props, and state. You'll learn hooks like `useState`, `useEffect`, and `useContext`.\n\n```jsx\nimport React, { useState, useEffect } from 'react';\n\nfunction MyComponent() {\n  const [data, setData] = useState(null);\n\n  useEffect(() => {\n    fetch('/api/hello')\n      .then(res => res.json())\n      .then(setData);\n  }, []);\n\n  return <div>{data ? data.message : 'Loading...'}</div>;\n}\n```\nWe'll use `axios` or `fetch` to communicate with our backend."
        },
        { 
          title: "State Management with Redux", 
          content: "As applications grow, managing state with `useState` can become cumbersome. Redux provides a predictable state container. We will use Redux Toolkit, the recommended approach, to create 'slices' of state, write reducers with Immer to handle immutable updates easily, and dispatch actions to modify the state."
        },
        { 
          title: "Connecting to MongoDB", 
          content: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. We'll use Mongoose, an Object Data Modeling (ODM) library, to define schemas and models for our data, which provides structure and validation. You will learn to perform CRUD (Create, Read, Update, Delete) operations and build more complex queries."
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
    difficulty: "Beginner",
    duration: "8 hours",
    averageRating: 4.6,
    ratingCount: 1500,
    chapters: [
        { 
          title: "Basic SQL Queries", 
          content: "SQL (Structured Query Language) is the standard for relational databases. This chapter introduces `SELECT`, `FROM`, and `WHERE`.\n\n```sql\nSELECT FirstName, LastName, City\nFROM Customers\nWHERE Country = 'Canada'\nORDER BY LastName;\n```\n\nYou'll learn to filter with comparison operators, logical operators (`AND`, `OR`), and pattern matching with `LIKE`."
        },
        { 
          title: "Joins and Aggregate Functions", 
          content: "Data is often split across tables. `JOIN` clauses combine rows from two or more tables. We will cover `INNER JOIN`, `LEFT JOIN`, and `RIGHT JOIN`.\n\nWe'll also learn aggregate functions like `COUNT()`, `SUM()`, `AVG()` and use them with `GROUP BY`.\n\n```sql\nSELECT c.CategoryName, COUNT(p.ProductID) AS NumberOfProducts\nFROM Categories c\nJOIN Products p ON c.CategoryID = p.CategoryID\nGROUP BY c.CategoryName;\n```"
        },
        { 
          title: "Data Definition Language (DDL) and Constraints", 
          content: "DDL statements define the database structure. You will learn `CREATE TABLE`, specifying column names, data types, and constraints like `PRIMARY KEY`, `FOREIGN KEY`, `NOT NULL`, `UNIQUE`, and `CHECK`.\n\n```sql\nCREATE TABLE Products (\n    ProductID int NOT NULL PRIMARY KEY,\n    ProductName varchar(255) NOT NULL,\n    SupplierID int,\n    FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)\n);\n```"
        },
        { 
          title: "Normalization", 
          content: "Database normalization is the process of organizing tables to minimize data redundancy and improve data integrity. We'll cover the first three normal forms (1NF, 2NF, 3NF) with practical examples. 1NF eliminates duplicate columns. 2NF ensures all non-key attributes are fully dependent on the primary key. 3NF removes transitive dependencies."
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
    difficulty: "Intermediate",
    duration: "15 hours",
    averageRating: 4.7,
    ratingCount: 800,
    chapters: [
        { 
          title: "The Application Layer", 
          content: "This layer is where network applications like web browsers and email clients operate. We'll explore key protocols: HTTP for the web (including requests, responses, and methods like GET/POST), SMTP for email, and DNS, the internet's 'phonebook' that translates domain names into IP addresses. We'll examine the client-server and peer-to-peer architectural models."
        },
        { 
          title: "The Transport Layer", 
          content: "The transport layer provides logical communication between processes on different hosts. We will study TCP (Transmission Control Protocol), which provides reliable, ordered, and error-checked delivery, and UDP (User Datagram Protocol), which is faster but unreliable. We'll discuss concepts like multiplexing, port numbers, and TCP's congestion control mechanisms."
        },
        { 
          title: "The Network Layer", 
          content: "The network layer is responsible for routing datagrams across the internet. We'll dive deep into the Internet Protocol (IP), covering IPv4 addressing, subnetting, and NAT (Network Address Translation). We'll also explore how routing algorithms like Link State (e.g., OSPF) and Distance Vector (e.g., RIP) work to find the best path for data."
        },
        { 
          title: "The Link Layer", 
          content: "The link layer handles data transmission between adjacent nodes. We'll cover error detection (e.g., checksums), multiple access protocols (e.g., CSMA/CD used in Ethernet), and how MAC addresses provide a unique hardware identifier for devices on a local network. We'll explore technologies like Ethernet and Wi-Fi."
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
    difficulty: "Beginner",
    duration: "5 hours",
    averageRating: 4.5,
    ratingCount: 1900,
    chapters: [
        { 
          title: "The CIA Triad and Common Threats", 
          content: "This chapter introduces the core principles of information security: Confidentiality, Integrity, and Availability (the CIA Triad). We'll define malware (viruses, worms, ransomware) and social engineering attacks (phishing, pretexting). Understanding these foundational concepts is key to recognizing and mitigating risks in any system."
        },
        { 
          title: "Network Security and Defenses", 
          content: "Securing networks is a critical first line of defense. We will cover firewalls for traffic filtering, Intrusion Detection and Prevention Systems (IDS/IPS) for monitoring and blocking malicious activity, and Virtual Private Networks (VPNs) for creating secure, encrypted connections. We'll discuss the concept of defense-in-depth, layering security controls to protect assets."
        },
        { 
          title: "Cryptography and Access Control", 
          content: "Cryptography is the science of secure communication. This chapter covers symmetric and asymmetric encryption, and cryptographic hashing for data integrity. We will also discuss access control models, including Discretionary Access Control (DAC) and Role-Based Access Control (RBAC), which are essential for ensuring that users can only access the information they are authorized to see."
        },
        { 
          title: "Ethical Hacking and Incident Response", 
          content: "To beat a hacker, you need to think like one. Ethical hacking involves legally testing defenses through penetration testing and vulnerability assessment. We'll also cover the basics of incident response, outlining the steps to take when a security breach occurs: preparation, identification, containment, eradication, recovery, and lessons learned."
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
    difficulty: "Intermediate",
    duration: "10 hours",
    averageRating: 4.8,
    ratingCount: 2500,
    chapters: [
        { 
          title: "Introduction to AWS and IAM", 
          content: "AWS is a leading cloud platform. This chapter covers the benefits of cloud computing (scalability, elasticity, cost). We'll explore the AWS Global Infrastructure and introduce IAM (Identity and Access Management), the service you use to manage access to AWS services securely. You'll learn to create users, groups, and policies to follow the principle of least privilege."
        },
        { 
          title: "EC2 and Virtual Servers", 
          content: "Amazon EC2 provides scalable virtual servers, or 'instances'. You'll learn how to launch an instance, choose an Amazon Machine Image (AMI), and configure security groups (virtual firewalls). We'll also cover connecting to your instance using SSH and understanding the different instance families and pricing models (On-Demand, Reserved, Spot)."
        },
        { 
          title: "S3 and Cloud Storage", 
          content: "Amazon S3 is a highly durable and scalable object storage service. You'll learn to create S3 buckets, upload objects, and set permissions using bucket policies and ACLs. We'll also cover versioning, to protect against accidental deletions, and storage classes (like S3 Standard, Glacier) to optimize storage costs based on access frequency."
        },
        { 
          title: "Serverless with Lambda and API Gateway", 
          content: "AWS Lambda lets you run code without managing servers. You will write a Lambda function and configure it to run in response to events.\n\nWe'll then use API Gateway to create an HTTP endpoint for our Lambda function, turning it into a fully-managed, scalable, serverless API. This is a powerful pattern for building modern applications."
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
    difficulty: "Intermediate",
    duration: "12 hours",
    averageRating: 4.6,
    ratingCount: 750,
    chapters: [
      {
        title: "The Software Development Life Cycle (SDLC)",
        content: "The SDLC provides a structured process for building software. We'll explore classic models like the Waterfall model (sequential and rigid) and contrast it with iterative models like the Spiral and Agile models. Understanding these frameworks is key to managing project scope, requirements, and risks from conception to deployment and maintenance."
      },
      {
        title: "Agile, Scrum, and Kanban",
        content: "Agile is a modern, iterative approach to software development. We will focus on Scrum, learning about its roles (Product Owner, Scrum Master), events (Sprints, Daily Stand-ups, Reviews), and artifacts (Product Backlog, Sprint Backlog). We'll also compare Scrum with Kanban, another popular Agile method that focuses on visualizing workflow and limiting work-in-progress."
      },
      {
        title: "Creational and Structural Design Patterns",
        content: "Design patterns are reusable solutions to common problems. We will cover several foundational Creational patterns, like Singleton and Factory, which deal with object creation mechanisms. We will also explore Structural patterns, like Adapter and Decorator, which explain how to assemble objects and classes into larger structures while keeping them flexible and efficient."
      },
      {
        title: "Testing and Quality Assurance",
        content: "Ensuring software quality is paramount. This chapter covers the testing pyramid: Unit Testing (testing individual functions), Integration Testing (testing how components work together), and End-to-End (E2E) Testing (testing the complete system). We'll also discuss the importance of Test-Driven Development (TDD) and setting up automated testing with a CI/CD pipeline."
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
    difficulty: "Advanced",
    duration: "18 hours",
    averageRating: 4.9,
    ratingCount: 600,
    chapters: [
      {
        title: "Process and Thread Management",
        content: "A process is a program in execution. We'll cover process states, the Process Control Block (PCB), and CPU scheduling algorithms like FCFS, SJF, and Round Robin. We'll also introduce threads, the smallest unit of execution within a process, and discuss the benefits and challenges of multi-threaded programming."
      },
      {
        title: "Memory Management",
        content: "Memory management is crucial for OS performance. We'll explore techniques like paging and segmentation. We will also discuss virtual memory, a technique that uses disk space to extend RAM, allowing the execution of processes that are larger than physical memory. We'll look at page replacement algorithms like FIFO and LRU."
      },
      {
        title: "Concurrency and Synchronization",
        content: "Concurrency can lead to race conditions and deadlocks. We'll study synchronization primitives like mutexes, semaphores, and monitors, which are used to control access to shared resources. We'll also analyze classic concurrency problems like the Dining Philosophers problem to understand the complexities of synchronization."
      },
      {
        title: "File Systems",
        content: "A file system controls how data is stored and retrieved. This chapter covers file concepts, access methods, and directory structures. We'll also look at file system implementation, including disk space allocation methods like contiguous, linked, and indexed allocation, and discuss journaling file systems which improve reliability."
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
    difficulty: "Intermediate",
    duration: "9 hours",
    averageRating: 4.7,
    ratingCount: 1100,
    chapters: [
      {
        title: "What is DevOps?",
        content: "DevOps is a cultural and professional movement that combines software development (Dev) and IT operations (Ops). It aims to shorten the development life cycle and provide continuous delivery with high software quality. This chapter explores the core principles of the DevOps lifecycle: Plan, Code, Build, Test, Release, Deploy, and Monitor."
      },
      {
        title: "Version Control with Git",
        content: "Version control is the foundation of DevOps. We'll do a deep dive into Git. You'll learn about branching strategies like GitFlow and Trunk-Based Development. We'll emphasize the importance of atomic commits and collaborating through pull requests on platforms like GitHub for code reviews and effective team collaboration."
      },
      {
        title: "Continuous Integration (CI) with GitHub Actions",
        content: "CI is the practice of automatically building and testing code with every change. We will use GitHub Actions to create a CI pipeline from scratch.\n\n```yaml\nname: CI Pipeline\non: [push]\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v2\n      - name: Install dependencies\n        run: npm install\n      - name: Run tests\n        run: npm test\n```\n\nThis pipeline will be triggered on every push, providing rapid feedback to developers."
      },
      {
        title: "Continuous Delivery/Deployment (CD)",
        content: "CD extends CI by automatically deploying all code changes to an environment after the build stage. We will differentiate between Continuous Delivery (manual trigger to production) and Continuous Deployment (fully automated). We will discuss deployment strategies like blue-green (to reduce downtime) and canary (to reduce risk)."
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
    difficulty: "Advanced",
    duration: "16 hours",
    averageRating: 4.8,
    ratingCount: 450,
    chapters: [
      {
        title: "The Graphics Pipeline",
        content: "The rendering pipeline is the sequence of steps used to create a 2D image from a 3D scene. We will walk through the main stages: vertex processing (transforming vertices), rasterization (converting vectors to pixels), fragment/pixel shading (coloring pixels), and output merging. Understanding this is fundamental to real-time graphics."
      },
      {
        title: "2D and 3D Transformations",
        content: "Geometric transformations manipulate objects in a scene. We will cover translation, rotation, and scaling. You'll learn how to represent these transformations using 4x4 homogeneous coordinate matrices and how to combine them. We'll also cover the difference between model, view, and projection transformations to place objects in the world and view them through a camera."
      },
      {
        title: "Lighting and Shading",
        content: "Lighting brings realism to a 3D scene. We'll explore light sources (ambient, diffuse, specular) and material properties. We'll implement basic shading models like Phong and Gouraud shading. These models calculate the color of a pixel based on light direction, surface normal, and viewer position to create the illusion of depth and texture."
      },
      {
        title: "Introduction to WebGL with Three.js",
        content: "WebGL is a JavaScript API for rendering graphics in a browser. We will use Three.js, a library that simplifies WebGL, to create a basic 3D scene.\n\n```javascript\nconst scene = new THREE.Scene();\nconst camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);\nconst renderer = new THREE.WebGLRenderer();\nconst geometry = new THREE.BoxGeometry();\nconst material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });\nconst cube = new THREE.Mesh(geometry, material);\nscene.add(cube);\n```"
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
    difficulty: "Intermediate",
    duration: "8 hours",
    averageRating: 4.7,
    ratingCount: 1300,
    chapters: [
      {
        title: "Arrow Functions and Lexical `this`",
        content: "ES6 introduced arrow functions, providing a more concise syntax. A key difference is that they do not have their own `this` context; they inherit `this` from the parent scope (lexical `this`).\n\n```javascript\n// Traditional function\nconst traditional = function() { console.log(this) };\n\n// Arrow function\nconst arrow = () => { console.log(this) };\n```\nThis solves common problems and simplifies code, especially in object methods and callbacks."
      },
      {
        title: "Promises and Asynchronous Operations",
        content: "Promises provide a cleaner way to handle async operations, avoiding 'callback hell'. A Promise is an object representing the eventual completion (fulfillment) or failure of an async operation. We'll cover creating promises, chaining with `.then()`, and handling errors with `.catch()` and `.finally()`."
      },
      {
        title: "Async/Await",
        content: "Async/await is syntactic sugar built on top of promises, making async code look and behave more like synchronous code.\n\n```javascript\nasync function fetchData() {\n  try {\n    const response = await fetch('...');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Error fetching data:', error);\n  }\n}\n```\nAn `async` function implicitly returns a promise. The `await` keyword pauses execution and waits for a Promise to resolve."
      },
      {
        title: "ES Modules and Destructuring",
        content: "ES Modules provide a standardized module system. You'll learn `export` and `import` for code organization. We'll also cover destructuring assignment, a powerful feature that makes it possible to unpack values from arrays, or properties from objects, into distinct variables."
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
    difficulty: "Advanced",
    duration: "14 hours",
    averageRating: 4.9,
    ratingCount: 700,
    chapters: [
      {
        title: "Introduction to DP: Overlapping Subproblems and Optimal Substructure",
        content: "Dynamic Programming is applicable when a problem has two key properties: Overlapping Subproblems (it can be broken down into subproblems that are reused several times) and Optimal Substructure (the optimal solution to the overall problem can be constructed from the optimal solutions of its subproblems). We will cover the two main implementation strategies: Memoization (top-down with caching) and Tabulation (bottom-up)."
      },
      {
        title: "Fibonacci and Staircase Problems",
        content: "The Fibonacci sequence is the classic introductory problem for DP. We'll analyze the naive recursive solution's O(2^n) complexity and optimize it to O(n) with memoization and tabulation.\n\n```python\n# Memoization\nmemo = {}\ndef fib(n):\n    if n in memo: return memo[n]\n    if n <= 1: return n\n    memo[n] = fib(n - 1) + fib(n - 2)\n    return memo[n]\n```\nWe'll see how this same pattern can be applied to similar problems, like counting the number of ways to climb a staircase."
      },
      {
        title: "0/1 Knapsack Problem",
        content: "The Knapsack Problem is a classic optimization problem. Given items with weights and values, find the most valuable combination that fits in a knapsack of a certain capacity. We will solve this using a 2D DP table where `dp[i][j]` represents the maximum value using the first `i` items with a capacity of `j`. This pattern is foundational for resource allocation problems."
      },
      {
        title: "Longest Common Subsequence",
        content: "The Longest Common Subsequence (LCS) problem aims to find the longest subsequence common to two sequences. It has applications in bioinformatics (DNA) and version control (diff). We'll use a 2D DP table where `dp[i][j]` is the length of the LCS of the first `i` characters of string1 and the first `j` characters of string2. We will also learn how to backtrack through the table to reconstruct the subsequence."
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
    difficulty: "Advanced",
    duration: "25 hours",
    averageRating: 4.9,
    ratingCount: 1800,
    chapters: [
      {
        title: "Tensors and `nn.Module`",
        content: "PyTorch's fundamental data structure is the tensor. We will explore tensor operations and the crucial `autograd` engine, which automatically computes gradients for backpropagation. You'll learn to build networks by creating a class that inherits from `torch.nn.Module`, defining layers in the constructor, and implementing the `forward` pass."
      },
      {
        title: "Training Loop, Loss Functions, and Optimizers",
        content: "This chapter covers the full training loop. You'll learn to define a loss function (e.g., `nn.CrossEntropyLoss` for classification) to measure model error, and an optimizer (e.g., `torch.optim.Adam`) to update model parameters. We'll iterate over a `DataLoader`, perform the forward pass, calculate loss, run backpropagation with `loss.backward()`, and update weights with `optimizer.step()`."
      },
      {
        title: "Convolutional Neural Networks (CNNs)",
        content: "CNNs are ideal for image data. We'll cover the key layers: `Conv2d` for feature extraction using filters, activation functions like ReLU, `MaxPool2d` for down-sampling, and `Linear` layers for classification. You'll build a CNN to classify images from the CIFAR-10 dataset and learn about managing image transformations."
      },
      {
        title: "Recurrent Neural Networks (RNNs)",
        content: "RNNs are designed for sequential data like text. We'll discuss the basic RNN cell and the problem of vanishing gradients. Then we'll move to more advanced architectures like LSTMs (Long Short-Term Memory) and GRUs (Gated Recurrent Units) that solve this problem. You will build a basic character-level RNN for text generation."
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
    difficulty: "Advanced",
    duration: "18 hours",
    averageRating: 4.8,
    ratingCount: 950,
    chapters: [
      {
        title: "Monolith vs. Microservices",
        content: "We'll start by comparing monolithic architecture with the microservice architecture, which structures an application as a collection of loosely coupled, independently deployable services. We'll discuss the pros (scalability, tech flexibility) and cons (complexity, operational overhead) of microservices, helping you decide when to use them."
      },
      {
        title: "Service Communication Patterns",
        content: "Services need to communicate. We'll explore synchronous communication using REST APIs and gRPC. We'll also cover asynchronous communication using a message broker like RabbitMQ, which enables event-driven architectures and improves resilience. We will discuss the concept of service discovery using tools like Consul or Kubernetes' built-in DNS."
      },
      {
        title: "API Gateways",
        content: "An API Gateway acts as a single entry point for all clients. It simplifies the client by routing requests to the appropriate microservice. The gateway can also handle cross-cutting concerns like authentication, authorization, rate limiting, and caching, preventing this logic from being duplicated in every service. We'll explore implementing a gateway."
      },
      {
        title: "Containerization with Docker",
        content: "Docker makes it easy to package and deploy microservices consistently. You'll learn to write a Dockerfile to create an image for a service, and use Docker Compose to define and run a multi-container application locally.\n\n```dockerfile\nFROM node:18-alpine\nWORKDIR /app\nCOPY package.json .\nRUN npm install\nCOPY . .\nCMD [\"node\", \"server.js\"]\n```\nThis creates a consistent development environment that mirrors production."
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
    difficulty: "Intermediate",
    duration: "12 hours",
    averageRating: 4.7,
    ratingCount: 880,
    chapters: [
      {
        title: "The CAP Theorem and Data Models",
        content: "The CAP theorem states that a distributed data store can only provide two of three guarantees: Consistency, Availability, and Partition Tolerance. We'll explore what this means in practice and how it influences database choice. We will then survey the main NoSQL data models: document, key-value, wide-column, and graph."
      },
      {
        title: "Document Databases (MongoDB)",
        content: "Document databases store data in flexible, JSON-like documents. This is intuitive for developers and maps directly to objects in code. We'll use MongoDB to perform CRUD operations, design schemas with embedded documents and references, and use its aggregation framework to perform complex data processing pipelines."
      },
      {
        title: "Key-Value Stores (Redis)",
        content: "Key-value stores are the simplest NoSQL model, storing data as a collection of key-value pairs. They are extremely fast and often used for caching, session management, and real-time leaderboards. We'll use Redis to explore its various data structures (strings, lists, hashes, sets, sorted sets) and see how it can improve application performance."
      },
      {
        title: "Wide-Column Stores (Cassandra)",
        content: "Wide-column stores like Cassandra are designed for extreme scale and high availability. They partition data by row and organize it into flexible columns. We'll discuss the architecture of Cassandra, its masterless ring design, tunable consistency, and its query language (CQL), which is similar to SQL but tailored for partitioned data."
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
    difficulty: "Advanced",
    duration: "22 hours",
    averageRating: 4.9,
    ratingCount: 1400,
    chapters: [
      {
        title: "Creating Optimized Docker Images",
        content: "This chapter covers writing a Dockerfile to containerize an application. We'll go beyond the basics and learn to create optimized, multi-stage builds to produce smaller, more secure images. We'll also cover Docker networking and volumes for persisting data, and use Docker Compose to manage multi-container applications locally."
      },
      {
        title: "Kubernetes Core Concepts",
        content: "Kubernetes is a container orchestrator. We'll introduce the core objects: Pods, Services (for stable networking), Deployments (for stateless apps), and ReplicaSets. You'll learn to interact with a Kubernetes cluster using `kubectl`, the command-line tool for managing Kubernetes resources declaratively."
      },
      {
        title: "Managing Deployments and Ingress",
        content: "You'll learn how to manage applications on Kubernetes using declarative YAML files. We will cover scaling deployments, and performing rolling updates and rollbacks. We will also set up an Ingress controller, which acts as a smart router, to expose our services to the outside world using host-based or path-based routing."
      },
      {
        title: "StatefulSets and Persistent Volumes",
        content: "While Deployments are great for stateless apps, databases require stable network identifiers and persistent storage. We'll explore StatefulSets, which are designed for stateful applications. You'll learn how to provision storage using Persistent Volumes (PVs) and Persistent Volume Claims (PVCs) to run a database on Kubernetes."
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
    difficulty: "Intermediate",
    duration: "10 hours",
    averageRating: 4.8,
    ratingCount: 920,
    chapters: [
      {
        title: "Cross-Site Scripting (XSS)",
        content: "XSS attacks inject malicious scripts into trusted websites. We'll explore Stored, Reflected, and DOM-based XSS. You'll learn how attackers exploit them to steal session cookies or deface websites. The primary defense is context-aware output encoding (e.g., converting `<` to `&lt;`). We will also implement a Content Security Policy (CSP) as a powerful second layer of defense."
      },
      {
        title: "SQL Injection",
        content: "SQL Injection attacks insert malicious SQL into an entry field for execution, allowing attackers to bypass authentication or extract data. We will demonstrate how this works. You will learn that the most effective prevention is to always use prepared statements (parameterized queries). We will also discuss why input sanitization alone is not sufficient."
      },
      {
        title: "Cross-Site Request Forgery (CSRF)",
        content: "CSRF attacks trick a logged-in user's browser into making an unwanted request to another site. The primary defense is the synchronizer token pattern. We'll implement this by generating a unique, unpredictable token on the server, embedding it in a hidden form field, and verifying it upon form submission. We'll also discuss SameSite cookies as another defense mechanism."
      },
      {
        title: "Secure Authentication and Session Management",
        content: "Improper authentication can lead to account takeovers. This chapter covers secure password storage using strong, salted hashing algorithms like Argon2 or bcrypt. We'll also discuss best practices for session management, including generating long, random session IDs, storing them in secure, HttpOnly cookies, and implementing proper logout functionality that invalidates the session on the server."
      }
    ]
  }
];

export const courseTopics = [...new Set(courses.map((course) => course.topic))];
