import { readFile, writeFile } from 'fs/promises';
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

async function bodyComposition(input, output) {
    try {
        const existingPdfBytes = await readFile(input);
        const pdfDoc = await PDFDocument.load(existingPdfBytes);

        const pages = pdfDoc.getPages();
        const firstPage = pages[0];
        const secondPage = pages[1];
        const thirdPage = pages[2];

        const { width, height } = firstPage.getSize();

        // Page 1

        // Header

        // Name
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
            y: height - 97,
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

        // Table

        // Height
        firstPage.drawRectangle({
            x: 307,
            y: height - 198,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("N/A", {
            x: 317,
            y: height - 195,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Weight
        firstPage.drawRectangle({
            x: 307,
            y: height - 222,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("N/A", {
            x: 317,
            y: height - 222,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // BMI & Body State
        firstPage.drawRectangle({
            x: 307,
            y: height - 249,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("N/A", {
            x: 317,
            y: height - 249,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Body Fat
        firstPage.drawRectangle({
            x: 307,
            y: height - 276,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("N/A", {
            x: 317,
            y: height - 276,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Skeletal Muscle
        firstPage.drawRectangle({
            x: 307,
            y: height - 303,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("N/A", {
            x: 317,
            y: height - 303,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Body Age
        firstPage.drawRectangle({
            x: 307,
            y: height - 328,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("N/A", {
            x: 317,
            y: height - 328,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Resting Metabolism
        firstPage.drawRectangle({
            x: 307,
            y: height - 354,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        firstPage.drawText("N/A", {
            x: 317,
            y: height - 354,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Page 2

        // Header

        secondPage.drawRectangle({
            x: 38,
            y: height - 77,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        secondPage.drawText("Patient Name", {
            x: 40,
            y: height - 75,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Patient ID
        secondPage.drawRectangle({
            x: 196,
            y: height - 77,
            width: 53,
            height: 10,
            color: rgb(1, 1, 1),
        });

        secondPage.drawText("Patient ID", {
            x: 198,
            y: height - 75,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Gender
        secondPage.drawRectangle({
            x: 338,
            y: height - 77,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        secondPage.drawText("Patient Gender", {
            x: 338,
            y: height - 75,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Place
        secondPage.drawRectangle({
            x: 37,
            y: height - 99,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        secondPage.drawText("Patient Place", {
            x: 37,
            y: height - 96,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Age
        secondPage.drawRectangle({
            x: 174,
            y: height - 99,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        secondPage.drawText("Patient Age", {
            x: 174,
            y: height - 96,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // A/C Status
        secondPage.drawRectangle({
            x: 354,
            y: height - 99,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        secondPage.drawText("Patient A/C", {
            x: 354,
            y: height - 96,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Lab No
        secondPage.drawRectangle({
            x: 45,
            y: height - 119,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        secondPage.drawText("Patient Lab No", {
            x: 45,
            y: height - 118,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Ref By
        secondPage.drawRectangle({
            x: 182,
            y: height - 118,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        secondPage.drawText("Patient Ref", {
            x: 184,
            y: height - 118,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Date & Time
        secondPage.drawRectangle({
            x: 358,
            y: height - 118,
            width: 90,
            height: 10,
            color: rgb(1, 1, 1),
        });

        secondPage.drawText("Date & Time", {
            x: 358,
            y: height - 118,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });


        // Page 3

        // Header

        thirdPage.drawRectangle({
            x: 38,
            y: height - 77,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        thirdPage.drawText("Patient Name", {
            x: 40,
            y: height - 75,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Patient ID
        thirdPage.drawRectangle({
            x: 196,
            y: height - 77,
            width: 53,
            height: 10,
            color: rgb(1, 1, 1),
        });

        thirdPage.drawText("Patient ID", {
            x: 198,
            y: height - 75,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Gender
        thirdPage.drawRectangle({
            x: 338,
            y: height - 77,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        thirdPage.drawText("Patient Gender", {
            x: 338,
            y: height - 75,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Place
        thirdPage.drawRectangle({
            x: 37,
            y: height - 99,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        thirdPage.drawText("Patient Place", {
            x: 37,
            y: height - 96,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Age
        thirdPage.drawRectangle({
            x: 174,
            y: height - 99,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        thirdPage.drawText("Patient Age", {
            x: 174,
            y: height - 96,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // A/C Status
        thirdPage.drawRectangle({
            x: 354,
            y: height - 99,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        thirdPage.drawText("Patient A/C", {
            x: 354,
            y: height - 96,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Lab No
        thirdPage.drawRectangle({
            x: 45,
            y: height - 119,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        thirdPage.drawText("Patient Lab No", {
            x: 45,
            y: height - 118,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Ref By
        thirdPage.drawRectangle({
            x: 182,
            y: height - 118,
            width: 50,
            height: 10,
            color: rgb(1, 1, 1),
        });

        thirdPage.drawText("Patient Ref", {
            x: 184,
            y: height - 118,
            size: 8,
            font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
            color: rgb(0, 0, 0),
        });

        // Date & Time
        thirdPage.drawRectangle({
            x: 358,
            y: height - 118,
            width: 90,
            height: 10,
            color: rgb(1, 1, 1),
        });

        thirdPage.drawText("Date & Time", {
            x: 358,
            y: height - 118,
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

export default bodyComposition;