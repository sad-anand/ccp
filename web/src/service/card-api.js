export async function getCreditCards() {
    let data = [];
    try {
        const response = await fetch("http://localhost:8080/creditcard");
		if(response.status >= 400) {
			throw new Error("Server responds with error!");
		}
        data = await response.json()
        console.log(data);
    } 
    catch(err) {
        console.error(err);
    }
    return data;
}

export async function addCreditCard(cardDetails) {
    let data = [];
	const response = await fetch("http://localhost:8080/creditcard", {
		method: "POST",
		body: cardDetails,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
	});
	if(response.status >= 400) {
		throw new Error("Server responds with error!");
	}
	data = await response.json()
	console.log(data);
    return data
}