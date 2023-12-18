package ar.com.ensolvers.appnotes.dao

import ar.com.ensolvers.appnotes.model.Note
import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.CrudRepository

interface NoteDAO: CrudRepository<Note, Long> {


    @Query("""
        SELECT n
        FROM Note n
        WHERE isArchived = true
    """)
    fun getNotesArchived(): List<Note>


    @Query("""
        SELECT n
        FROM Note n
        WHERE isArchived = false      
    """)
    fun getNotesNotArchived(): List<Note>

}