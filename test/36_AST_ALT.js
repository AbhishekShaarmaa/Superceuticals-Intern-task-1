const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

async function modifyPDF(input, output) {
  // Sample user data
  const userData = {
    name: 'Abhishek',
    patientId: 'Patient Id',
    gender: 'Gender',
    place: 'Place',
    age: 'AGE',
    acStatus: 'A/C status',
    labNo: 'lab no.',
    refBy: 'ref by.',
    dateAndTime: 'date & time',
    Ecg: '10',
  };
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
      { x: 37, y: height - 78, width: 110, height: 10, text: userData.name, color: rgb(0, 0, 0) },
      { x: 195, y: height - 78, width: 110, height: 10, text: userData.patientId, color: rgb(0, 0, 0) },
      { x: 339, y: height - 78, width: 110, height: 10, text: userData.gender, color: rgb(0, 0, 0) },
      { x: 37, y: height - 98, width: 110, height: 10, text: userData.place, color: rgb(0.5, 0, 0) },
      { x: 172, y: height - 98, width: 110, height: 10, text: userData.age, color: rgb(0, 0, 0) },
      { x: 351, y: height - 98, width: 110, height: 10, text: userData.acStatus, color: rgb(0, 0, 0) },
      { x: 43, y: height - 120, width: 90, height: 10, text: userData.labNo, color: rgb(0, 0, 0) },
      { x: 183, y: height - 120, width: 90, height: 10, text: userData.refBy, color: rgb(0, 0, 0) },
      { x: 359, y: height - 120, width: 110, height: 10, text: userData.dateAndTime, color: rgb(0, 0, 0) },
      //   { x: 273, y: height - 196, width: 110, height: 10, text: userData.Ecg, color: rgb(0, 0, 0) },
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

    //AST(SGOT)
    firstPage.drawRectangle({
      x: 300,
      y: height - 196,
      width: 80,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText(userData.Ecg, {
      x: 350,
      y: height - 196,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    //ALT(SGPT)
    firstPage.drawRectangle({
      x: 300,
      y: height - 225,
      width: 80,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText(userData.Ecg, {
      x: 350,
      y: height - 225,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    //AST:ALT Ratio
    firstPage.drawRectangle({
      x: 300,
      y: height - 250,
      width: 80,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText(userData.Ecg, {
      x: 350,
      y: height - 250,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    //GGTP
    firstPage.drawRectangle({
      x: 300,
      y: height - 275,
      width: 80,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText(userData.Ecg, {
      x: 350,
      y: height - 275,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    //ALP
    firstPage.drawRectangle({
      x: 300,
      y: height - 300,
      width: 80,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText(userData.Ecg, {
      x: 350,
      y: height - 300,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    //Billirubin Total
    firstPage.drawRectangle({
      x: 300,
      y: height - 326,
      width: 80,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText(userData.Ecg, {
      x: 350,
      y: height - 326,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    //Billirubin Direct
    firstPage.drawRectangle({
      x: 300,
      y: height - 351,
      width: 80,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText(userData.Ecg, {
      x: 350,
      y: height - 351,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    //Total Protien
    firstPage.drawRectangle({
      x: 300,
      y: height - 379,
      width: 80,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText(userData.Ecg, {
      x: 350,
      y: height - 379,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    //Albumin
    firstPage.drawRectangle({
      x: 300,
      y: height - 405,
      width: 80,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText(userData.Ecg, {
      x: 350,
      y: height - 405,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    //   //Globulin
    //   firstPage.drawRectangle({
    //     x: 300,
    //     y: height - 430,
    //     width: 80,
    //     height: 10,
    //     color: rgb(1, 1, 1), // White color to cover existing text
    //   });

    //   // Add new text to the first page
    //   firstPage.drawText(userData.Ecg, {
    //     x: 350,
    //     y: height - 430,
    //     size: 10,
    //     font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
    //     color: rgb(0, 0, 0), // Black color for the new text
    //   });

    // //Albumin : Globulim
    // firstPage.drawRectangle({
    //   x: 300,
    //   y: height - 455,
    //   width: 80,
    //   height: 10,
    //   color: rgb(1, 1, 1), // White color to cover existing text
    // });

    // // Add new text to the first page
    // firstPage.drawText(userData.Ecg, {
    //   x: 350,
    //   y: height - 455,
    //   size: 10,
    //   font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
    //   color: rgb(0, 0, 0), // Black color for the new text
    // });

    // Save the modified PDF to a new file
    const pdfBytes = await pdfDoc.save();
    await writeFile(output, pdfBytes);

    console.log('PDF modified successfully');
  } catch (error) {
    console.error('Error modifying PDF:', error);
  }
}



// Modify the PDF with the specified input and output file paths and user data
module.exports = { modifyPDF, input: './PDF/36_AST_ALT.pdf', output: './results/36_AST_ALT.pdf' };