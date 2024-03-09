async function fetchData() {
    const options = {
        method: 'GET',
        url: 'https://www.dnd5eapi.co/api/spells',

    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();