const express = require('express')
const router = new express.Router()
const { promises: fs } = require('fs')
const path = require('path')

router.get('/', (req, res) => {
  res.render('index', {
    content: 'Our new content management system',
  })
})

router.get('*', async (req, res) => {
  try {
    const contentPath = path.join(__dirname, `../../public/content/${req.originalUrl}/index.md`)
    const content = await fs.readFile(contentPath, 'utf-8')
    res.render('index', {
      content,
    })
  } catch (e) {
    return res.status(404).render('index', {
      content: '404, OOPS!',
    })
  }
})

module.exports = router
