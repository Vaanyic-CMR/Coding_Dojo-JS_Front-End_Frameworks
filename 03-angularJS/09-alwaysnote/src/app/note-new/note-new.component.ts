import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

import { NotesService } from '../notes-service/notes.service';

@Component({
    selector: 'app-note-new',
    templateUrl: './note-new.component.html',
    styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
    notesService: any
    note = { note_content: "" }

    formSubmit( formData: NgForm ) { this.notesService.add(formData.form.value) }

    constructor(private _notesService: NotesService) {}
    ngOnInit(): void { this.notesService = this._notesService }
}
