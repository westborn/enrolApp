/**
 *
 * Version 1.2021.0 (Entry of enrolments for I&R day)
 *
 */

/**
 * Creates the menu items for user to run scripts on drop-down.
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi()
  ui.createMenu('U3A Menu').addItem('Enter Enrolments', 'loadCourseDialog').addToUi()
}

function loadCourseDialog() {
  var html = HtmlService.createTemplateFromFile('claspIndex.html').evaluate().setWidth(1048).setHeight(960)
  SpreadsheetApp.getUi().showModalDialog(html, 'U3A Course Enrolment')
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent()
}

function getSheet(sheetName) {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  const data = ss.getSheetByName(sheetName).getDataRange().getValues()
  const dataObj = getJsonArrayFromData(data)
  return JSON.stringify(dataObj)
}
