import { useState } from "react";

import Header from "./components/Header";
import Notes from "./components/Notes";
import SearchBar from "./components/SearchBar";
import './App.css'


function App() {

  const [notes, setNotes] = useState([])
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`${darkMode && "dark-mode"} "App"`} >
        <Header darkMode={darkMode}setDarkMode={setDarkMode}/>
        <SearchBar notes={notes} setNotes={setNotes}/>
        <Notes notes={notes} setNotes={setNotes}/>      
    </div>
  );
}

export default App;
