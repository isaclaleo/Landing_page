const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCNjHgaLpdy1IMNK57pYiKiQ&part=snippet%2Cid&order=date&maxResults=10';

const contenct = null || document.getElementById('content');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '65e5c38cfbmsh21acffb0d7c3d0ep17337bjsn682ef62ea969',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fectData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}
(async () => {
    try {
        const videos = await fectData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700" style="color:white;">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
            </div>
        `).slice(0, 4).join('')}
        
        `;
        contenct.innerHTML = view;

    } catch (error) {
        console.log(error)
    }
})();