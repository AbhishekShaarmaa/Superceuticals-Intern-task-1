const { PDFDocument } = require('pdf-lib');
const { readFile, writeFile, readdir, unlink } = require('fs/promises');
const path = require('path');

async function processAndCombinePDFs(userData) {
    try {
        const userId = userData.userData.patientId;
        const tests = userData.categoryName;
        const modifiedPdfPaths = [];

        const resultsDir = path.join(__dirname, './results');



        // Iterate over each test in the JSON object and modify PDFs
        await Promise.all(Object.entries(tests).map(async ([testName, testFields]) => {
            const inputPdfPath = path.join(__dirname, `./PDF/${testName.replace('_', '_')}.pdf`);
            const outputPdfPath = path.join(resultsDir, `${testName.replace('_', '_')}.pdf`);

            const { modifyPDF } = await import(`./test/${testName.replace('_', '_')}.js`);

            // Merge user data with test-specific data
            const combinedFields = { ...userData.userData, ...testFields };

            // Modify the PDF for the current test
            await modifyPDF(inputPdfPath, outputPdfPath, combinedFields);

            // Store the path of the modified PDF
            modifiedPdfPaths.push(outputPdfPath);
        }));

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
        const combinedOutputPath = path.join(resultsDir, `${userId}_combined.pdf`);
        await writeFile(combinedOutputPath, combinedPdfBytes);

        console.log('Combined PDF created successfully:', combinedOutputPath);

        // Delete individual modified PDFs
        await Promise.all(modifiedPdfPaths.map(pdfPath => unlink(pdfPath)));

        console.log('Individual modified PDFs deleted successfully.');
    } catch (error) {
        console.error('Error processing and combining PDFs:', error);
    }
}

// Sample JSON object for testing
const sampleData = {
    userData: {
        name: 'abhishek',
        patientId: '6',
        gender: 'male',
        place: 'Place',
        age: '21',
        acStatus: 'A/C status',
        labNo: 'lab no.',
        refBy: 'ref by.',
        dateAndTime: 'date & time',
    },
    categoryName: {
        "blood_glucose": {
            RandomGlucose: '80',
            PostPrandialGlucose: '60',
        },
        "U_Albumium": {
            UAlbumin: '10',
        },
        "glucose-nonvansive": {
            hba1c: '2',
            eag: '10',
        },
        "covid-antigent":{
            covidantigen:'10'
        }
    }
};

// Call the function with the sample data
processAndCombinePDFs(sampleData);
