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

@RestController
@RequestMapping ("/api/notes")
public class NotesController {

    @Autowired
    private NoteService noteService;

    @PostMapping
    public ResponseEntity<@NonNull NoteRespond> addNote(@Valid @RequestBody NoteRequest req) {
        NoteRespond addedNote = noteService.addNote(req);
        return ResponseEntity.status(HttpStatus.CREATED).body(addedNote);
    }

}
