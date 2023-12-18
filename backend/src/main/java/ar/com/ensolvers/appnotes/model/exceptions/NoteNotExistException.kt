package ar.com.ensolvers.appnotes.model.exceptions

class NoteNotExistException(id: Long) : Exception("Note with id $id does not exist") {

}
