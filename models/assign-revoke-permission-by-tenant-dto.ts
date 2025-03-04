/*
Visier User Management APIs

Visier APIs for managing users within an organization

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AssignRevokePermissionByPermissionDTO } from './assign-revoke-permission-by-permission-dto';

/**
 * The permissions organized by tenant.
 * @export
 * @interface AssignRevokePermissionByTenantDTO
 */
export interface AssignRevokePermissionByTenantDTO {
    /**
     * The unique identifier associated with the tenant.
     * @type {string}
     * @memberof AssignRevokePermissionByTenantDTO
     */
    'tenantCode'?: string;
    /**
     * A list of objects representing the assigned or removed permissions.
     * @type {Array<AssignRevokePermissionByPermissionDTO>}
     * @memberof AssignRevokePermissionByTenantDTO
     */
    'permissions'?: Array<AssignRevokePermissionByPermissionDTO>;
    /**
     * The state of the permission assignment. Valid values are Succeed or Failed.
     * @type {string}
     * @memberof AssignRevokePermissionByTenantDTO
     */
    'status'?: AssignRevokePermissionByTenantDTOStatusEnum;
    /**
     * A detailed description of the request outcome, if available.
     * @type {string}
     * @memberof AssignRevokePermissionByTenantDTO
     */
    'message'?: string;
}

type AssignRevokePermissionByTenantDTOStatusEnum = 'Unknown' | 'Succeed' | 'Failed'


