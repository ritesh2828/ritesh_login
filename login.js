function my()
 {
     var username= document.getElementById("username").value;
     var password = document.getElementById("password").value;
     if(username === "ritesh" && password ===  "rites@123") 
     {
         document.getElementById("demo").innerHTML = "Welcome user:"+ username;
     }
     else
     {
        document.getElementById("demo").innerHTML = "Invalid User Deatil";

     }

}