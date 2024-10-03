import { Router } from 'express'

//controllers por entidade
import * as notesController from '../controllers/notes-controller'
import * as tagsController from '../controllers/tags-controller'
import * as usersController from '../controllers/users-controller'

const router = Router()

//notes
router.get('/notes/:userId', notesController.getAllNotesByUserId) 
router.get('/notes/:userId/:noteId', notesController.getNoteByUserId) 
router.post('/notes/:userId', notesController.postNote) 
router.delete('/notes/:userId/noteId', notesController.deleteNote)
router.put('/notes/:userId/noteId', notesController.updateNote)

//tag
router.get('/tags/:userId', tagsController.getTags)
router.get('/tags/:userId/:tagId', tagsController.getTagById)
router.post('/tags/:userId', tagsController.postTag)
router.delete('/tags/:userId/:tagId', tagsController.deleteTag)
router.put('/tags/:userId/:tagId', tagsController.updateTag)

//user
router.get('/users', usersController.getUsers)
router.get('/users/:id', usersController.getUserById)
router.post('/users', usersController.postUserController)
router.delete('/users/:userId', usersController.deleteUser)
router.put('/users/:userId', usersController.updateUser)


export default router