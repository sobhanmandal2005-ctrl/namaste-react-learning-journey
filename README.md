# Namaste React Learning Journey 🚀

This repository documents my structured journey of learning React from scratch to advanced concepts through consistent practice and hands-on projects.

---

## 📌 What this repo contains

- React fundamentals (JSX, components, props, state)
- Hooks (useState, useEffect, etc.)
- API integration
- Real-world mini projects
- Problem-solving practice
- Clean code and structured learning approach

---

## 🧠 Learning Approach

- Step-by-step learning from basics to advanced
- Focus on building understanding through practice
- Regular coding exercises and small projects
- Emphasis on consistency and clarity

---

## 🚀 Goals

- Build strong React fundamentals
- Develop real-world projects
- Improve problem-solving skills
- Prepare for frontend developer roles

---

## 📂 Structure (will grow over time)
/episode-01
/episode-02
/projects

---

## 💡 Note

This is a learning-focused repository. Progress will be updated regularly as I continue my React journey.

---

## 🔥 Status

Currently starting React from the basics.

# 📘 Namaste React – Episode 1

## 🚀 What I Learned

* Understanding how to create UI using **Vanilla JavaScript**
* Introduction to **React via CDN**
* Using `React.createElement()` to build elements
* Creating **nested structures (parent → children)**
* Difference between **React and ReactDOM**
* Basic concepts of:

  * CDN
  * Library vs Framework

---

## 🧠 Key Concepts

* React creates a **virtual representation** of UI
* ReactDOM renders it to the **browser**
* JSX is not used yet — everything built using **createElement**
* Understanding how React works **behind the scenes**

---

## 🧪 Practice

* Built nested UI structure using `React.createElement`
* Used dynamic data with variables
* Handled syntax errors and debugging

---

## 📂 Structure

```bash
NAMASTE-REACT-LEARNING-JOURNEY
  index.html
  App.js
```

---

## 🔥 Status

Completed Episode 1 with strong fundamentals.
Ready to move into JSX and deeper React concepts.

# 📘 Namaste React – Episode 2

## 🚀 What I Learned

* Setting up a project using **npm & npx**
* Understanding **package.json** and **package-lock.json**
* Difference between **dependencies** and **devDependencies**
* Role of **node_modules** and why it’s ignored in Git
* Using **.gitignore** to exclude unnecessary files

---

## 🧠 Key Concepts

* **npm** is used to install and manage packages
* **npx** executes packages without global installation
* **Bundlers (Parcel/Webpack)** prepare code for the browser
* **dist** folder contains production-ready optimized files
* **HMR** updates changes without full page reload
* **Tree Shaking** removes unused code
* **.parcel-cache** speeds up rebuilds using caching
* **browserslist** defines supported browser versions

---

## ⚙️ Versioning

* **^ (caret)** → allows minor + patch updates
* **~ (tilde)** → allows only patch updates

---

## 📦 Outcome

* Built strong understanding of **project setup & tooling**
* Learned how modern frontend apps are **built and optimized**
* Ready to move into **JSX and core React concepts**

---

## 🔥 Status

Completed Episode 2 with clear understanding of tooling and ecosystem.


# 📘 Namaste React – Episode 3 & 4

## 🚀 What I Learned

* Writing UI using **JSX**
* Understanding how **Babel converts JSX → React.createElement**
* Creating and using **functional components**
* Using **JavaScript inside JSX ({})**
* Rendering multiple components using **.map()**
* Passing data into components (intro to **props**)

---

## 🧠 Key Concepts

* **JSX** makes code readable but is not HTML
* **Components** help build reusable UI
* **.map()** converts data into UI elements
* **key prop** is required for list rendering
* **Props** are used to pass data between components

---

## 🧪 Features Built

* Header component with logo
* Restaurant card component
* Dynamic rendering of restaurant list
* Basic UI layout and styling

---

## 📦 Outcome

* Learned how to build UI using **components and JSX**
* Understood how data is converted into UI using **mapping**
* Built a simple **restaurant listing interface**

---

## 🔥 Status

Completed Episode 3 & 4 with hands-on UI implementation.


# 📘 Namaste React – Episode 5

## 🚀 Topics Covered

* Project folder structure
* Separating components and utility files
* Creating reusable restaurant cards
* Adding filter button functionality
* Introduction to React Hooks
* Using `useState`
* Understanding Virtual DOM
* React Fiber & Reconciliation Algorithm

