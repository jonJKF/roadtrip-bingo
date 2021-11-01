import { writable } from 'svelte/store';

export const collectables = writable([]);

const fetchCollectables = async () => {
	const url = import.meta.env.VITE_API_URL + '/new-board';
	try {
		const response = await fetch(url);
		const data = await response.json();
		const mapped = data.collectables.map((item, index) => {
			return {
				index: index,
				id: item.id,
				description: item.description,
				completed: false
			};
		});
		collectables.set(mapped);
	} catch (e) {
		console.log(e);
	}
};
fetchCollectables();
