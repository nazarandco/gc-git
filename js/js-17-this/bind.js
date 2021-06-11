function calculator(a, b) {
  switch (this.operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
}

/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */

// put your code here

const multiplier = calculator.bind({ operation: '*' });
console.log(multiplier(2, 6));

/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */

// put your code here

const summator = calculator.bind({ operation: '+' });
console.log(summator(1, 6));

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */

// put your code here

const twice = calculator.bind({ operation: '*' }, 2); // першим аргументом передали контекст, а потім параметри функції
// відповідно, якщо там буде дві цифри, то функція завжди видаватиме
// один той самий результат (бо функція приймає тільки 2 аргументи). а оскільки в нас одна цифра, яка є постійним аргументом ф-ції, то кожен новий аргумент буде множитись на цю двійку.
console.log(twice(20));
