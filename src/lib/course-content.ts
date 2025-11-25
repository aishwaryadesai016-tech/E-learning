
export const courseContent: Record<string, { modules: Record<number, string> }> = {
  'fs-dev-spec': {
    modules: {
      0: `
### Welcome to Full Stack Web Development!

This first module introduces the foundational concepts of frontend web development with React. You'll learn how to build dynamic user interfaces and manage component state.

#### What is React?
React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. React was developed and is maintained by Facebook and is used in major applications like Instagram, Netflix, and Airbnb. The key advantage of React is its use of a virtual DOM, which allows for efficient updates and rendering of components, leading to a faster and smoother user experience.

#### Your First React Component
Let's create a simple "Hello, World!" component. This is the traditional first step in learning any new language or framework.

\`\`\`jsx
import React from 'react';

// This is a functional component. It's a JavaScript function that returns JSX.
function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

export default HelloWorld;
\`\`\`
This component, when rendered, will display an \`<h1>\` HTML tag with the text "Hello, World!".

#### Understanding JSX
JSX stands for JavaScript XML. It's a syntax extension to JavaScript that allows you to write HTML-like code inside a JavaScript file. While you can write React without JSX, it makes the code more readable and intuitive. Browsers don't understand JSX directly, so you need a build step (like Babel) to transpile it into regular JavaScript.

#### Props and State
**Props** (short for properties) are like function arguments. They allow you to pass data from a parent component to a child component, making components reusable and dynamic. Props are read-only.

\`\`\`jsx
// Greeting.jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// App.jsx
function App() {
  return <Greeting name="Alice" />;
}
\`\`\`

**State** is data that is private to a component and can change over time in response to user actions or network responses. When state changes, React re-renders the component to reflect the new state.

Here's an example of a component with state using the \`useState\` hook:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  // 'count' is the state variable, 'setCount' is the function to update it.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`
      `,
      1: `
### Module 2: Advanced React

This module dives deeper into React's powerful features, including Hooks for managing side effects and state, and client-side routing for building single-page applications (SPAs).

#### React Hooks
Hooks are functions that let you “hook into” React state and lifecycle features from function components. They were introduced in React 16.8 and have revolutionized how we write components.
- **useState**: We've seen this. It manages state in a functional component.
- **useEffect**: This hook lets you perform side effects in function components. This is the place for data fetching, subscriptions, or manually changing the DOM.
- **useContext**: Allows you to subscribe to React context without introducing nesting.
- **useReducer**: An alternative to \`useState\` for managing complex state logic.

Example of \`useEffect\` to fetch data from an API:
\`\`\`jsx
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // The effect function
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
      });
      
    // The empty dependency array [] means this effect runs only once, after the initial render.
  }, []); 

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'No data found.'}</div>;
}
\`\`\`

#### React Router
React Router is the standard library for routing in React. It enables navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL without causing a full page refresh.

\`\`\`jsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function Home() { return <h2>Home Page</h2>; }
function About() { return <h2>About Page</h2>; }
\`\`\`
      `,
      2: `
### Module 3: Backend with Node.js & Express

This module introduces server-side development using Node.js and the Express framework. You'll learn to build a server that can respond to requests from the frontend.

#### What is Node.js?
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server, outside of a web browser. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications.

#### Building a Simple Server with Express
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// A simple GET endpoint
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// A POST endpoint
app.post('/api/data', (req, res) => {
    console.log(req.body); // The data sent from the client
    res.status(201).json({ message: 'Data received', data: req.body });
});


app.listen(port, () => {
  console.log(\`Server listening on port \${port}\`);
});
\`\`\`

#### RESTful APIs
A RESTful API is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. You will learn to build endpoints for the common HTTP methods:
- **GET**: Retrieve data.
- **POST**: Create new data.
- **PUT**: Update existing data.
- **DELETE**: Remove data.

These form the basis of CRUD (Create, Read, Update, Delete) operations.
      `,
      3: `
### Module 4: Database Integration with MongoDB

Learn how to connect your backend application to a NoSQL database like MongoDB to persist data.

#### What is MongoDB?
MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database, it uses JSON-like documents with optional schemas. This flexible document model is well-suited for many modern applications and allows for rapid development.

#### Using Mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

First, define a schema:
\`\`\`javascript
// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
\`\`\`

Now, use this model in your Express routes to interact with the database:
\`\`\`javascript
// routes/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = new User({ name: req.body.name, email: req.body.email });
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
\`\`\`
This creates a robust backend system for managing user data.
      `
    },
  },
  'python-for-everybody': {
    modules: {
      0: `
### Module 1: Getting Started with Python

This module covers the absolute basics of Python programming. No prior experience is needed!

#### Why Program?
Computers are powerful tools for processing data. Programming allows you to give the computer instructions to perform complex tasks quickly and accurately. Python is known for its simple, readable syntax, making it an excellent first language to learn. It's used in web development, data science, automation, and more.

#### Variables and Expressions
A **variable** is a named storage location for data.
An **expression** is a combination of values, variables, and operators that results in a single value.

\`\`\`python
# A variable named 'x' storing the integer 10
x = 10 

# A variable named 'y' storing the integer 20
y = 20

# An expression that adds x and y and stores the result in 'z'
z = x + y

# The print() function displays the value to the console
print(z) # Output: 30

# Variables can store different data types
name = "Alice"
pi = 3.14159
is_learning = True
\`\`\`

#### Conditional Code
Conditional code allows your program to make decisions based on certain conditions. The \`if\`, \`elif\` (else if), and \`else\` keywords are used for this. Indentation is crucial in Python; it defines the code blocks.

\`\`\`python
temperature = 25

if temperature > 30:
  print("It's a hot day! Stay hydrated.")
elif temperature > 20:
  print("It's a nice day. Perfect for a walk.")
else:
  print("It's cold. Don't forget a jacket.")

# Output: It's a nice day. Perfect for a walk.
\`\`\`
      `,
      1: `
### Module 2: Python Data Structures

This module explores the core data structures that you'll use in every Python program to store collections of data.

#### Lists
A list is a mutable, ordered collection of items. You can add, remove, or change items in a list.

\`\`\`python
bicycles = ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles[0].title()) # Accessing by index. Output: Trek

# Adding an item
bicycles.append('giant')

# Removing an item
bicycles.remove('redline')

# Looping through a list
for bike in bicycles:
    print(bike.upper())
\`\`\`

#### Dictionaries
A dictionary is an unordered collection of key-value pairs. It's used to store data values like a map.

\`\`\`python
alien_0 = {'color': 'green', 'points': 5}

# Accessing a value by its key
print(alien_0['color']) # Output: green
new_points = alien_0['points']
print(f"You just earned {new_points} points!")

# Adding a new key-value pair
alien_0['x_position'] = 0
alien_0['y_position'] = 25

print(alien_0)
# Output: {'color': 'green', 'points': 5, 'x_position': 0, 'y_position': 25}
\`\`\`

#### Tuples
A tuple is an immutable, ordered collection of items. Once created, you cannot change its values. They are often used for data that should not be changed, like coordinates.

\`\`\`python
dimensions = (200, 50)
print(dimensions[0]) # Output: 200
# dimensions[0] = 250 # This would cause a TypeError
\`\`\`
      `,
      2: `
### Module 3: Using Python to Access Web Data

This module covers how to use Python to scrape, parse, and read web data from the internet.

#### Regular Expressions
Regular expressions (or regex) are a powerful language for matching text patterns. Python's \`re\` module allows you to work with them.

\`\`\`python
import re

text = "My email is example@domain.com, and my friend's is friend.name@work.co.uk"
# Find all email addresses in the text
emails = re.findall(r'[\\w.-]+@[\\w.-]+', text)
print(emails) # Output: ['example@domain.com', 'friend.name@work.co.uk']
\`\`\`

#### Web Scraping with BeautifulSoup
Beautiful Soup is a Python library for pulling data out of HTML and XML files. It works with your favorite parser to provide idiomatic ways of navigating, searching, and modifying the parse tree.

\`\`\`python
from bs4 import BeautifulSoup
import requests

url = 'http://py4e-data.dr-chuck.net/known_by_Fikret.html'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# Retrieve all of the anchor tags
tags = soup('a')
for tag in tags:
    print(tag.get('href', None))
\`\`\`

#### Working with JSON data
JSON (JavaScript Object Notation) is a lightweight data-interchange format. Python's \`json\` library makes it easy to parse JSON from web APIs.

\`\`\`python
import json

json_string = '{"name": "John", "age": 30, "city": "New York"}'
data = json.loads(json_string) # Parse JSON string into a Python dictionary

print(data['age']) # Output: 30
\`\`\`
      `,
      3: `
### Module 4: Using Databases with Python

This module introduces you to the basics of SQL and database design, and how to interact with a database using Python.

#### Introduction to SQL
Structured Query Language (SQL) is the standard language for relational database management systems. It's used to create, query, update, and manage databases.

\`\`\`sql
-- Select all records from the "Customers" table:
SELECT * FROM Customers;

-- Select records where the City is "London" and sort them:
SELECT * FROM Customers
WHERE City = 'London'
ORDER BY CustomerName;

-- Create a new record
INSERT INTO Customers (CustomerName, City, Country)
VALUES ('Cardinal', 'Stavanger', 'Norway');
\`\`\`

#### Connecting to a Database with \`sqlite3\`
Python's built-in \`sqlite3\` library allows you to work with SQLite, a lightweight, serverless database that's great for learning and for mobile applications.

\`\`\`python
import sqlite3

# Connect to a database (or create one if it doesn't exist)
conn = sqlite3.connect('music.sqlite')
cur = conn.cursor()

# Create a table
cur.execute('CREATE TABLE IF NOT EXISTS Tracks (title TEXT, plays INTEGER)')

# Insert some data
cur.execute('INSERT INTO Tracks (title, plays) VALUES (?, ?)', ('Thunderstruck', 20))
cur.execute('INSERT INTO Tracks (title, plays) VALUES (?, ?)', ('My Way', 15))

# Commit the changes to the database
conn.commit()

# Query the data
cur.execute('SELECT title, plays FROM Tracks')
for row in cur:
     print(row)

cur.close()
conn.close()
\`\`\`
This provides a solid foundation for building data-driven applications.
      `
    }
  },
  'data-science-ml': {
    modules: {
        0: `
### Module 1: Data Analysis with Pandas

This module provides a comprehensive introduction to the Pandas library, the most popular tool for data manipulation in Python. You'll learn how to load, clean, manipulate, and visualize data.

#### DataFrames and Series
- **Series:** A one-dimensional labeled array capable of holding any data type (integers, strings, floats, etc.).
- **DataFrame:** A two-dimensional labeled data structure with columns of potentially different types. You can think of it like a spreadsheet, a SQL table, or a dictionary of Series objects.

\`\`\`python
import pandas as pd
import numpy as np

# Creating a DataFrame from a dictionary
data = {'State': ['Ohio', 'Ohio', 'Ohio', 'Nevada', 'Nevada'],
        'Year': [2000, 2001, 2002, 2001, 2002],
        'Pop': [1.5, 1.7, 3.6, 2.4, 2.9]}
df = pd.DataFrame(data)
print(df.head())
\`\`\`

#### Data Cleaning and Preparation
Real-world data is messy. You'll learn techniques for:
- **Handling Missing Data:** Using \`dropna()\` to remove missing values or \`fillna()\` to impute them.
- **Removing Duplicates:** Using \`df.duplicated()\` and \`df.drop_duplicates()\`.
- **Transforming Data:** Applying functions to columns using \`map()\` or \`apply()\`.

\`\`\`python
# Example of filling missing values
df.fillna(df.mean(), inplace=True) 
\`\`\`

#### Merging and Grouping
- **Merging:** Combining multiple datasets together using SQL-like joins (\`pd.merge\`).
- **Grouping:** Splitting the data into groups based on some criteria, applying a function to each group independently, and combining the results (\`df.groupby()\`).

\`\`\`python
# Group by 'State' and calculate the mean population
print(df.groupby('State')['Pop'].mean())
\`\`\`
        `,
        1: `
### Module 2: Machine Learning Fundamentals

This module introduces the core concepts of machine learning, focusing on supervised learning techniques with the Scikit-learn library.

#### Supervised vs. Unsupervised Learning
- **Supervised Learning:** The model learns from data that is already labeled. The goal is to learn a mapping function that can predict the output variable (Y) from the input data (X). Examples: Regression, Classification.
- **Unsupervised Learning:** The model works on its own to discover patterns and information from unlabeled data. The goal is to model the underlying structure or distribution in the data. Examples: Clustering, Dimensionality Reduction.

#### The Machine Learning Workflow
1.  **Frame the Problem:** What are you trying to predict?
2.  **Get the Data:** Load your dataset.
3.  **Prepare the Data:** Clean, preprocess, and split into training and testing sets.
4.  **Train the Model:** Choose an algorithm and fit it to your training data.
5.  **Evaluate the Model:** Check the model's performance on the unseen test data.
6.  **Tune and Finalize:** Tune hyperparameters and finalize your model.

#### A Simple Machine Learning Model
Using Scikit-learn to train a linear regression model.

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

# Assume X (features) and y (target) are our numpy arrays or pandas DataFrames
# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Create and train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)

# Evaluate the model
mse = mean_squared_error(y_test, predictions)
print(f"Mean Squared Error: {mse}")
\`\`\`
        `,
        2: `
### Module 3: Introduction to Deep Learning

Explore the world of neural networks with TensorFlow and Keras, one of the most popular deep learning frameworks.

#### What are Neural Networks?
Neural networks are a set of algorithms, modeled loosely after the human brain, that are designed to recognize patterns. They interpret sensory data through a kind of machine perception, labeling or clustering raw input. The "deep" in deep learning refers to the use of multiple layers in the network.

#### Building a Neural Network for Image Classification
A simple sequential model using Keras for classifying handwritten digits from the MNIST dataset.

\`\`\`python
import tensorflow as tf
from tensorflow import keras

# Load the dataset
(train_images, train_labels), (test_images, test_labels) = keras.datasets.mnist.load_data()

# Normalize pixel values to be between 0 and 1
train_images, test_images = train_images / 255.0, test_images / 255.0

# Define the model architecture
model = keras.Sequential([
    keras.layers.Flatten(input_shape=(28, 28)),      # Flattens the 28x28 image into a 1D array
    keras.layers.Dense(128, activation='relu'),        # Hidden layer with 128 neurons and ReLU activation
    keras.layers.Dropout(0.2),                         # Dropout layer to prevent overfitting
    keras.layers.Dense(10, activation='softmax')       # Output layer with 10 neurons (one for each digit)
])

# Compile the model
model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# Train the model
model.fit(train_images, train_labels, epochs=5)

# Evaluate the model
test_loss, test_acc = model.evaluate(test_images,  test_labels, verbose=2)
print(f'\\nTest accuracy: {test_acc}')
\`\`\`
        `,
        3: `
### Module 4: Capstone Project

Apply all the skills you've learned to a real-world data science problem. This is your chance to build a project from scratch and showcase your expertise.

#### The Data Science Workflow in Practice
1.  **Problem Definition:** Choose a problem that interests you. For example, predicting housing prices, classifying customer churn, or analyzing sentiment from text data.
2.  **Data Collection:** Find a suitable dataset from sources like Kaggle, UCI Machine Learning Repository, or public APIs.
3.  **Data Cleaning & Preprocessing:** This is often the most time-consuming part. You will handle missing values, correct data types, and engineer new features.
4.  **Exploratory Data Analysis (EDA):** Use libraries like Matplotlib and Seaborn to create visualizations. Uncover patterns, correlations, and anomalies in your data.
5.  **Modeling:** Experiment with different machine learning models (e.g., Logistic Regression, Random Forest, Gradient Boosting, or a Neural Network).
6.  **Evaluation:** Use appropriate metrics (e.g., Accuracy, Precision, Recall, F1-score for classification; MSE, R² for regression) to evaluate your models' performance. Use cross-validation to ensure your results are robust.
7.  **Deployment & Presentation:** Summarize your findings in a clear and concise manner. You might build a simple web app with Flask or Streamlit to demonstrate your model, or write a detailed report with visualizations.

This project is your opportunity to build a portfolio piece that showcases your abilities to potential employers.
        `
    }
  },
  'cyber-sec-intro': {
    modules: {
        0: `
### Module 1: The Cybersecurity Landscape

This module introduces the fundamental concepts of cybersecurity, the threat landscape, and the core principles that guide security professionals.

#### The CIA Triad
The foundation of information security, a model used to guide policies for information security within an organization.
- **Confidentiality:** Ensures that sensitive information is not disclosed to unauthorized individuals, entities, or processes. Achieved through measures like encryption and access control.
- **Integrity:** Maintains the consistency, accuracy, and trustworthiness of data over its entire lifecycle. Data must not be changed in transit, and steps must be taken to ensure that data cannot be altered by unauthorized people.
- **Availability:** Ensures that information and systems are accessible when needed by authorized users. This involves protecting against hardware failures, network issues, and denial-of-service attacks.

#### Common Threats & Vulnerabilities
- **Malware:** Malicious software including viruses, worms, trojans, ransomware, and spyware.
- **Phishing:** Fraudulent attempts, usually made through email, to trick a user into revealing sensitive information like passwords or credit card numbers.
- **Man-in-the-Middle (MitM) Attack:** An attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other.
- **Denial-of-Service (DoS) Attacks:** Overwhelming a system, server, or network with traffic to make it unavailable to its intended users.
- **SQL Injection:** A code injection technique that might destroy your database. It involves inserting a malicious SQL query via the input data from the client to the application.
        `,
        1: `
### Module 2: Defensive Measures

Learn about the common tools, technologies, and cryptographic techniques used to protect systems and data.

#### Network Security
- **Firewalls:** A network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules. They can be hardware, software, or both.
- **Intrusion Detection Systems (IDS) & Intrusion Prevention Systems (IPS):** An IDS monitors a network for malicious activity or policy violations and reports it. An IPS takes the additional step of actively blocking the detected threat.
- **Virtual Private Networks (VPNs):** Creates a secure, encrypted connection over a less secure network, such as the public internet.

#### Cryptography
Cryptography is the practice and study of techniques for secure communication in the presence of third parties.
- **Symmetric Encryption:** Uses a single key for both encryption of the plaintext and decryption of the ciphertext. Fast and efficient, but key exchange can be a security challenge. (e.g., AES)
- **Asymmetric Encryption (Public-key Cryptography):** Uses a pair of keys: a public key, which may be disseminated widely, and a private key, which is known only to the owner. This is the foundation of digital signatures and secure web traffic (HTTPS). (e.g., RSA)
- **Hashing:** Creates a fixed-size, unique "fingerprint" of data. It's a one-way function used to verify data integrity. (e.g., SHA-256)
        `,
        2: `
### Module 3: Security Operations and Incident Response

Understand the day-to-day work of a cybersecurity professional, focusing on how to respond when a security incident occurs.

#### Security Operations Center (SOC)
A centralized unit that deals with security issues on an organizational and technical level. A SOC is responsible for monitoring, analyzing, and protecting an organization's security posture on an ongoing basis.

#### Incident Response Lifecycle
The process of responding to and managing a security breach. The NIST framework outlines these steps:
1.  **Preparation:** Be ready before an incident occurs. This includes having the right tools, processes, and trained personnel.
2.  **Identification:** Determine if an event is a security incident by analyzing logs, alerts, and other data.
3.  **Containment:** Isolate the affected systems to prevent further damage. This might involve disconnecting a server from the network.
4.  **Eradication:** Find the root cause of the incident and remove the threat from the environment.
5.  **Recovery:** Restore systems to normal operation, confirming they are clean and secure.
6.  **Lessons Learned:** Analyze the incident to identify weaknesses and improve security posture to prevent future occurrences. This is a critical step.

#### Digital Forensics
The process of identifying, preserving, analyzing, and documenting digital evidence to be used in legal proceedings. It's a key part of post-incident analysis.
        `
    }
  },
  'aws-cloud-practitioner': {
    modules: {
        0: `
### Module 1: Cloud Concepts and Technology

This module covers the fundamental concepts of cloud computing, its advantages, and the AWS global infrastructure that powers it.

#### What is Cloud Computing?
Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS).

**Six Advantages of Cloud Computing:**
1. Trade capital expense for variable expense.
2. Benefit from massive economies of scale.
3. Stop guessing capacity.
4. Increase speed and agility.
5. Stop spending money on running and maintaining data centers.
6. Go global in minutes.

#### AWS Global Infrastructure
AWS serves customers from data centers located around the globe. This global footprint is a key differentiator.
- **Regions:** A physical location in the world which consists of two or more Availability Zones. Regions are geographically dispersed.
- **Availability Zones (AZs):** An AZ is one or more discrete data centers with redundant power, networking, and connectivity in an AWS Region. AZs are physically separated from each other, so that a disaster in one won't affect the others.
- **Edge Locations:** A worldwide network of data centers that AWS uses for content delivery. When you use Amazon CloudFront (a Content Delivery Network), content is cached in these locations to provide low-latency access to users.
        `,
        1: `
### Module 2: Core Services

An overview of the foundational services offered by AWS, covering compute, storage, networking, and databases.

#### Compute Services
- **Amazon EC2 (Elastic Compute Cloud):** A web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. You can think of it as a virtual server.
- **AWS Lambda:** A serverless compute service that lets you run code without provisioning or managing servers. You pay only for the compute time you consume.

#### Storage Services
- **Amazon S3 (Simple Storage Service):** An object storage service that offers industry-leading scalability, data availability, security, and performance. Ideal for storing files, backups, and media.
- **Amazon EBS (Elastic Block Store):** High-performance block storage volumes designed for use with Amazon EC2. Think of it as a hard drive for your EC2 instance.
- **Amazon Glacier:** A secure, durable, and extremely low-cost storage service for data archiving and long-term backup.

#### Database Services
- **Amazon RDS (Relational Database Service):** A managed service that makes it easy to set up, operate, and scale a relational database in the cloud (e.g., MySQL, PostgreSQL, Oracle).
- **Amazon DynamoDB:** A fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale. It's a fully managed, serverless database.
        `,
        2: `
### Module 3: Security, Billing, and Architecture

Learn about securing your AWS environment, understanding costs, and designing well-architected systems.

#### Shared Responsibility Model
AWS is responsible for the security **OF** the cloud, while the customer is responsible for security **IN** the cloud.
- **AWS manages:** Physical security of data centers, hardware, software for underlying services (like EC2 hypervisors), and the global network.
- **You manage:** Security of your data in the cloud, configuration of your AWS services (e.g., security groups), managing user access, and client-side data encryption.

#### AWS Identity and Access Management (IAM)
IAM allows you to manage access to AWS services and resources securely. It's a central part of AWS security.
- **Users:** End users (e.g., people, applications).
- **Groups:** A collection of users.
- **Roles:** An identity you can assume to gain temporary access to permissions.
- **Policies:** JSON documents that define permissions.

#### Billing and Pricing
- **Pay-as-you-go:** Pay only for what you use.
- **Reserve capacity for discounts:** Services like EC2 and RDS offer significant discounts if you commit to a 1 or 3-year term.
- **AWS Budgets & Cost Explorer:** Tools to monitor and manage your AWS spending.
        `
    }
  },
  'sql-for-data-analysis': {
    modules: {
        0: `
### Module 1: Querying and Filtering Data

Learn the fundamentals of retrieving data from a relational database using the \`SELECT\` statement and filtering it to get exactly the data you need.

#### SELECT and FROM
The \`SELECT\` statement is used to specify the columns you want to retrieve. The \`FROM\` clause specifies the table you are querying.

\`\`\`sql
-- Select specific columns from the Customers table
SELECT CustomerName, City, Country FROM Customers;

-- Select all columns
SELECT * FROM Customers;
\`\`\`

#### Filtering with WHERE
The \`WHERE\` clause is used to filter records. It is used to extract only those records that fulfill a specified condition. You can use operators like \`=\`, \`>\`, \`<\`, \`LIKE\`, \`IN\`, and \`BETWEEN\`.

\`\`\`sql
-- Find all customers from Germany
SELECT * FROM Customers
WHERE Country = 'Germany';

-- Find all products with a price greater than 50
SELECT * FROM Products
WHERE Price > 50;

-- Find customers whose name starts with 'A'
SELECT * FROM Customers
WHERE CustomerName LIKE 'A%';
\`\`\`

#### Sorting with ORDER BY
The \`ORDER BY\` keyword is used to sort the result-set in ascending or descending order.

\`\`\`sql
-- Select all customers, sorted by Country
SELECT * FROM Customers
ORDER BY Country ASC; -- ASC is default, can be omitted

-- Select all products, sorted from highest to lowest price
SELECT * FROM Products
ORDER BY Price DESC;
\`\`\`
        `,
        1: `
### Module 2: Joining and Aggregating Data

Learn how to combine data from multiple tables and perform calculations on groups of data.

#### JOINs
A \`JOIN\` clause is used to combine rows from two or more tables, based on a related column between them.
- **INNER JOIN:** Returns records that have matching values in both tables.
- **LEFT JOIN:** Returns all records from the left table, and the matched records from the right table.
- **RIGHT JOIN:** Returns all records from theright table, and the matched records from the left table.

\`\`\`sql
-- Get a list of all orders with the customer's name
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
\`\`\`

#### Aggregate Functions
Aggregate functions perform a calculation on a set of values and return a single value.
- \`COUNT()\`: Counts the number of rows.
- \`SUM()\`: Calculates the sum of values.
- \`AVG()\`: Calculates the average of values.
- \`MIN()\`: Returns the minimum value.
- \`MAX()\`: Returns the maximum value.

#### Grouping with GROUP BY
The \`GROUP BY\` statement groups rows that have the same values into summary rows. It is often used with aggregate functions.

\`\`\`sql
-- Count the number of customers in each country
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;
\`\`\`
The \`HAVING\` clause is used to filter groups based on the result of an aggregate function.
\`\`\`sql
-- List countries with more than 5 customers
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;
\`\`\`
        `,
        2: `
### Module 3: Advanced SQL Topics

Dive into more complex queries with subqueries, Common Table Expressions (CTEs), and window functions.

#### Subqueries
A subquery (or inner query) is a query nested inside another query. They can be used in \`SELECT\`, \`FROM\`, or \`WHERE\` clauses.

\`\`\`sql
-- Find employees who have a higher salary than the average salary
SELECT EmployeeName
FROM Employees
WHERE Salary > (SELECT AVG(Salary) FROM Employees);
\`\`\`

#### Common Table Expressions (CTEs)
A CTE allows you to define a temporary, named result set that you can reference within a \`SELECT\`, \`INSERT\`, \`UPDATE\`, or \`DELETE\` statement. CTEs help break down complex queries into simple, readable steps.

\`\`\`sql
WITH RegionalSales AS (
  SELECT
    Region,
    SUM(Amount) as TotalSales
  FROM Sales
  GROUP BY Region
)
SELECT
  Region,
  TotalSales
FROM RegionalSales
WHERE TotalSales > 100000;
\`\`\`

#### Window Functions
A window function performs a calculation across a set of table rows that are somehow related to the current row. Unlike aggregate functions, they do not collapse rows; they return a value for each row.

\`\`\`sql
-- Rank products by price within each category
SELECT
   ProductName,
   CategoryName,
   Price,
   RANK() OVER (PARTITION BY CategoryName ORDER BY Price DESC) as PriceRank
FROM Products
JOIN Categories ON Products.CategoryID = Categories.CategoryID;
\`\`\`
This is extremely powerful for creating rankings, running totals, or calculating moving averages.
        `
    }
  },
  'js-algos-data-structures': {
    modules: {
        0: `
### Module 1: Basic JavaScript and ES6

This module serves as a refresher and deep dive into the core mechanics of JavaScript, with a special focus on the modern features introduced in ES6 (ECMAScript 2015) that are essential for today's development landscape.

#### Core Concepts Revisited
- **Variables and Scoping**: Understand the difference between \`var\`, \`let\`, and \`const\`, and learn about block scope versus function scope.
- **Data Types**: A review of primitive types (String, Number, Boolean, Null, Undefined, Symbol) and the Object type.
- **Operators**: A look at arithmetic, assignment, comparison, logical, and ternary operators.

#### ES6 Features
- **Arrow Functions**: A more concise syntax for writing function expressions.
  \`\`\`javascript
  const add = (a, b) => a + b;
  \`\`\`
- **Template Literals**: Enhanced string literals allowing for embedded expressions.
  \`\`\`javascript
  const name = 'World';
  console.log(\`Hello, \${name}!\`);
  \`\`\`
- **Destructuring Assignment**: Easily extract data from arrays or objects into distinct variables.
  \`\`\`javascript
  const person = { firstName: 'John', lastName: 'Doe' };
  const { firstName, lastName } = person;
  \`\`\`
- **Default Parameters**: Set default values for function parameters.
- **Spread & Rest Operators**: Use \`...\` to expand iterables into more elements or to gather multiple elements into an array.
`,
        1: `
### Module 2: Basic Data Structures

Understanding how to store and organize data is fundamental to writing efficient programs. This module introduces the most common data structures.

#### Arrays
An ordered collection of values, accessible by an index. JavaScript arrays are dynamic and can hold elements of any type.
- **Common Methods**: \`push\`, \`pop\`, \`shift\`, \`unshift\`, \`map\`, \`filter\`, \`reduce\`.

#### Objects
A collection of key-value pairs. Keys are strings (or Symbols), and values can be of any type. This is JavaScript's most fundamental data structure.
- **Manipulation**: Accessing properties with dot notation vs. bracket notation, adding/deleting properties.

#### Stacks
A LIFO (Last-In, First-Out) data structure. Think of a stack of plates. The last plate you put on top is the first one you take off.
- **Implementation**: Can be easily implemented using a JavaScript array's \`push\` and \`pop\` methods.

#### Queues
A FIFO (First-In, First-Out) data structure. Like a line at a store, the first person in line is the first person to be served.
- **Implementation**: Can be implemented using a JavaScript array's \`push\` and \`shift\` methods.

#### Linked Lists
A linear data structure where elements are not stored at contiguous memory locations. Each element is a separate object that contains a pointer/link to the next object in that list.
- **Types**: Singly Linked Lists, Doubly Linked Lists.
- **Advantages**: Efficient insertions and deletions compared to arrays.
`,
        2: `
### Module 3: Basic Algorithm Scripting

This module transitions from theory to practice, challenging you to solve common algorithmic problems using your knowledge of JavaScript and basic data structures.

#### Core Problem-Solving Patterns
- **String Manipulation**: Reversing strings, checking for palindromes, finding the longest word.
- **Numerical Operations**: Factorializing a number, checking for prime numbers.
- **Array Manipulation**: Chunking arrays, removing specific elements, finding unions and intersections.

#### Example Problem: Reverse a String
\`\`\`javascript
function reverseString(str) {
  // Split the string into an array of characters, reverse the array, then join it back into a string.
  return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"
\`\`\`
This section focuses on developing a logical approach to breaking down problems into smaller, manageable steps and then translating those steps into code.
`,
        3: `
### Module 4: Intermediate Algorithm Scripting

Building on the basics, this module presents more complex problems that require a deeper understanding of logic and data manipulation.

#### Advanced Challenges
- **Sum All Numbers in a Range**: Given an array of two numbers, find the sum of those two numbers plus the sum of all the numbers between them.
- **Diff Two Arrays**: Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
- **Seek and Destroy**: You will be provided with an initial array followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
- **Spinal Tap Case**: Convert a string to spinal case (all-lowercase-words-joined-by-dashes).

#### Example Problem: Seek and Destroy
\`\`\`javascript
function destroyer(arr, ...valsToRemove) {
  // Use filter() to create a new array with elements that are not in valsToRemove.
  return arr.filter(elem => !valsToRemove.includes(elem));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // Returns [1, 1]
\`\`\`
These challenges often require combining multiple methods and thinking creatively about how to transform and filter data to achieve the desired result.
`
    }
  },
  'advanced-css-sass': {
    modules: {
        0: `
### Module 1: Advanced CSS Layouts

Move beyond basic floats and positioning. This module covers the modern, powerful layout systems that are essential for building any contemporary website.

#### Flexbox Deep Dive
Flexbox is a one-dimensional layout model that offers powerful space distribution and alignment capabilities.
- **Core Concepts**: Main axis, cross axis, flex container, flex items.
- **Properties for the Container**: \`display: flex\`, \`flex-direction\`, \`flex-wrap\`, \`justify-content\`, \`align-items\`, \`align-content\`.
- **Properties for the Items**: \`flex-grow\`, \`flex-shrink\`, \`flex-basis\`, \`order\`, \`align-self\`.
- **Practical Examples**: Building navigation bars, centering elements, creating card layouts.

#### CSS Grid Fundamentals
CSS Grid is a two-dimensional layout system, meaning it can handle both columns and rows. It's the most powerful layout system available in CSS.
- **Core Concepts**: Grid container, grid items, grid lines, grid tracks, grid cells.
- **Defining a Grid**: Using \`grid-template-columns\` and \`grid-template-rows\`. The \`fr\` unit for flexible sizing.
- **Placing Items**: Using grid line numbers, \`grid-column\`, \`grid-row\`, and named grid areas.
- **Responsive Layouts**: Using \`auto-fit\` and \`minmax()\` to create intrinsically responsive grids.

#### Combining Flexbox and Grid
Learn when to use Grid and when to use Flexbox. Often, the best layouts use a combination of both: Grid for the overall page structure and Flexbox for aligning the components within that structure.
`,
        1: `
### Module 2: Sass Preprocessor

Sass (Syntactically Awesome Style Sheets) is a CSS preprocessor that adds special features like variables, nested rules, mixins, and functions into regular CSS. Writing CSS with Sass makes it more maintainable, themeable, and DRY (Don't Repeat Yourself).

#### Variables and Nesting
- **Variables**: Store values you want to reuse throughout your stylesheet, like colors or font sizes.
  \`\`\`scss
  $primary-color: #3498db;
  body { color: $primary-color; }
  \`\`\`
- **Nesting**: Nest your CSS selectors in a way that follows the same visual hierarchy of your HTML.
  \`\`\`scss
  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    li { display: inline-block; }
    a { display: block; padding: 6px 12px; }
  }
  \`\`\`

#### Mixins and Functions
- **Mixins**: Create groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible.
  \`\`\`scss
  @mixin border-radius($radius) {
    -webkit-border-radius: $radius;
            border-radius: $radius;
  }
  .box { @include border-radius(10px); }
  \`\`\`
- **Functions**: Define reusable functions to perform calculations or logic within your Sass code.

#### Inheritance with @extend
Share a set of CSS properties from one selector to another using the \`@extend\` directive. It helps keep your code DRY.
`,
        2: `
### Module 3: CSS Animations

Bring your websites to life with CSS animations. This module covers everything from simple hover effects to complex, multi-step animations.

#### Transitions
CSS transitions allow you to change property values smoothly, over a given duration.
- **Properties**: \`transition-property\`, \`transition-duration\`, \`transition-timing-function\`, \`transition-delay\`.
- **Example**: Creating a smooth color change on a button hover.
  \`\`\`css
  .button {
    background-color: #3498db;
    transition: background-color 0.3s ease-out;
  }
  .button:hover {
    background-color: #2980b9;
  }
  \`\`\`

#### Keyframe Animations
For more complex animations with multiple steps, you use \`@keyframes\`.
- **Defining Keyframes**: Define stages of the animation using percentages (from 0% to 100%) or the keywords \`from\` and \`to\`.
- **Animation Properties**: \`animation-name\`, \`animation-duration\`, \`animation-iteration-count\`, \`animation-direction\`, etc.
- **Example**: Creating a pulsing effect.
  \`\`\`css
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.7; }
    100% { transform: scale(1); opacity: 1; }
  }
  .element {
    animation: pulse 2s infinite;
  }
  \`\`\`

#### Performance Considerations
- Learn which CSS properties are cheap to animate (\`transform\`, \`opacity\`) and which can be expensive, causing jank (\`width\`, \`height\`, \`top\`).
- Understand how to leverage hardware acceleration for smoother animations.
`
    }
  }
};
