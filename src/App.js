import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import About from "./pages/AboutPage";
import Home from "./pages/HomePage";

function App() {
  return (
		<Router>
			<div>
				<h3>Hello World!</h3>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>

				<Route path="/" exact component={Home} />
				<Route path="/about" component={About} />
			</div>
		</Router>
	);
}

export default App;
