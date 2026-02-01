# Google Apps Script Backend Setup

To complete the contact form architecture, you need to set up a Google Sheet and a Google Apps Script.

## Steps:

1.  **Create a Google Sheet**:
    *   Go to [Google Sheets](https://sheets.google.com) and create a new sheet.
    *   Name it something like "Website Enquiries".
    *   Add headers to the first row (A1:J1):
        *   `Timestamp`
        *   `First Name`
        *   `Last Name`
        *   `Email`
        *   `Phone`
        *   `State`
        *   `City`
        *   `Pincode`
        *   `Query`
        *   `Message`

2.  **Open Apps Script**:
    *   In the Google Sheet, go to **Extensions > Apps Script**.

3.  **Paste the Code**:
    *   Delete any code in the `Code.gs` file and paste the following:

```javascript
function doPost(e) {
  try {
    // Open the spreadsheet (uses the active one linked to the script)
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    
    // Append the data as a new row
    sheet.appendRow([
      new Date(), // Timestamp
      data.firstName,
      data.lastName,
      data.email,
      data.countryCode + " " + data.phoneNumber, // Combine Code and Number
      data.state,
      data.city,
      data.pincode,
      data.query,
      data.message
    ]);
    
    // Return a success response
    return ContentService.createTextOutput(JSON.stringify({'result': 'success'}))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return an error response
    return ContentService.createTextOutput(JSON.stringify({'result': 'error', 'error': error.toString()}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4.  **Deploy as Web App**:
    *   Click **Deploy > New deployment**.
    *   **Select type**: Web app.
    *   **Description**: "Contact Form API".
    *   **Execute as**: Me (your email).
    *   **Who has access**: **Anyone** (This is crucial so the form works for visitors without login).
    *   Click **Deploy**.

5.  **Copy the URL**:
    *   Copy the **Web app URL** generated (it ends with `/exec`).

6.  **Update React Code**:
    *   Open `src/components/ContactUS/ContactUS.tsx`.
    *   Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with the URL you just copied.

## Important Note regarding CORS
The React code uses `mode: 'no-cors'` in the fetch request. This is standard for Google Apps Script Web Apps when accessed from a browser client to avoid CORS errors preventing the request.
*   **Implication**: The browser will technically report an "opaque" response, meaning the React code cannot verify the specific JSON response content (like `{'result': 'success'}`).
*   **Behavior**: We assume success if the network request itself doesn't fail.