---

## 🧠 Key Learnings

* A clean folder structure improves scalability and maintainability
* `useState` helps React update UI dynamically without reloading the page
* React uses a **Virtual DOM** for faster UI updates
* The **Reconciliation Algorithm** compares old and new Virtual DOM efficiently
* React Fiber improves rendering performance and update handling

---

## 🧪 Features Implemented

* Created `components/` and `utils/` folders
* Moved constants and mock data into separate files
* Built reusable restaurant card components
* Added **Top Rated Restaurant** filter button
* Updated restaurant list dynamically using `useState`

---

## 📦 Outcome

* Improved understanding of React component structure
* Learned the basics of React Hooks and state management
* Understood how React updates UI efficiently behind the scenes

---

## 🔥 Status

Episode 5 completed with hands-on implementation and React core concept understanding.


# 📘 Namaste React – Episode 6 & 6.1 & 6.2 

## 🚀 Topics Covered

* Monolith vs Microservices Architecture
* Understanding API calls in React
* Introduction to `useEffect`
* Fetching data from APIs
* Managing API data using `useState`
* Conditional rendering
* Building Shimmer UI for loading state
* Search and filtering functionality

---

## 🧠 Key Learnings

* Microservices communicate through APIs and keep applications modular
* API calls are generally triggered after component render using `useEffect`
* `useState` helps store and update fetched data dynamically
* Conditional rendering improves user experience during loading
* Shimmer UI creates a smooth loading experience before actual data appears
* Search filtering can dynamically update UI based on user input
* React efficiently re-renders only the necessary UI changes

---

## 🧪 Features Implemented

* Added API fetching logic
* Rendered restaurant data dynamically
* Used `useEffect` and `useState` together
* Created loading shimmer effect
* Added search box for restaurant filtering
* Implemented dynamic filtering while typing
* Improved overall app flow and component structure
* CORS issue resolved 

---

## 📦 Outcome

* Learned how React handles side effects and asynchronous data
* Understood the complete flow of fetching and rendering API data
* Built interactive UI using hooks and dynamic filtering
* Improved understanding of React rendering and state updates

---

## 🔥 Status

Episode 6 completed with hooks, API integration, shimmer UI, and dynamic search functionality.

# 📘 Namaste React – Episode 7 (In Progress)

## 🚀 Topics Explored

* Introduction to Routing in React
* Understanding Client Side Routing
* Setting up React Router
* Creating different routes/pages

---

## 🧠 Key Learnings

* Routing helps navigate between different pages without reloading the application
* React uses **Client Side Routing** for faster user experience
* React Router manages navigation inside React applications
* Different components can be rendered based on URL paths

---

## 🧪 Work Done

* Started learning React Router
* Explored route configuration
* Understood the basics of navigation and page rendering

---

## 📦 Outcome

* Built a basic understanding of routing flow in React
* Prepared the foundation for multi-page React applications

---

## 🔥 Status

Episode 7 – Routing concepts in progress 🚧

# 📘 Namaste React – Episode 7 (In Progress)

## 🚀 Topics Explored

* Introduction to React Router
* Client Side Routing
* Installing `react-router-dom`
* Creating routes using `createBrowserRouter`
* Understanding App Layout structure
* Using `Outlet` for nested rendering
* Navigation using `Link`
* Creating Home, About, and Contact pages

---

## 🧠 Key Learnings

* React Router enables navigation without full page reloads
* Client Side Routing improves user experience
* `Outlet` helps render child routes inside a shared layout
* `Link` is used for navigation in React applications
* Routes help organize applications into multiple pages

---

## 🧪 Work Done

* Installed and configured React Router
* Created routing structure for the application
* Added navigation links in Header component
* Built Home, About, and Contact pages
* Implemented App Layout using `Outlet`

---

## 📦 Outcome

* Built the foundation for multi-page React applications
* Improved understanding of routing and navigation flow
* Prepared the application for dynamic routing features

---

## 🔥 Status

Episode 7 – Routing concepts and navigation setup in progress 🚧

# 📘 Namaste React – Episode 7

## 🚀 Topics Covered

* Introduction to React Router
* Client Side Routing
* Installing and configuring `react-router-dom`
* Creating routes using `createBrowserRouter`
* Understanding App Layout structure
* Using `Outlet` for nested rendering
* Navigation using `Link`
* Creating Home, About, and Contact pages
* Dynamic Routing using route parameters
* Fetching menu data for restaurant pages
* Conditional rendering and loading states

