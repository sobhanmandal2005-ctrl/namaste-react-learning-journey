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
