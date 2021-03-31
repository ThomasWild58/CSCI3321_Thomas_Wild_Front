var gamedone=false;
var gametie=false;
var currentPlayer= 'X';
var X='X';
var O='O';
var totalMove=0;
var startBtn=false;

function placeMarker(spotId)
{
    if(startBtn===true)
{
    
 if(gamedone===false)
    {
         //get the spot by spotid
        var spot=document.getElementById(spotId);
        
        if(spot.innerHTML==="")
        {
        spot.innerHTML=currentPlayer;
        totalMove++;
        if(currentPlayer==='X')
        currentPlayer=O;
        else
        currentPlayer=X;
        
        
}

currentPlayerWon();
updateGameStatus();
}
}
}//end of placeMarker

function currentPlayerWon()
{
    var s1=document.getElementById('1');
    var s2=document.getElementById('2');
    var s3=document.getElementById('3');
    var s4=document.getElementById('4');
    var s5=document.getElementById('5');
    var s6=document.getElementById('6');
    var s7=document.getElementById('7');
    var s8=document.getElementById('8');
    var s9=document.getElementById('9');

if (s1.innerHTML===X&& s2.innerHTML===X && s3.innerHTML===X)
{
    gamedone=true;
}

if (s1.innerHTML===O&& s2.innerHTML===O && s3.innerHTML===O)
{
    gamedone=true;
}

if (s4.innerHTML===X&& s5.innerHTML===X && s6.innerHTML===X)
{
    gamedone=true;
}

if (s4.innerHTML===O&& s5.innerHTML===O && s6.innerHTML===O)
{
    gamedone=true;
}

if (s7.innerHTML===X&& s8.innerHTML===X && s9.innerHTML===X)
{
    gamedone=true;
}

if (s7.innerHTML===O&& s8.innerHTML===O && s9.innerHTML===O)
{
    gamedone=true;
}

if (s1.innerHTML===X&& s5.innerHTML===X && s9.innerHTML===X)
{
    gamedone=true;
}

if (s1.innerHTML===O&& s5.innerHTML===O && s9.innerHTML===O)
{
    gamedone=true;
}

if (s3.innerHTML===X&& s5.innerHTML===X && s7.innerHTML===X)
{
    gamedone=true;
}

if (s3.innerHTML===O&& s5.innerHTML===O && s7.innerHTML===O)
{
    gamedone=true;
}

if (s1.innerHTML===X&& s4.innerHTML===X && s7.innerHTML===X)
{
    gamedone=true;
}

if (s1.innerHTML===O&& s4.innerHTML===O && s7.innerHTML===O)
{
    gamedone=true;
}

if (s2.innerHTML===X&& s5.innerHTML===X && s8.innerHTML===X)
{
    gamedone=true;
}

if (s2.innerHTML===O&& s5.innerHTML===O && s8.innerHTML===O)
{
    gamedone=true;
}

if (s3.innerHTML===X&& s6.innerHTML===X && s9.innerHTML===X)
{
    gamedone=true;
}

if (s3.innerHTML===O&& s6.innerHTML===O && s9.innerHTML===O)
{
    gamedone=true;
}

        //s3.innerHTML === s4.innerHTML && s4.innerHTML === s5.innerHTML
        //s5.innerHTML === s6.innerHTML && s6.innerHTML === s7.innerHTML
        //s7.innerHTML === s8.innerHTML && s8.innerHTML === s9.innerHTML
    //s1.innerHTML === s5.innerHTML && s5.innerHTML === s9.innerHTML
    //s3.innerHTML === s5.innerHTML && s5.innerHTML === s7.innerHTML
//s1.innerHTML === s4.innerHTML && s4.innerHTML === s7.innerHTML
//s2.innerHTML === s5.innerHTML && s5.innerHTML === s5.innerHTML
//s3.innerHTML === s6.innerHTML && s6.innerHTML === s9.innerHTML)

    //we need to check if it is a tie
    
    if(gamedone===false)
    {
    if(totalMove===9)
    {
    gametie=true;
    }
}
}


function updateGameStatus()
{
var statusBoard=document.getElementById('status');
if(gamedone===true)
{
    if(currentPlayer==='X')
        currentPlayer=O;
        else
        currentPlayer=X;

statusBoard.innerHTML="Game Over, You are the winner: "+ currentPlayer+"!";

var startBut=document.getElementById("btnStr");
startBut.style.display="inline";
startBut.innerHTML="Replay";
}
else
{
    if(gametie===false)
    {
        statusBoard.innerHTML='Make a Move ' + currentPlayer;
    }
    else
    {
        statusBoard.innerHTML='Game Draw';
        var startBut=document.getElementById("btnStr");
startBut.style.display="inline";
startBut.innerHTML="Replay";
    }
}
}


function startButton()
{
if(startBtn==false)
{
var startBut=document.getElementById("btnStr");
startBut.style.display="none";
startBtn=true;

var statusBoard=document.getElementById('status');
statusBoard.style.display="block";
    statusBoard.innerHTML='Make a Move ' + currentPlayer;
}
else
{
    var startBut=document.getElementById("btnStr");
    startBut.style.display="inline";
    startBut.innerHTML="Start";
    startBtn=false;
    var statusBoard=document.getElementById('status');
    statusBoard.style.display="none";
    var s1=document.getElementById('1');
    var s2=document.getElementById('2');
    var s3=document.getElementById('3');
    var s4=document.getElementById('4');
    var s5=document.getElementById('5');
    var s6=document.getElementById('6');
    var s7=document.getElementById('7');
    var s8=document.getElementById('8');
    var s9=document.getElementById('9');

    s1.innerHTML='';
    s2.innerHTML='';
    s3.innerHTML='';
    s4.innerHTML='';
    s5.innerHTML='';
    s6.innerHTML='';
    s7.innerHTML='';
    s8.innerHTML='';
    s9.innerHTML='';

    gamedone=false;
    gametie=false;
    totalMove=0;
    var statusBoard=document.getElementById('status');
}
}