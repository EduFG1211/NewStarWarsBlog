import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Startintro } from "./views/start";
import { Swlogin } from "./views/swlogin";
import { Swsignup } from "./views/swsignup";
import { CharacterDetail } from "./views/detailchar";
import { PlanetDetail } from "./views/detailplan";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Start } from "./views/start";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Startintro />
						</Route>
						<Route exact path="/login">
							<Swlogin />
						</Route>
						<Route exact path="/signup">
							<Swsignup />
						</Route>
						<Route exact path="/detailchar/:characterid">
							<Navbar />
							<CharacterDetail />
							<Footer />
						</Route>
						<Route exact path="/detailplan/:planetid">
							<Navbar />
							<PlanetDetail />
							<Footer />
						</Route>
						<Route exact path="/home">
							<Navbar />
							<Home />
							<Footer />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
