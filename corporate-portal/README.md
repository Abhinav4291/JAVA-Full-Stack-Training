# Assignment: Corporate Portal Routing

A React + Vite Corporate Portal with a professional grey/red UI theme, authentication flow, role-based controls, nested routes, and protected routes.

Data persistence now uses `db.json` through `json-server` (no localStorage).

## Implemented Features

- Pages:
  - Dashboard
  - Employees
  - Departments
  - Profile
  - Login
  - 404 Not Found
- Routes:
  - `/dashboard`
  - `/employees`
  - `/departments`
  - `/departments/hr`
  - `/departments/finance`
  - `/profile/:id` (protected)
  - `/login`
  - `*` (404)
- Protected route behavior:
  - If not logged in and user opens `/profile/:id`, app redirects to `/login`.
- Role-based access control:
  - `HR` user can edit dashboard metric and manage employee records.
  - Non-HR users can view pages but cannot add/edit/remove employee data.

## HR Admin Role

`hradmin` has role `HR` and can:

- Edit dashboard metric (Open Projects)
- Add employee
- Edit employee details
- Remove employee

## Demo Login Credentials

- HR Admin: `hradmin / hr123`
- Employee: `abhinav / emp123`
- Employee: `akshaya / design123`

## Run Locally

Use two terminals.

Terminal 1 (start db server):

```bash
npm install
npm run server
```

Terminal 2 (start React app):

```bash
npm run dev
```

## Build Check

```bash
npm run build
```

## Route Demonstration

- Route parameter: `/profile/101`, `/profile/102`
- Nested routes: `/departments/hr`, `/departments/finance`
- Protected route: while logged out, open `/profile/101`
- 404 page: open invalid route like `/random-invalid-route`

## Screenshots

Generated screenshots are in `screenshots/`:

- `1-dashboard.png`
- `2-employees.png`
- `3-departments-hr.png`
- `4-departments-finance.png`
- `5-profile-logged-in.png`
- `6-profile-protected.png`
- `7-404.png`
