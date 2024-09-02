// src/aws-exports.js
const awsConfig = {
    Auth: {
      region: 'us-east-1', // Replace with your region
      userPoolId: 'your-user-pool-id', // Replace with your User Pool ID
      userPoolWebClientId: 'your-app-client-id', // Replace with your App Client ID
    },
  };
  
  export default awsConfig;