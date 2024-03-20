type Parameter = {
    name: string
}
type Entry = {
    parameters: Parameter[]
}
export const operationParameterMap: Record<string, Entry> = {
    '/v1/admin/users-POST': {
        parameters: [
            {
                name: 'username'
            },
            {
                name: 'displayName'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'accountEnabled'
            },
            {
                name: 'email'
            },
            {
                name: 'tenantCode'
            },
        ]
    },
    '/v1/admin/user-groups/users-PUT': {
        parameters: [
            {
                name: 'userGroups'
            },
        ]
    },
    '/v1/admin/permissions/users-PUT': {
        parameters: [
            {
                name: 'permissions'
            },
        ]
    },
    '/v1/admin/user-groups/permissions-PUT': {
        parameters: [
            {
                name: 'userGroups'
            },
        ]
    },
    '/v1/admin/users/{userId}-DELETE': {
        parameters: [
            {
                name: 'userId'
            },
            {
                name: 'tenantCode'
            },
        ]
    },
    '/v1/admin/users/reports/permissions-list-GET': {
        parameters: [
            {
                name: 'tenantCode'
            },
        ]
    },
    '/v1/admin/user-groups-GET': {
        parameters: [
            {
                name: 'tenantCode'
            },
            {
                name: 'limit'
            },
            {
                name: 'start'
            },
        ]
    },
    '/v1/admin/users-GET': {
        parameters: [
            {
                name: 'tenantCode'
            },
            {
                name: 'assignedProfiles'
            },
            {
                name: 'assignedPermissions'
            },
            {
                name: 'assignedUserGroups'
            },
            {
                name: 'limit'
            },
            {
                name: 'start'
            },
        ]
    },
    '/v1/admin/users/reports/application-logs-GET': {
        parameters: [
            {
                name: 'startTime'
            },
            {
                name: 'endTime'
            },
            {
                name: 'tenantCode'
            },
        ]
    },
    '/v1/admin/users/{userId}/reports/data-security-GET': {
        parameters: [
            {
                name: 'userId'
            },
            {
                name: 'tenantCode'
            },
        ]
    },
    '/v1/admin/permissions/{permissionId}/users-GET': {
        parameters: [
            {
                name: 'permissionId'
            },
            {
                name: 'includeUserGroups'
            },
            {
                name: 'tenantFilter'
            },
            {
                name: 'limit'
            },
            {
                name: 'start'
            },
        ]
    },
    '/v1/admin/users/reports/profile-assignments-GET': {
        parameters: [
            {
                name: 'tenantCode'
            },
        ]
    },
    '/v1/admin/users/{userId}-GET': {
        parameters: [
            {
                name: 'userId'
            },
            {
                name: 'tenantCode'
            },
            {
                name: 'assignedProfiles'
            },
            {
                name: 'assignedPermissions'
            },
            {
                name: 'assignedUserGroups'
            },
        ]
    },
    '/v1/admin/user-groups/{userGroupId}/users-GET': {
        parameters: [
            {
                name: 'userGroupId'
            },
            {
                name: 'tenantFilter'
            },
            {
                name: 'limit'
            },
            {
                name: 'start'
            },
        ]
    },
    '/v1/admin/users/reports/permission-assignments-GET': {
        parameters: [
            {
                name: 'tenantCode'
            },
        ]
    },
    '/v1/admin/permissions/users-DELETE': {
        parameters: [
            {
                name: 'permissions'
            },
        ]
    },
    '/v1/admin/user-groups/users-DELETE': {
        parameters: [
            {
                name: 'userGroups'
            },
        ]
    },
    '/v1/admin/user-groups/permissions-DELETE': {
        parameters: [
            {
                name: 'userGroups'
            },
        ]
    },
    '/v1/admin/users/{userId}-PUT': {
        parameters: [
            {
                name: 'userId'
            },
            {
                name: 'displayName'
            },
            {
                name: 'employeeId'
            },
            {
                name: 'accountEnabled'
            },
            {
                name: 'email'
            },
            {
                name: 'tenantCode'
            },
        ]
    },
    '/v2/admin/users-POST': {
        parameters: [
            {
                name: 'users'
            },
            {
                name: 'tenantCode'
            },
        ]
    },
    '/v2/admin/users-DELETE': {
        parameters: [
            {
                name: 'userIds'
            },
            {
                name: 'tenantCode'
            },
        ]
    },
    '/v2/admin/users-PUT': {
        parameters: [
            {
                name: 'users'
            },
            {
                name: 'tenantCode'
            },
        ]
    },
}