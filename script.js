// Turnitin Class ID:29894812 Turnitin Password: Plato4Ever

let ctx;
let interval;
let page;

let questionsPoliticians;
let questionsPoet;
let questionsArtisans;
let questionsSocrates;
let audio;

function setup(){
     ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    page = 0;

    questionsPoliticians = [];
    questionsPoet = [];
    questionsArtisans = [];
    questionsSocrates = [];

    audio = new Audio('sound.mp3');
    setUpQuestions();
    addListeners();
   
    addImage("gadFly.png", 1100, 50, 100, 100);
    addImage("description.png", 90, 40, 800, 700);
    start();

   
}

function setUpQuestions(){
    questionsPoliticians.push("Can you define what politics is?");
    questionsPoliticians.push("Where did you learn that?");
    questionsPoliticians.push("Why do you think that your source is credible?");
    questionsPoliticians.push("Do you think that this definition of politics will change in the future?");
    questionsPoliticians.push("In that case, don't you think that you currently have inaccurate version of politics?");
    questionsPoliticians.push("If no, then don't you think your horizon of politics is quite narrow?");


    questionsArtisans.push("What is your field of work?");
    questionsArtisans.push("Do you believe that you thoroughly understand your field of work which makes you wise?");
    questionsArtisans.push("What has been the biggest challenge in your field of work from ages?")
    questionsArtisans.push("Have you solved this biggest challenge/problem?");
    questionsArtisans.push("As you haven't solved the biggest challenge, why do you think you are wise enough?")
    questionsArtisans.push("Oh my friend, you know nothing! which you claimed instead in the begining.");


    questionsPoet.push("What makes you think that you know poetry as you chose to be a poet?");
    questionsPoet.push("What have you written so far - the best of your work?");
    questionsPoet.push("Can you thoroughly explain me one of the best lines out of your work?");
    questionsPoet.push("Can you explain it further?");
    questionsPoet.push("Why is your work relevant?");
    questionsPoet.push("Why does it mean just this. It can have more interpretations..");
    questionsPoet.push("If it can have more interpretations, it means you do not understand it yourself.");
    questionsPoet.push("Oh my friend, you know nothing! which you claimed instead in the begining.");

    questionsSocrates.push("Hello my friend, how are you?");
    questionsSocrates.push("How can I help you just before my execution?");
    questionsSocrates.push("Oh my friend, first tell me, 'Are our lives worth living with a distressed and degenerating body?' (The Crito, 235, Plato)");
    questionsSocrates.push("Well then my friend, you know my answer. I am not going to escape but do the just action.");
}
function addListeners(){
    document.addEventListener('click', detectStart )

    document.addEventListener('keydown', nextPage)
}


function addImage(src, x, y, width, height){
    let img = new Image();
    img.src = src;
    img.onload = function(){
        ctx.drawImage(img, x, y, width, height);
    }
    
}
function start(){
    page = 1;
    
    // ctx.font = "40px Georgia";
    
    // ctx.fillStyle = "MediumSeaGreen";
    // ctx.fillText("Artist Statement", 1000, 300);
    // ctx.fillStyle = "Tomato";
    // ctx.fillText("Bibliography", 1000, 400);

    ctx.font = "100px Georgia";
    interval = setInterval(colorChange, 1000);
   
}

function colorChange(){
   
    if(ctx.fillStyle == "#ff0000"){
        ctx.fillStyle = "green"
    } else{
        ctx.fillStyle = "red"
    }
    ctx.fillText("Start", 1000, 600);
}

