package ar.com.ensolvers.appnotes.service

import ar.com.ensolvers.appnotes.dao.NoteDAO
import ar.com.ensolvers.appnotes.model.Note
import ar.com.ensolvers.appnotes.model.exceptions.NoteNotExistException
import ar.com.ensolvers.appnotes.service.`interface`.NoteService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.repository.findByIdOrNull
import org.springframework.stereotype.Service
import javax.transaction.Transactional

@Service
@Transactional
class NoteServiceImpl : NoteService {

    @Autowired
    lateinit var noteDAO: NoteDAO

    override fun createNote(note: Note): Note {
        return noteDAO.save(note)
    }

    override fun updateNote(note: Note): Note {
        return noteDAO.save(note)
    }

    override fun getNote(id: Long): Note {
        return noteDAO.findByIdOrNull(id) ?: throw NoteNotExistException(id)
    }

    override fun getAllNotes(): List<Note> {
        return noteDAO.findAll().toList()
    }

    override fun getAllNotesNotArchived(): List<Note> {
        return noteDAO.getNotesNotArchived()
    }

    override fun getAllNotesArchived(): List<Note> {
        return noteDAO.getNotesArchived()
    }



    override fun deleteNote(id: Long) {
        noteDAO.deleteById(id)
    }

    override fun deleteAll() {
        noteDAO.deleteAll()
    }
}