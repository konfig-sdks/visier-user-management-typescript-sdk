<div align="center">

[![Visit Visier](./header.png)](https://visier.com)

# [Visier](https://visier.com)<a id="visier"></a>

Visier APIs for managing users within an organization

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`visierusermanagement.userManagement.addUser`](#visierusermanagementusermanagementadduser)
  * [`visierusermanagement.userManagement.addUsersToUserGroup`](#visierusermanagementusermanagementadduserstousergroup)
  * [`visierusermanagement.userManagement.assignPermissions`](#visierusermanagementusermanagementassignpermissions)
  * [`visierusermanagement.userManagement.assignPermissionsToUserGroups`](#visierusermanagementusermanagementassignpermissionstousergroups)
  * [`visierusermanagement.userManagement.deleteUser`](#visierusermanagementusermanagementdeleteuser)
  * [`visierusermanagement.userManagement.getAllPermissionsXLSX`](#visierusermanagementusermanagementgetallpermissionsxlsx)
  * [`visierusermanagement.userManagement.getAllUserGroups`](#visierusermanagementusermanagementgetallusergroups)
  * [`visierusermanagement.userManagement.getAllUsers`](#visierusermanagementusermanagementgetallusers)
  * [`visierusermanagement.userManagement.getApplicationLogsXLSX`](#visierusermanagementusermanagementgetapplicationlogsxlsx)
  * [`visierusermanagement.userManagement.getDataSecurityReportXLSX`](#visierusermanagementusermanagementgetdatasecurityreportxlsx)
  * [`visierusermanagement.userManagement.getPermissionAssignedUsers`](#visierusermanagementusermanagementgetpermissionassignedusers)
  * [`visierusermanagement.userManagement.getProfileAssignmentsXLSX`](#visierusermanagementusermanagementgetprofileassignmentsxlsx)
  * [`visierusermanagement.userManagement.getUserDetail`](#visierusermanagementusermanagementgetuserdetail)
  * [`visierusermanagement.userManagement.getUserGroupUsers`](#visierusermanagementusermanagementgetusergroupusers)
  * [`visierusermanagement.userManagement.getUserPermissionsXLSX`](#visierusermanagementusermanagementgetuserpermissionsxlsx)
  * [`visierusermanagement.userManagement.removePermissions`](#visierusermanagementusermanagementremovepermissions)
  * [`visierusermanagement.userManagement.removeUsersFromUserGroup`](#visierusermanagementusermanagementremoveusersfromusergroup)
  * [`visierusermanagement.userManagement.revokePermissionsFromUserGroups`](#visierusermanagementusermanagementrevokepermissionsfromusergroups)
  * [`visierusermanagement.userManagement.updateUser`](#visierusermanagementusermanagementupdateuser)
  * [`visierusermanagement.userManagementV2.addUsers`](#visierusermanagementusermanagementv2addusers)
  * [`visierusermanagement.userManagementV2.deleteUsers`](#visierusermanagementusermanagementv2deleteusers)
  * [`visierusermanagement.userManagementV2.updateUsers`](#visierusermanagementusermanagementv2updateusers)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Visier&serviceName=UserManagement&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { VisierUserManagement } from "visier-user-management-typescript-sdk";

const visierusermanagement = new VisierUserManagement({
  // Defining the base path is optional and defaults to https://vanity.api.visier.io
  // basePath: "https://vanity.api.visier.io",
  apiKeyAuth: "API_KEY",
  accessToken: "ACCESS_TOKEN",
  cookieAuth: "API_KEY",
});

const addUserResponse = await visierusermanagement.userManagement.addUser({});

console.log(addUserResponse);
```

## Reference<a id="reference"></a>


### `visierusermanagement.userManagement.addUser`<a id="visierusermanagementusermanagementadduser"></a>

This API allows you to create a new user. Administrating tenant users can specify the tenant in which to add a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addUserResponse = await visierusermanagement.userManagement.addUser({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

The user\\\'s username. This is typically the user\\\'s email, such as john@visier.com.

##### displayName: `string`<a id="displayname-string"></a>

An identifiable name to display within Visier. For example, \\\"John Smith\\\".

##### employeeId: `string`<a id="employeeid-string"></a>

If applicable, and if available, the user employee ID in the data.

##### accountEnabled: `string`<a id="accountenabled-string"></a>

If false, the user account is disabled.

##### email: `string`<a id="email-string"></a>

The user\\\'s email. This is used if the user\\\'s email is different from their username. For example, \\\"john.doe@visier.com\\\".

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to create a user in.

#### 🔄 Return<a id="🔄-return"></a>

[UserCreationAPIResponseDTO](./models/user-creation-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.addUsersToUserGroup`<a id="visierusermanagementusermanagementadduserstousergroup"></a>

This API allows you to assign users to specific user groups.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addUsersToUserGroupResponse =
  await visierusermanagement.userManagement.addUsersToUserGroup({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userGroups: [`UsersToUserGroupRequestDTO`](./models/users-to-user-group-request-dto.ts)[]<a id="usergroups-userstousergrouprequestdtomodelsusers-to-user-group-request-dtots"></a>

A list of objects representing the user groups and users to assign or remove.

#### 🔄 Return<a id="🔄-return"></a>

[SecurityAssignmentResponseDTO](./models/security-assignment-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/user-groups/users` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.assignPermissions`<a id="visierusermanagementusermanagementassignpermissions"></a>

This API allows you to assign a permission to specific users. Administrating tenant users can assign permissions
 to users in the administrating tenant and in the analytic tenants those users belong to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const assignPermissionsResponse =
  await visierusermanagement.userManagement.assignPermissions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### permissions: [`Permission`](./models/permission.ts)[]<a id="permissions-permissionmodelspermissionts"></a>

A list of objects representing the permissions to assign to or remove from users.

#### 🔄 Return<a id="🔄-return"></a>

[AssignRevokePermissionsResponseDTO](./models/assign-revoke-permissions-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/permissions/users` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.assignPermissionsToUserGroups`<a id="visierusermanagementusermanagementassignpermissionstousergroups"></a>

This API allows you to assign a permission to specific user groups. This assigns the permission to all users in the user group.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const assignPermissionsToUserGroupsResponse =
  await visierusermanagement.userManagement.assignPermissionsToUserGroups({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userGroups: [`PermissionsToUserGroupRequestDTO`](./models/permissions-to-user-group-request-dto.ts)[]<a id="usergroups-permissionstousergrouprequestdtomodelspermissions-to-user-group-request-dtots"></a>

A list of objects representing the user groups and permissions to assign or remove.

#### 🔄 Return<a id="🔄-return"></a>

[PermissionsToUserGroupForTenantDTO](./models/permissions-to-user-group-for-tenant-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/user-groups/permissions` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.deleteUser`<a id="visierusermanagementusermanagementdeleteuser"></a>

This API allows you to delete an existing user. Administrating tenant users can specify the tenant from which to delete a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserResponse = await visierusermanagement.userManagement.deleteUser(
  {
    userId: "userId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user you want to delete.

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to delete a user in.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/users/{userId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.getAllPermissionsXLSX`<a id="visierusermanagementusermanagementgetallpermissionsxlsx"></a>

This API allows you to export the list of permissions in a tenant. This report includes the permission name,
 permission description, and permission ID for all permissions in the tenant.

 Administrating tenant users can export permissions lists for the administrating tenant and the analytic tenants
 those users belong to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllPermissionsXLSXResponse =
  await visierusermanagement.userManagement.getAllPermissionsXLSX({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to retrieve permissions from.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/users/reports/permissions-list` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.getAllUserGroups`<a id="visierusermanagementusermanagementgetallusergroups"></a>

This API allows you to retrieve the full list of user groups in a tenant.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUserGroupsResponse =
  await visierusermanagement.userManagement.getAllUserGroups({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to retrieve the list of user groups from.

##### limit: `number`<a id="limit-number"></a>

The number of results to return. The maximum number of users to retrieve is 1000.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset.

#### 🔄 Return<a id="🔄-return"></a>

[UserGroupsGetAPIResponseDTO](./models/user-groups-get-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/user-groups` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.getAllUsers`<a id="visierusermanagementusermanagementgetallusers"></a>

This API allows you to retrieve the full list of users and their current states.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAllUsersResponse =
  await visierusermanagement.userManagement.getAllUsers({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to retrieve a list of users from.

##### assignedProfiles: `boolean`<a id="assignedprofiles-boolean"></a>

If true, the response returns a list of the user\'s assigned profiles.

##### assignedPermissions: `boolean`<a id="assignedpermissions-boolean"></a>

If true, the response returns the user\'s assigned permissions.

##### assignedUserGroups: `boolean`<a id="assignedusergroups-boolean"></a>

If true, the response returns the user\'s assigned user groups.

##### limit: `number`<a id="limit-number"></a>

The number of results to return. The maximum number of users to retrieve is 1000.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

#### 🔄 Return<a id="🔄-return"></a>

[AllUsersGetAPIResponseDTO](./models/all-users-get-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.getApplicationLogsXLSX`<a id="visierusermanagementusermanagementgetapplicationlogsxlsx"></a>

This API allows you to export the Application Logs for a tenant. The Application Logs track information about your
 users and how they are using the application. Performing regular audits will help you identify potential security
 issues and keep your data safe. As part of user management, download the Application Logs to monitor user activity
 and logon events to ensure your users are performing authorized activities.

 Administrating tenant users can export application logs for the administrating tenant and the analytic tenants
 those users belong to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getApplicationLogsXLSXResponse =
  await visierusermanagement.userManagement.getApplicationLogsXLSX({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startTime: `string`<a id="starttime-string"></a>

An inclusive date-time to start retrieving Application Logs from.

##### endTime: `string`<a id="endtime-string"></a>

An exclusive date-time to stop retrieving Application Logs from.

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to retrieve Application Logs from.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/users/reports/application-logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.getDataSecurityReportXLSX`<a id="visierusermanagementusermanagementgetdatasecurityreportxlsx"></a>

This API allows you to export the data security report of a user. The Data Security Report provides information
 about a specific user to see which populations and properties that user has access to as a result of the
 permissions assigned to them.

 Administrating tenant users can export the report for users in the administrating tenant and the analytic
 tenants those users belong to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDataSecurityReportXLSXResponse =
  await visierusermanagement.userManagement.getDataSecurityReportXLSX({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user to retrieve the report for.

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to retrieve the Data Security Report from.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/users/{userId}/reports/data-security` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.getPermissionAssignedUsers`<a id="visierusermanagementusermanagementgetpermissionassignedusers"></a>

This API allows you to retrieve all the users that are assigned a specified permission. You must know the ID
 of the permission you want to retrieve users for.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPermissionAssignedUsersResponse =
  await visierusermanagement.userManagement.getPermissionAssignedUsers({
    permissionId: "permissionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### permissionId: `string`<a id="permissionid-string"></a>

The unique identifier of the permission you want to retrieve users for.

##### includeUserGroups: `boolean`<a id="includeusergroups-boolean"></a>

If true, the response returns a list of all users that are assigned the permission, including users that are  assigned the permission through a user group. If false, the response returns a list of the users that are directly assigned the permission.

##### tenantFilter: `string`<a id="tenantfilter-string"></a>

Specify the tenant to retrieve the list of users from.

##### limit: `number`<a id="limit-number"></a>

The number of results to return. The maximum number of tenants to retrieve is 100.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

#### 🔄 Return<a id="🔄-return"></a>

[PermissionAssignedUsersDTO](./models/permission-assigned-users-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/permissions/{permissionId}/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.getProfileAssignmentsXLSX`<a id="visierusermanagementusermanagementgetprofileassignmentsxlsx"></a>

This API allows you to export the profiles assigned to each user. This report details the profiles assigned to
 each user and the profile validity period.

 Administrating tenant users can export profile assignments for the administrating tenant and the analytic tenants
 those users belong to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProfileAssignmentsXLSXResponse =
  await visierusermanagement.userManagement.getProfileAssignmentsXLSX({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to retrieve profile assignments from.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/users/reports/profile-assignments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.getUserDetail`<a id="visierusermanagementusermanagementgetuserdetail"></a>

This API allows you to retrieve all details for a specified user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserDetailResponse =
  await visierusermanagement.userManagement.getUserDetail({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user you want to retrieve.

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to retrieve a user from.

##### assignedProfiles: `boolean`<a id="assignedprofiles-boolean"></a>

If true, the response returns a list of the user\'s assigned profiles.

##### assignedPermissions: `boolean`<a id="assignedpermissions-boolean"></a>

If true, the response returns the user\'s assigned permissions.

##### assignedUserGroups: `boolean`<a id="assignedusergroups-boolean"></a>

If true, the response returns the user\'s assigned user groups.

#### 🔄 Return<a id="🔄-return"></a>

[UserGetAPIResponseDTO](./models/user-get-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/users/{userId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.getUserGroupUsers`<a id="visierusermanagementusermanagementgetusergroupusers"></a>

This API allows you to retrieve the list of users explicitly assigned to a user group. Users that are implicitly
 included in the user group through the user group's dynamic filters are not returned by this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserGroupUsersResponse =
  await visierusermanagement.userManagement.getUserGroupUsers({
    userGroupId: "userGroupId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userGroupId: `string`<a id="usergroupid-string"></a>

The ID of user group.

##### tenantFilter: `string`<a id="tenantfilter-string"></a>

Specifies the tenant to retrieve the list of users from.

##### limit: `number`<a id="limit-number"></a>

The number of results to return. The maximum number of tenants to retrieve is 100.

##### start: `number`<a id="start-number"></a>

The index to start retrieving results from, also known as offset. The index begins at 0.

#### 🔄 Return<a id="🔄-return"></a>

[UserGroupsUsersDTO](./models/user-groups-users-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/user-groups/{userGroupId}/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.getUserPermissionsXLSX`<a id="visierusermanagementusermanagementgetuserpermissionsxlsx"></a>

This API allows you to export the user permission assignments for a tenant. The permission assignments report
 provides a summary of the permissions your users have been assigned and how each permission is being used across
 your user base, as well as the users that do not have any permissions assigned to them.

 Administrating tenant users can export permission assignments for the administrating tenant and the analytic
 tenants those users belong to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserPermissionsXLSXResponse =
  await visierusermanagement.userManagement.getUserPermissionsXLSX({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to retrieve the permission assignments report from.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/users/reports/permission-assignments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.removePermissions`<a id="visierusermanagementusermanagementremovepermissions"></a>

This API allows you to remove a permission from specific users. Administrating tenant users can remove permissions
 from users in the administrating tenant and in the analytic tenants those users belong to.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removePermissionsResponse =
  await visierusermanagement.userManagement.removePermissions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### permissions: [`Permission`](./models/permission.ts)[]<a id="permissions-permissionmodelspermissionts"></a>

A list of objects representing the permissions to assign to or remove from users.

#### 🔄 Return<a id="🔄-return"></a>

[AssignRevokePermissionsResponseDTO](./models/assign-revoke-permissions-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/permissions/users` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.removeUsersFromUserGroup`<a id="visierusermanagementusermanagementremoveusersfromusergroup"></a>

This API allows you to remove users from specific user groups.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeUsersFromUserGroupResponse =
  await visierusermanagement.userManagement.removeUsersFromUserGroup({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userGroups: [`UsersToUserGroupRequestDTO`](./models/users-to-user-group-request-dto.ts)[]<a id="usergroups-userstousergrouprequestdtomodelsusers-to-user-group-request-dtots"></a>

A list of objects representing the user groups and users to assign or remove.

#### 🔄 Return<a id="🔄-return"></a>

[SecurityAssignmentResponseDTO](./models/security-assignment-response-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/user-groups/users` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.revokePermissionsFromUserGroups`<a id="visierusermanagementusermanagementrevokepermissionsfromusergroups"></a>

This API allows you to remove a permission from specific user groups.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const revokePermissionsFromUserGroupsResponse =
  await visierusermanagement.userManagement.revokePermissionsFromUserGroups({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userGroups: [`PermissionsToUserGroupRequestDTO`](./models/permissions-to-user-group-request-dto.ts)[]<a id="usergroups-permissionstousergrouprequestdtomodelspermissions-to-user-group-request-dtots"></a>

A list of objects representing the user groups and permissions to assign or remove.

#### 🔄 Return<a id="🔄-return"></a>

[PermissionsToUserGroupForTenantDTO](./models/permissions-to-user-group-for-tenant-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/user-groups/permissions` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagement.updateUser`<a id="visierusermanagementusermanagementupdateuser"></a>

This API allows you to update an existing user's information, such as their display name or if the user is enabled in Visier.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserResponse = await visierusermanagement.userManagement.updateUser(
  {
    userId: "userId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

The ID of the user you want to update.

##### displayName: `string`<a id="displayname-string"></a>

An identifiable name to display within Visier. For example, \\\"John Smith\\\".

##### employeeId: `string`<a id="employeeid-string"></a>

If applicable, and if available, the user employee ID in the data.

##### accountEnabled: `string`<a id="accountenabled-string"></a>

If true, the user account is enabled.

##### email: `string`<a id="email-string"></a>

The user\\\'s email address.

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to update a user in.

#### 🔄 Return<a id="🔄-return"></a>

[UserUpdateAPIRequestDTO](./models/user-update-apirequest-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/admin/users/{userId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagementV2.addUsers`<a id="visierusermanagementusermanagementv2addusers"></a>

This API allows you to create new users. Administrating tenant users can specify the tenant in which to add these users.

 <br>**Note:** <em>This API is in **limited availability**. If you are interested in using it, please contact your Customer Success Manager (CSM).</em>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addUsersResponse = await visierusermanagement.userManagementV2.addUsers(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### users: [`UserCreationAPIRequestDTO`](./models/user-creation-apirequest-dto.ts)[]<a id="users-usercreationapirequestdtomodelsuser-creation-apirequest-dtots"></a>

A list of objects representing users to create.

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to create a user in.

#### 🔄 Return<a id="🔄-return"></a>

[UsersAPIResponseDTO](./models/users-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/admin/users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagementV2.deleteUsers`<a id="visierusermanagementusermanagementv2deleteusers"></a>

This API allows you to delete an existing user. Administrating tenant users can specify the tenant from which to delete a user.

 <br>**Note:** <em>This API is in **limited availability**. If you are interested in using it, please contact your Customer Success Manager (CSM).</em>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUsersResponse =
  await visierusermanagement.userManagementV2.deleteUsers({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userIds: `string`[]<a id="userids-string"></a>

A list of objects representing users to delete.

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to delete a user in.

#### 🔄 Return<a id="🔄-return"></a>

[UsersAPIResponseDTO](./models/users-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/admin/users` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `visierusermanagement.userManagementV2.updateUsers`<a id="visierusermanagementusermanagementv2updateusers"></a>

This API allows you to update an existing user's information, such as their display name or if the user is enabled in Visier.

 <br>**Note:** <em>This API is in **limited availability**. If you are interested in using it, please contact your Customer Success Manager (CSM).</em>

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUsersResponse =
  await visierusermanagement.userManagementV2.updateUsers({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### users: [`UsersUpdateAPIUserDTO`](./models/users-update-apiuser-dto.ts)[]<a id="users-usersupdateapiuserdtomodelsusers-update-apiuser-dtots"></a>

##### tenantCode: `string`<a id="tenantcode-string"></a>

Specify the tenant to update a user in.

#### 🔄 Return<a id="🔄-return"></a>

[UsersAPIResponseDTO](./models/users-apiresponse-dto.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v2/admin/users` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
