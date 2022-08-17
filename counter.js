function increment()
{
    var number = Number(document.getElementById('number').innerHTML)  //To take the value from the input field we used innerHtml function
    document.getElementById('number').innerHTML = number+1
}
function decrement()
{
    var number = Number(document.getElementById('number').innerHTML)
    document.getElementById('number').innerHTML = number-1
}
function neutral()
{
    document.getElementById('number').innerHTML = 0 //In nuetral we not need any value as in output we just need to do one thing that is we need to make a value 0 which is already there.
}