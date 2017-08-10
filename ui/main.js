//counter code
var button = document.getElementById('counter');
button.onclick = function(){
    
    //create request object
    var request = new XMLHttpRequest();
    
    //capture the request and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest,DONE){
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                counter = counter + 1;
                span.innerHTML = counter.toString();
            }
        }
    };
    
    //make the request
    request.open('GET', 'http://sanjay311999.imad.hasura-app.io/counter', true);
    request.send(null);
};

//Submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //make a request to server and send name
    //capture list of names and render it as list
    var names = ["name1", "name2", "name3", "name4"];
    var list ='';
    for (var i=0; i<names.length; i++){
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
};