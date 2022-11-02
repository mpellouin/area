const createArea = async (areaData: any) => {
    const response = await fetch(`http://localhost:8080/createArea/${areaData?.actionId ?? 0}/${areaData?.reactionId ?? 0}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify(areaData),
    });
    return response.json();
};

export default createArea;
