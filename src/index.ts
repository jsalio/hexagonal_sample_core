/**
 * Main entry point for the Hexagonal Architecture Sample Application
 * 
 * This application demonstrates a clean architecture implementation using the Hexagonal Architecture pattern.
 * It includes user authentication as a sample use case.
 */

// Welcome message
console.log("🚀 Hexagonal Architecture Sample Application");
console.log("----------------------------------------");
console.log("This is a sample application demonstrating clean architecture principles.");
console.log("To get started, implement the required adapters and bootstrap the application.");

// Export core components for use in other modules
export * from './contracts/IRequest';
export * from './models/db/User';
export * from './models/dto/Login';
export * from './usecase/LoginUser';