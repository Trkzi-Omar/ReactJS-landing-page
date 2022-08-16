import './App.css';
import Home from './components/Home';
import {NavBar} from './components/NavBar';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import imgHorizontalLine from "./assets/img/line-1@1x.svg";

function App() {
    return (
        <div id={'App'} className={"App"}>
            <NavBar/>
            <img id={'imgHorizontalLine'} src={imgHorizontalLine} alt=""/>
            <Home/>
        </div>
    );
}

export default App;
