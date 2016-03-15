var group = [];

 

while (group.length < 5) {
    var NewName = prompt("Введите красивое имя?", '');
    console.log (group.length);
    group.push (NewName);
    console.log (group);
} 

var leng = group.length;
var GroupName;
var i;

var UserName = prompt("Введите Ваше имя?", ''); 

var name = group.indexOf(UserName);

if ( name == -1) {
       
     alert ( UserName+ ', Вас нет у нас!');
       
} else {
       
     alert ( UserName+ ', это космос, Детка!');
}
    

    
    
