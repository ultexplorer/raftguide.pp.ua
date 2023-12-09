async function postFetch(url, data) {
    return fetch(url, {
        method: "POST", // или 'PUT'
        body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
        headers: {
            "Content-Type": "application/json",
        },
    })
}

export async function serverAccessUser(url, data){
    return await postFetch(url, data);
}

export async function requestToServer(url, data){
    const responsePromise = await fetch(url, {
        method: 'POST', 
        body: JSON.stringify(data), 
        'Content-type': 'application/json; charset=UTF-8',
    })
    const response = await responsePromise.json();
    return response;
}