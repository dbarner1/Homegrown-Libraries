function formatThisTime(time) {
  let estHour, PMorAM, timeStampArray;

  formatRawHour(time);
  return (
    estHour +
    timeStampArray[13] +
    timeStampArray[14] +
    timeStampArray[15] + 
    " " +
    PMorAM;
  )
}

formatRawHour(time) {
  timeStampArray = ("" + time).split("");
  raw_hour = "" + timeStampArray[11]+timeStampArray[12];

  ( raw_hour - 5 ) > 0 ? formatAMTime(raw_hour) : null
  ( raw_hour > 12 ) ? formatPMTime(raw_hour) : null
  ( raw_hour >= 12 ) && ( raw_hour - 5 ) >= 0 ? estHour = raw_hour : null
}

formatAMTime(time) {
  estHour = (time - 5);
  PMorAM = "AM"
}

formatPMTime(time) {
  estHour =  raw_hour - 12;
  let PMorAM = "PM"
}

export {formatThisTime};
