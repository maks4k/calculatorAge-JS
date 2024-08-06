
const inputDay=document.querySelector('#input__day');//инпут ввода дня
const inputMonth=document.querySelector('#input__month');//поле ввода месяца
const inputYear=document.querySelector('#input__year');//поле ввода года
const wrapperTop=document.querySelector(".calculator__top")//общий блок у импутов(выводим что бы навесить событие)

wrapperTop.addEventListener("input",function(event)//получаем аругментом event ,что бы понять на какой элемент кликаем
{
    let inputValue=event.target.value;//переменная ,значение которое мы ввели в какой либо инпут

    if (event.target===inputDay) {
        if (inputValue<=0||Number(inputValue)>31||Number(inputValue)==='')
    {
    showError(event.target);//функция которая показывает ошибку//при клике на определленный инпут ,принимает event.target
    }
    else if (!event.target.nextElementSibling.classList.contains("hidden"))//если у данного элемента нет класса hidden
    {
    hideError(event.target);
    }
    }


    else if (event.target===inputMonth){
    if (inputValue<=0||Number(inputValue)>12||Number(inputValue)==='')
    {
    showError(event.target);//функция которая показывает ошибку//при клике на определленный инпут ,принимает event.target
    }
    else if (!event.target.nextElementSibling.classList.contains("hidden"))//если у данного элемента нет класса hidden
    {
    hideError(event.target);
    } 
         
    }


    else if  
    (event.target===inputYear){
     Date.now();
       
    if (inputValue<=0||Number(inputValue)>2024||Number(inputValue)==='')
    {
    showError(event.target);//функция которая показывает ошибку//при клике на определленный инпут ,принимает event.target
    }
    else if (!event.target.nextElementSibling.classList.contains("hidden"))//если у данного элемента нет класса hidden
    {
    hideError(event.target);
    } 
             
    } 
})

function showError(input)//передает инпут
{
input.nextElementSibling.classList.remove("hidden");
}
function hideError(input) {
input.nextElementSibling.classList.add("hidden")
}

