const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let expression = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.getAttribute('data-value');

    if (val === 'C') {
      expression = '';
    } else if (val === '←') {
      expression = expression.slice(0, -1);
    } else if (val === '=') {
      try {
        expression = eval(expression).toString();
      } catch {
        expression = 'Error';
      }
    } else {
      expression += val;
    }

    display.value = expression;
  });
});

// Optional: Keyboard support
document.addEventListener('keydown', e => {
  if ((e.key >= '0' && e.key <= '9') || ['+', '-', '*', '/', '.'].includes(e.key)) {
    expression += e.key;
  } else if (e.key === 'Backspace') {
    expression = expression.slice(0, -1);
  } else if (e.key === 'Enter') {
    try {
      expression = eval(expression).toString();
    } catch {
      expression = 'Error';
    }
  } else if (e.key === 'Escape') {
    expression = '';
  }

  display.value = expression;
});
