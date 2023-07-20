
const CORRECT_ANSWER = 'Аня'
const userAnswer = prompt(' Яка дівчинка сама розумна?')
if ((userAnswer.toLocaleLowerCase() === CORRECT_ANSWER.toLocaleLowerCase())) {
  alert('правильно!');
} else {
 alert ('Не знаєте? Це - Аня Новікова')
}

