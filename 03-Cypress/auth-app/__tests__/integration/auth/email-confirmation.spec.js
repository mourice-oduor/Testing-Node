import User from '@models/User'
import server from '@server/app'
import request from 'supertest'
import { disconnect } from '@tests/utils/mongoose'

const app = () => request(server)

describe('Register Process', () => {
    const EMAIL_CONFIRM_ENDPOINT = '/api/auth//emails/confirm'
    const user = {
        name: 'John Doe',
        email: "john@gmail.com",
        password: "123456"
    };

    beforeEach(() => {
        User.deleteMany({})
    }) 

    afterAll(async () => {
        await disconnect()
    })

    it('should return a 422 error if token is invalid', async () => {

        const res = await app().post(EMAIL_CONFIRM_ENDPOINT).send({
            token: 'invalid-token'
        })

        expect(res.status).toBe(404)
        // expect(res.body.message).toBe('Validation failed.')
        // expect(res.body.data.errors.token).toBe('The token is invalid.')
    })

    
    // it('confirms a user email', async () => {

    //     const user = await User.create(user)

    //     const res = await app().post(EMAIL_CONFIRM_ENDPOINT).send({
    //         token: user.emailConfirmCode
    //     })

    //     expect(res.status).toBe(200)
    //     expect(response.body.data.user.emailConfirmCode).toBeNull()
    //     expect(response.body.data.user.emailConfirmedAt).toBeDefined()
    //     expect(res.body.message).toBe('Email confirmed successfully.')

    //     const newUser = await User.findOne({ email: user.email })

    //     expect(newUser.emailConfirmCode).toBeNull()
    //     expect(newUser.emailConfirmedAt).toBeDefined()

    // })
})
