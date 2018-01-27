function formatDates(time) {
  const dd = time.getDate();
  const mm = time.getMonth()+1;
  const yyyy = time.getFullYear();

  if(dd<10) {
    dd='0'+dd;
  }

  if(mm<10) {
    mm='0'+mm;
  }

  return ""+ yyyy + mm + dd;
}

export {formatDates};
