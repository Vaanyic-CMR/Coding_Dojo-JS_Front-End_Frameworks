import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { NotesService } from '../notes-service/notes.service';

@Component({
    selector: 'app-note-edit',
    templateUrl: './note-edit.component.html',
    styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
    notesService: any | undefined
    @Input() selected_note: any; 
    @Output() cancelNote = new EventEmitter()

    formSubmit( formData: NgForm ) { this.notesService.update(this.selected_note) }

    constructor(private _notesService: NotesService) {}
    ngOnInit(): void { this.notesService = this._notesService }
}
