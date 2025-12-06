package com.ladyincodes.notes.service;

import com.ladyincodes.notes.dto.NoteRequest;
import com.ladyincodes.notes.dto.NoteRespond;
import com.ladyincodes.notes.model.Note;
import com.ladyincodes.notes.repository.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

@Service
public class NoteService {
    @Autowired
    public NotesRepository repository;

    public NoteRespond addNote(NoteRequest req) {
        Note newNote = new Note(req.title, req.content, LocalDate.now(), null);
        Note addedNote = repository.save(newNote);

        return new NoteRespond(addedNote.getId(), addedNote.getTitle(), addedNote.getContent(), addedNote.getCreatedAt(), addedNote.getUpdatedAt());


    }
}
