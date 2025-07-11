/**
 * Generic request interface that defines a contract for building request objects.
 * @template T The type of the data to be built
 */
export interface IRequest<T> {
    /**
     * Builds and returns the request data
     * @returns The built request data or null if building fails
     */
    build(): T | null;
}

/**
 * Generic response interface for API responses
 * @template T The type of the data included in the response
 */
export interface IResponse<T> {
    /** The response data */
    data: T | null;
    /** Optional error message */
    error?: string;
}

/**
 * Base repository interface defining common CRUD operations
 * @template T The entity type for input operations
 * @template R The return type (usually the same as T or a subset of T)
 */
export interface BaseRepository<T, R> {
    /**
     * Saves an entity
     * @param data The entity data to save
     * @returns Response with the saved entity or error
     */
    save(data: T): IResponse<R>;
    
    /**
     * Updates an existing entity
     * @param data The entity data with updates
     * @returns Response with the updated entity or error
     */
    update(data: T): IResponse<R>;
    
    /**
     * Finds entities by a specific field
     * @param field The field to search by
     * @param value The value to match
     * @returns Response with array of matching entities or error
     */
    Select(field: keyof T, value: T[keyof T]): IResponse<Array<R>>;
    
    /**
     * Finds a single entity by a specific field
     * @param field The field to search by
     * @param value The value to match
     * @returns Response with the found entity or error
     */
    FindOne(field: keyof T, value: T[keyof T]): IResponse<R>;
    
    /**
     * Deletes an entity by its ID
     * @param field The ID of the entity to delete
     */
    Delete(field: string): void;

    /**
     * Checks if an entity exists based on a field and value
     * @param field The field to search by
     * @param value The value to match
     * @returns True if the entity exists, false otherwise
     */
    IndexOf(field: keyof T, value: T[keyof T]): boolean;
}