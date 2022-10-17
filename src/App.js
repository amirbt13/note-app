import { useState } from "react";

import Header from "./components/Header";
import Notes from "./components/Notes";
import SearchBar from "./components/SearchBar";


function App() {

  const [notes, setNotes] = useState([])

  return (
    <div className="App">
        <Header />
        <SearchBar notes={notes} setNotes={setNotes}/>
        <Notes notes={notes} setNotes={setNotes}/>      
    </div>
  );
}

export default App;
