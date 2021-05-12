player_1=localStorage.getItem("player_1");
player_2=localStorage.getItem("player_2");

player_1_score=0;
player_2_score=0;

document.getElementById("player1_name").innerHTML=player_1 + " : " ;
document.getElementById("player2_name").innerHTML=player_2 + " : " ;

document.getElementById("player1_score").innerHTML=player_1_score;
document.getElementById("player2_score").innerHTML=player_2_score;

document.getElementById("player_question").innerHTML="Question Turn : " + player_1;
document.getElementById("player_answer").innerHTML="Answer Turn : " + player_2;

function send()
{
   get_word=document.getElementById("word").value;
   word=get_word.toLowerCase();
   console.log(word);
   char_at1=word.charAt(1);
   console.log(char_at1);

   word_length=Math.floor(word.length/2);
   char_at2=word.charAt(word_length);
   console.log(char_at2);


   last_position=word.length-1;
   char_at3=word.charAt(last_position);
   console.log(char_at3);


   replace_1=word.replace(char_at1,"_");
   replace_2=replace_1.replace(char_at2,"_");
   replace_3=replace_2.replace(char_at3,"_");
   console.log(replace_3);

   question_word = "<h4 id='word_display'> Q. "+replace_3+"</h4>"; 
   input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
     row = question_word + input_box + check_button ; document.getElementById("output").innerHTML = row;
      document.getElementById("word").value = "";

    

}

question_player=player_1;
answer_player=player_2;

function check(){
answer=document.getElementById("input_check_box").value;
toanswer=answer.toLowerCase();
      if(toanswer==word){
      
      if(answer_player==player_1){
            player_1_score=player_1_score+1;
            document.getElementById("player1_score").innerHTML=player_1_score;

            
      }
      else{
            player_2_score=player_2_score+1;
            document.getElementById("player2_score").innerHTML=player_2_score;
      }

      if(question_player==player_1){
            question_player=player_2;
            document.getElementById("player_question").innerHTML="Question Turn : "+question_player;
      }
      else{
            question_player=player_1;
            document.getElementById("player_answer").innerHTML="Question Turn : "+question_player;
      }
      if(answer_player==player_1){
            answer_player=player_2;
            document.getElementById("player_question").innerHTML="Answer Turn : "+answer_player;
      }
      else{
            (answer_player=player_1);
            document.getElementById("player_answer").innerHTML="Answer Turn : "+answer_player;
      }
       
   

      }
      document.getElementById("output").innerHTML="";

      
}




