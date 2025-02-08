import { Request } from 'express'
import { makeMockResponse } from '../mocks/mockResponse';
import { UsersController } from "./usersController";

describe('Users Controller', ()=>{
  const usersController = new UsersController();

  const mockRequest = {} as Request
  const mockResponse = makeMockResponse()
  it('It must list our users', ()=> {
    usersController.listUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(200)
    expect(mockResponse.state.json).toHaveLength(4)
  })

  it('It must create a new user', ()=> {
    mockRequest.body = {
      name: 'New user'
    }

    usersController.createUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(201)
    expect(mockResponse.state.json).toMatchObject({'mensage': `New user created successfully`})
  })

  it('It must not create a user with blank name', () => {
    mockRequest.body = {
      name: ''
    }

    usersController.createUser(mockRequest, mockResponse)
    expect(mockResponse.state.status).toBe(403)
    expect(mockResponse.state.json).toMatchObject({mensage: 'It is not possible to create a new user without a name'})
  })
})