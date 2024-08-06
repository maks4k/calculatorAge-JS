
const inputDay=document.querySelector('#input__day');//инпут ввода дня
const inputMonth=document.querySelector('#input__month');//поле ввода месяца
const inputYear=document.querySelector('#input__year');//поле ввода года
const wrapperTop=document.querySelector(".calculator__top")//общий блок у импутов(выводим что бы навесить событие)
let isError ={
 day:false,
 month:false,
 year:false,   
};//переменная флаг,которую будем менять на тру в случае ошибки(сделали объектам что бы когда,хоть где то у ключа меняется значение на тру(т е пояевлется ошибка мы не пускаем длаьше проверку))

wrapperTop.addEventListener("input",function(event)//получаем аругментом event ,что бы понять на какой элемент кликаем
{
    let inputValue=event.target.value;//переменная ,значение которое мы ввели в какой либо инпут

    if (event.target===inputDay) {
        if (inputValue<=0||Number(inputValue)>31||Number(inputValue)==='')
    {
    showError(event.target);//функция которая показывает ошибку//при клике на определленный инпут ,принимает event.target
    isError.day=true;//где добавляем функцию ошибки ,выставляем флаг на тру
    }
    else if (!event.target.nextElementSibling.classList.contains("hidden"))//если у данного элемента нет класса hidden
    {
    hideError(event.target);
    isError.day=false;
    }
    }


    else if (event.target===inputMonth){
    if (inputValue<=0||Number(inputValue)>12||Number(inputValue)==='')
    {
    showError(event.target);//функция которая показывает ошибку//при клике на определленный инпут ,принимает event.target
    isError.month=true;
    }
    else if (!event.target.nextElementSibling.classList.contains("hidden"))//если у данного элемента нет класса hidden
    {
    hideError(event.target);
    isError.month=false;
    } 
         
    }


    else if  
    (event.target===inputYear){
    if (Number(inputValue)>new Date().getFullYear()||inputValue<=0||Number(inputValue)==='')
    {
    showError(event.target);//функция которая показывает ошибку//при клике на определленный инпут ,принимает event.target
    isError.year=true;
    }
    else if (!event.target.nextElementSibling.classList.contains("hidden"))//если у данного элемента нет класса hidden
    {
    hideError(event.target);
    isError.year=false;
    } 
             
    }
    if (inputDay.value&&inputMonth.value&&inputYear.value&&(isError.day===false&&isError.month===false&&isError.year===false))//в случае првоерки на ошибку озночает ,что она отсутвует(false)
    {
    calculateAge(parseInt(inputDay.value),parseInt(inputMonth.value),parseInt(inputYear.value))//свойсвто parseInt позволяет исправить 01 на 1
    } 
})




function showError(input)//передает инпут
{
input.nextElementSibling.classList.remove("hidden");
}
function hideError(input) {
input.nextElementSibling.classList.add("hidden")
}
function calculateAge(day,month,year) {
 const today=new Date;
 const birthDay=new Date(year,month,day);//переводим в формат год,месяц,день
 const years=today.getFullYear()-birthDay.getFullYear();
 console.log(years);
 
}


