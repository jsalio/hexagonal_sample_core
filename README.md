# 🏗️ Hexagonal Architecture Sample in Node.js

[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A clean architecture implementation using Hexagonal Architecture (Ports and Adapters) pattern in Node.js with TypeScript. This project serves as a reference for building maintainable and testable server-side applications.

## ✨ Features

- 🏗️ Hexagonal Architecture implementation
- 🛡️ Type safety with TypeScript
- 🧪 Test-driven development with Vitest
- 📊 Code coverage reporting
- 🎨 Consistent code style with ESLint & Prettier
- 🔄 Dependency injection for better testability

## 📋 Table of Contents

- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#-development)
- [Testing](#-testing)
- [Architecture](#-architecture)
- [SOLID Principles](#-solid-principles)
- [License](#-license)
- [Contributing](#-contributing)

## 🏗️ Project Structure

```
src/
├── contracts/           # Application ports (interfaces)
│   └── IRequest.ts     # Request interface
├── models/             
│   ├── db/            # Database models
│   │   └── User.ts    # User entity
│   └── dto/           # Data Transfer Objects
│       └── Login.ts   # Login DTO
├── usecase/           
│   └── LoginUser.ts   # Business logic for user login
└── index.ts           # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd sample_Hexagonal
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## 🛠️ Development

### Build the project
```bash
npm run build
```

### Run in development mode
```bash
npm run dev
```

## 🧪 Testing

### Run tests
```bash
npm test
```

### Run tests in watch mode
```bash
npm run test:watch
```

### Generate test coverage
```bash
npm run test:coverage
```

## 🏛️ Architecture

This project follows the Hexagonal Architecture (Ports and Adapters) pattern, which promotes separation of concerns and testability by isolating the core business logic from external concerns like databases, UIs, or external services.

### Core Concepts

1. **Domain Layer**
   - Contains business logic and domain models
   - Located in `src/models/db/`
   - Example: `User` entity

2. **Application Layer**
   - Contains use cases and business rules
   - Located in `src/usecase/`
   - Example: `LoginUser` use case

3. **Interface Layer**
   - Defines contracts (ports) for external interactions
   - Located in `src/contracts/`
   - Example: `IRequest` interface

4. **Adapters**
   - Implements the ports to connect with external systems
   - Handles data transformation between external and internal formats
   - Example: Database adapters, API controllers

### Data Flow

```
External Request → Adapter → Port → Use Case → Domain Model
                      ↑           ↓
                      └───────────┘
```

This project follows the Hexagonal Architecture pattern, which separates the core business logic from external concerns like databases, UIs, or external services.

### Key Principles:

1. **Ports (Interfaces)**: Define the contracts that the application core needs to function.
2. **Adapters**: Implement the ports to connect with external systems.
3. **Use Cases**: Contain the application's business logic.
4. **Domain Models**: Represent the core business entities and rules.

## 🧱 SOLID Principles in Practice

This project strictly follows the SOLID principles to ensure clean, maintainable, and scalable code:

### 1. Single Responsibility Principle (SRP)
   - Each class has one reason to change
   - Clear separation between:
     - Business logic (use cases)
     - Data transfer (DTOs)
     - External interactions (adapters)
   - Example: `LoginUser` class handles only authentication logic

### 2. Open/Closed Principle (OCP)
   - Open for extension, closed for modification
   - New features can be added by:
     - Creating new use cases
     - Implementing existing interfaces
     - Adding new adapters
   - Example: New authentication methods can be added without changing existing code

### 3. Liskov Substitution Principle (LSP)
   - Derived classes can replace their base types
   - All interface implementations are fully substitutable
   - Example: Any class implementing `IRequest` can be used interchangeably

### 4. Interface Segregation Principle (ISP)
   - Clients shouldn't depend on interfaces they don't use
   - Small, focused interfaces
   - Example: `IRequest` contains only essential methods for request handling

### 5. Dependency Inversion Principle (DIP)
   - High-level modules don't depend on low-level modules
   - Both depend on abstractions
   - Dependencies are injected through constructors
   - Example: Use cases depend on interfaces, not concrete implementations

This project adheres to the SOLID principles of object-oriented design:

1. **Single Responsibility Principle (SRP)**
   - Each class has a single responsibility
   - For example, `LoginUser` handles only the login logic
   - DTOs are used to transfer data between layers

2. **Open/Closed Principle (OCP)**
   - The architecture allows extending behavior without modifying existing code
   - New use cases can be added by implementing existing interfaces
   - New adapters can be created without changing the core logic

3. **Liskov Substitution Principle (LSP)**
   - Derived classes can substitute their base types
   - All implementations of interfaces are fully substitutable for their parent type
   - Contract interfaces ensure consistent behavior across implementations

4. **Interface Segregation Principle (ISP)**
   - Small, focused interfaces
   - Clients only depend on methods they use
   - For example, `IRequest` contains only the necessary methods for request handling

5. **Dependency Inversion Principle (DIP)**
   - High-level modules don't depend on low-level modules; both depend on abstractions
   - Dependencies are injected through constructors
   - The application core defines the interfaces that external adapters implement

## 📦 Dependencies

- **Runtime**:
  - Node.js 18+
  - TypeScript 5.8+

- **Development**:
  - Vitest: For testing
  - ESLint & Prettier: Code quality and formatting
  - ts-node: TypeScript execution

## 📄 License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 🐛 Reporting Issues

Found a bug? Please open an issue on GitHub with:
- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Any relevant error messages

### 🚀 Feature Requests

Have an idea for improvement? Open an issue and let's discuss it!

---

Built with ❤️ using Hexagonal Architecture and SOLID principles
