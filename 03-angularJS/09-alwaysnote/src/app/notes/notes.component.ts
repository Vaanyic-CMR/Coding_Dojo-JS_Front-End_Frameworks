import { Component, OnInit } from '@angular/core';
import { Note } from '../notes-service/note';

@Component({
    selector: 'app-notes',
    templateUrl: './notes.component.html',
    styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
    selected_note: any = {
        id: null,
        note: "",
        created_at: "",
        updated_at: ""
    }
    receiveNote( note: Note ) { this.selected_note = note }
    resetNote() {
        this.selected_note = {
            id: null,
            note: "",
            created_at: "",
            updated_at: ""
        }
    }

    constructor() { }
    ngOnInit(): void { }
}