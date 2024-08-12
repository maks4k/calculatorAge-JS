
const inputDay=document.querySelector('#input__day');//инпут ввода дня
const inputMonth=document.querySelector('#input__month');//поле ввода месяца
const inputYear=document.querySelector('#input__year');//поле ввода года
const wrapperTop=document.querySelector(".calculator__top")//общий блок у импутов(выводим что бы навесить событие)
const ageYears=document.querySelector("#age-years");//вывовд возраста после расчета
const ageMonths=document.querySelector("#age-months");
const ageDays=document.querySelector("#age-days");


let isError={
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
    const age=calculateAge(parseInt(inputDay.value),parseInt(inputMonth.value),parseInt(inputYear.value))//свойсвто parseInt позволяет исправить 01 на 1
    ageYears.textContent=age.years;//изменяем тире на показатели из расчетов даты(подставляем ключи объекта)
    ageMonths.textContent=age.month;
    ageDays.textContent=age.days; 
    }   
})




function showError(input)//передает инпут
{
input.nextElementSibling.classList.remove("hidden");
}
function hideError(input) {
input.nextElementSibling.classList.add("hidden")
}


//Разбираемся с Датой


function calculateAge(day,month,year) {
 const today=new Date;
 const birthDay=new Date(year,month-1,day);//переводим в формат год,месяц,день,-1 указываем для нормального расчета месяцев(в js месяца начинаются с 0)

 //расчитываем кол-во лет
 let ageYears=today.getFullYear()-birthDay.getFullYear();//получим сколько ему полных лет
 
 let monthDiferens=today.getMonth()-birthDay.getMonth();//высчитываем месяц(точнее их разницу)

 if (monthDiferens<0||(monthDiferens===0&&today.getDate()<birthDay.getDate())) {
    ageYears--;//если в месяцах получилось отрицательное число ,т е его день рождения еще не настпуил мы вычитаем один год и возраста ,(monthDiferens===0&&today.getDate()<birthDay.getDate()))месяца совпдают а по дням день рождения еще не наступил
 }

 //расчитываем кол-во месяцев
 let ageMonth=monthDiferens//расчитали кол-во так же полных месяцев
 //ниже делаем такую же проверку как и на кол-во лет
 if (ageMonth<=0)//если меньше 0,значит др еще в будущем(т е если сейчас август а др в октября ,разница получается -2 месяца)
{
ageMonth=12-Math.abs(ageMonth) //т е  ageMonth= общие кол-во месяцев-разница месяцев(переведенную Math.abs в положительное число)
}

//расчитываем кол-во дней
let ageDays=today.getDate()-birthDay.getDate();
if (ageDays<=0) {
   ageDays=today.getDate();//просто ровняется сегодняшней дате 
}
return{
    years:ageYears,
    month:ageMonth,
    days:ageDays,
}//вернули объектом все расчитанные значения
}


