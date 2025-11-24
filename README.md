# MyFullStackProject

This repository contains a **full-stack application** with:

- **Frontend:** Angular
- **Backend:** .NET Web API

---

## Backend API URL

The Angular frontend expects a backend API URL, configured in the Angular environment files:

- Local development: `your API here`


If you want to use a different URL, update `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiUrl: Your URL
};


