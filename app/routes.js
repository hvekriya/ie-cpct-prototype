var express = require('express')
var router = express.Router()
const ERROR_MESSAGES = require('./validators/validation-error-messages')

router.get('/', function (req, res) {
  res.render('index')
})

var doctype // store the document name here for renaming purposes

router.get('/v1-employer/upload', function (req, res) {
  return res.render('v1-employer/upload')
})

router.post('/v1-employer/upload', function (req, res) {
  var UploadType = req.body.doctype
  doctype = UploadType
  if (UploadType === '') {
    var errors = { ErrorOnThePage: [ ERROR_MESSAGES.generic ] }
    return res.render('v1-employer/upload', {errors: errors})
  } else {
    res.render('v1-employer/home-afterupload', {DocumentName: UploadType})
  }
})

router.get('/v1-employer/rename', function (req, res) {
  return res.render('v1-employer/rename', {DocumentName: doctype})
})

router.post('/v1-employer/rename', function (req, res) {
  var UploadType = req.body.doctype
  if (UploadType === '') {
    var errors = { ErrorOnThePage: [ ERROR_MESSAGES.generic ] }
    return res.render('v1-employer/upload', {errors: errors})
  } else {
    res.render('v1-employer/home-afterupload', {DocumentName: UploadType})
  }
})

router.get('/v1-cpct/signin', function (req, res) {
  return res.render('v1-cpct/signin')
})

router.post('/v1-cpct/signin', function (req, res, next) {
  return res.render('v1-cpct/search')
})

module.exports = router
