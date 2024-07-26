const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

async function modifyPDF(input, output,testFields) {

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
      //   { x: 273, y: height - 196, width: 110, height: 10, text: testFields.Ecg, color: rgb(0, 0, 0) },
    ];

    for (const field of fields) {
      firstPage.drawRectangle({
        x: field.x,
        y: field.y,
        width: field.width,
        height: field.height,
        color: rgb(1, 1, 1), // White color to cover existing text
      });

      firstPage.drawText(field.text, {
        x: field.x + 2,
        y: field.y,
        size: 10,
        font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
        color: field.color, // Use dynamic color
      });
    }

    firstPage.drawRectangle({
      x: 260,
      y: height - 196,
      width: 80,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText(testFields.Ecg, {
      x: 275,
      y: height - 196,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // Save the modified PDF to a new file
    const pdfBytes = await pdfDoc.save();
    await writeFile(output, pdfBytes);

    console.log('PDF modified successfully');
  } catch (error) {
    console.error('Error modifying PDF:', error);
  }
}



// Modify the PDF with the specified input and output file paths and user data
// module.exports = { modifyPDF, input: './PDF/32_electro_cardiogram.pdf', output: './results/32_electro_cardiogram.pdf' };

module.exports = { modifyPDF };
