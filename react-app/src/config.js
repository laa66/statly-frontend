const serverVars = {
    apiUrl: 'https://statly-rest-api.onrender.com'
  };
  
  const localVars = {
    apiUrl: 'http://localhost:8080',
  
  };
  
  export function getConfiguration() {
    if (process.env.NODE_ENV === 'production') {
      return serverVars;
    }
  
    return localVars;
  }