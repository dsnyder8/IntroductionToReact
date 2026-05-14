# React Task Manager

A simple task manager demo built with React to showcase the framework's core features for CISC 375.

## Framework Information

- **Name and version:** React 19.2 (with Vite 8 as the build tool)
- **Official documentation:** https://react.dev/

## Setup Instructions

**Prerequisites:** Node.js 20 or newer.

**Installation:**
```
git clone https://github.com/dsnyder8/IntroductionToReact.git
cd IntroductionToReact
npm install
```

**Run the demo:**
```
npm run dev
```
Then open the URL Vite prints (defaults to http://localhost:5173).

## Features Implemented

- [x] Display tasks
- [x] Add task
- [x] Mark complete
- [x] Delete task

## What We Learned

- **Components and JSX** — splitting the UI into `Header` and `Body` components and composing them in `App`.
- **`useState` hooks** — managing form fields and the task list as React state instead of mutating the DOM directly.
- **Controlled inputs** — binding each `<input>` to state via `value` and `onChange`.
- **Immutable list updates** — using `[...tasks, newTask]`, `.filter`, and `.map` rather than mutating the array.
- **List rendering with keys** — assigning each task a stable `id` so React can reconcile the list efficiently.

## Group Contributions

- **Dakota Snyder** — Built the demo from scratch with Vite + React 19. Wrote the `Body` component with add/complete/delete handlers and the sorting logic (current tasks by priority, completed tasks by completion time).
- **Josh Dunlap** — Reviewed the demo against the rubric and wrote this README. Polished the UI for the live demo: real `<form>` element with inline validation in place of `alert()`, empty-state messages, and small consistency cleanups.
- **Luke Jordan** — Framework research and presentation slide content.
- **Brady Sahr** — Framework research and presentation slide content.

## Resources Used

- Meta Platforms, Inc. 2026. *React Documentation*. Retrieved from https://react.dev/learn
- Meta Platforms, Inc. 2026. *useState — React Reference*. Retrieved from https://react.dev/reference/react/useState
- Vite. 2026. *Getting Started*. Retrieved from https://vite.dev/guide/
