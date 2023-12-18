package ar.com.ensolvers.appnotes.service.`interface`

import ar.com.ensolvers.appnotes.model.Note

interface NoteService {

    fun createNote(note: Note): Note
    fun updateNote(note: Note): Note

    fun getNote(id: Long): Note

    fun getAllNotes(): List<Note>


    fun getAllNotesNotArchived(): List<Note>

    fun getAllNotesArchived(): List<Note>

    fun deleteNote(id: Long)

    fun deleteAll()
}