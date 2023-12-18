package ar.com.ensolvers.appnotes.model

import java.io.Serializable
import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id

@Entity
class Note(): Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null
    var text: String? = null
    var title: String? = null
    var isArchived: Boolean = false

    constructor(title: String, text: String): this(){
        this.title = title
        this.text  = text
    }

    fun archiveNote(){
        this.isArchived = true
    }

    fun notArchiveNote(){
        this.isArchived = false
    }

}