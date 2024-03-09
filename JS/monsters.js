async function fetchData() {
    const options = {
        method: 'GET',
        url: 'https://www.dnd5eapi.co/api/monsters',

    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();