function detectStart(event){
    console.log("x="  + event.offsetX);
    console.log("y=" + event.offsetY);
    console.log("page=" + page);
    if (page == 1){
        if(event.offsetX >= 1000 && event.offsetY >= 500){
           
            startProgram()
        }
        else if(event.offsetX >= 1000 && event.offsetY >= 250 && event.offsetY <= 350){
           
            artistStatement()
        }
        else if(event.offsetX >= 1000 && event.offsetY >= 350 && event.offsetY <= 500 ){
           
            bibliography()
        }
    }
    else if (page == 2){
        if(event.offsetX >= 280 && event.offsetX <= 580 && event.offsetY >= 200){
            politician();
        }
        else if (event.offsetX >= 580 && event.offsetX <= 880 && event.offsetY >= 200){
            poet();
        }
        else if (event.offsetX >= 880 && event.offsetX <= 1180 && event.offsetY >= 200){
            artisan();
        }
    } else if (page == -1){
        if (event.offsetX >= 600 && event.offsetX <= 700 && event.offsetY >= 475 && event.offsetY <= 550){
            startProgram();
        }
        else if( event.offsetX >= 490 && event.offsetX <= 900 && event.offsetY >= 450 && event.offsetY <= 475){
                crito();
        }
    }
    // else if (page == 50){
    //     if (event.offsetX >= 500 && event.offsetX <= 700 && event.offsetY >= 650 && event.offsetY <= 800){
    //         setup();
    //     }
    // }
    else{
        if(event.offsetX >= 820 && event.offsetX <= 1050 && event.offsetY >= 150 && event.offsetY <= 250){
            execute();
        }
    }
}

function bibliography(){
    page = 50;
    clearInterval(interval);
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    addImage("bibliography.png", 160, 50, 1000, 500);


    ctx.font = "40px Georgia";
    ctx.fillStyle = "Tomato";
    ctx.fillText("Go to Start", 560, 700);
    
}
function artistStatement(){
    page = 50;
    clearInterval(interval);
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    addImage("artistStatement.png", 160, 50, 1000, 900);


    ctx.font = "40px Georgia";
    ctx.fillStyle = "Tomato";
    ctx.fillText("Go to Start", 560, 700);

    

   
}
function startProgram(){
   
    page = 2;

   
    clearInterval(interval);
    
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    addImage("gadFly.png", 1060, 50, 100, 100);
    console.log("start the program");

    ctx.font = "70px Georgia";
    ctx.fillStyle = "black";
    ctx.fillText("What do you want to be?", 140, 100);

    addImage("politician.png", 280, 200, 300, 400);
    addImage("poet.png", 580, 200, 300, 400);
    addImage("artisan.png", 880, 200, 300, 400);

    ctx.font = "50px Georgia";
    ctx.fillText("Politician", 320, 700);
    ctx.fillText("Poet", 680, 700);
    ctx.fillText("Artisan", 980, 700);


}

function displayQuestion(arr, i){
    audio.play();
    
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    document.getElementById("userInput").value = "";
    addImage("gadFly.png", 1000, 0, 100, 100);

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = 500;
    document.getElementById("userInput").style.display = "block";
    ctx.font = "20px Georgia";
    ctx.fillText(arr[i], 200, 150);

    if(page < 22){
        swatFly();
    }

    ctx.font = "17px Georgia";
    ctx.fillText("Press enter after typing your answer", 600, 450);

}

function swatFly(){
    ctx.fillStyle = "yellow"
    // interval = setInterval( function() {
   
    //         if(ctx.fillStyle == "#ff0000"){
    //             ctx.fillStyle = "green"
    //         } else{
    //             ctx.fillStyle = "red"
    //         }
            ctx.fillRect(800, 180, 240, 50);
            ctx.fillStyle = "Chocolate"
            ctx.font = "50px Georgia";
            ctx.fillText("SWAT!!!!", 820, 220);
    // }, 500)
    ctx.fillStyle = "black"
    ctx.font = "17px Georgia";
    ctx.fillText("If you feel annoyed by the questions which this fly is asking,", 760, 300);
    ctx.fillText("you have this option to swat it!!", 760, 320);


    addImage("swatFly.png", 1100, 80, 150, 200)
}

