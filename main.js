function addUser(){
    player1name=document.getElementById("player1_name_input").value;
    player2name=document.getElementById("player2_name_input").value;
    localStorage.setItem("Name1",player1name);
    localStorage.setItem("Name2",player2name);
    window.location="gamepage.html";
}