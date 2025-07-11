# Hexagonal Architecture Sample in Node.js

This is a sample project demonstrating Hexagonal Architecture (also known as Ports and Adapters) in a Node.js application using TypeScript.

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

## 📦 Dependencies

- TypeScript: For type safety
- Vitest: For testing
- ESLint & Prettier: For code quality and formatting

## 🏛️ Architecture

This project follows the Hexagonal Architecture pattern, which separates the core business logic from external concerns like databases, UIs, or external services.

### Key Principles:

1. **Ports (Interfaces)**: Define the contracts that the application core needs to function.
2. **Adapters**: Implement the ports to connect with external systems.
3. **Use Cases**: Contain the application's business logic.
4. **Domain Models**: Represent the core business entities and rules.

## 🧱 SOLID Principles

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

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
