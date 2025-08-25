const awsconfig = {
  Auth: {
    Cognito: {
      region: "us-east-1", // must match userPoolId
      userPoolId: "us-east-1_cA7pKfBFO",
      userPoolClientId: "7vnvn57ucu87uknts168s6jk1v",
      loginWith: {
        email: true,
        name: true,
        phone: true,
        adress: true,
      },
    }
  },
};

export default awsconfig;
