const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '38c202632amsh9eafe05cb45ed2fp16a311jsne931cc135a49',
		'X-RapidAPI-Host': 'whoisapi-domain-availability-v1.p.rapidapi.com'
	}
};

fetch('https://whoisapi-domain-availability-v1.p.rapidapi.com/api/v1?domainname=example.com&outputFormat=JSON&mode=DNS_ONLY', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


 document.getElementById("Search").addEventListener("keyup",options);
