# Notes App

A simple, fast notes app built with **React** and **Tailwind CSS**, using **local storage** as the database — no backend required.

🔗 Repo: [github.com/Nazifa-031/notes-app](https://github.com/Nazifa-031/notes-app)

## Features

- **Create, view, edit, and delete notes** (full CRUD)
- **Search and sort** notes
- **Dedicated view page** for reading a single note
- **Form validation** on note creation/editing
- **Local storage persistence** — your notes stay saved in the browser between sessions

## Tech Stack

- React (JSX components)
- Tailwind CSS
- Browser Local Storage (no external database)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/Nazifa-031/notes-app.git
cd notes-app

# Install dependencies
npm install

# Run the dev server
npm run dev
```

The app will be available at `http://localhost:5173` (or whichever port your dev server prints).

### Build for Production

```bash
npm run build
```

This outputs a production-ready build (typically in a `dist` folder).

## Deployment

This app is a static frontend (no backend/env vars required, since it uses local storage), so it deploys cleanly to [Vercel](https://vercel.com):

1. Import the repo on Vercel.
2. Framework preset: Vite (or your framework — Vercel usually auto-detects it).
3. Leave build/output settings as default.
4. Click **Deploy**.

## Project Structure

```
notes-app/
├── src/
│   ├── components/
│   │   ├── Create.jsx     # Create a new note
│   │   ├── Edit.jsx       # Edit an existing note
│   │   ├── Display.jsx    # Display/list all notes
│   │   ├── Search.jsx     # Search notes
│   │   ├── View.jsx       # Note view page
    ├── layout/
│   │   └── Navbar.jsx     # Navbar
│   ├── App.jsx
│   └── main.jsx
├── index.html
└── package.json
```

## Usage

1. Click **Add Note** to create a new note (title + content).
2. Use the **search bar** to filter notes by title.
3. Use the **sort** option to reorder notes.
4. Click a note to **view** it in detail.
5. Edit or delete notes from the view/edit page.

## Roadmap / Ideas

- [ ] Sync notes to a real database (e.g. Supabase, MongoDB) for cross-device access
- [ ] Add tags/categories for notes
- [ ] Export notes as text/markdown

## License

This project currently has no license specified. Add one (e.g. MIT) if you plan to share or open-source it.
