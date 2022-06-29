document.addEventListener('submit', async (event) => {
  event.preventDefault();
  const numberDie = event.target.sides.value;
  // console.log(numberDie);

  const res = await fetch('/rolls/number', {
    method: 'POST',
    body: JSON.stringify({ numberDie }),
    headers: { 'Content-Type': 'application/json' },
  });

  event.target.sides.value = '';
  const dieHtml = await res.text();
  document.querySelector('#die-container').innerHTML = dieHtml;
  // PSEUDO-код:
  // 1 - перехватить событие отправки формы
  // 2 - предотвратить действие по умолчанию для этого события
  // 3 - отправить AJAX-сообщение на сервер
  // 4 - когда сообщение AJAX готово, отображаем новый бросок кубика
});