function nextPage(event){
    if (event.key == "Enter"){
        console.log(page)
        if(page >= 3 && page < 10){
            if(page-3 < questionsPoliticians.length){
                displayQuestion(questionsPoliticians, page-3);
                page++;
                if(page == 9) page = 0;
            }
        
        }
        else if(page >= 10 && page < 16){
            if(page-10 < questionsArtisans.length){
                displayQuestion(questionsArtisans, page-10);
                page++;
                if(page == 16) page = 0;
            }
        }
        else if(page >= 16 && page < 24){
            if(page-16 < questionsPoet.length){
                displayQuestion(questionsPoet, page-16);
                page++;
                if(page == 25) page = 0;
            }
        }  else if(page >= 30 && page < 34){
            if(page-30 < questionsSocrates.length){
                displayQuestion(questionsSocrates, page-30);
                page++;
                if(page == 35) page = 0;
            }
        }  else if(page == 34){
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.font = "40px Georgia";
    
             ctx.fillStyle = "MediumSeaGreen";
            ctx.fillText("GoodBye", 500, 300);
        } 
        else{
           
            endProgram();
        }
    }
   
}
function politician(){
   
    page = 3;
    displayQuestion(questionsPoliticians, page-3);
   page++;


}
function artisan(){
    page = 10;
   
    displayQuestion(questionsArtisans, page-10);
    page++;
}
function poet(){
    page = 16;
    
    displayQuestion(questionsPoet, page-16);
    page++;
}

function crito(){
    clearInterval(interval);
   page = 30;
   displayQuestion(questionsSocrates, page - 30);
   page++;
}
function execute(){
    page = -1;
   
    
    
    ctx.fillStyle = "black";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    document.getElementById("userInput").style.display = "none";


    ctx.font = "25px Georgia";
    ctx.fillText("As you can see, even you got annoyed enough that you swatted the fly.", 250, 150);
    ctx.fillText("Similarly, whosoever in our society is a gadfly, i.e. ask uneasy", 250, 180);
    ctx.fillText("questions about the system, and questions our beliefs and values", 250, 210);
    ctx.fillText("we tend to execute him/her", 250, 240);
    ctx.fillText(" ", 250, 270);
    ctx.fillText("Similarly, Socrates acted as a gadfly and the jury of the Athens executed him.", 250, 300);
    ctx.fillText(" ", 250, 330);
    ctx.fillText("In modern world, indigeneous land defenders acted as gadflies and got executed.", 250, 360);
    ctx.fillText(" ", 250, 390);

    ctx.fillStyle = "green";
    ctx.fillText("Can you think of any other gadflies in our society?", 250, 420);
    goBack();
}

function endProgram(){
    page = -1;
    ctx.fillStyle = "black";
   
    
   
   
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    document.getElementById("userInput").style.display = "none";


    ctx.font = "25px Georgia";
    ctx.fillText("Oh wow my friend.", 250, 150);
    ctx.fillText("You didn't swat the gadfly until the end,", 250, 180);
    ctx.fillText("even if it proved your claims wrong!", 250, 210);
    ctx.fillText("You could have been a real friend of Socrates.", 250, 240);
    ctx.fillText(" ", 250, 270);
    ctx.fillText("Just like Crito remained a friend of Socrates until the end!", 250, 300);
    ctx.fillText(" ", 250, 330);
    ctx.fillText("However, Socrates was declared to be executed.", 250, 360);
    ctx.fillText("If you want to convince Socrates to escape, CONVINCE him just like Crito did!", 250, 390);
    ctx.fillText("This way, you would further get to know about Socratic ideals.", 250, 420);

    ctx.fillStyle = "green";
    interval = setInterval( function() {
   
        if(ctx.fillStyle == "#ff0000"){
            ctx.fillStyle = "green"
        } else{
            ctx.fillStyle = "red"
        }
        ctx.font = "40px Georgia";
        ctx.fillText("Convince Socrates", 490, 470);
    }, 500)

    goBack();

  
}

function goBack(){

    ctx.fillStyle = "DarkGoldenRod";
    ctx.fillText("Go Back", 600, 500);
}
