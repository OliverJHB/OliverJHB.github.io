let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById("gifContainer").style.display = "block";


//Funcion que se activa cuando le damos al boton Si
document.getElementById("siBtn").addEventListener("click", function () {
  // Ocultar el gif triste y mostrar el gif feliz
  document.getElementById("sadGifContainer").style.display = "none";
  document.getElementById("sadGifContainer1").style.display = "none";
  document.getElementById("sadGifContainer2").style.display = "none";
  document.getElementById("sadGifContainer3").style.display = "none";
  document.getElementById("threatGifContainer").style.display = "none";
  document.getElementById("threatGifContainer1").style.display = "none";
  document.getElementById("fightGifContainer").style.display = "none";
  document.getElementById("fight1GifContainer").style.display = "none";
  document.getElementById("fight2GifContainer").style.display = "none";
  document.getElementById("deathGifContainer").style.display = "none";
  document.getElementById("gifContainer").style.display = "none";
  document.getElementById("happyGifContainer").style.display = "block";

  // Ocultar los botones "Pregunta Sí" y "No "
  document.getElementById("question").style.display = "none";
  document.getElementById("siBtn").style.display = "none";
  document.body.classList.add("bg-green");
  document.getElementById("noBtn").style.display = "none";

  // Mostrar el mensaje específico
  document.getElementById("messageContainer").style.display = "block";
  document.getElementById("messageContainer").innerHTML = "Well that was unexpected... BUT LET'S GOOO-!";

  // Mostrar otro gif después de 3 segundos
  setTimeout(function () {
    document.getElementById("happyGifContainer").style.display = "none";
    document.getElementById("happyGifContainer2").style.display = "block";
  }, 1000);

  setTimeout(function () {
    document.getElementById("happyGifContainer2").style.display = "none";
    document.getElementById("happyGifContainer3").style.display = "block";
  }, 2000);
  setTimeout(function () {
    document.getElementById("happyGifContainer3").style.display = "none";
    document.getElementById("happyGifContainer4").style.display = "block";
  }, 3000);
});

