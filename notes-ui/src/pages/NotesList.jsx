import { useEffect, useState } from "react";
import { deleteNote, getNotes } from "../api/notes";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    loadNotes();
  }, []);

  const loadNotes = async () => {
    const response = await getNotes();
    setNotes(response.data);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    loadNotes();
  };

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/create">
        <Button variant="contained">Create Note</Button>
      </Link>

      {notes.map((note) => (
        <Card key={note.id} style={{ marginTop: "20px" }}>
          <CardContent>
            <Typography variant="h6">{note.title}</Typography>
            <Typography>{note.content}</Typography>

            <div style={{ marginTop: "10px" }}>
              <Link to={`/edit/${note.id}`}>
                <Button variant="outlined" style={{ marginRight: "10px" }}>
                  Edit
                </Button>
              </Link>
            </div>

            <Button
              variant="outlined"
              color="error"
              onClick={() => handleDelete(note.id)}
            >
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
