import Info from "./components/Info/Info";
import About from "./components/About/About.jsx";
import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="app">
			<div className="container">
				<Info />
				<About />
				<Footer className="footer" />
			</div>
		</div>
	);
}

export default App;
