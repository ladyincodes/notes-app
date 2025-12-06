package com.ladyincodes.notes.controller;

import com.ladyincodes.notes.dto.NoteRequest;
import com.ladyincodes.notes.dto.NoteRespond;
import com.ladyincodes.notes.service.NoteService;
import jakarta.validation.Valid;
import org.jspecify.annotations.NonNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping ("/api/notes")
public class NotesController {

    @Autowired
    private NoteService noteService;

    @GetMapping
    public ResponseEntity<List<NoteRespond>> getNotes() {
        List<NoteRespond> responds = noteService.getAllNotes();
        return ResponseEntity.status(HttpStatus.OK).body(responds);

    }

    @GetMapping ("/{id}")
    public ResponseEntity<NoteRespond> getNote(@PathVariable Long id) {
        return noteService.getNoteById(id).map(ResponseEntity::ok)
                .orElse(ResponseEntity.noContent().build());

    }

    @PostMapping
    public ResponseEntity<@NonNull NoteRespond> addNote(@Valid @RequestBody NoteRequest req) {
        NoteRespond addedNote = noteService.addNote(req);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedNote);
    }

    @PutMapping ("/{id}")
    public ResponseEntity<NoteRespond> update(@PathVariable Long id, @Valid @RequestBody NoteRequest request) {
        return noteService.replace(id, request).map(ResponseEntity::ok).orElse(ResponseEntity.notFound().build());
    }

}
