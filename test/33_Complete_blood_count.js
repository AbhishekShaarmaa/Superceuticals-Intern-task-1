const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

async function modifyPDF(input, output, userData) {
  try {
    // Load the existing PDF document
    const existingPdfBytes = await readFile(input);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Get the pages of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const secondPage = pages[1];

    // Get the dimensions of the first page
    const { width, height } = firstPage.getSize();
    console.log(`First page dimensions: width = ${width}, height = ${height}`);

    // Get the dimensions of the second page
    const { width: width1, height: height1 } = secondPage.getSize();
    console.log(`Second page dimensions: width = ${width1}, height = ${height1}`);

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
    ];

    for (const field of fields) {
      console.log(`Drawing rectangle at x = ${field.x}, y = ${field.y}, width = ${field.width}, height = ${field.height}`);
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

    // Draw additional text and rectangles on the first page
    const additionalFields = [
      { x: 340, y: height - 222, width: 40, height: 10, text: 'Data1', color: rgb(0, 0, 0) },
      { x: 340, y: height - 247, width: 40, height: 10, text: 'Data2', color: rgb(0, 0, 0) },
      { x: 340, y: height - 277, width: 100, height: 10, text: 'Data3', color: rgb(0, 0, 0) },
      { x: 340, y: height - 300, width: 100, height: 10, text: 'Data4', color: rgb(0, 0, 0) },
      { x: 340, y: height - 325, width: 100, height: 10, text: 'Data5', color: rgb(0, 0, 0) },
      { x: 340, y: height - 353, width: 100, height: 12, text: 'Data6', color: rgb(0, 0, 0) },
      { x: 340, y: height - 379, width: 100, height: 12, text: 'Data7', color: rgb(0, 0, 0) },
      { x: 340, y: height - 416, width: 100, height: 12, text: 'Data8', color: rgb(0, 0, 0) },
      { x: 340, y: height - 442, width: 100, height: 12, text: 'Data9', color: rgb(0, 0, 0) },
      { x: 340, y: height - 472, width: 100, height: 12, text: 'Data10', color: rgb(0, 0, 0) },
      { x: 340, y: height - 492, width: 100, height: 12, text: 'Data11', color: rgb(0, 0, 0) },
      { x: 340, y: height - 522, width: 100, height: 12, text: 'Data12', color: rgb(0, 0, 0) },
      { x: 340, y: height - 548, width: 100, height: 12, text: 'Data13', color: rgb(0, 0, 0) },
      { x: 340, y: height - 569, width: 100, height: 12, text: 'Data14', color: rgb(0, 0, 0) },
      { x: 340, y: height - 599, width: 100, height: 12, text: 'Data15', color: rgb(0, 0, 0) },
      { x: 340, y: height - 625, width: 100, height: 12, text: 'Data16', color: rgb(0, 0, 0) },
    ];

    for (const field of additionalFields) {
      console.log(`Drawing additional rectangle at x = ${field.x}, y = ${field.y}, width = ${field.width}, height = ${field.height}`);
      firstPage.drawRectangle({
        x: field.x,
        y: field.y,
        width: field.width,
        height: field.height,
        color: rgb(1, 1, 1), // White color to cover existing text
      });

      firstPage.drawText(field.text, {
        x: field.x + 10,
        y: field.y,
        size: 10,
        font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
        color: field.color, // Use dynamic color
      });
    }

    // Define fields for the second page
    const fields2 = [
      { x: 37, y: height1 - 78, width: 110, height: 10, text: userData.name, color: rgb(0, 0, 0) },
      { x: 195, y: height1 - 78, width: 110, height: 10, text: userData.patientId, color: rgb(0, 0, 0) },
      { x: 339, y: height1 - 78, width: 110, height: 10, text: userData.gender, color: rgb(0, 0, 0) },
      { x: 37, y: height1 - 98, width: 110, height: 10, text: userData.place, color: rgb(0.5, 0, 0) },
      { x: 172, y: height1 - 98, width: 110, height: 10, text: userData.age, color: rgb(0, 0, 0) },
      { x: 351, y: height1 - 98, width: 110, height: 10, text: userData.acStatus, color: rgb(0, 0, 0) },
      { x: 43, y: height1 - 120, width: 90, height: 10, text: userData.labNo, color: rgb(0, 0, 0) },
      { x: 183, y: height1 - 120, width: 90, height: 10, text: userData.refBy, color: rgb(0, 0, 0) },
      { x: 359, y: height1 - 120, width: 110, height: 10, text: userData.dateAndTime, color: rgb(0, 0, 0) },
    ];

    // Draw fields on the second page
    for (const field of fields2) {
      console.log(`Drawing rectangle on second page at x = ${field.x}, y = ${field.y}, width = ${field.width}, height = ${field.height}`);
      secondPage.drawRectangle({
        x: field.x,
        y: field.y,
        width: field.width,
        height: field.height,
        color: rgb(1, 1, 1), // White color to cover existing text
      });

      secondPage.drawText(field.text, {
        x: field.x + 2,
        y: field.y,
        size: 10,
        font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
        color: field.color, // Use dynamic color
      });
    }

    // Draw additional rectangles and text on the second page
    const additionalFields2 = [
      { x: 340, y: height1 - 170, width: 100, height: 10, text: 'Data1', color: rgb(0, 0, 0) },
      { x: 340, y: height1 - 200, width: 100, height: 10, text: 'Data2', color: rgb(0, 0, 0) },
      { x: 340, y: height1 - 225, width: 100, height: 10, text: 'Data3', color: rgb(0, 0, 0) },
      { x: 340, y: height1 - 250, width: 100, height: 10, text: 'Data4', color: rgb(0, 0, 0) },
      { x: 340, y: height1 - 275, width: 100, height: 10, text: 'Data5', color: rgb(0, 0, 0) },
    ];

    for (const field of additionalFields2) {
      console.log(`Drawing additional rectangle on second page at x = ${field.x}, y = ${field.y}, width = ${field.width}, height = ${field.height}`);
      secondPage.drawRectangle({
        x: field.x,
        y: field.y,
        width: field.width,
        height: field.height,
        color: rgb(0.5, 1, 1), // Light gray color for additional rectangles
      });

      secondPage.drawText(field.text, {
        x: field.x + 10,
        y: field.y,
        size: 10,
        font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
        color: field.color, // Use dynamic color
      });
    }

    // Serialize the PDFDocument to bytes
    const pdfBytes = await pdfDoc.save();

    // Write the modified PDF to the output file
    await writeFile(output, pdfBytes);
    console.log('PDF modified successfully');
  } catch (err) {
    console.error('Error modifying PDF:', err);
  }
}

// Test data
const userData = {
  name: 'John Doe',
  patientId: '12345',
  gender: 'Male',
  place: 'Cityville',
  age: '30',
  acStatus: 'Active',
  labNo: '67890',
  refBy: 'Dr. Smith',
  dateAndTime: '2023-12-31 10:00',
  Ecg: 'Normal',
};

const inputPath = 'path/to/input.pdf';
const outputPath = 'path/to/output.pdf';

// Call the function to modify the PDF
modifyPDF('../PDF/33_Complete_blood_count.pdf', '../results/33_Complete_blood_count.pdf', userData);
