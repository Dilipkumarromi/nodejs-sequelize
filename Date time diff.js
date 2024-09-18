# create functions --> current time
function currentDateFormatting(dateString: any) {
  const date = new Date(dateString);
  const utcOffset = date.getTimezoneOffset();
  const istOffset = 330; // IST is 5 hours and 30 minutes ahead of UTC
  const istTime = date.getTime() + (istOffset - utcOffset) * 60000;

  const istDate = new Date(istTime);
  const year = istDate.getUTCFullYear();
  const month = (`0${istDate.getUTCMonth() + 1}`).slice(-2);
  const day = (`0${istDate.getUTCDate()}`).slice(-2);
  const hour = (`0${istDate.getUTCHours()}`).slice(-2);
  const minute = (`0${istDate.getUTCMinutes()}`).slice(-2);
  const second = (`0${istDate.getUTCSeconds()}`).slice(-2);

  return `${year}-${month}-${day}T${hour}:${minute}:${second}+05:30`;
}
# Db date time
function dbPastDateFormatting(dateString:any) {
  const [date, time] = dateString.split(' ');
  const [year, month, day] = date.split('-');
  const [hour, minute, second] = time.split(':');

  // Add IST time zone
  return `${year}-${month}-${day}T${hour}:${minute}:${second}+05:30`;
}
# comment function called
    const dbPastDate = helpers.dbPastDateFormatting(val.createdAt);
    const currentDate = helpers.currentDateFormatting(new Date());
# moment
 // Define the two dates and times
 
#const date1 = moment('2024-09-18T14:30:00');
#const date2 = moment('2024-09-18T16:45:00');
    const date1 = moment(dbPastDate);
    const date2 = moment(currentDate);

    // Calculate the difference between the two dates and times
    const duration = moment.duration(date2.diff(date1));

    // Extract the hours, minutes, and seconds from the duration
    let currentStatus: any;
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    const days = duration.days();
    if (hours > 0) {
      currentStatus = hours + " hours ago";
    } else if (minutes > 0) {
      currentStatus = minutes + " minutes ago";
    } else if (days > 0) {
      currentStatus = days + " days ago";
    } else {
      currentStatus = seconds + " seconds ago";
    }
