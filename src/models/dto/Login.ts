/**
 * Data Transfer Object (DTO) for login credentials.
 * Used for receiving and validating user login information.
 */
export type Login = {
    /** The username of the user trying to log in */
    username: string;
    
    /** The password of the user trying to log in */
    password: string;
};
