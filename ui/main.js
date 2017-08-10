//counter code
var button = document.getElementById('counter');
button.onclick = function(){
    
    //create request object
    var request = new XMLHttpRequest();
    
    //capture the request and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest,DONE){
            if(request.status === 200) {
                //capture list of names and render it as list
                var names = request.responseText;
                names = JSON.parse(names);
                var list ='';
                for (var i=0; i<names.length; i++){
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
    };
    
    //make the request
    request.open('GET', 'http://sanjay311999.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
};

//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make a request to server and send name
    var request = new XMLHttpRequest();
    
    //capture the request and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest,DONE){
            if(request.status === 200) {
                //capture list of names and render it as list
                var names = request.responseText;
                names = JSON.parse(names);
                var list ='';
                for (var i=0; i<names.length; i++){
                    list += '<li>' + names[i] + '</li>';
                }
                var ul = document.getElementById('namelist');
                ul.innerHTML = list;
            }
        }
};