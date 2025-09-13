# AccuKnox Dashboard Widgets Assignment

This repository contains a React-based dynamic dashboard application for managing categories and widgets. Users can add, remove, and search widgets dynamically. State management is done locally using Recoil.

---

## Links

* **GitHub Repository:** [https://github.com/vasanth27s/Accuknox](https://github.com/vasanth27s/Accuknox)
* **Deployed App:** [https://accuknox-ivory.vercel.app/](https://accuknox-ivory.vercel.app/)

---

## Features

* **Dynamic Dashboard Rendering**: Categories and widgets are loaded dynamically from a JSON/JavaScript file.
* **Add Widgets**: Add new widgets by entering widget name and description.
* **Remove Widgets**: Remove any widget using a delete (✖) button.
* **Search Widgets**: Global search bar to filter widgets by name or description.
* **Local State Management**: Uses **Recoil** for state management.
* **Component-Based Architecture**: Modular and maintainable structure with reusable components.

---

## Tech Stack

* **React** (Vite or CRA)
* **Recoil** for state management
* **Tailwind CSS** or custom CSS for styling
* **JavaScript (ES6+)**

---

## Project Structure

```
AccuKnox/
├─ public/
│  └─ logo.png
├─ src/
│  ├─ atoms/                 # Recoil atoms for global state
│  │  ├─ dashboardAtom.js
│  │  └─ dataAtom.js
│  ├─ Components/            # Reusable components
│  │  ├─ AddWidget.jsx
│  │  ├─ AddWidgetForm.jsx
│  │  ├─ Button.jsx
│  │  ├─ Category.jsx
│  │  ├─ Graphs.jsx
│  │  ├─ HeadingBar.jsx
│  │  ├─ Navbar.jsx
│  │  ├─ NavBreadcrumbTrail.jsx
│  │  ├─ NavIcons.jsx
│  │  ├─ NavSearchBar.jsx
│  │  └─ Widget.jsx
│  ├─ selectors/
│  │  └─ widgetState.js      # Recoil selectors
│  ├─ App.css                # Styles for App
│  ├─ App.jsx                # Root component
│  ├─ index.css              # Global styles
│  ├─ main.jsx               # Entry point
│  ├─ Normaldata.js          # Static JSON/JS data for dashboard
│  └─ ... other config files
├─ index.html
├─ package.json
├─ package-lock.json
├─ postcss.config.js
├─ tailwind.config.js (if Tailwind used)
└─ README.md
```

---

## How to Run Locally

### Prerequisites

* Node.js (>=14.x recommended)
* npm or yarn

### Steps

```bash
# 1. Clone the repo
git clone https://github.com/vasanth27s/Accuknox.git
cd Accuknox

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
# or if using Vite:
npm run dev

# 4. Open in browser
http://localhost:3000
# or for Vite
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

This will generate a production build in the `dist/` or `build/` folder.

---

## JSON/Data Example

The dashboard is generated from `Normaldata.js`. Example structure:

```js
export const dashboardData = {
  categories: [
    {
      id: 'cspm',
      name: 'CSPM Executive Dashboard',
      widgets: [
        { id: 'w1', name: 'Risk Summary', text: 'Sample content for Risk Summary' },
        { id: 'w2', name: 'Top Issues', text: 'Sample content for Top Issues' }
      ]
    },
    {
      id: 'security',
      name: 'Security Overview',
      widgets: [
        { id: 'w3', name: 'Open Alerts', text: 'Sample content for Open Alerts' }
      ]
    }
  ]
};
```

---

## Key Components

| Component           | Description                            |
| ------------------- | -------------------------------------- |
| `Category.jsx`      | Displays widgets for a single category |
| `Widget.jsx`        | Displays a single widget card          |
| `AddWidgetForm.jsx` | Modal/form to add new widgets          |
| `NavSearchBar.jsx`  | Search bar to filter widgets           |
| `dashboardAtom.js`  | Recoil atom to hold dashboard state    |
| `widgetState.js`    | Selector for filtered widgets          |

---

## State Management

* **Recoil Atoms**: Stores `categories` and `widgets`.
* **Selectors**: Derive filtered widget lists based on search query.

---

## Features to Test

* Add a widget and verify it shows up immediately.
* Remove a widget and confirm removal.
* Use search to filter widgets dynamically.
* Refresh page: state persists if implemented with localStorage.

---

## Future Improvements

* Drag-and-drop widgets between categories.
* Edit widgets (inline or modal-based editing).
* Save/load data from a backend API.
* Add charts or advanced widget types.

---

## Deliverables Checklist

* [x] JSON/JS data file for categories and widgets
* [x] Dynamic rendering of categories and widgets
* [x] Add/remove widget functionality
* [x] Global search functionality
* [x] State management via Recoil
* [x] Deployment link and GitHub repo link
* [x] Readme with instructions
