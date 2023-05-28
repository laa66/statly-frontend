const serverVars = {
    apiUrl: 'https://statly-rest-api.onrender.com',
    roleUsername: 'max.sclz94'
  };
  
  const localVars = {
    apiUrl: 'http://localhost:8080',
    roleUsername: 'max.sclz94'
  };
  
  export function getConfiguration() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars;
    }
  
    return localVars;
  }