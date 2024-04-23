
function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function submitForm(year, month, image) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("FormResponse");
  
  // Write data to Google Sheet
  var rowData = [new Date(), year, month];
  sheet.appendRow(rowData);

  // Get reference to the parent folder "Electricity"
  var parentFolderId = "1A8nIQNvj4u3jZishZqbnyCqytJqUR0P6"; // Replace with actual parent folder ID
  var parentFolder = DriveApp.getFolderById(parentFolderId);

  // Create child folder based on name + id
  var folderName = month + "_" + year;
  var childFolder = parentFolder.createFolder(folderName);

  // Upload image directly to child folder
  var blob = image.getAs("image/jpeg"); // Assuming image is uploaded as jpeg
  childFolder.createFile(blob);

  // Confirmation message
  return "Form submitted successfully!";
}
