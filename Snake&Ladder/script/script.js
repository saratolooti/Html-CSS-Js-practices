var diceNum = 1;
var homeNumber1 = 1, homeNumber2 = 1;
var rollNum = 0;
const ladder = [['H4','H14'],['H9','H31'],['H20','H38'],['H28','H84'],['H36','H44'],['H51','H67'],['H71','H91'],['H80','H100']];
const snake = [['H16','H6'],['H47','H26'],['H49','H11'],['H56','H53'],['H62','H19'],['H87','H24'],['H93','H73'],['H98','H78']];
const message = ["Extra Chance!","today is not your lucky day!","Snake bite!","Nice!","How lucky you are;)"];
document.getElementById('H1').innerHTML = '<img class="pos1 player1" src="imgs/Circle-26.png">';
document.getElementById('H1').innerHTML += '<img class="pos2 player2" src="imgs/Circle-26.png">';

function startGame()
{
    document.getElementById("start").style.display = "none";
}

async function rollDice()
{
    document.getElementById('D'+ diceNum).style.display = 'none';
    diceNum =  Math.floor( Math.random() * 6 ) +1;
    rollNum++;
    document.getElementById('D'+ diceNum).style.display = 'flex';
    
    if(diceNum === 6)
    {
        specify_turn();
        rollNum--;
        await sleep(2000);
        display_message(message[0]);
        setTimeout(rollDice, 3500);
    }
    else
        specify_turn();
}
function specify_turn()
{
    switch(Number(rollNum % 2))
    {
        case 0:
            move2();
            break;
        case 1:
            move1()
    }
}

async function move1()
{
    let currentHome = homeNumber1;
    console.log(diceNum, "currentHome "+currentHome,"homenumber1 "+homeNumber1);
    if(homeNumber1 + diceNum <= 100)
    {
        for(let i = 1; i <= diceNum; i++)
        {
            if(currentHome === homeNumber2)
                document.getElementById('H'+ currentHome).innerHTML = '<img class="center player2" src="imgs/Circle-26.png">';
            else
                document.getElementById('H'+ currentHome).innerHTML = currentHome;
            currentHome++;
            if(currentHome === homeNumber2)
                document.getElementById('H'+ currentHome).innerHTML = '<img class="pos1 player1" src="imgs/Circle-26.png">' + '<img class="pos2 player2" src="imgs/Circle-26.png">';
            else
                document.getElementById('H'+ currentHome).innerHTML = '<img class="center player1" src="imgs/Circle-26.png">';
            await sleep(300);
        }
    }
    homeNumber1 = currentHome;
    check(currentHome,1);
    console.log("homenumber1 "+homeNumber1);
}

async function move2()
{
    let currentHome = homeNumber2;
    console.log(diceNum, "currentHome "+currentHome,"homenumber2 "+homeNumber2);
    if(homeNumber2 + diceNum <= 100)
    {
        for(let i = 1; i <= diceNum; i++)
        {
            if(currentHome === homeNumber1)
                document.getElementById('H'+ currentHome).innerHTML = '<img class="center player1" src="imgs/Circle-26.png">';
            else
                document.getElementById('H'+ currentHome).innerHTML = currentHome;
            currentHome++;
            if(currentHome === homeNumber1)
                document.getElementById('H'+ currentHome).innerHTML = '<img class="pos2 player2" src="imgs/Circle-26.png">' + '<img class="pos1 player1" src="imgs/Circle-26.png">';
            else
                document.getElementById('H'+ currentHome).innerHTML = '<img class="center player2" src="imgs/Circle-26.png">';
            await sleep(300);
        }
    }
    homeNumber2 = currentHome;
    check(currentHome,2);
    console.log("homenumber2 "+homeNumber2);
}

async function check(currentHome, playerNum)
{
    let index, n, result = [];
    n = Math.floor(Math.random()*2) + 1;
    index = snake.findIndex(([a,b]) => {return a === ('H'+ currentHome)});
    if(index === -1)
    {
        console.log("Snake no, ladder");
        index = ladder.findIndex(([a,b]) => {return a === ('H'+ currentHome)});
        if(index !== -1)
        {
            display_message(message[n + 2]);
            console.log("ladder yess");
            result = ladder[index];
            console.log("ladder yess result "+result);
            await sleep(3100);
            currentHome = L_SMove(result,playerNum);
        }
    }
    else
    {
        display_message(message[n]);
        console.log("Snake yess");
        result = snake[index];
        console.log("Snake yess result "+result);
        await sleep(3100);
        currentHome = L_SMove(result,playerNum);
    } 
    if(currentHome === 100)
    {
        document.getElementById("rollbutton").disabled = true;
		document.getElementById("endMessage").innerHTML = "<b>player "+playerNum
        +" wins the game</b><br><br>We are very happy that you have chosen us for your"+
        " entertainment<br>and we want you to spend good times with us.";
        document.getElementById("endingGame").style.display = "flex";
    }
}

function L_SMove(result,playerNum)
{
    switch(playerNum)
    {
        case 1:
            document.getElementById('H'+ homeNumber1).innerHTML = homeNumber1;
            homeNumber1 = Number(result[1].slice(1));
            if(homeNumber2 === homeNumber1)
                document.getElementById(result[1]).innerHTML = '<img class="pos2 player2" src="imgs/Circle-26.png">' + '<img class="pos1 player1" src="imgs/Circle-26.png">';
            else
                document.getElementById(result[1]).innerHTML = '<img class="center player1" src="imgs/Circle-26.png">';
            return homeNumber1;
        case 2:
            document.getElementById('H'+ homeNumber2).innerHTML = homeNumber2;
            homeNumber2 = Number(result[1].slice(1));
            if(homeNumber2 === homeNumber1)
                document.getElementById(result[1]).innerHTML = '<img class="pos2 player2" src="imgs/Circle-26.png">' + '<img class="pos1 player1" src="imgs/Circle-26.png">';
            else
                document.getElementById(result[1]).innerHTML = '<img class="center player2" src="imgs/Circle-26.png">';
            return homeNumber2;
    }
}
async function display_message(text)
{
    let x = document.getElementById("prompt");
    document.getElementById("text").innerHTML = text;
    x.style.display = "flex";
    await sleep(3000);
    x.style.display = "none";
}

function sleep(ms) 
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function endGame()
{
    location.reload(true);
}