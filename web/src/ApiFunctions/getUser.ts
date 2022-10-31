export const getUser = async () => {
    const response = await fetch(`http://localhost:8080/user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
    });
    return response.json();
};
