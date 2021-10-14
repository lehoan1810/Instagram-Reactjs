import "../styles/App.scss";
import Cards from "./Cards";
import Navigation from "./Navigation";
import Siderbar from "./Siderbar";

function App() {
	return (
		<div className="App">
			<Navigation />
			<main>
				<div className="container">
					<Cards />
					<Siderbar />
				</div>
			</main>
		</div>
	);
}

export default App;
