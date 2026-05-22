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
