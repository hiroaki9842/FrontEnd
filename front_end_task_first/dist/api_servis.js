import fetch from 'node-fetch';
const apiUrl = 'https://basis-public.221616.com/api/shops/search?prefecture_cd=31';
export async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        if ('shops' in data && Array.isArray(data.shops)) {
            data.shops.forEach((shop) => {
                console.log(`Shop ID: ${shop.id}, Name: ${shop.name}, Location: ${shop.location}`);
            });
        }
        else {
            console.log('No shop data found in the response.');
        }
        return data;
    }
    catch (error) {
        console.error('Error during API call:', error.message);
        throw error;
    }
}
//# sourceMappingURL=api_servis.js.map