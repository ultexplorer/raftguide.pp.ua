export async function registrationNewUser(url, data){
    return fetch(url, {
            method: "POST", // или 'PUT'
            body: JSON.stringify(data), // данные могут быть 'строкой' или {объектом}!
            headers: {
                "Content-Type": "application/json",
            },
        })
}