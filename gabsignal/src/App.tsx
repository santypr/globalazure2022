import './App.css';
import { War } from './components/war';
import tribeData from "./data/tribes.json";

function App() {

  const spartans = tribeData.spartans;
  const vikings = tribeData.vikings;
  const jiujitsu = tribeData.jiujitsu;

  return (
    <div className="App">
      <War spartans={spartans} vikings={vikings} jiujitsu={jiujitsu} />
    </div>
  );
}

export default App;
