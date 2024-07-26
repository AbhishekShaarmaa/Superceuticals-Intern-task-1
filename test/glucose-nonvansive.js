const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

async function modifyPDF(input, output , testFields) {

  try {
    // Load the existing PDF document
    const existingPdfBytes = await readFile(input);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Get the dimensions of the first page
    const { width, height } = firstPage.getSize();

    const fields = [
      { x: 37, y: height - 78, width: 110, height: 10, text: testFields.name, color: rgb(0, 0, 0) },
      { x: 195, y: height - 78, width: 110, height: 10, text: testFields.patientId, color: rgb(0, 0, 0) },
      { x: 339, y: height - 78, width: 110, height: 10, text: testFields.gender, color: rgb(0, 0, 0) },
      { x: 37, y: height - 98, width: 110, height: 10, text: testFields.place, color: rgb(0.5, 0, 0) },
      { x: 172, y: height - 98, width: 110, height: 10, text: testFields.age, color: rgb(0, 0, 0) },
      { x: 351, y: height - 98, width: 110, height: 10, text: testFields.acStatus, color: rgb(0, 0, 0) },
      { x: 43, y: height - 120, width: 90, height: 10, text: testFields.labNo, color: rgb(0, 0, 0) },
      { x: 183, y: height - 120, width: 90, height: 10, text: testFields.refBy, color: rgb(0, 0, 0) },
      { x: 359, y: height - 120, width: 110, height: 10, text: testFields.dateAndTime, color: rgb(0, 0, 0) },
      { x: 338, y: height - 225, width: 40, height: 10, text: testFields.hba1c, color: rgb(0.5, 0, 0) },
      { x: 338, y: height - 197, width: 40, height: 15, text: testFields.eag, color: rgb(0.5, 0, 0) },
    ];

    for (const field of fields) {
      firstPage.drawRectangle({
        x: field.x,
        y: field.y,
        width: field.width,
        height: field.height,
        color: rgb(1, 1, 1),
      });

      firstPage.drawText(field.text, {
        x: field.x + 2,
        y: field.y,
        size: 10,
        font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
        color: field.color, 
      });
    }

    
    const pdfBytes = await pdfDoc.save();
    await writeFile(output, pdfBytes);

    console.log('PDF modified successfully:', output);
  } catch (error) {
    console.error('Error modifying PDF:', error);
  }
}





module.exports = { modifyPDF };
