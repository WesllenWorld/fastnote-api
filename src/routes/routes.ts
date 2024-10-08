import { Router } from 'express'

//controllers por entidade
import * as notesController from '../controllers/notes-controller'
import * as tagsController from '../controllers/tags-controller'
import * as usersController from '../controllers/users-controller'

const router = Router()

//notes
router.get('/notes/:userId', notesController.getAllNotesByUserIdController) 
router.get('/notes/:userId/:noteId', notesController.getNoteByUserIdController)
router.get('/notes/:userId/:noteId/tags', notesController.getTagsByNoteIdController)
router.get('/notes/:userId/tags/:tagId', notesController.getNotesByTagIdController)

router.post('/notes/:userId', notesController.postNoteController) 

router.delete('/notes/:userId/:noteId', notesController.deleteNoteByIdController)

router.put('/notes/:userId/noteId', notesController.updateNoteController)

//tag
router.get('/tags/:userId', tagsController.getAllTagsByUserIdController)
router.get('/tags/:userId/:tagId', tagsController.getTagByUserIdController)
router.get('/tags/:userId/name/:tagName', tagsController.getTagByUserIdAndTagNameController)
router.get('/tags/:userId/color/:tagColor', tagsController.getTagsByUserIdAndColorController)

router.post('/tags/:userId', tagsController.postTagController)

router.delete('/tags/:userId/:tagId', tagsController.deleteTagByIdController)

router.put('/tags/:userId/:tagId', tagsController.updateTagController)

//user
router.get('/users/:userId', usersController.getUserByIdController)

router.post('/users', usersController.postUserController)

router.delete('/users/:userId', usersController.deleteUserByIdController)

router.put('/users/:userId', usersController.updateUserController)


export default router