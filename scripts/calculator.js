var endMult=false;

function updateDisplay(value)
{	
var d=document.getElementById('display');
if(value.length<1)
{
d.innerHTML='';
}
else
{
d.innerHTML+=value;
}
}

function clr()
{
var dtwo=document.getElementById("display");
dtwo.innerHTML="";
}

function endMulti()
{
    var d=document.getElementById('display').textContent.trim();

    var y=d.split('');

    var last=y[y.length];

    if(last=='+'||last=='-'||last=='/'||last=='*')
    {
endMult=true;
    }
}

function equal()
{
    var d=document.getElementById('display');
    if(endmult==false)
    {
    d=eval(document.getElementById('display').innerHTML);
    }

}


function equal2()
{
    if(endmult===false)
    {
        document.getElementById('display')=eval(document.getElementById('display').innerHTML)
    }

}