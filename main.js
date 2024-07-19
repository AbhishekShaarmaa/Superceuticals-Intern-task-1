// const { modifyPDF: modifyPDF19, input: input19, output: output19 } = require('./test/19');
// const { modifyPDF: modifyPDF21, input: input21, output: output21 } = require('./test/21_U_Albumium');
// const { modifyPDF: modifyPDF20, input: input20, output: output20 } = require('./test/20_blood_glucose');
// const { modifyPDF: modifyPDF22, input: input22, output: output22 } = require('./test/22_glucose-nonvansive');
// const { modifyPDF: modifyPDF23, input: input23, output: output23 } = require('./test/23_rsv-ag');
// const { modifyPDF: modifyPDF24, input: input24, output: output24 } = require('./test/24_legionella');
// const { modifyPDF: modifyPDF25, input: input25, output: output25 } = require('./test/25_covid-antigent');
// const { modifyPDF: modifyPDF26, input: input26, output: output26 } = require('./test/26_S-pneumonia_ag');
// const { modifyPDF: modifyPDF27, input: input27, output: output27 } = require('./test/27_strep-ag');
// const { modifyPDF: modifyPDF28, input: input28, output: output28 } = require('./test/28_Dengue_Ns1_AG');
// const { modifyPDF: modifyPDF29, input: input29, output: output29 } = require('./test/29_Dengue_IgmIg');
// const { modifyPDF: modifyPDF30, input: input30, output: output30 } = require('./test/30_chikungunya');
// const { modifyPDF: modifyPDF31, input: input31, output: output31 } = require('./test/31_iFOB');
// const { modifyPDF: modifyPDF32, input: input32, output: output32 } = require('./test/32_electro_cardiogram');
// const { modifyPDF: modifyPDF33, input: input33, output: output33 } = require('./test/26_S-pneumonia_ag');
// const { modifyPDF: modifyPDF34, input: input34, output: output34 } = require('./test/34_SGOTAST');
// const { modifyPDF: modifyPDF35, input: input35, output: output35 } = require('./test/35_SGPT_ALT');
// const { modifyPDF: modifyPDF36, input: input36, output: output36 } = require('./test/36_AST_ALT');
// const { modifyPDF: modifyPDF37, input: input37, output: output37 } = require('./test/37_GGTP');
// const { modifyPDF: modifyPDF38, input: input38, output: output38} = require('./test/38_Alkaline_Phosphatase');

// modifyPDF19(input19, output19);
// modifyPDF20(input20, output20);
// modifyPDF21(input21, output21);
// modifyPDF22(input22, output22);
// modifyPDF23(input23, output23);
// modifyPDF24(input24, output24);
// modifyPDF25(input25, output25);
// modifyPDF26(input26, output26);
// modifyPDF27(input27, output27);
// modifyPDF28(input28, output28);
// modifyPDF29(input29, output29);
// modifyPDF30(input30, output30);
// modifyPDF31(input31, output31);
// modifyPDF32(input32, output32);
// modifyPDF33(input33, output33);
// modifyPDF34(input34, output34);
// modifyPDF35(input35, output35);
// modifyPDF36(input36, output36);
// modifyPDF37(input37, output37);
// modifyPDF38(input38, output38);

const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile } = require('fs/promises');
const path = require('path');

async function processAndCombinePDFs(userData) {
    try {
        const userId = userData.userData.patientId; // Updated to use patientId
        const tests = userData.categoryName;
        const modifiedPdfPaths = [];

        // Iterate over each test in the JSON object
        for (const [testName, testFields] of Object.entries(tests)) {
            const inputPdfPath = path.join(__dirname, `./PDF/${testName.replace('_', '_')}.pdf`); // Assuming each test has a corresponding PDF
            const outputPdfPath = path.join(__dirname, `./results/${testName.replace('_', '_')}.pdf`);

            // Dynamically import the modify function for the current test
            const { modifyPDF } = await import(`./test/${testName.replace('_', '_')}.js`);

            // Merge user data with test-specific data
            const combinedFields = { ...userData.userData, ...testFields };

            // Modify the PDF for the current test
            await modifyPDF(inputPdfPath, outputPdfPath, combinedFields);

            // Store the path of the modified PDF
            modifiedPdfPaths.push(outputPdfPath);
        }

        // Combine all modified PDFs into a single PDF
        const combinedPdfDoc = await PDFDocument.create();

        for (const pdfPath of modifiedPdfPaths) {
            const pdfBytes = await readFile(pdfPath);
            const pdfDoc = await PDFDocument.load(pdfBytes);
            const pages = await combinedPdfDoc.copyPages(pdfDoc, pdfDoc.getPageIndices());

            pages.forEach((page) => {
                combinedPdfDoc.addPage(page);
            });
        }

        // Save the combined PDF
        const combinedPdfBytes = await combinedPdfDoc.save();
        const combinedOutputPath = path.join(__dirname, `./results/${userId}_combined.pdf`);
        await writeFile(combinedOutputPath, combinedPdfBytes);

        console.log('Combined PDF created successfully:', combinedOutputPath);
    } catch (error) {
        console.error('Error processing and combining PDFs:', error);
    }
}

// Sample JSON object for testing
const sampleData = {
    userData: {
        name: 'sankalp',
        patientId: 'Patient Id', // Updated to use patientId
        gender: 'male',
        place: 'Place',
        age: '21',
        acStatus: 'A/C status',
        labNo: 'lab no.',
        refBy: 'ref by.',
        dateAndTime: 'date & time',
    },
    categoryName: {
        "20_blood_glucose": {
            RandomGlucose: '80',
            PostPrandialGlucose: '60',
        },
        // "21_U_Albumium": {
        //     dateAndTime: 'date & time',
        //     UAlbumin: '10',
        // }
    }
};

// Call the function with the sample data
processAndCombinePDFs(sampleData);

