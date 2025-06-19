# 🎭 Playwright MCP Server – Proof of Concept (POC)

This project is a simple Proof of Concept for testing the Playwright MCP Server. Follow the steps below to get started with Playwright, GitHub Copilot, and running your tests with context and GPT-based agents.

---

## 📦 Step 1: Playwright Prerequisites

### ✅ Install the Required Tools

1. **Visual Studio Code (VS Code)**  
   Download and install from [https://code.visualstudio.com](https://code.visualstudio.com)

2. **GitHub Copilot Extension for VS Code**  
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search for **GitHub Copilot** and install it

3. **Install Node.js Runtime**  
   - Required before installing Playwright  
   - Download from [https://nodejs.org](https://nodejs.org)

4. **Install Playwright**  
   Open a terminal and run:
   ```bash
   npm init playwright@latest
   ```

5. **Install Playwright Extension for VS Code**  
   - Search for **Playwright Test for VS Code** in the Extensions tab
   - Install the extension

---

## 🛠 Step 2: Install Playwright MCP Server

Use the official Microsoft GitHub repository:

🔗 [Playwright MCP GitHub Repository](https://github.com/microsoft/playwright-mcp?tab=readme-ov-file)

- Open the repo in VS Code using the **“Open with VS Code”** button

---

## 📁 Step 3: Write Context File

Write the appropriate **context configuration** as per your testing needs. This file includes session setup, authentication, environment settings, etc.

---

## 🚀 Step 4: Run the Tests

1. **Install additional dependencies**
   ```bash
   npm install ajv --save-dev
   ```

2. **Run your Playwright tests**
   ```bash
   npx playwright test tests/api-product.spec.ts
   ```

3. **View the Test Report**
   ```bash
   npx playwright show-report
   ```

---

## ✅ Notes

- Ensure all dependencies are installed before running the tests
- Use GitHub Copilot to assist in writing tests and improving the context file

---

### 📧 Questions?

Feel free to raise an issue or reach out via the repository discussion page.
