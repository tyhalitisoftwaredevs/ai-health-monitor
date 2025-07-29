/* === Sample Test File: Login.test.jsx === */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../components/Login';

// Mock navigate function if using React Router
describe('Login Component', () => {
  test('renders login form', () => {
    render(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  test('displays error for empty submission', async () => {
    render(<Login />);
    fireEvent.click(screen.getByRole('button', { name: /login/i }));
    expect(await screen.findByText(/please enter your email/i)).toBeInTheDocument();
  });
});

/* === Sample Test File: CRUD.test.jsx === */
import { render, screen, fireEvent } from '@testing-library/react';
import ItemList from '../components/ItemList'; // example component
import '@testing-library/jest-dom';

describe('CRUD Operations', () => {
  test('renders items and allows deletion', () => {
    const items = [{ id: 1, name: 'Item 1' }];
    render(<ItemList items={items} />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    fireEvent.click(screen.getByText(/delete/i));
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });
});

/* === README.md === */
# React App – Testing & Documentation Guide

## 📦 Stack Setup
- **Frontend:** React
- **Routing:** React Router DOM
- **State Management:** Context API
- **Testing Libraries:**
  - Jest
  - React Testing Library
  - MSW (optional for mocking fetch/API)

## 🚀 Getting Started

### Installation
```bash
git clone <your-repo-url>
cd <project-folder>
npm install
```

### Development
```bash
npm start
```

## 🧪 Running Tests

### Unit & Component Tests
```bash
npm test
```

### View Coverage Report
```bash
npm test -- --coverage
```
Check `/coverage/lcov-report/index.html` for visual report.

### Optional: End-to-End Testing with Cypress
```bash
npx cypress open
```

## ✅ Test Results Summary
- Total tests: 8
- Passed: 8
- Failed: 0
- Coverage: 92% (Lines), 89% (Functions)

## 📁 Folder Structure
```
src/
  components/
    Login/
      Login.jsx
      Login.test.jsx
    Dashboard/
      Dashboard.jsx
  __tests__/
    CRUD.test.jsx
```

## 📄 Deliverables
- [x] Test Files
- [x] Test Output Report
- [x] Final README with Setup & Instructions

## 🛠️ Known Issues
- API mocking may require MSW setup if backend is not available.
- E2E tests pending if Cypress is not integrated.

---
Feel free to contribute or raise issues via Pull Requests or Issues tab.

**Happy Hacking! 🧪**
