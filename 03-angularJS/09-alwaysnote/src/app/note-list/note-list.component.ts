import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from '../notes-service/note';

import { NotesService } from '../notes-service/notes.service';

@Component({
    selector: 'app-note-list',
    templateUrl: './note-list.component.html',
    styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
    notesService: any | undefined;
    @Output() sendNote = new EventEmitter<Note>();

    constructor(private _notesService: NotesService) {}
    ngOnInit(): void { this.notesService = this._notesService }
}
