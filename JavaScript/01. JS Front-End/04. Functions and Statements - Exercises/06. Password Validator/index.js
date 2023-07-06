function solve(password) {
  const length = function (input) {
    if (input.length >= 6 && input.length <= 10) {
      return true;
    }
    console.log(`Password must be between 6 and 10 characters`);
    return false;
  };
  const letterAndDigits = function (input) {
    if (input.match(/^[a-zA-Z0-9]+$/)) {
      return false;
    }
    console.log(`Password must consist only of letters and digits`);
    return true;
  };
  const isHaveTwoDigits = function (input) {
    if (input.match(/(\d{2})/)) {
      return true;
    }
    console.log(`Password must have at least 2 digits`);
    return false;
  };
  let isValidCounter = 0;
  if (!length(password)) {
    isValidCounter++;
  }
  if (letterAndDigits(password)) {
    isValidCounter++;
  }
  if (!isHaveTwoDigits(password)) {
    isValidCounter++;
  }
  if (isValidCounter === 0) {
    return console.log(`Password is valid`);
  }
}
