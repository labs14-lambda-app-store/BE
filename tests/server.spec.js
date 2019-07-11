const server = require('../server')
const supertest = require('supertest')

describe('Server', () => {
    it('should be running on Production env', () => {
        expect(process.env.DB_ENV).toBe('production')
    })
})