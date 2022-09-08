import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable({
    providedIn: 'root'
})
export class NotesService {
    notes_database: Array<Note> = [
        new Note({note: "First note..."}),
        new Note({note: "Second note..."}),
        new Note({note: "Third note, drink coffee..."}),
        new Note({note: "Always Code!"}),
    ];

    add(data: any) { this.notes_database.push( new Note(data) )};
    remove(idx: number) { this.notes_database.splice(idx, 1) };
    update(data: any) {
        for (let note of this.notes_database) {
            if (note.id == data.id) {
                note.note = data.note;
                note.updated_at = new Date()
            }
        }
    }

    getAll() { return this.notes_database };

    constructor() {};
}
