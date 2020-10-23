const express = require('express')
const bookmarkd = express.Router()
const Bookmark = require('../models/bookmarkd')

//Index
bookmarkd.get('/', (req, res) => {
    Bookmark.find({}, (err, foundBookmark) => {
        if (err) {
        res.status(400).json({ error: err.message })
        }
        res.status(200).json(foundBookmark)
    })
})

// Delete 

bookmarkd.delete('/:id', (req, res) => {
    Bookmark.findByIdAndRemove(req.params.id, (err, deletedBookmark) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(deletedBookmark)
    })
})


//Update
bookmarkd.put('/:id', (req, res) => {
    Bookmark.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedHoliday) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(updatedHoliday)
    })
})

//Create 
bookmarkd.post('/', (req, res) => {
    Bookmark.create(req.body, (error, createdBookmark) => {
      if (error) {
        res.status(400).json({ error: error.message })
      }
      res.status(200).json(createdBookmark)
    })
})

module.exports = bookmarkd