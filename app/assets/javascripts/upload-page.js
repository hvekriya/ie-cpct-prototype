$(function () {
  $('#remove-file-upload').hide()
})

$('#document').change(function () {
  var document = $('#document').val().replace(/\\/g, '/').replace(/.*\//, '')
  if (document) {
    $('#document-name').html(document).addClass('text-success')
    $('#choose-file').hide()
    $('#label').hide()
    $('#remove-file-upload').show()
    previewFile()
  }
})

function previewFile () {
  var file = document.querySelector('input[type=file]').files[0]
  var reader = new FileReader()

  reader.addEventListener('load', function () {
    var readerResult = reader.result
    var fileTypeStart = readerResult.indexOf(':') + 1
    var fileTypeEnd = readerResult.indexOf('/')
    var fileType = readerResult.substring(fileTypeStart, fileTypeEnd)
    if (fileType === 'image') {
      var filePreview = document.getElementById('document-preview')
      filePreview.src = reader.result
      filePreview.style.display = 'block'
      filePreview.style.visibility = 'visible'

      var filePreviewTextElements = document.getElementsByClassName('document-preview-text')
      for (var i = 0; i < filePreviewTextElements.length; i++) {
        var textElement = filePreviewTextElements[i]
        textElement.style.display = 'block'
        textElement.style.visibility = 'visible'
      }
    }
  }, false)

  if (file) {
    reader.readAsDataURL(file)
  }
}
