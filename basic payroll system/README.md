# Basic Payroll System

A React + Vite payroll interface that combines:
- Finance tax computation via a default export `calculateTax(salary)`
- HR employee retrieval via a named export `getEmployeeDetails(id)`
- A unified, production-style dashboard for compensation and tax visibility

## Tech Stack

- React 18
- Vite 5
- Plain CSS (custom design system)

## Run Locally

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in terminal (usually `http://localhost:5173`).

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Create production build
- `npm run preview`: Preview production build locally

## Structure

- `src/services/tax.js`: Tax logic (default export)
- `src/services/employee.js`: Employee lookup (named export)
- `src/components/PayrollCard.jsx`: Payroll details component
- `src/App.jsx`: Dashboard layout and interactions
