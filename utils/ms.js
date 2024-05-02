const { MongoClient } = require('mongodb');
const ExcelJS = require('exceljs');

// MongoDB connection URL
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'mydatabase';
// Collection Name
const collectionName = 'mycollection';

async function exportToExcel() {
  // Connect to MongoDB
  const client = new MongoClient(url);
  await client.connect();

  try {
    // Get the database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Query MongoDB to retrieve data
    const data = await collection.find().toArray();

    // Create a new Excel workbook
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Data');

    // Add headers to the Excel worksheet
    const headers = Object.keys(data[0]);
    worksheet.addRow(headers);

    // Add data to the Excel worksheet
    data.forEach((item) => {
      const row = [];
      headers.forEach((header) => {
        row.push(item[header]);
      });
      worksheet.addRow(row);
    });

    // Save the Excel file
    const filename = 'exported_data.xlsx';
    await workbook.xlsx.writeFile(filename);
    console.log(`Data exported to ${filename} successfully.`);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}

// Run the export function
exportToExcel().catch(console.error);
