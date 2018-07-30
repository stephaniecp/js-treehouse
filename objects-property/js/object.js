var person = {
  name : 'Stephanie',
  country : 'US',
  age : 28,
  treehouseStudent : true,
  skills : ['JavaScript', 'HTML', 'CSS']
};

function print(messaxge) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I live in the ' + person.country + '</p>';
person.name = 'Serious Bear';
message += '<p>But, I wish my name was ' + person.name + '</p>';
person.age += 1;
message += '<p>My age is now ' + person.age + '</p>';
message += '<p>I have ' + person.skills.join(',') + '</p>';
print(message);