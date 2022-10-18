const getAreas = async () => {
    const response = await fetch(`http://localhost:8080/areas`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'mode': 'no-cors',
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`
      },
    });
    return response.json();
  };
  
  export default getAreas;