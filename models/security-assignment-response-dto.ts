/*
Visier User Management APIs

Visier APIs for managing users within an organization

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TenantAssignmentsDTO } from './tenant-assignments-dto';

/**
 * 
 * @export
 * @interface SecurityAssignmentResponseDTO
 */
export interface SecurityAssignmentResponseDTO {
    /**
     * A list of objects representing the tenants and users that were assigned to or removed from user groups.
     * @type {Array<TenantAssignmentsDTO>}
     * @memberof SecurityAssignmentResponseDTO
     */
    'tenants'?: Array<TenantAssignmentsDTO>;
}

