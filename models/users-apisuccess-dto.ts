/*
Visier User Management APIs

Visier APIs for managing users within an organization

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface UsersAPISuccessDTO
 */
export interface UsersAPISuccessDTO {
    /**
     * The unique identifier associated with the user.
     * @type {string}
     * @memberof UsersAPISuccessDTO
     */
    'userId'?: string;
    /**
     * The user\'s username. This is typically the user\'s email, such as john@jupiter.com.
     * @type {string}
     * @memberof UsersAPISuccessDTO
     */
    'username'?: string;
    /**
     * An identifiable name to display within Visier. For example, \"John Smith\".
     * @type {string}
     * @memberof UsersAPISuccessDTO
     */
    'displayName'?: string;
    /**
     * If applicable, and if available, the user employee ID in the data.
     * @type {string}
     * @memberof UsersAPISuccessDTO
     */
    'employeeId'?: string;
    /**
     * If true, the user account is enabled.
     * @type {string}
     * @memberof UsersAPISuccessDTO
     */
    'accountEnabled'?: string;
    /**
     * The user\'s email address.
     * @type {string}
     * @memberof UsersAPISuccessDTO
     */
    'email'?: string;
}