---

## 🧠 Key Learnings

* React Router enables smooth navigation without page reloads
* `Outlet` helps render nested routes inside a shared layout
* `Link` is used for navigation inside React applications
* Dynamic routes help render pages based on unique IDs
* `useParams` can access dynamic values from URLs
* API data can be fetched separately for specific pages
* Optional chaining helps avoid crashes while rendering API data

---

## 🧪 Features Implemented

* Installed and configured React Router
* Created routing structure for multiple pages
* Built Home, About, and Contact pages
* Added navigation links in Header component
* Implemented App Layout using `Outlet`
* Added dynamic restaurant routes
* Created Restaurant Menu page
* Fetched and rendered dynamic menu data
* Added loading state using Shimmer component
* Styled route links and improved UI behavior

---

## 📦 Outcome

* Learned complete routing flow in React applications
* Improved understanding of navigation and dynamic rendering
* Built a multi-page React application structure
* Practiced API fetching with route-based rendering
* Gained confidence in debugging React and API-related issues

---

## 🔥 Status

Episode 7 completed with React Router, dynamic routing, navigation, and menu rendering features.


# 📘 Namaste React – Episode 8

## 🚀 Topics Covered

* Class Based Components
* Functional Components
* Props in Class Components
* Constructor in Class Components
* `super(props)` usage
* Render method in Class Components
* Component Lifecycle Basics
* Fetching GitHub User API
* Managing API data using state

---

## 🧠 Key Learnings

* Class components use a different syntax compared to functional components
* `constructor` is used to initialize state and receive props
* `super(props)` allows access to props inside class components
* The `render()` method is responsible for returning JSX
* State updates trigger component re-rendering
* APIs can also be fetched inside class components
* Lifecycle methods help control component behavior during rendering

---

## 🧪 Features Implemented

* Created functional and class based user components
* Passed props to both component types
* Rendered dynamic user information
* Explored constructor and render flow
* Fetched GitHub user data using API
* Displayed fetched user information dynamically

---

## 📦 Outcome

* Understood the difference between functional and class components
* Learned the structure and workflow of class based components
* Improved understanding of props, state, and lifecycle concepts
* Practiced API fetching and dynamic rendering in React

---

## 🔥 Status

Episode 8 completed with class components, lifecycle basics, and GitHub API integration.

# 📘 Namaste React – Episode 8 (Lifecycle Methods)

## 🚀 Topics Covered

* Introduction to Lifecycle Methods
* Understanding `componentDidMount`
* API calls inside Class Components
* Updating state after API fetch
* Component rendering flow

---

## 🧠 Key Learnings

* `componentDidMount` runs after the component is rendered
* API calls are generally performed inside `componentDidMount`
* Updating state triggers re-rendering in React
* Lifecycle methods control how class components behave during rendering

---

## 🧪 Work Done

* Explored lifecycle flow in class components
* Used `componentDidMount` for API fetching
* Rendered GitHub API data dynamically
* Practiced state updates after fetching data

---

## 📦 Outcome

* Improved understanding of React lifecycle methods
* Learned how class components handle side effects and API calls
* Understood rendering and re-rendering flow in React

---

## 🔥 Status

Explored lifecycle methods and `componentDidMount` in Episode 8 finally completed🚧


# 📘 Namaste React – Episode 9 (In Progress)

## 🚀 Topics Explored

* Optimizing React Applications
* Understanding Single Responsibility Principle
* Creating custom hooks
* Online and offline status detection
* Using browser event listeners

---

## 🧠 Key Learnings

* React applications can be optimized by separating logic into reusable hooks
* Custom hooks improve code readability and reusability
* Browser APIs can detect internet connectivity status
* Event listeners help track online and offline changes dynamically

---

## 🧪 Work Done

* Started exploring optimization concepts
* Learned about custom hooks
* Built online status checking functionality
* Practiced handling browser events inside React

---

## 📦 Outcome

* Improved understanding of reusable React logic
* Learned how to create utility-based hooks
* Explored real-time connectivity status handling

---

## 🔥 Status

Episode 9 in progress with optimization concepts and online status checking 🚧

# 📘 Namaste React – Episode 9

## 🚀 Topics Covered

* Optimizing React Applications
* Single Responsibility Principle
* Creating Custom Hooks
* Reusable Logic in React
* Online and Offline Status Detection
* Browser Event Listeners
* Chunking / Code Splitting
* Lazy Loading
* `lazy` and `Suspense`

