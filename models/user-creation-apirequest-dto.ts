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
 * @interface UserCreationAPIRequestDTO
 */
export interface UserCreationAPIRequestDTO {
    /**
     * The user\'s username. This is typically the user\'s email, such as john@visier.com.
     * @type {string}
     * @memberof UserCreationAPIRequestDTO
     */
    'username'?: string;
    /**
     * An identifiable name to display within Visier. For example, \"John Smith\".
     * @type {string}
     * @memberof UserCreationAPIRequestDTO
     */
    'displayName'?: string;
    /**
     * If applicable, and if available, the user employee ID in the data.
     * @type {string}
     * @memberof UserCreationAPIRequestDTO
     */
    'employeeId'?: string;
    /**
     * If false, the user account is disabled.
     * @type {string}
     * @memberof UserCreationAPIRequestDTO
     */
    'accountEnabled'?: string;
    /**
     * The user\'s email. This is used if the user\'s email is different from their username. For example, \"john.doe@visier.com\".
     * @type {string}
     * @memberof UserCreationAPIRequestDTO
     */
    'email'?: string;
}

