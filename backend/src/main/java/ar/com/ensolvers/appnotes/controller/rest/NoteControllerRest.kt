package ar.com.ensolvers.appnotes.controller.rest

import ar.com.ensolvers.appnotes.controller.dto.NoteDTO
import ar.com.ensolvers.appnotes.service.`interface`.NoteService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin
@RequestMapping("/notes")
class NoteControllerRest {

    @Autowired
    lateinit var noteService: NoteService

    @GetMapping
    fun allNotesNotArchived() = noteService.getAllNotesNotArchived().map { note -> NoteDTO.fromModelToJson(note) }

    @GetMapping("/archived")
    fun allNotesArchived() = noteService.getAllNotesArchived().map { note -> NoteDTO.fromModelToJson(note) }

    @GetMapping("/get-note/{idnote}")
    fun getNote(@PathVariable idnote: Long) = NoteDTO.fromModelToJson(noteService.getNote(idnote))

    @DeleteMapping("/delete-note/{noteid}")
    fun deleteNote(@PathVariable noteid: Long) = noteService.deleteNote(noteid)

    @DeleteMapping("/delete-note-all")
    fun deleteNoteAll() = noteService.deleteAll()

    @PostMapping("/createNote")
    fun createNote(@Validated @RequestBody noteDTO: NoteDTO) = noteService.createNote(noteDTO.fromJsonToModel())

    @PutMapping("/update-note/{idnote}")
    fun updateNote(@PathVariable idnote: Long, @RequestBody noteDTO: NoteDTO) {

        val noteToUpdate = noteService.getNote(idnote)

        noteToUpdate.text = noteDTO.text
        noteToUpdate.title = noteDTO.title
        noteToUpdate.isArchived = noteDTO.isArchived

        noteService.updateNote(noteToUpdate)

    }

}