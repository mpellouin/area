const googleAuth = async () => {
    const response = await fetch(`http://localhost:8080/auth/google`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    return response.json();
  };
  
  export default googleAuth;