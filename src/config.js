const serverVars = {
    clientUrl: 'https://laa66.github.io',
    apiUrl: 'https://statly-backend-api-production.up.railway.app',
    roleUsername: 'max.sclz94'
  };
  
  const localVars = {
    clientUrl: 'http://localhost:3000',
    apiUrl: 'http://localhost:8080',
    roleUsername: 'max.sclz94'
  };
  
  export function getConfiguration() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars;
    }
  
    return localVars;
  }