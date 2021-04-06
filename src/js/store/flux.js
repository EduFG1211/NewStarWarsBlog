const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			user: [],
			characters: [],
			planets: [],
			favlist: []
		},
		actions: {
			fetchUser() {
				fetch("https://3000-brown-anaconda-37b86dzb.ws-us03.gitpod.io/user")
					.then(response => response.json())

					.then(result => setStore({ user: result }))

					.catch(error => console.log("error", error));
			},

			fetchCharacter() {
				fetch("https://3000-brown-anaconda-37b86dzb.ws-us03.gitpod.io/characters")
					.then(response => response.json())

					.then(result => setStore({ characters: result }))

					.catch(error => console.log("error", error));
			},

			fetchPlanets() {
				fetch("https://3000-brown-anaconda-37b86dzb.ws-us03.gitpod.io/planets")
					.then(response => response.json())

					.then(result => setStore({ planets: result }))

					.catch(error => console.log("error", error));
			},

			fetchUserFavorites() {
				let myToken = sessionStorage.getItem("my_token");

				fetch("https://3000-brown-anaconda-37b86dzb.ws-us03.gitpod.io/favorites", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${myToken}`
					}
				})
					.then(response => response.json())
					.then(result => {
						let list = [];
						let favObject = {};
						let favName = "";
						for (let i = 0; i < result.length; i++) {
							favObject = result[i];
							favName = favObject.name;
							list.push(favName);
						}
						console.log(list);

						setStore({ favlist: list });
					})
					.catch(error => console.log("error", error));
			},

			favFunction: name => {
				const store = getStore();
				const validate = store.favlist.includes(name);
				console.log(validate);
				if (validate === false) {
					const favlist = [...store.favlist, name];
					setStore({ favlist: favlist });
					let myToken = sessionStorage.getItem("my_token");
					const body = {
						name: name
					};

					fetch("https://3000-brown-anaconda-37b86dzb.ws-us03.gitpod.io/favorites", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Authorization: `Bearer ${myToken}`
						},
						body: JSON.stringify(body)
					})
						.then(response => response.json())
						.then(data => {
							console.log("Success!!", data);
						})
						.catch(error => console.log("error", error));
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
				// console.log(newlist);
				// console.log(index);
				// console.log(store.favlist[index]);
				//setStore({ favlist: newlist });

				let myToken = sessionStorage.getItem("my_token");
				const body = {
					name: store.favlist[index]
				};

				fetch("https://3000-brown-anaconda-37b86dzb.ws-us03.gitpod.io/favorites", {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${myToken}`
					},
					body: JSON.stringify(body)
				})
					.then(response => response.json())
					.then(data => {
						console.log("Success!!", data);
					})
					.catch(error => console.log("error", error));
				setStore({ favlist: newlist });
			}
		}
	};
};

export default getState;
