import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotesList from "./pages/NotesList";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotesList />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/edit" element={<EditNote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
