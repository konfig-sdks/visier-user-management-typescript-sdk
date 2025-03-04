/*
Visier User Management APIs

Visier APIs for managing users within an organization

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * The results of the permission assignment or removal by user.
 * @export
 * @interface AssignRevokePermissionByUserDTO
 */
export interface AssignRevokePermissionByUserDTO {
    /**
     * The unique identifier associated with the user.
     * @type {string}
     * @memberof AssignRevokePermissionByUserDTO
     */
    'userId'?: string;
    /**
     * The user\'s username. This is typically the user\'s email, such as john@visier.com.
     * @type {string}
     * @memberof AssignRevokePermissionByUserDTO
     */
    'username'?: string;
    /**
     * A meaningful message about the user permission.
     * @type {string}
     * @memberof AssignRevokePermissionByUserDTO
     */
    'message'?: string;
}

