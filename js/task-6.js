/**
 *? При загрузке страницы пользователю предлагается
 *? в prompt ввести число. Ввод добавляется к значению
 *? переменной total.
 *? Операция ввода числа продолжается до тех пор,
 *? пока пользователь не нажмет кнопку Cancel в prompt.
 *? После того как пользователь прекратил ввод нажав на
 *? кнопку Cancel, показать alert со строкой "Общая сумма введенных чисел равна [число]."
 
 *! Делать проверку,что пользователь ввел именно число,
 *! а не произвольный набор символов, не нужно.
 */

 let initialNumber = Numper(prompt ("Введите число!"));
 let totalNumbers = 0;
 let check = false;
 do {
    if (initialNumber){
        totalNumbers += initialNumber;
        initialNumber = Numper(prompt ("Введите число!"));
        check = true;
    } else{
        alert (`Общая сумма введенных чисел равна ${totalNumbers}`);
    }
    check = false;  
 } while (check);