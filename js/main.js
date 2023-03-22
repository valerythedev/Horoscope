// Get the values of the birthdate
// depending on the date of birth assign zodiac


document.querySelector('#YouAreAStar').addEventListener('click', zodiaCal)
function zodiaCal() {
  // we're creating a variable, and we don't know what the zodiac sign is yet so we asign it nothing
  let birthDate = Number(document.getElementById("birthdate").value); 
  console.log(birthDate)
  let birthMonth = Number(document.getElementById("birthmonth").value);
  console.log(birthMonth)
  let zodiacSign = "";
  // here we're deciding what the zodiac sign is.
  if ((birthMonth == 1 && birthDate <= 20) || (birthMonth == 12 && birthDate >= 22)) {
    zodiacSign = "Capricorn";
  } else if ((birthMonth == 1 && birthDate >= 21) || (birthMonth == 2 && birthDate <= 18)) {
    zodiacSign = "Aquarius";
  } else if ((birthMonth == 2 && birthDate >= 19) || (birthMonth == 3 && birthDate <= 20)) {
    zodiacSign = "Pisces";
  } else if ((birthMonth == 3 && birthDate >= 21) || (birthMonth == 4 && birthDate <= 20)) {
    zodiacSign = "Aries";
  } else if ((birthMonth == 4 && birthDate >= 21) || (birthMonth == 5 && birthDate <= 20)) {
    zodiacSign = "Taurus";
  } else if ((birthMonth == 5 && birthDate >= 21) || (birthMonth == 6 && birthDate <= 20)) {
    zodiacSign = "Gemini";
  } else if ((birthMonth == 6 && birthDate >= 21) || (birthMonth == 7 && birthDate <= 22)) {
    zodiacSign = "Cancer";
  } else if ((birthMonth == 7 && birthDate >= 23) || (birthMonth == 8 && birthDate <= 22)) {
    zodiacSign = "Leo";
  } else if ((birthMonth == 8 && birthDate >= 23) || (birthMonth == 9 && birthDate <= 22)) {
    zodiacSign = "Virgo";
  } else if ((birthMonth == 9 && birthDate >= 23) || (birthMonth == 10 && birthDate <= 22)) {
    zodiacSign = "Libra";
  } else if ((birthMonth == 10 && birthDate >= 23) || (birthMonth == 11 && birthDate <= 22)) {
    zodiacSign = "Scorpio";
  } else if ((birthMonth == 11 && birthDate >= 23) || (birthMonth == 12 && birthDate <= 21)) {
    zodiacSign = "Sagittarius";
  }
  // here we're showing what the zodiac sign is
  document.getElementById("zodiacSign").innerText = zodiacSign;
}
