import { Request, Response } from 'express'
import { database } from '../database'

export class UsersController {
  createUser (request: Request, response: Response): Response {
    const { name } = request.body
  
    if(name.length < 1){
      return response.status(403).json({'mensage': 'It is not possible to create a new user without a name'})
    }
  
    database.push(name)
    return response.status(201).json({'mensage': `Usuário ${name} created successfully`})
  }

  listUser (request: Request, response: Response): Response {
    return response.status(200).json(database)
  }
}