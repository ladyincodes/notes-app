package com.ladyincodes.notes.service;

import com.ladyincodes.notes.dto.NoteRequest;
import com.ladyincodes.notes.dto.NoteRespond;
import com.ladyincodes.notes.model.Note;
import com.ladyincodes.notes.repository.NotesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class NoteService {
    @Autowired
    public NotesRepository repository;

    public NoteRespond addNote(NoteRequest req) {
        Note newNote = new Note(req.getTitle(), req.getContent(), LocalDateTime.now(), null);
        Note addedNote = repository.save(newNote);

        return new NoteRespond(addedNote.getId(), addedNote.getTitle(), addedNote.getContent(), addedNote.getCreatedAt(), addedNote.getUpdatedAt());
    }

    public List<NoteRespond> getAllNotes() {
        return repository.findAll().stream().map(
                t -> new NoteRespond(t.getId(), t.getTitle(), t.getContent(), t.getCreatedAt(), t.getUpdatedAt())).toList();
    }

    public Optional<NoteRespond> getNoteById(Long id) {
        return repository.findById(id).map(t -> new NoteRespond(t.getId(), t.getTitle(), t.getContent(), t.getCreatedAt(), t.getUpdatedAt()));
    }

    public Optional<NoteRespond> replace(Long id, NoteRequest request) {
        return repository.findById(id).map(t -> {
            t.setTitle(request.getTitle());
            t.setContent(request.getContent());
            t.setUpdatedAt(LocalDateTime.now());
            Note updatedNote = repository.save(t);
            return new NoteRespond(updatedNote.getId(), updatedNote.getTitle(), updatedNote.getContent(), updatedNote.getCreatedAt(), updatedNote.getUpdatedAt());
        });
    }

    public boolean delete(Long id) {
        if (!repository.existsById(id)) return false;
        repository.deleteById(id);
        return true;
    }
}
