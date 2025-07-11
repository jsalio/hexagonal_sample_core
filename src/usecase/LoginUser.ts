import { BaseRepository, IRequest, IResponse } from "../contracts/IRequest";
import { User, UserWithoutPwd } from "../models/db/User";
import { Login } from "../models/dto/Login";

/**
 * Handles the login use case, including validation and execution of user login.
 */
export class LoginUser {
    /**
     * Creates a new instance of the LoginUser use case
     * @param request The login request containing username and password
     * @param repository The user repository for data access
     */
    constructor(
        private readonly request: IRequest<Login>,
        private readonly repository: BaseRepository<User, UserWithoutPwd>
    ) {}

    /**
     * Validates the login request
     * @returns An array of error messages, or an empty array if validation passes
     */
    public validate(): string[] {
        const messages: string[] = [];
        const request = this.request.build();

        if (!request) {
            messages.push('Invalid request');
            return messages;
        }

        if (!request.username || request.username.trim() === '') {
            messages.push('Username is required');
        }

        if (!request.password || request.password.trim() === '') {
            messages.push('Password is required');
        }

        // Only check user existence if we have a username
        if (request.username && request.username.trim() !== '') {
            const foundUser = this.repository.IndexOf('username', request.username);
            if (!foundUser) {
                messages.push('Account does not exist');
            }
        }

        return messages;
    }

    /**
     * Executes the login process
     * @returns A response containing user data without password if successful, or an error message
     */
    public execute(): IResponse<UserWithoutPwd> {
        const request = this.request.build();
        
        // if (!request) {
        //     return {
        //         error: 'Invalid request',
        //         data: null
        //     };
        // }

        try {
            const result = this.repository.FindOne('username',request?.username as string);
            
            // if (!result.data) {
            //     return {
            //         error: 'Invalid username or password',
            //         data: null
            //     };
            // }
            
            // In a real application, you would verify the password here
            // For example: if (!verifyPassword(request.password, result.data.passwordHash)) {
            //     return { error: 'Invalid username or password', data: null };
            // }

            return {
                error: '',
                data: {
                    active: result.data?.active,
                    createdAt: result.data?.createdAt,
                    email: result.data?.email,
                    Id: result.data?.Id,
                    username: result.data?.username
                } as UserWithoutPwd
            };
        } catch (error) {
            return {
                error: error instanceof Error ? error.message : 'An unexpected error occurred',
                data: null
            };
        }
    }
}