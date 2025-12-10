import http from "./http";

export const getNotes = () => http.get("/notes");

export const getNote = (id) => http.get(`/notes/${id}`);

export const createNote = (data) => http.post("/notes", data);

export const updateNote = (id, data) => http.put(`/notes/${id}`, data);

export const deleteNote = (id) => http.delete(`/notes/${id}`);
