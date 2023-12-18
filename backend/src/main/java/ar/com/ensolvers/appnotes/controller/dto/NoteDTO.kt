package ar.com.ensolvers.appnotes.controller.dto

import ar.com.ensolvers.appnotes.model.Note

class NoteDTO (
    val id: Long?,
    val text: String?,
    val title: String?,
    val isArchived: Boolean
) {
    companion object {
        fun fromModelToJson(note: Note) =
            NoteDTO(
                id = note.id,
                text = note.text,
                title = note.title,
                isArchived = note.isArchived
            )
    }

    fun fromJsonToModel(): Note {
        val note = Note()
        note.id = this.id
        note.text = this.text
        note.title = this.title
        note.isArchived = this.isArchived
        return note
    }
}