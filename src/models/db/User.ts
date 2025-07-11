/**
 * Represents a user in the system with all user properties including sensitive data.
 */
export type User = {
    /** Unique identifier for the user */
    Id: string;
    
    /** User's email address */
    email: string;
    
    /** User's unique username */
    username: string;
    
    /** User's hashed password (should never be stored in plain text) */
    password: string;
    
    /** Whether the user account is active */
    active: boolean;
    
    /** Date and time when the user was created */
    createdAt: Date;
};

/**
 * Represents a user without sensitive password information.
 * This type is typically used when returning user data to the client.
 */
export type UserWithoutPwd = {
    /** Unique identifier for the user */
    Id: string;
    
    /** User's email address */
    email: string;
    
    /** User's unique username */
    username: string;
    
    /** Whether the user account is active */
    active: boolean;
    
    /** Date and time when the user was created */
    createdAt: Date;
};