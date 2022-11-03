const registerUser = async (userData: any) => {
    const response = await fetch(`http://localhost:8080/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(userData),
    });
    return response.json();
};

export default registerUser;
