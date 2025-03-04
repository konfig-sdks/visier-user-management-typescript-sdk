/*
Visier User Management APIs

Visier APIs for managing users within an organization

The version of the OpenAPI document: 22222222.99201.1200


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { UserGroupGetAPIResponseDTO } from './user-group-get-apiresponse-dto';

/**
 * 
 * @export
 * @interface UserGroupsGetAPIResponseDTO
 */
export interface UserGroupsGetAPIResponseDTO {
    /**
     * A list of user groups.
     * @type {Array<UserGroupGetAPIResponseDTO>}
     * @memberof UserGroupsGetAPIResponseDTO
     */
    'userGroups'?: Array<UserGroupGetAPIResponseDTO>;
    /**
     * The number of results to return. The maximum number of users to retrieve is 1000.
     * @type {number}
     * @memberof UserGroupsGetAPIResponseDTO
     */
    'limit'?: number;
    /**
     * The index to start retrieving results from, also known as offset.
     * @type {number}
     * @memberof UserGroupsGetAPIResponseDTO
     */
    'start'?: number;
}

