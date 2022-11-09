//TO GET THE DATA
//http://localhost:8000/api/users

//TO POST THE DATA
//STEP:1:- RUN THE INDEX.HTML AND ADD THE DATA
//STEP:2:- OPEN USERSLIST.JSON TO SEEN THE DATA

const express = require("express");
const fs = require("file-system");

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());

app.post("/api/users",function(req,res){
    const newUsersData = req.body;
    const currentUsersData = require("./usersList.json");
    currentUsersData.push(newUsersData);
    fs.writeFile("./usersList.json", JSON.stringify(currentUsersData));
});

app.get("/api/users", function(request,response){
    const mockUsers = require("./usersList.json");
    response.send(mockUsers);
});


app.listen(8000, function(){
    console.log("server is started with the port number 8000")
});