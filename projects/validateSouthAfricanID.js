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

function getDateOfBirth(idNumber, counter = 0) {
  let dateOfBirth = "";
  let Year = idNumber.substring(0, 2);
  let Month = idNumber.substring(2, 4);
  let Day = idNumber.substring(4, 6);

  let cutOffYear = new Date().getFullYear() - 2000;
  if (Year > cutOffYear) {
    dateOfBirth = "19";
  } else {
    dateOfBirth = "20";
  }
  dateOfBirth += Year + "/" + Month + "/" + Day;
  console.log(counter);
  return dateOfBirth;
}

function southAfricanCitizen(num) {
  let result = "";
  if (num == 0) {
    result = "SA citizen";
  } else if (num == 1) {
    result = "Permanent Resident";
  } else {
    result = "Invalid";
  }
  return result;
}

function gender(idNumber) {
  let maleOrFemale = idNumber.slice(6, 10);
  let result = "Invalid";
  if (maleOrFemale >= 0000 && maleOrFemale <= 4999) {
    result = "Female";
  } else if (maleOrFemale >= 5000 && maleOrFemale <= 9999) {
    result = "Male";
  }
  return result;
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
  document.getElementById("DOB").innerHTML =
    "Date of Birth: " + getDateOfBirth(idNum);
  document.getElementById("CITIZEN").innerHTML =
    "CITIZEN: " + southAfricanCitizen(idNum[idNum.length - 3]);
  document.getElementById("GENDER").innerHTML = "Gender: " + gender(idNum);
  document.getElementById("AGE").innerHTML =
    "Age: " +
    (new Date().getFullYear() - parseInt(getDateOfBirth(idNum).slice(0, 5)));
  // document.getElementById("CITIZEN").innerHTML = "Gender: " +
  // getDateOfBirth(idNum, counter)
  return counter == 4;
}

document.getElementById("ID").onchange = function () {
  let x = document.getElementById("ID").value;
  if (x.length != 13) {
    document.getElementById("resultContainer").innerHTML = "Incorrect Length";
  }
};
document.getElementById("submit").onclick = function () {
  let x = document.getElementById("ID").value;
  if (x !== "") {
    // isIdNumberValid(x);
    if (isIdNumberValid(x) == true) {
      document.getElementById("resultContainer").style.color = "blue";
      document.getElementById("resultContainer").innerHTML = "Valid ID Number";
    } else if(x.length !== 13){
      document.getElementById("resultContainer").style.color = "red";
      document.getElementById("resultContainer").innerHTML =
        "Invalid Length";
    }
    else {
      document.getElementById("resultContainer").innerHTML =
        "Invalid ID Number";
    }
  }
  else{
    document.getElementById("resultContainer").innerHTML = "Invalid Input";
  }
};
