const PDFDocument = require('pdfkit');
var blobStream = require('blob-stream');
const fs = require('fs')

module.exports = {
  tagMaker: function(people, image){
    // create a document and pipe to a blob
    var doc = new PDFDocument({
      size: [595, 852]
    });
    var stream = doc.pipe(blobStream());
    
    doc.fontSize(25).font('Helvetica-Bold')

    const tag_height = 161.5
    const tag_width = 260

    let p = -1;
    let y = -1;

    function chunk (arr, len) {
    var chunks = [],
        i = 0,
        n = arr.length;

    while (i < n) {
        chunks.push(arr.slice(i, i += len));
    }

    return chunks;
    }

    tags = [
        {name:'Meagan'},
        {name:'John'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
        {name:'Meagan'},
    ]

    function tagPage(tags, pos_x, pos_y){
        for (x=0;x<tags.length;x++){
        
        if(x % 2 === 0){
            pos_x = tag_width;
            pos_y++;
        } else {
            pos_x = 0   
        }
        
        doc.rect(pos_x, (pos_y*tag_height), tag_width, tag_height).stroke()
        
        doc.text(tags[x].name, pos_x, (((pos_y*tag_height)+ tag_height/2)-10), {
            width: tag_width,
            align: 'center',
            height: tag_height,
        })
        
        }
        const y = 0
    }
    
    function genTags(tags){
        const page_tags = chunk(tags, 10);
        for(p=0;p<page_tags.length;p++){
            const pos_x = tag_width;
            const pos_y = -1
            tagPage(page_tags[p], pos_x, pos_y)
            doc.addPage()
        }
    }

    genTags(tags);
    // end and display the document in the iframe to the right
    doc.end();
    // stream.on('finish', function() {
    //   iframe.src = stream.toBlobURL('application/pdf');
    // });
  }
}