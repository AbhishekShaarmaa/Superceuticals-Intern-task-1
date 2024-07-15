<<<<<<< HEAD
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');

async function modifyPDF(input, output) {
  try {
    // Load the existing PDF document
    const existingPdfBytes = await readFile(input);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Get the dimensions of the first page
    const { width, height } = firstPage.getSize();

    // NAME ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 37,
      y: height - 78,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('TEST ALL', {
      x: 39,
      y: height - 78,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // NAME ------------------------------------------------

        // Patient Id ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 195,
      y: height - 78,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('Patient Id', {
      x: 198,
      y: height - 78,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // Patient Id ------------------------------------------------


            // Gender ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 339,
      y: height - 78,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('Gender', {
      x: 342,
      y: height - 78,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // Gender ------------------------------------------------

    
            // Gender ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 37,
      y: height - 102,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('Place', {
      x: 39,
      y: height - 101,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // Gender ------------------------------------------------

        // AGE ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 172,
      y: height - 100,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('AGE', {
      x: 175,
      y: height - 100,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // AGE  ------------------------------------------------


    
        // A/C status  ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 351,
      y: height - 100,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('A/C status', {
      x: 353,
      y: height - 100,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // A/C status  ------------------------------------------------
            // Lab No.  ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 45,
      y: height - 125,
      width: 90,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('lab no.', {
      x: 45,
      y: height - 123,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

        // A/C status  ------------------------------------------------
            // Lab No.  ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 183,
      y: height - 125,
      width: 90,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('ref by.', {
      x: 183,
      y: height - 123,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });
    // Save the modified PDF to a new file

            // A/C status  ------------------------------------------------
            // Date and Time   ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 365,
      y: height - 125,
      width: 90,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });
    firstPage.drawRectangle({
      x: 305,
      y: height - 135,
      width: 90,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText('date & time', {
      x: 365,
      y: height - 123,
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

// Modify the PDF with the specified input and output file paths
modifyPDF('PDF/TNL.pdf', 'result.pdf');
=======
import bodyComposition from "./functions/01_body_composition.js";
import bloodPressure from "./functions/02_blood_pressure.js";
import Temperature from "./functions/04_temperature.js";
import OxygenLevel from "./functions/05_oxygen_level.js";
import CkMb from "./functions/06_ck_mb.js";
import Tnl from "./functions/07_tnl.js";
import Ddimer from "./functions/08_d_dimer.js";
import NtProBnp from "./functions/09_nt_pro_bnp.js";
import HcCrp from "./functions/10_hc_crp.js";
import LipidProfile from "./functions/11_lipid_profile.js";
import HCG from "./functions/12_hcg.js";
import Lh from "./functions/13_lh.js";
import T4 from "./functions/14_t4.js";
import ft4 from "./functions/15_ft4.js";
import TshWsb from "./functions/16_tsh-wb.js";
import Tsh from "./functions/17_tsh.js";
import Crp from "./functions/18_crp.js";
import Pct from "./functions/19_pct.js";

// Import all your functions in functions dir and import here and call them
// bodyComposition('./pdfs/01.pdf', './results/01.pdf')
// bloodPressure('./pdfs/02.pdf', './results/02.pdf')
// Temperature('./pdfs/04.pdf', './results/04.pdf')
// OxygenLevel('./pdfs/05.pdf', './results/05.pdf')
// CkMb('./pdfs/06.pdf', './results/06.pdf')
// Tnl('./pdfs/07.pdf', './results/07.pdf')
// Ddimer('./pdfs/08.pdf', './results/08.pdf')
// NtProBnp('./pdfs/09.pdf', './results/09.pdf')
// HcCrp('./pdfs/10.pdf', './results/10.pdf')
// LipidProfile('./pdfs/11.pdf', './results/11.pdf')
// HCG('./pdfs/12.pdf', './results/12.pdf')
// Lh('./pdfs/13.pdf', './results/13.pdf')
// T4('./pdfs/14.pdf', './results/14.pdf') --> Corrupted File
// ft4('./pdfs/15.pdf', './results/15.pdf')
// TshWsb('./pdfs/16.pdf', './results/16.pdf')
// Tsh('./pdfs/17.pdf', './results/17.pdf')
// Crp('./pdfs/18.pdf', './results/18.pdf')
Pct('./pdfs/19.pdf', './results/19.pdf')

async function modifyPDF(input, output) {
  try {
    // Load the existing PDF document
    const existingPdfBytes = await readFile(input);
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];

    // Get the dimensions of the first page
    const { width, height } = firstPage.getSize();

    // NAME ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 207,
      y: height - 78,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText("TEST ALL", {
      x: 39,
      y: height - 78,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // NAME ------------------------------------------------

    // Patient Id ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 195,
      y: height - 78,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText("Patient Id", {
      x: 198,
      y: height - 78,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // Patient Id ------------------------------------------------

    // Gender ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 339,
      y: height - 78,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText("Gender", {
      x: 342,
      y: height - 78,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // Gender ------------------------------------------------

    // Gender ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 37,
      y: height - 102,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText("Place", {
      x: 39,
      y: height - 101,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // Gender ------------------------------------------------

    // AGE ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 172,
      y: height - 100,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText("AGE", {
      x: 175,
      y: height - 100,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // AGE  ------------------------------------------------
    // A/C status  ------------------------------------------------
    // Cover the old text (assuming it's at a specific position)
    firstPage.drawRectangle({
      x: 351,
      y: height - 100,
      width: 110,
      height: 10,
      color: rgb(1, 1, 1), // White color to cover existing text
    });

    // Add new text to the first page
    firstPage.drawText("A/C status", {
      x: 353,
      y: height - 100,
      size: 10,
      font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
      color: rgb(0, 0, 0), // Black color for the new text
    });

    // A/C status  ------------------------------------------------

    // Save the modified PDF to a new file
    const pdfBytes = await pdfDoc.save();
    await writeFile(output, pdfBytes);

    console.log("PDF modified successfully");
  } catch (error) {
    console.error("Error modifying PDF:", error);
  }
}

// Modify the PDF with the specified input and output file paths
// modifyPDF("./functions/TNL.pdf", "./results/result.pdf");
>>>>>>> origin/abhishek
