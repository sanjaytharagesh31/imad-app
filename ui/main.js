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
