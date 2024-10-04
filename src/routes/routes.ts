import { Router } from 'express'

//controllers por entidade
import * as notesController from '../controllers/notes-controller'
import * as tagsController from '../controllers/tags-controller'
import * as usersController from '../controllers/users-controller'

const router = Router()

//notes
router.get('/notes/:userId', notesController.getAllNotesByUserIdController) 
router.get('/notes/:userId/:noteId', notesController.getNoteByUserIdController) 
router.post('/notes/:userId', notesController.postNoteController) 
router.delete('/notes/:userId/noteId', notesController.deleteNoteController)
router.put('/notes/:userId/noteId', notesController.updateNoteController)

//tag
router.get('/tags/:userId', tagsController.getAllTagsByUserIdController)
router.get('/tags/:userId/:tagId', tagsController.getTagByIdController)
router.post('/tags/:userId', tagsController.postTagController)
router.delete('/tags/:userId/:tagId', tagsController.deleteTagByIdController)
router.put('/tags/:userId/:tagId', tagsController.updateTagController)

//user
router.get('/users/:id', usersController.getUserByIdController)
router.post('/users', usersController.postUserController)
router.delete('/users/:userId', usersController.deleteUserByIdController)
router.put('/users/:userId', usersController.updateUserController)


export default router