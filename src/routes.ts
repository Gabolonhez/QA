import { Router } from 'express'
import { UsersController } from './controllers/usersController'

const routes = Router()
const usersController = new UsersController()

routes.get('/users', usersController.listUser)

routes.post('/users', usersController.createUser)

export { routes }

// Status code
// 200, 201, 400, 404

// GET - READ DATA
// POST - CREATE DATA
// PUT/PATCH - EDIT DATA
// DELETE - DELETE DATA