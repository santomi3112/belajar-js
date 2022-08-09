const myAge = (birthday) => {
  const birtday = new Date(birthday);
  const today = Date.now();

  const diff_ms = today - birtday.getTime();
  const diffDate = new Date(diff_ms);

  return diffDate.getFullYear() - 1970;  // 1970 adalah representasi 0 dari miliseconds
};

console.log(myAge('2002-12-31'));