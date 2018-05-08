const PDFDocument = require('pdfkit');
var blobStream = require('blob-stream');
const fs = require('fs')

module.exports = {
  tagMaker: function(people, image){
    // create a document and pipe to a blob
    var doc = new PDFDocument({
      size: [595, 852]
    });
    var stream = doc.pipe(fs.createWriteStream('./output.pdf'));

    const tag_height = 161.5
    const tag_width = 260

    for (x=1;x<6;x++){
      let position_x = 0
      let position_y = 0
      
      if(x % 2 === 0){
          position_x = tag_width;
      }
      
      doc.rect(position_x, position_y, tag_width, tag_height).stroke()
    }


    // end and display the document in the iframe to the right
    doc.end();
    // stream.on('finish', function() {
    //   iframe.src = stream.toBlobURL('application/pdf');
    // });
  }
}