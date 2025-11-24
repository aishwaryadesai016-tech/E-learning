
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
### Advanced React Concepts

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
    },
  },
  'python-for-everybody': {
    modules: {
      0: `
### Getting Started with Python

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
    },
  },
};
