import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovTransportanApi implements ICredentialType {
        name = 'N8nDevApisetuGovTransportanApi';

        displayName = 'Apisetu Gov Transportan API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovTransportan/apisetu-gov-transportan.svg', dark: 'file:../nodes/ApisetuGovTransportan/apisetu-gov-transportan.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/transportan/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/transportan/v3',
                        description: 'The base URL of your Apisetu Gov Transportan API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