---

## 🧠 Key Learnings

* React applications become cleaner by separating reusable logic into custom hooks
* Custom hooks help avoid repeating the same code in multiple components
* Browser APIs can detect internet connectivity changes dynamically
* Event listeners help track online and offline status in real time
* Code splitting improves application performance by loading components only when needed
* `lazy` and `Suspense` help implement lazy loading in React applications

---

## 🧪 Features Implemented

* Built custom hook for online status checking
* Used browser event listeners for connectivity detection
* Displayed online/offline status dynamically
* Explored optimization concepts and reusable logic
* Implemented lazy loading for components
* Practiced code splitting using React lazy loading features

---

## 📦 Outcome

* Improved understanding of React optimization techniques
* Learned how to create reusable and scalable custom hooks
* Explored performance optimization using lazy loading
* Built better understanding of React application architecture

---

## 🔥 Status

Episode 9 completed with custom hooks, online status detection, and React optimization concepts.

# 📘 Namaste React – Episode 10 (Tailwind CSS Basics)

## 🚀 Topics Covered

* Introduction to Tailwind CSS
* Utility First CSS concept
* Installing and configuring Tailwind CSS
* Understanding Tailwind classes
* Responsive styling basics
* Applying utility classes in React components

---

## 🧠 Key Learnings

* Tailwind CSS provides utility classes for faster UI development
* Styling can be done directly inside JSX using class names
* Utility-first approach improves speed and consistency
* Responsive design becomes easier with Tailwind breakpoints
* Tailwind helps avoid writing large custom CSS files

---

## 🧪 Work Done

* Explored Tailwind CSS fundamentals
* Learned Tailwind installation and setup flow
* Practiced utility classes and responsive styling concepts
* Understood how Tailwind integrates with React applications

---

## 📦 Outcome

* Improved understanding of modern CSS workflows
* Learned utility-first styling approach
* Prepared project for Tailwind-based UI implementation

---

## 🔥 Status

Episode 10 basics completed with Tailwind CSS setup and core concepts 🚧

# 📘 Namaste React – Episode 10

## 🚀 Topics Covered

* Introduction to Tailwind CSS
* Utility First CSS concept
* Tailwind CSS installation and configuration
* Understanding Tailwind utility classes
* Responsive Design Basics
* Styling React components using Tailwind
* Faster UI development workflow

---

## 🧠 Key Learnings

* Tailwind CSS allows styling directly inside JSX using utility classes
* Utility-first approach helps build UI faster and cleaner
* Responsive layouts become easier using Tailwind breakpoints
* Tailwind reduces the need for writing large custom CSS files
* Proper configuration is important for Tailwind and Parcel compatibility

---

## 🧪 Features Implemented

* Configured Tailwind CSS in React project
* Explored utility classes for spacing, typography, and layout
* Practiced responsive styling concepts
* Applied Tailwind classes to React components
* Improved project styling workflow

---

## 📦 Outcome

* Improved understanding of modern frontend styling workflows
* Learned utility-first CSS methodology
* Built foundation for creating responsive and scalable UI designs
* Gained hands-on experience integrating Tailwind with React

---

## 🔥 Status

Episode 10 completed with Tailwind CSS setup, utility-first styling, and responsive design basics.

# 📘 Namaste React – Episode 11

## 🚀 Topics Covered

* Higher Order Components (HOC)
* Creating a Promoted Restaurant Label
* Conditional Rendering
* Accordion UI Concepts
* Lifting State Up
* Controlled Components
* Component Reusability

---

## 🧠 Key Learnings

* HOCs can enhance existing components with additional features
* State can be lifted to a parent component for better control
* Controlled components help manage UI behavior predictably
* Conditional rendering allows dynamic UI updates
* Component logic should adapt to available API data

---

## 🧪 Features Implemented

* Created a Promoted Label using Higher Order Components
* Built expandable item/card behavior
* Practiced controlled component patterns
* Added Add to Cart button UI
* Adapted accordion-like functionality based on available API data

---

## 📦 Outcome

* Improved understanding of component composition
* Learned how to reuse and enhance components using HOCs
* Practiced state management patterns before Redux
* Built a stronger foundation for upcoming cart and Redux features

---

## 🔥 Status

Episode 11 completed with HOCs, controlled components, state lifting, and menu interaction features.
