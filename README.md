---

# Mini Task Manager

## Problem Statement  
A lightweight web app to quickly manage tasks (add, complete, delete, revert) with priorities and deadlines. Built to demonstrate static web hosting and basic web infrastructure concepts.

---

## Features  
- Add tasks with description, priority, and due date  
- View tasks in **To-Do** and **Completed** lists  
- Mark ✔ complete, ↺ revert, ✖ delete  
- Task summary: total, completed, remaining  
- Responsive design, optional `localStorage` persistence  

---

## Tech Stack  
- **HTML** → structure  
- **CSS** → styling & responsiveness  
- **JavaScript** → logic & interaction  

---

## Web Infrastructure  
```
User → Browser → Internet → DNS → Web Server → Static Files (HTML, CSS, JS)
```
- Browser requests site URL  
- DNS resolves domain → server IP  
- Web server serves static files  
- Browser renders HTML, applies CSS, executes JS  

---

## Deployment  
- **Local**: open `index.html` or use VS Code Live Server  
- **Hosting**: GitHub Pages (free, reliable, integrates with Git)  
- **Live URL**: `https://yourusername.github.io/task-manager/`  

---

## Repo Structure  
```
index.html
style.css
script.js
README.md
```

---

## Assumptions & Choices  
- Tasks stored in memory unless `localStorage` enabled  
- Simple UI for clarity and responsiveness  
- Priority levels color-coded  

---
## Author
Sylvie UMUTONI RUTAGANIRA – Web Infrastructure

---

