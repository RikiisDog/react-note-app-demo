import "./App.css";
import { Main } from "./components/Main";
import { Sidebar } from "./components/Sidebar";
import { NoteProvider } from "./contexts/NoteContext";

function App() {
    return (
        <div className="App">
            <NoteProvider>
                <Sidebar />
                <Main />
            </NoteProvider>
        </div>
    );
}

export default App;
