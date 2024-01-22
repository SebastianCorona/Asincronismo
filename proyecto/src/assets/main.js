const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UChOAQwIwOg3VktymoWSnh1Q&part=snippet%2Cid&order=date&maxResults=9';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '312fd96214msh74f717c4b333c05p15fe7ejsn6f12c1bb85e2',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    try {
        const response = await fetch(urlApi, options);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
}

(async ()=> {
    try{
        const viedeos = await fetchData(API);
        
    }catch{

    }
})();