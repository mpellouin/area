const config = {
    screens: {
      Homepage: {
        path: 'auth/google/callback',
      },
    },
  };

  const linking = {
    prefixes: ['area://app'],
    config,
  };

  export default linking;