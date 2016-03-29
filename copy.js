

var testfile = {
    body: document.querySelector('body'),
    
    heading: document.createElement('h3'), 
    createhead: function () {
                this.heading.innerHTML = 'Тест по программированию';
                this.body.appendChild(this.heading);
                this.heading.className = 'flow-text';
                    },
    div: document.createElement('div'),
    divcreate: function () {
                this.body.querySelector('body');
                this.div.className = 'box1';
                this.body.appendChild(this.div);
              
                },
    list: document.createElement('ol'),
    listcreate: function () {
                this.div.querySelector('body');
                this.div.appendChild(this.list);
                
      },
    
    createquestion: function () {
                    for (var i = 1; i < 4; i++) {
                    var item = document.createElement('li');
                    this.list = document.querySelector('ol');
                    this.list.appendChild(item);
                    item.innerHTML = 'Вопрос № ' + i;
                    }
    },
    taskcreate: function () {
    
                for (k = 1; k < 4; k++) {   
                for (n = 0; n < 3; n++) {
                var task = document.querySelectorAll('li');
                var word = document.createElement('p');
                task[n].appendChild (word);
                word.innerHTML ='<label> <input type = "checkbox"> </input>Вариант ответа №' + k + '</label>';        
                
                }
             }
            },
    CheckUnswer: document.createElement('button'),
    buttonaction: function () {
                  this.body.appendChild(this.CheckUnswer);
                  this.CheckUnswer.innerHTML = 'Проверить мои результаты';
                  this.CheckUnswer.className = 'waves-effect waves-light btn-large';
        
    }
}
testfile.createhead();
testfile.divcreate();
testfile.listcreate();
testfile.createquestion ();
testfile.taskcreate();
testfile.buttonaction();
var h = document.querySelector ('h3');
h.style.marginLeft = '300px';
var b = document.querySelector('div');
b.style.marginLeft = '350px';
b.style.marginTop = '30px';
var m = document.querySelector('button');
m.style.marginLeft = '370px';