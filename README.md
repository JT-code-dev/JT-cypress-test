# Tech Quiz Test Suite

## Overview
This project is a comprehensive test suite designed for a Python-themed quiz application built using the MERN stack. The application allows users to take a quiz of ten random questions and view their final score.

This repository enhances the app by integrating **Cypress** to perform both **End-to-End (E2E)** and **Component Testing**.

## 🎥 Walkthrough Video
https://github.com/user-attachments/assets/1ba0b164-f409-4ed6-9ad8-2428acee55dd

**
- Demonstrates both component and end-to-end tests passing.
- Includes intercept of API call using fixture.
- Shows the app in action inside the Cypress runner.

---

---

## 🎯 User Story
```md
AS AN aspiring developer
I WANT to take a tech quiz
SO THAT I can test my knowledge and improve my skills
```

---

## ✅ Acceptance Criteria
```md
GIVEN I am taking a tech quiz
WHEN I click the start button
THEN the quiz starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN all questions are answered
THEN the quiz is over
WHEN the quiz is over
THEN I can view my score
WHEN the quiz is over
THEN I can start a new quiz
```

---

## 🧪 Technologies Used
- Bootstrap
- Cypress 14.2.0
- React (Vite frontend)
- Node.js/Express.js
- MongoDB
- TypeScript

---

## 🧬 Testing Strategy
### ✅ Component Testing
Cypress was used to:
- Mount the `<Quiz />` component
- Simulate clicking buttons
- Check whether questions and final score are rendered

### ✅ End-to-End Testing
End-to-End tests were written to:
- Load the actual quiz UI in the Cypress browser
- Intercept API requests to `/api/questions` using a mock `questions.json` file
- Simulate full quiz flows

### ✅ Fixtures
We added a fixture file at `cypress/fixtures/questions.json` that includes Python-related questions for testing consistency.

---

## 📁 Directory Structure
```sh
.
├── client/                 # React client
├── server/                 # Express API
├── cypress/               
│   ├── e2e/               # End-to-end tests
│   │   └── quiz.cy.ts
│   ├── component/         # Component tests
│   │   └── Quiz.cy.tsx
│   ├── fixtures/          # Test fixtures
│   │   └── questions.json
│   └── support/
│       ├── e2e.ts         # Cypress support for E2E
│       └── component.ts   # Cypress support for components
├── cypress.config.ts      # Cypress config
└── README.md
```

---

## 🚀 Setup & Usage

1. Clone the repository and install dependencies:
```bash
npm install
```

2. Start the client and server:
```bash
# From root directory
cd client && npm run dev
cd ../server && npm run start
```

3. Run Cypress for both test types:
```bash
# For E2E
npx cypress open --e2e

# For Component
npx cypress open --component
```

---

## 💡 Notes
- The original `getQuestions` API was stubbed with a fixture to maintain consistency.
- All test specs pass successfully.
- Component and E2E tests are separated and properly organized.

---

## ✅ Status
**✅ Testing complete and all systems passed! The Tech Quiz is ready to rock and roll!** 🎉

---

© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.

