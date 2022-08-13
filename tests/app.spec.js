const request = require('supertest')
const app = require('../src/app')
const { promises: fs } = require('fs')
const { content, encodedContent } = require('./mock/page-mock')

describe('Content test', () => {
  describe('request to a valid URL', () => {
    it('should return 200 status code', async () => {
      jest.spyOn(fs, 'readFile').mockResolvedValueOnce(content)
      await request(app).get('/valid-url').expect(200)
    })
  })

  describe('request to a valid URL', () => {
    it('should return the right content from the markdown file', async () => {
      jest.spyOn(fs, 'readFile').mockResolvedValueOnce(content)

      const response = await request(app).get('/valid-url').send(content).expect(200)
      expect(response.text).toContain(encodedContent)
    })
  })

  describe('request to an invalid URL', () => {
    it('should return a 404 status code', async () => {
      jest.spyOn(fs, 'readFile').mockRejectedValueOnce('Folder was not found')
      await request(app).get('/invalid-url').expect(404)
    })
  })
})
