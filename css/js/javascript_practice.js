var myVar = "global";
//so you can declare stuff in the js file like this and include it in the head tag
//and then use it in the html. But you have to include script tag with text/javascript
//in order to use the included javascript file's content.
function checkscope(){
    	alert("Goodbye!")
        var list = [1,2,3];
        document.write(list[0]);
    }
