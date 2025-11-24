
export const courseContent: Record<string, { modules: Record<number, string> }> = {
  'fs-dev-spec': {
    modules: {
      0: `
### Welcome to Full Stack Web Development!

This first module introduces the foundational concepts of frontend web development with React. You'll learn how to build dynamic user interfaces and manage component state.

#### What is React?
React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.

#### Your First React Component
Let's create a simple "Hello, World!" component.

\`\`\`jsx
import React from 'react';

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

export default HelloWorld;
\`\`\`

#### Understanding JSX
JSX stands for JavaScript XML. It's a syntax extension to JavaScript that allows you to write HTML-like code inside a JavaScript file. The code above uses JSX.

#### Props and State
**Props** (short for properties) are like function arguments. They allow you to pass data from a parent component to a child component.
**State** is data that is private to a component and can change over time. When state changes, React re-renders the component.

Here's an example of a component with state:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
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

This module dives deeper into React's powerful features, including Hooks and client-side routing.

#### React Hooks
Hooks are functions that let you “hook into” React state and lifecycle features from function components.
- **useState**: Manages state in a functional component.
- **useEffect**: Lets you perform side effects in function components. This is where you might fetch data, subscribe to a service, or manually change the DOM.

Example of \`useEffect\` to fetch data:
\`\`\`jsx
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(json => setData(json));
  }, []); // The empty array means this effect runs once on mount

  return <div>{data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}</div>;
}
\`\`\`

#### React Router
React Router is the standard library for routing in React. It enables navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

\`\`\`jsx
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Router>
  );
}
\`\`\`
      `,
      2: `
### Module 3: Backend with Node.js & Express

This module introduces server-side development using Node.js and the Express framework.

#### What is Node.js?
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript on the server.

#### Building a Simple Server
Here's how to create a basic web server with Express.

\`\`\`javascript
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(port, () => {
  console.log(\`Server listening on port \${port}\`);
});
\`\`\`

#### RESTful APIs
A RESTful API is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. You will learn to build endpoints for GET, POST, PUT, and DELETE requests.
      `,
      3: `
### Module 4: Database Integration with MongoDB

Learn how to connect your backend application to a NoSQL database like MongoDB.

#### What is MongoDB?
MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.

#### Using Mongoose
Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

\`\`\`javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_database');

const userSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model('User', userSchema);

const newUser = new User({ name: 'John Doe', email: 'john@example.com' });
newUser.save();
\`\`\`
      `
    },
  },
  'python-for-everybody': {
    modules: {
      0: `
### Module 1: Getting Started with Python

This module covers the absolute basics of Python programming. No prior experience is needed!

#### Why Program?
Computers are powerful tools for processing data. Programming allows you to give the computer instructions to perform complex tasks quickly and accurately. Python is known for its simple, readable syntax, making it an excellent first language to learn.

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

# The print() function displays the value
print(z) # Output: 30
\`\`\`

#### Conditional Code
Conditional code allows your program to make decisions. The \`if\`, \`elif\` (else if), and \`else\` keywords are used for this.

\`\`\`python
temperature = 25

if temperature > 30:
  print("It's a hot day!")
elif temperature > 20:
  print("It's a nice day.")
else:
  print("It's cold.")

# Output: It's a nice day.
\`\`\`
      `,
      1: `
### Module 2: Python Data Structures

This module explores the core data structures that you'll use in every Python program.

#### Lists
A list is a collection of items in a particular order. You can make a list that includes the letters of the alphabet, the digits from 0–9, or the names of all the people in your family.

\`\`\`python
bicycles = ['trek', 'cannondale', 'redline', 'specialized']
print(bicycles[0].title()) # Output: Trek
\`\`\`

#### Dictionaries
A dictionary in Python is a collection of key-value pairs. Each key is connected to a value, and you can use a key to access the value associated with that key.

\`\`\`python
alien_0 = {'color': 'green', 'points': 5}

print(alien_0['color']) # Output: green
new_points = alien_0['points']
print(f"You just earned {new_points} points!")
\`\`\`
      `,
      2: `
### Module 3: Using Python to Access Web Data

This module covers how to use Python to scrape, parse, and read web data.

#### Regular Expressions
Regular expressions are a powerful language for matching text patterns.

\`\`\`python
import re

text = "My email is example@domain.com"
match = re.search(r'[\\w.-]+@[\\w.-]+', text)
if match:
    print(match.group(0)) # Output: example@domain.com
\`\`\`

#### Web Scraping with BeautifulSoup
Beautiful Soup is a Python library for pulling data out of HTML and XML files.

\`\`\`python
from bs4 import BeautifulSoup
import requests

url = 'http://example.com'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

print(soup.title.string) # Output: Example Domain
\`\`\`
      `,
      3: `
### Module 4: Using Databases with Python

This module introduces you to the basics of SQL and database design.

#### Introduction to SQL
Structured Query Language (SQL) is a standard language for storing, manipulating and retrieving data in databases.

\`\`\`sql
-- Select all records from the "Customers" table:
SELECT * FROM Customers;

-- Select records where the City is "London":
SELECT * FROM Customers
WHERE City = 'London';
\`\`\`

#### Connecting to a Database
Python can connect to various databases using different libraries. \`sqlite3\` is a built-in library for SQLite.

\`\`\`python
import sqlite3

conn = sqlite3.connect('example.db')
c = conn.cursor()

# Create table
c.execute('''CREATE TABLE stocks
             (date text, trans text, symbol text, qty real, price real)''')

conn.close()
\`\`\`
      `
    }
  },
  'data-science-ml': {
    modules: {
        0: `
### Module 1: Data Analysis with Pandas

This module provides a comprehensive introduction to the Pandas library, the most popular tool for data manipulation in Python.

#### DataFrames and Series
- **Series:** A one-dimensional labeled array capable of holding any data type.
- **DataFrame:** A two-dimensional labeled data structure with columns of potentially different types. You can think of it like a spreadsheet or SQL table.

\`\`\`python
import pandas as pd

# Creating a Series
s = pd.Series([1, 3, 5, np.nan, 6, 8])

# Creating a DataFrame
dates = pd.date_range('20230101', periods=6)
df = pd.DataFrame(np.random.randn(6, 4), index=dates, columns=list('ABCD'))
print(df.head())
\`\`\`

#### Data Cleaning
Real-world data is messy. You'll learn techniques for handling missing data, removing duplicates, and transforming data into a usable format.

\`\`\`python
# Handling missing data
df.dropna(how='any') # Drop rows with any missing values
df.fillna(value=5) # Fill missing values with 5
pd.isna(df) # Check for missing values
\`\`\`
        `,
        1: `
### Module 2: Machine Learning Fundamentals

This module introduces the core concepts of machine learning.

#### Supervised vs. Unsupervised Learning
- **Supervised Learning:** The model learns from labeled data. We have input variables (X) and an output variable (Y) and we use an algorithm to learn the mapping function from the input to the output. Examples: Regression, Classification.
- **Unsupervised Learning:** The model works on its own to discover patterns and information from unlabeled data. Examples: Clustering, Dimensionality Reduction.

#### A Simple Machine Learning Model
Using Scikit-learn to train a linear regression model.

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Assume X and y are our data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

model = LinearRegression()
model.fit(X_train, y_train)

# Evaluate the model
score = model.score(X_test, y_test)
print(f"Model R^2 score: {score}")
\`\`\`
        `,
        2: `
### Module 3: Introduction to Deep Learning

Explore the world of neural networks with TensorFlow and Keras.

#### What are Neural Networks?
Neural networks are a set of algorithms, modeled loosely after the human brain, that are designed to recognize patterns. They interpret sensory data through a kind of machine perception, labeling or clustering raw input.

#### Building a Neural Network
A simple sequential model using Keras.

\`\`\`python
import tensorflow as tf
from tensorflow import keras

model = keras.Sequential([
    keras.layers.Flatten(input_shape=(28, 28)), # Input layer
    keras.layers.Dense(128, activation='relu'),   # Hidden layer
    keras.layers.Dense(10, activation='softmax')  # Output layer
])

model.compile(optimizer='adam',
              loss='sparse_categorical_crossentropy',
              metrics=['accuracy'])

# model.fit(train_images, train_labels, epochs=5)
\`\`\`
        `,
        3: `
### Module 4: Capstone Project

Apply all the skills you've learned to a real-world data science problem.

#### The Data Science Workflow
1.  **Problem Definition:** Clearly define the question you are trying to answer.
2.  **Data Collection:** Gather data from various sources.
3.  **Data Cleaning & Preprocessing:** Prepare the data for analysis.
4.  **Exploratory Data Analysis (EDA):** Explore the data to find patterns and insights.
5.  **Modeling:** Build and train machine learning models.
6.  **Evaluation:** Evaluate the performance of your models.
7.  **Deployment & Presentation:** Deploy your model and communicate your results.

This project is your opportunity to build a portfolio piece that showcases your abilities to potential employers.
        `
    }
  },
  'cyber-sec-intro': {
    modules: {
        0: `
### Module 1: The Cybersecurity Landscape

This module introduces the fundamental concepts of cybersecurity and the common threats that organizations face.

#### The CIA Triad
The foundation of information security.
- **Confidentiality:** Ensuring that sensitive information is accessed only by an authorized person.
- **Integrity:** Assuring the accuracy and trustworthiness of information over its entire lifecycle.
- **Availability:** Guaranteeing that information and systems are accessible when needed by authorized users.

#### Common Threats
- **Malware:** Malicious software including viruses, worms, trojans, and ransomware.
- **Phishing:** Fraudulent attempts, usually made through email, to steal sensitive information.
- **Denial-of-Service (DoS) Attacks:** Overwhelming a system with traffic to make it unavailable to users.
        `,
        1: `
### Module 2: Defensive Measures

Learn about the tools and techniques used to protect systems.

#### Firewalls
A firewall is a network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.

#### Cryptography
Cryptography is the practice of securing communication from third parties.
- **Symmetric Encryption:** Uses a single key for both encryption and decryption.
- **Asymmetric Encryption (Public-key Cryptography):** Uses a pair of keys: a public key for encryption and a private key for decryption.
        `,
        2: `
### Module 3: Security Operations

Understand the day-to-day work of a cybersecurity professional.

#### Incident Response
The process of responding to and managing a security breach. The steps typically include:
1.  **Preparation:** Be ready before an incident occurs.
2.  **Identification:** Determine if an event is a security incident.
3.  **Containment:** Isolate the affected systems to prevent further damage.
4.  **Eradication:** Remove the threat from the environment.
5.  **Recovery:** Restore systems to normal operation.
6.  **Lessons Learned:** Analyze the incident to prevent future occurrences.
        `
    }
  },
  'aws-cloud-practitioner': {
    modules: {
        0: `
### Module 1: Cloud Concepts and Technology

This module covers the fundamental concepts of cloud computing and the AWS global infrastructure.

#### What is Cloud Computing?
Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, from a cloud provider like Amazon Web Services (AWS).

#### AWS Global Infrastructure
AWS serves customers from data centers located around the globe. This global infrastructure is composed of:
- **Regions:** Physical locations around the world where we cluster data centers.
- **Availability Zones (AZs):** Each region consists of multiple, isolated, and physically separate AZs.
- **Edge Locations:** A worldwide network of data centers that AWS uses for content delivery.
        `,
        1: `
### Module 2: Core Services

An overview of the foundational services offered by AWS.

#### Amazon EC2 (Elastic Compute Cloud)
A web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.

#### Amazon S3 (Simple Storage Service)
An object storage service that offers industry-leading scalability, data availability, security, and performance.

#### Amazon RDS & DynamoDB
- **RDS (Relational Database Service):** A managed service that makes it easy to set up, operate, and scale a relational database in the cloud.
- **DynamoDB:** A fast and flexible NoSQL database service for all applications that need consistent, single-digit millisecond latency at any scale.
        `,
        2: `
### Module 3: Security and Billing

Learn about securing your AWS environment and understanding costs.

#### Shared Responsibility Model
AWS is responsible for the security **of** the cloud, while the customer is responsible for security **in** the cloud.
- **AWS manages:** Physical security of data centers, hardware, and the global network.
- **You manage:** Security of your data, user access, and application configurations.

#### AWS Identity and Access Management (IAM)
IAM allows you to manage access to AWS services and resources securely. You can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.
        `
    }
  },
  'sql-for-data-analysis': {
    modules: {
        0: `
### Module 1: Querying and Filtering

Learn the fundamentals of retrieving data with SQL.

#### SELECT and FROM
The \`SELECT\` statement is used to select data from a database. The data returned is stored in a result table, called the result-set. The \`FROM\` clause specifies the table to select from.

\`\`\`sql
SELECT CustomerName, City FROM Customers;
\`\`\`

#### Filtering with WHERE
The \`WHERE\` clause is used to filter records. It is used to extract only those records that fulfill a specified condition.

\`\`\`sql
SELECT * FROM Customers
WHERE Country = 'Mexico';
\`\`\`
        `,
        1: `
### Module 2: Joining and Aggregating Data

Combine data from multiple tables and perform calculations.

#### JOINs
An \`INNER JOIN\` keyword selects records that have matching values in both tables.

\`\`\`sql
SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;
\`\`\`

#### Aggregate Functions
Functions like \`COUNT()\`, \`SUM()\`, \`AVG()\` perform a calculation on a set of values and return a single value. \`GROUP BY\` is used with aggregate functions to group the result-set by one or more columns.

\`\`\`sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country;
\`\`\`
        `,
        2: `
### Module 3: Advanced SQL

Dive into more complex queries with subqueries and window functions.

#### Subqueries
A subquery or Inner query is a query within another SQL query and embedded inside the WHERE clause.

\`\`\`sql
SELECT ProductName
FROM Products
WHERE ProductID = (SELECT ProductID FROM OrderDetails WHERE Quantity > 100 LIMIT 1);
\`\`\`

#### Window Functions
A window function performs a calculation across a set of table rows that are somehow related to the current row. This is comparable to the type of calculation that can be done with an aggregate function. However, window functions do not cause rows to become grouped into a single output row like aggregate functions do.

\`\`\`sql
SELECT
   ProductName,
   Price,
   AVG(Price) OVER (PARTITION BY CategoryID) as AvgPriceByCategory
FROM Products;
\`\`\`
        `
    }
  }
};
