// const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
// const { readFile, writeFile } = require('fs/promises');

// async function modifyPDF(input, output) {
//   const testFields = {
//     name: 'Abhishek',
//     patientId: 'Patient Id',
//     gender: 'Gender',
//     place: 'Place',
//     age: 'AGE',
//     acStatus: 'A/C status',
//     labNo: 'lab no.',
//     refBy: 'ref by.',
//     dateAndTime: 'date & time',
//     RandomGlucose: '800',
//     PostPrandialGlucose: '60',
//   };

//   try {
//     // Load the existing PDF document
//     const existingPdfBytes = await readFile(input);
//     const pdfDoc = await PDFDocument.load(existingPdfBytes);

//     // Get the first page of the document
//     const pages = pdfDoc.getPages();
//     const firstPage = pages[0];

//     // Get the dimensions of the first page
//     const { width, height } = firstPage.getSize();

//     const fields = [
//       { x: 37, y: height - 78, width: 110, height: 10, text: testFields.name, color: rgb(0, 0, 0) },
//       { x: 195, y: height - 78, width: 110, height: 10, text: testFields.patientId, color: rgb(0, 0, 0) },
//       { x: 339, y: height - 78, width: 110, height: 10, text: testFields.gender, color: rgb(0, 0, 0) },
//       { x: 37, y: height - 98, width: 110, height: 10, text: testFields.place, color: rgb(0, 0, 0) },
//       { x: 172, y: height - 98, width: 110, height: 10, text: testFields.age, color: rgb(0, 0, 0) },
//       { x: 351, y: height - 98, width: 110, height: 10, text: testFields.acStatus, color: rgb(0, 0, 0) },
//       { x: 43, y: height - 120, width: 90, height: 10, text: testFields.labNo, color: rgb(0, 0, 0) },
//       { x: 183, y: height - 118, width: 90, height: 10, text: testFields.refBy, color: rgb(0, 0, 0) },
//       { x: 359, y: height - 118, width: 110, height: 10, text: testFields.dateAndTime, color: rgb(0, 0, 0) },
//       { 
//         x: 308, 
//         y: height - 225, 
//         width: 90, 
//         height: 10, 
//         text: testFields.PostPrandialGlucose, 
//         color: (parseFloat(testFields.PostPrandialGlucose) < 70 || parseFloat(testFields.PostPrandialGlucose) > 140) ? rgb(1, 0, 0) : rgb(0, 0, 0) 
//       },
//       { 
//         x: 308, 
//         y: height - 195, 
//         width: 90, 
//         height: 10, 
//         text: testFields.RandomGlucose, 
//         color: (parseFloat(testFields.RandomGlucose) < 70 || parseFloat(testFields.RandomGlucose) > 100) ? rgb(1, 0, 0) : rgb(0, 0, 0) 
//       },
//     ];

//     for (const field of fields) {
//       firstPage.drawRectangle({
//         x: field.x,
//         y: field.y,
//         width: field.width,
//         height: field.height,
//         color: rgb(1, 1, 1), // White color to cover existing text
//       });

//       firstPage.drawText(field.text, {
//         x: field.x + 2,
//         y: field.y,
//         size: 10,
//         font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
//         color: field.color, // Use dynamic color
//       });
//     }

//     // Save the modified PDF to a new file
//     const pdfBytes = await pdfDoc.save();
//     await writeFile(output, pdfBytes);

//     console.log('PDF modified successfully');
//   } catch (error) {
//     console.error('Error modifying PDF:', error);
//   }
// }

// module.exports = { modifyPDF, input: './PDF/20_blood_glucose.pdf', output: './results/20_blood_glucose.pdf' };
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

async function modifyPDF(input, output, testFields) {
  try {
    // Load the existing PDF document
    const existingPdfBytes = await readFile(input);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    console.log(testFields)

    // Get the dimensions of the first page
    const { width, height } = firstPage.getSize();

    // Define field positions and sizes
    const fields = [
      { x: 37, y: height - 76, width: 110, height: 10, text: testFields.name, color: rgb(0, 0, 0) },
      { x: 195, y: height - 76, width: 110, height: 10, text: testFields.patientId, color: rgb(0, 0, 0) },
      { x: 339, y: height - 76, width: 110, height: 10, text: testFields.gender, color: rgb(0, 0, 0) },
      { x: 37, y: height - 98, width: 110, height: 10, text: testFields.place, color: rgb(0, 0, 0) },
      { x: 172, y: height - 98, width: 110, height: 10, text: testFields.age, color: rgb(0, 0, 0) },
      { x: 351, y: height - 98, width: 110, height: 10, text: testFields.acStatus, color: rgb(0, 0, 0) },
      { x: 43, y: height - 120, width: 90, height: 10, text: testFields.labNo, color: rgb(0, 0, 0) },
      { x: 183, y: height - 118, width: 90, height: 10, text: testFields.refBy, color: rgb(0, 0, 0) },
      { x: 359, y: height - 118, width: 110, height: 12, text: testFields.dateAndTime, color: rgb(0, 0, 0) },
      { 
        x: 308, 
        y: height - 223, 
        width: 50, 
        height: 11, 
        text: testFields.PostPrandialGlucose, 
        color: (parseFloat(testFields.PostPrandialGlucose) < 70 || parseFloat(testFields.PostPrandialGlucose) > 140) ? rgb(1, 0, 0) : rgb(0, 0, 0) 
      },
      { 
        x: 308, 
        y: height - 197, 
        width: 50, 
        height: 11, 
        text: testFields.RandomGlucose, 
        color: (parseFloat(testFields.RandomGlucose) < 70 || parseFloat(testFields.RandomGlucose) > 100) ? rgb(1, 0, 0) : rgb(0, 0, 0) 
      },
    ];

    // Draw and write text on the PDF
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

    

    // Save the modified PDF to a new file
    const pdfBytes = await pdfDoc.save();
    await writeFile(output, pdfBytes);

    console.log(`PDF modified successfully: ${output}`);
  } catch (error) {
    console.error('Error modifying PDF:', error);
  }
}

module.exports = { modifyPDF };
