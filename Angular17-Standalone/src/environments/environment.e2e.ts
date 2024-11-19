export const environment = {
    production: false,
    msalConfig: {
        auth: {
            clientId: '<client-id>',
            authority: 'https://login.microsoftonline.com/<tenant-id>'
        }
    },
    apiConfig: {
        scopes: ['user.read'],
        uri: 'https://graph.microsoft-ppe.com/v1.0/me'
    }
};
