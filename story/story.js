var personName = prompt('Please type your fist name');
var sentence = "<h3> My friend " + personName + ' was born in ';
var yearOfBirth = prompt('Please type your year of birth');
var ageToday = 2018 - yearOfBirth;
var placeOfBirth = prompt ('Please type the name of the city/town where you were born');
alert('Ready to see your very deep and sincere biography?');
sentence += yearOfBirth + " in " + placeOfBirth + " , today my friend is " + ageToday + " years old .</h3>";

document.write(sentence);




