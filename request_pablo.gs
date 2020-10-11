function request_pablo() 
{ 
  var first_column = 1;
  var second_column = 3;
  
  var first_column_temp = 2;
  var second_column_temp = 4;
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
  
  var array1 = [{}];
  var array2 = [{}];

  for (var i = 0; i < values.length; i++) { 
    array1 = values[i][first_column-1].split("/");
    array2 = values[i][second_column-1].split("/");
    
    sheet.getRange(i+1, first_column_temp).setValue(array1[array1.length-1]);
    sheet.getRange(i+1,second_column_temp).setValue(array2[array2.length-1]);
  }
  
  var range1 = sheet.getRange(1, first_column, sheet.getMaxRows(), first_column_temp);
  range1.sort([{column: first_column_temp, ascending: true}]);
  
  var range2 = sheet.getRange(1, second_column, sheet.getMaxRows(), second_column_temp);
  range2.sort([{column: second_column_temp, ascending: true}]);
}