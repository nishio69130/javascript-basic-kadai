const myDate = new Date();

const year = myDate.getFullYear();
const month = myDate.getMonth()+1;
const date =  myDate.getDate();

console.log(year + '年' + month + '月' + date + '日') ;