document.getElementById("noBtn").addEventListener("click", function () {
  switch (noButtonState) {
    case 0:
      // Primera vez haciendo clic en "No"
      document.getElementById("happyGifContainer").style.display = "none";
      document.getElementById("gifContainer").style.display = "none";
      document.getElementById("sadGifContainer").style.display = "block";

      // Modificar el botón "No"
      document.getElementById("noBtn").innerHTML = "You heard me.";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("question").innerHTML = "..............Wut?";
      document.getElementById("siBtn").innerHTML = "Nah jk";
      document.getElementById("siBtn").style.fontSize = "20px";
      document.getElementById("siBtn").style.padding = "10px 20px";

      noButtonClickCount++;
      noButtonState++;
      break;

    case 1:
      // Segunda vez haciendo clic en "No"

      document.getElementById("noBtn").innerHTML = "Boi if you don't shut your bitch ass up.";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("deathGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("question").innerHTML = "D: Why you so mean to me );";
      document.getElementById("siBtn").innerHTML = "Haha got you lol I was kidding";
      document.getElementById("siBtn").style.fontSize = "25px";
      document.getElementById("siBtn").style.padding = "12.5px 25px";

      noButtonState++;
      break;

    case 2:
      document.getElementById("noBtn").innerHTML ="No.";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("threatGifContainer").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("question").innerHTML = "Oh nah you better take that back";
      document.getElementById("siBtn").innerHTML = "Ok ok jeeze I'll hang out with you";
      document.getElementById("siBtn").style.fontSize = "30px";
      document.getElementById("siBtn").style.padding = "15px 15px";

      noButtonState++;
      break;

    case 3:
      document.getElementById("noBtn").innerHTML = "Try me bitch";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("threatGifContainer").style.display = "none";
      document.getElementById("threatGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("question").innerHTML = "Nah bro I swear to god";
      document.getElementById("siBtn").innerHTML = "It was just a prank bro! Sure let's chill, no Netflix tho.";
      document.getElementById("siBtn").style.fontSize = "35px";
      document.getElementById("siBtn").style.padding = "17.2px 35px";

      noButtonState++;
      break;
    case 4:
      document.getElementById("noBtn").innerHTML = "Nah it's just that you a bitch.";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("threatGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "block";


      // Hacer que el botón "Sí" crezca
      document.getElementById("question").innerHTML = "Damn you braver than I thought";
      document.getElementById("siBtn").innerHTML = "...Sorry, I went overboard, let's hang.";
      document.getElementById("siBtn").style.fontSize = "40px";
      document.getElementById("siBtn").style.padding = "20px 40px";

      noButtonState++;
      break;
    case 5:
      document.getElementById("noBtn").innerHTML = "I thought I told ya to shut up";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("question").innerHTML = "Stop being so meeeeeeaaaaan... ):";
      document.getElementById("siBtn").innerHTML = "Ok ok I'll stop, I'll hang out with you or whatever.";
      document.getElementById("siBtn").style.fontSize = "40px";
      document.getElementById("siBtn").style.padding = "20px 20px";

      noButtonState++;
      break;
    case 6:
      document.getElementById("noBtn").innerHTML = "I could honestly not care less";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer3").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("question").innerHTML = "This is too much, I'm gonna go cry in the corner";
      document.getElementById("siBtn").innerHTML = "...Sorry, I'll chill with you just stop crying";
      document.getElementById("siBtn").style.fontSize = "40px";
      document.getElementById("siBtn").style.padding = "20px 40px";

      noButtonState++;
      break;
    case 7:
      document.getElementById("noBtn").innerHTML = "Still don't care, stop being so loud";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("question").innerHTML = "*crying noises*";
      document.getElementById("siBtn").innerHTML = "....Shit I went too far, sorry sorry I'll do as you say.";
      document.getElementById("siBtn").style.fontSize = "40px";
      document.getElementById("siBtn").style.padding = "20px 40px";

      noButtonState++;
      break;
    case 8:
      document.getElementById("noBtn").innerHTML = "SHUT TF UP ALREADY!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("question").innerHTML = "*crying intensifies*";
      document.getElementById("siBtn").innerHTML = "...........Soz.";
      document.getElementById("siBtn").style.fontSize = "40px";
      document.getElementById("siBtn").style.padding = "20px 40px";

      noButtonState++;
      break;

    case 9:
      document.getElementById("noBtn").innerHTML = "Oi! Don't you ignore me!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      // Hacer que el botón "Sí" crezca
      document.getElementById("question").innerHTML = "I'm not talking to meanies... *sniffle sniffle*";
      document.getElementById("siBtn").innerHTML = "....I might have fucked up, look I'm sorry ok.";
      document.getElementById("siBtn").style.fontSize = "40px";
      document.getElementById("siBtn").style.padding = "20px 40px";

      noButtonState++;
      break;

    case 10:
      document.getElementById("noBtn").innerHTML ="IF U IGNORE ME AGAIN I WILL GUT YOU ALIVE BITCH!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("question").innerHTML = "... *sniffle* .......";
      document.getElementById("siBtn").innerHTML = "Oh yeah! Well I'll ignore you too! ..........................................................................................................................soz.";
      document.getElementById("siBtn").style.fontSize = "40px";
      document.getElementById("siBtn").style.padding = "20px 40px";

      noButtonState++;
      break;
    case 11:
      document.getElementById("noBtn").innerHTML = "THAT'S IT! IT'S KILLING TIME!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";

      document.getElementById("question").innerHTML = ".........";
      document.getElementById("siBtn").innerHTML = "This is going nowhere so I'll apologize, there, happy?";
      document.getElementById("siBtn").style.fontSize = "45px";
      document.getElementById("siBtn").style.padding = "22.5px 45px";

      noButtonState++;
      break;

    case 12:
      document.getElementById("noBtn").innerHTML ="TF DO YOU MEAN NUH HUH!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("sadGifContainer3").style.display = "none";
      document.getElementById("fightGifContainer").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("question").innerHTML = "NUH HUH!";
      document.getElementById("siBtn").innerHTML = "Lol nice meme let's be friends.";
      document.getElementById("siBtn").style.fontSize = "45px";
      document.getElementById("siBtn").style.padding = "22.5px 45px";

      noButtonState++;
      break;

    case 13:
      document.getElementById("noBtn").innerHTML ="BRING IT ON SHIT HEAD!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("fightGifContainer").style.display = "none";
      document.getElementById("threatGifContainer1").style.display = "block";


      document.getElementById("question").innerHTML = "I'm giving you one final chance (not really)";
      document.getElementById("siBtn").innerHTML = "Ok ok I'm sorry, let's just put this shit behind us";
      document.getElementById("siBtn").style.fontSize = "45px";
      document.getElementById("siBtn").style.padding = "22.5px 45px";

      noButtonState++;
      break;

    case 14:
      document.getElementById("noBtn").innerHTML = "C'MON! LET'S GO! C'MON! C'MON!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("threatGifContainer1").style.display = "none";
      document.getElementById("fightGifContainer1").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("question").innerHTML = "OH YOUR ON! YOUR ON LIKE DONKEY KONG!";
      document.getElementById("siBtn").innerHTML = "OK nah I don't wanna fight someone of ur legendary prowess, I surrender.";
      document.getElementById("siBtn").style.fontSize = "50px";
      document.getElementById("siBtn").style.padding = "25px 50px";

      noButtonState++;
      break;

    case 15:
      document.getElementById("noBtn").innerHTML ="AAAAAAAAAAAAAAAA!";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("fightGifContainer1").style.display = "none";
      document.getElementById("fightGifContainer2").style.display = "block";

      // Hacer que el botón "Sí" crezca
      document.getElementById("question").innerHTML = "Fuck u take this.";
      document.getElementById("siBtn").innerHTML = "I'm sowwy, please stop, fowgib meeeee!";
      document.getElementById("siBtn").style.fontSize = "50px";
      document.getElementById("siBtn").style.padding = "25px 50px";

      noButtonState++;
      break;

    case 16:
      document.getElementById("noBtn").innerHTML = "*ded noises*";
      document.getElementById("noBtn").style.backgroundColor = "#F1330A";
      document.getElementById("fightGifContainer2").style.display = "none";
      document.getElementById("deathGifContainer").style.display = "block";

      document.getElementById("question").innerHTML = "It's too late now u ded.";
      document.getElementById("siBtn").innerHTML = "*ded noises*";
      document.getElementById("sadGifContainer").style.display = "none";
      document.getElementById("sadGifContainer1").style.display = "none";
      document.getElementById("sadGifContainer2").style.display = "none";
      document.getElementById("gifContainer").style.display = "none";
      document.getElementById("happyGifContainer").style.display = "none";
      // Vuelve al estado 0
      noButtonState = 0;
      break;

    default:
      // Por si acaso, maneja cualquier otro caso aquí
      break;
  }
});
