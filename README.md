# Lucky Ajax

## Чему вы научитесь

* Использовать AJAX для смены страниц, основанных на асинхронных данных
* Реализовывать синхронные/асинхронные запросы в веб-приложении
* Использовать существующий код и расширять его

## Введение

Мы попрактикуемся в превращении **Express-приложения** в **Express+AJAX** приложение. А именно, имея на входе приложение, которое перезагружает страницу каждый раз, когда пользователь отправляет форму, мы получим на выходе приложение, просто перезагружающее часть DOM, которая должна поменяться.

## Releases

### Release 0:  Настройка и запуск

Скачайте приложение и запустите его. Приложение работает корректно даже без AJAX. Убедитесь, что вы понимаете, как оно работает перед тем, как перейти к следующему шагу.

### Release 1: Поймите, что нужно изменить

Прежде чем начинать писать код, вы должны полностью понимать,
как работает приложение и использовать это понимание, чтобы определить, какие части
кода нужно переписать. В частности:

1. Что случается, когда вы нажимаете на кнопку "Roll the Die"?
2. Что *должно* произойти вместо этого?
3. Нужно ли менять что-нибудь в Express-routes?
4. Куда нужно поместить JavaScript код, который обрабатывает обновления AJAX и DOM?

### Release 2: AJAXифицируйте!

Следующие вопросы помогут вам сориентироваться:

1. Как можно перехватить событие отправки формы?
2. Как мы можем отменить действие по умолчанию при отправке формы?
3. Как мы совершаем AJAX post-запрос?
4. Что нужно отправить в аргумент `url`? Что насчет `type`? 
   (*Подсказка:* у HTML элемента формы это есть!)
5. Как мы передаем данные на сервер при совершении AJAX запроса?
6. Когда сервер отвечает, какой код запускается? Как мы получаем доступ к данным
   котторые присылает сервер в ответ?
   
Если вы не можете ответить на эти вопросы, то у вас могут возникнуть трудности.
Не торопитесь, используйте Google, и подумайте над этим!
The following questions might help you get your bearings:

1. How do you intercept a form submission event using jQuery?
2. How can we prevent the default form-submission-event action(s) from
   happening?
3. How do we do an AJAX post?
4. What should we pass for the `url` argument? How about the `type` argument?
   (*Hint:* the HTML `form` element has this for you!)
5. How do we pass data to the server when making an AJAX call?
6. When the server responds, what code gets run? How do we access the data that
   the server sends back?

If you cannot answer these questions, you'll have a tough time implementing
things. Take your time, use Google, and think it through!

## Источники

* [w3schools AJAX introduction](https://www.w3schools.com/js/js_ajax_intro.asp)
