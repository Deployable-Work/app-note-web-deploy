package ar.com.ensolvers.appnotes.service

import ar.com.ensolvers.appnotes.model.Note
import ar.com.ensolvers.appnotes.service.`interface`.NoteService
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.TestInstance
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit.jupiter.SpringExtension

@ExtendWith(SpringExtension::class)
@SpringBootTest
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class NoteServiceImplTest {

    @Autowired
    lateinit var noteService: NoteService
    lateinit var note: Note
    lateinit var note2: Note

    @BeforeEach
    fun setUp() {
        this.note = Note("List", "This is a text")
        this.note2 = Note("List2", "This is a text2")
    }

    @Test
    fun test1(){
        val noteCreated = noteService.createNote(this.note)

        assertNotNull(noteCreated.id)

        val noteGet     = noteService.getNote(noteCreated.id!!)

        assertEquals(noteCreated.id, noteGet.id)
        assertEquals("List", noteGet.title)
        assertEquals("This is a text", noteGet.text)
    }

    @Test
    fun allNotesTest(){
        val noteCreated = noteService.createNote(this.note)
        val noteCreated2 = noteService.createNote(this.note2)


        assertNotNull(noteCreated.id)

        val noteGetAll = noteService.getAllNotes()

        assertEquals(2, noteGetAll.size)
    }


    @Test
    fun allNotesArchivedTest(){
        val noteCreated = noteService.createNote(this.note)
        noteService.createNote(this.note2)

        assertNotNull(noteCreated.id)
        noteCreated.archiveNote()
        noteService.updateNote(noteCreated)

        val noteGetAll = noteService.getAllNotesArchived()

        assertEquals(1, noteGetAll.size)
    }

    @Test
    fun allNotesNotArchivedTest(){
        val noteCreated = noteService.createNote(this.note)
        noteService.createNote(this.note2)

        assertNotNull(noteCreated.id)
        noteCreated.archiveNote()
        noteService.updateNote(noteCreated)

        val noteGetAll = noteService.getAllNotesNotArchived()

        assertEquals(1, noteGetAll.size)
    }

    @AfterEach
    fun tearDown() {
        noteService.deleteAll()
    }

}