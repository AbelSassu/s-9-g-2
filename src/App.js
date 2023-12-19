import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyHero from "./components/MyHeros";
import MyBooks from "./components/MyBooks";
import MyFooter from "./components/MyFooters";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <MyNavbar />
            </header>
            <main>
                <MyHero />
                <MyBooks />
            </main>

            <footer className="d-flex bg-secondary justify-content-center mt-5 p-3">
                <MyFooter />
            </footer>
        </div>
    );
}

export default App;
