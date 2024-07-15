const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

async function modifyPDF(input, output) {
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
    hba1c: '19',
    eag: '20',
  };

  try {
    const existingPdfBytes = await readFile(input);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
    const { width, height } = firstPage.getSize();
    const fields = [
      { x: 37, y: height - 78, width: 110, height: 10, text: userData.name, color: rgb(0, 0, 0) },
      { x: 195, y: height - 78, width: 110, height: 10, text: userData.patientId, color: rgb(0, 0, 0) },
      { x: 339, y: height - 78, width: 110, height: 10, text: userData.gender, color: rgb(0, 0, 0) },
      { x: 37, y: height - 98, width: 110, height: 10, text: userData.place, color: rgb(0, 0, 0) },
      { x: 172, y: height - 98, width: 110, height: 10, text: userData.age, color: rgb(0, 0, 0) },
      { x: 351, y: height - 98, width: 110, height: 10, text: userData.acStatus, color: rgb(0, 0, 0) },
      { x: 43, y: height - 120, width: 90, height: 10, text: userData.labNo, color: rgb(0, 0, 0) },
      { x: 183, y: height - 118, width: 90, height: 10, text: userData.refBy, color: rgb(0, 0, 0) },
      { x: 359, y: height - 118, width: 110, height: 10, text: userData.dateAndTime, color: rgb(0, 0, 0) },
      { x: 273, y: height - 225, width: 90, height: 10, text: userData.hba1c, color: parseFloat(userData.hba1c) < 5.7 ? rgb(1, 0, 0) : rgb(0, 0, 0) },
      { x: 273, y: height - 195, width: 90, height: 10, text: userData.eag, color: parseFloat(userData.eag) < 117 ? rgb(1, 0, 0) : rgb(0, 0, 0) },
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
    console.log('PDF modified successfully');
  } catch (error) {
    console.error('Error modifying PDF:', error);
  }
}

module.exports = { modifyPDF, input: './PDF/19.pdf', output: './results/19.pdf' };
