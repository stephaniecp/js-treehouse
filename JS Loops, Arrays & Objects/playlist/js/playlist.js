var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];

function print(message) {
  document.write(message);
}

function printList(list) {
  var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i += 1) {
//now run as many times as there are items in the array
    listHTML += '<li>'+ list [i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}
printList(playList);