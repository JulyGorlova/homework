var group = [];

 

while (group.length < 5) {
    var NewName = prompt("Введите красивое имя?", '');
    console.log (group.length);
    group.push (NewName);
    console.log (group);
} 

var leng = group.length;
var name;
var i;

var UserName = prompt("Введите Ваше имя?", ''); 

for (i = 0; i < leng; i++) {
  name = group [i];
  console.log (name);
  console.log (UserName);
  if (name == UserName) {
       
       alert ( UserName+ ', это космос, Детка!');
     break;
   } 

    
    
}