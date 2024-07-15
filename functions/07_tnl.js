import { readFile, writeFile } from 'fs/promises';
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

async function Tnl(input, output) {
    try {
        const existingPdfBytes = await readFile(input);
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        const pages = pdfDoc.getPages();
        const firstPage = pages[0];

        const { width, height } = firstPage.getSize();

        // Page 1

        // Header

        firstPage.drawRectangle({
            x: 38,
            y: height - 77,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("Patient Name", {
            x: 40,
            y: height - 75,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Patient ID
        firstPage.drawRectangle({
            x: 196,
            y: height - 77,
            width: 53,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("Patient ID", {
            x: 198,
            y: height - 75,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Gender
        firstPage.drawRectangle({
            x: 338,
            y: height - 77,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("Patient Gender", {
            x: 338,
            y: height - 75,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Place
        firstPage.drawRectangle({
            x: 37,
            y: height - 99,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("Patient Place", {
            x: 37,
            y: height - 96,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Age
        firstPage.drawRectangle({
            x: 174,
            y: height - 99,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("Patient Age", {
            x: 174,
            y: height - 96,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // A/C Status
        firstPage.drawRectangle({
            x: 354,
            y: height - 99,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("Patient A/C", {
            x: 354,
            y: height - 96,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Lab No
        firstPage.drawRectangle({
            x: 45,
            y: height - 119,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("Patient Lab No", {
            x: 45,
            y: height - 118,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Ref By
        firstPage.drawRectangle({
            x: 182,
            y: height - 118,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("Patient Ref", {
            x: 184,
            y: height - 118,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Date & Time
        firstPage.drawRectangle({
            x: 358,
            y: height - 118,
            width: 90,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("Date & Time", {
            x: 358,
            y: height - 118,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Table - Content 1
        firstPage.drawRectangle({
            x: 268,
            y: height - 198,
            width: 30,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("N/A", {
            x: 273,
            y: height - 194,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        const pdfBytes = await pdfDoc.save();
        await writeFile(output, pdfBytes);

        console.log("PDF modified successfully");

    } catch (error) {
        console.error("Error modifying PDF:", error);
    }
}

export default Tnl