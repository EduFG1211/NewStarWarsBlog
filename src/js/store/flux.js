const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favlist: []
		},
		actions: {
			fetchCharacter() {
				fetch("https://3000-brown-anaconda-37b86dzb.ws-us03.gitpod.io/characters/")
					.then(response => response.json())

					.then(result => setStore({ characters: result }))

					.catch(error => console.log("error", error));
			},

			fetchPlanets() {
				fetch("https://3000-brown-anaconda-37b86dzb.ws-us03.gitpod.io/planets/")
					.then(response => response.json())

					.then(result => setStore({ planets: result }))

					.catch(error => console.log("error", error));
			},

			favFunction: name => {
				const store = getStore();
				const validate = store.favlist.includes(name);
				if (validate === false) {
					const favlist = [...store.favlist, name];
					setStore({ favlist: favlist });
				}
			},

			favFunctionDelete: index => {
				const store = getStore();
				let newlist = [];
				store.favlist.map(function(item, index2) {
					if (index != index2) {
						newlist.push(item);
					}
				});
				setStore({ favlist: newlist });
			}
		}
	};
};

export default getState;
