package com.ladyincodes.notes.repository;

import com.ladyincodes.notes.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotesRepository extends JpaRepository<Note, Long> {
}
