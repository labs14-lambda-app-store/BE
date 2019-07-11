const server = require('../server')
const supertest = require('supertest')

describe('Server', () => {
    it('should be running on Production env', () => {
        expect(process.env.DB_ENV).toBe('production')
    })
    describe('GET /', () => {
        it('should respond with a 200 status code', () => {
            return supertest(server).get('/').expect(200);
        })
        it('should respond with html', () => {
            return supertest(server).get('/').expect('content-type', /html/i)
        })
    })

})