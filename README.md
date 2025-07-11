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

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
