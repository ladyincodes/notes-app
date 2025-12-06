package com.ladyincodes.notes.dto;

import jakarta.validation.constraints.NotBlank;

public class NoteRequest {

    @NotBlank (message = "Title is required")
    public String title;

    public String content;

    public NoteRequest(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public NoteRequest() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
