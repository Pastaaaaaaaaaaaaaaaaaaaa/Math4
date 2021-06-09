var name1=localStorage.getItem("Name1");
var name2=localStorage.getItem("Name2");
var score1=0;
var score2=0;
question_turn = "player1"
answer_turn = "player2"
document.getElementById("player1").innerHTML=name1;
document.getElementById("player2").innerHTML=name2;
document.getElementById("player1score").innerHTML=" : "+score1;
document.getElementById("player2score").innerHTML=" : "+score2;
document.getElementById("word_chooser").innerHTML="Asker: "+name1;
document.getElementById("word_guesser").innerHTML="Answerer: "+name2;
function send(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    real_answer = parseInt(num1)*parseInt(num2);
    question_display = "<h4>" + num1 + "x" + num2 + "</h4>";
    input_box ="<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Submit</button>"
    row = question_display+input_box+check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
function check(){
    get_answer = document.getElementById("input_check_box").value
    if(get_answer == real_answer){

        if(answer_turn == "player1"){
            update_player1_score = score1 + 1;
            document.getElementById("player1score").innerHTML = update_player1_score;
        }
        else{
            update_player2_score = score2 + 1;
            document.getElementById("player2score").innerHTML = update_player2_score;
        }
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("word_chooser").innerHTML = "Asker: "+name2;
        answer_turn ="player1";
        document.getElementById("word_guesser").innerHTML = "Guesser: "+ name1;
    }
    else{
        question_turn = "player1";
        document.getElementById("word_chooser");
        answer_turn ="player2";
        document.getElementById("word_guesser").innerHTML = "Guesser: "+ name2;
    }

}