function luhnsAlgorithm(idNumber) {
    idNumber = idNumber.split("");
    let sum = 0;
    for (var i = 0; i < idNumber.length; i++) {
      if (i % 2 == 1) {
        let char = parseInt((idNumber[i] *= 2));
        if (char > 9) {
          char -= 9;
        }
        idNumber[i] = char;
      }
      sum += parseInt(idNumber[i]);
    }
    return sum % 10 == 0;
  }
  
  function isDateValid(year, month, day) {
    month = parseInt(month, 10) - 1;
    let result = 0;
    if (month == 1) {
      if ((year % 4 == 0 && year % 100) || year % 400 == 0) {
        result = 29;
      } else {
        result = 28;
      }
    } else if (month == 8 || month == 3 || month == 5 || month == 10) {
      result = 30;
    } else {
      result = 31;
    }
    return month >= 0 && month < 12 && day > 0 && day <= result;
  }
  
  function isIdNumberValid(idNum) {
    let date = idNum.slice(0, 6);
    let year = parseInt(date.slice(0, 2));
    let month = parseInt(date.slice(2, 4));
    let day = parseInt(date.slice(4, 6));
    let counter = 0;
    
    if (idNum.length == 13) {
      counter++;
    }
    if (luhnsAlgorithm(idNum) == true) {
      counter++;
    }
    if (isDateValid(year, month, day) == true) {
      counter++;
    }
    if (idNum[idNum.length - 3] == 1 || idNum[idNum.length - 3] == 0) {
      counter++;
    }
    return counter == 4;
}
  
document.getElementById("ID").onchange = function(){
    let x = document.getElementById("ID").value;
    if(x.length != 13){
        alert("ID Number length is Incorrect")
    }
}
document.getElementById("submit").onclick = function(){
    let x = document.getElementById("ID").value
    if(isIdNumberValid(x) == true){
        alert("ID number is Valid")
    }
    else{
        alert("ID number is not Valid")
    }
}