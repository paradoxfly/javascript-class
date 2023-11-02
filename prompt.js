const userData = {};

userData.firstName = prompt('Enter your first name');
userData.lastName = prompt('Enter your last name');
userData.middleName = prompt('Enter your middle name');
userData.dateOfBirth = prompt('Enter your date of birth');
userData.maritalStatus = prompt('Enter your marital status');
userData.weight = prompt('Enter your weight');
userData.height = prompt('Enter your height');
userData.highestAcademicQualification = prompt('Enter your highest academic qualification');

let ageClassification = '';

const age = prompt('Enter your age Mr Man');

if (age > 0 && age <= 7) {
  ageClassification = 'Toddler';
} 
else if (age <= 12) {
  ageClassification = 'Adolescent';
}
else if (age <= 19) {
  ageClassification = 'Teenager';
}
else if (age <= 25) {
  ageClassification = "Baby adult";
}
else if (age <= 35) {
  ageClassification = "Adult";
}
else if (age <= 55) {
  ageClassification = "Midlife crisis";
}
else {
  ageClassification = "Ancestor";
}

userData.ageClassification = ageClassification;

console.log(userData);