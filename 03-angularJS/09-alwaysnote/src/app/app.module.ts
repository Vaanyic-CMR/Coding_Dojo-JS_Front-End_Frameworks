import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { NotesService } from './notes-service/notes.service';
import { NotesComponent } from './notes/notes.component';
import { NoteNewComponent } from './note-new/note-new.component';
import { NoteEditComponent } from './note-edit/note-edit.component';
import { NoteListComponent } from './note-list/note-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteNewComponent,
    NoteEditComponent,
    NoteListComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
