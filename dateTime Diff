/**
 * 
 * @param {*} inputDate  ="2023-11-03T18:33:59.000Z"
 * @returns 
 */
function convertDateFormatToIST(inputDate) {
  // Create a new Date object from the input string
  let date = new Date(inputDate);

  // Convert the date to milliseconds, add 5 hours and 30 minutes (IST time offset)
  let ISTOffset = 5.5 * 60 * 60 * 1000; // 5 hours 30 minutes in milliseconds
  let dateIST = new Date(date.getTime() + ISTOffset);

  // Extract the year, month, day, hours, minutes, and seconds
  let year = dateIST.getUTCFullYear();
  let month = String(dateIST.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  let day = String(dateIST.getUTCDate()).padStart(2, '0');
  let hours = String(dateIST.getUTCHours()).padStart(2, '0');
  let minutes = String(dateIST.getUTCMinutes()).padStart(2, '0');
  let seconds = String(dateIST.getUTCSeconds()).padStart(2, '0');

  // Return the formatted date in the desired format
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}

// // Example usage:
// let inputDate = "2023-11-03T18:33:59.000Z";
// let convertedDate = convertDateFormatToIST(inputDate);


/**
 * 
 * @param {*} date1 (start date)= "2024-09-15T12:00:00";
 * @param {*} date2 (end Date)= "2024-09-17T15:30:00";
 * @returns 
 */
function diffDateTime(date1, date2) {
  // Convert both dates to JavaScript Date objects
  let start = new Date(date1);
  let end = new Date(date2);
  // Get the difference in milliseconds
  let diffInMs 
  diffInMs = end - start;

  // Calculate the difference in days, hours, and minutes
  let diffInMinutes =Math.abs(Math.floor(diffInMs / (1000 * 60)));
  let diffInHours = Math.floor(diffInMinutes / 60);
  let diffInDays = Math.floor(diffInHours / 24);

  // Get remaining hours and minutes after calculating days
  let diffTime=''
  let remainingHours = diffInHours % 24;
  let remainingMinutes = diffInMinutes % 60;
  if(diffInDays>0){
    diffTime= diffInDays +" Days "
  }
  else if(remainingHours>0){
    diffTime= remainingHours +" Hours"
  }
  else if(remainingMinutes>1){diffTime=remainingMinutes +" Minutes"}
  else{
    diffTime="Just Now!"
  }

  return {
    // days: diffInDays,
    // hours: remainingHours,
    // minutes: remainingMinutes,
    diff:diffTime
  };
}
