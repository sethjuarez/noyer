import './App.css';
import { version } from "./version";
import Toolbar from "./components/toolbar";
import Posts from './components/posts';

function App() {
  return (
    <main className="">
      <Posts />
      <Toolbar />
      <div className="fixed right-0 bottom-0 mr-12 mb-2 text-zinc-300">
        {version}
      </div>
    </main>
  );
}

export default App;
