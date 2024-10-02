import { Router } from 'express'

//controllers por entidade
import * as notesController from '../controllers/notes-controller'
import * as tagsController from '../controllers/tags-controller'
import * as usersController from '../controllers/users-controller'

const router = Router()

//notes
router.get('/notes', notesController.getNotes) 
router.get('/notes/:id', notesController.getNoteByUserId) 
router.get('/notes', notesController.postNote) 
router.delete('/notes/:id', notesController.deleteNote)
router.put('/notes/:id', notesController.updateNote)

//tag
router.get('/tags', tagsController.getTags)
router.get('/tags/:id', tagsController.getTagById)
router.post('/tags', tagsController.postTag)
router.delete('/tags/:id', tagsController.deleteTag)
router.put('/tags/:id', tagsController.updateTag)

//user
router.get('/users', usersController.getUsers)
router.get('/users/:id', usersController.getUserById)
router.post('/users', usersController.postUserController)
router.delete('/users/:id', usersController.deleteUser)
router.put('/users/:id', usersController.updateUser)


export default router