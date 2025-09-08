console.log('main.js');
(() => {
    console.log('Here we are!')
    window.addEventListener("load", (event) => {
            const operand1 = document.getElementById('operand1');
    const operand2 = document.getElementById('operand2');
    const operation = document.getElementById('operation');
    const result = document.getElementById('result');

        const update = () => {
      const num1 = parseFloat(operand1.value);
      const num2 = parseFloat(operand2.value);
      const op = operation.value;

      let output;

      if (isNaN(num1) || isNaN(num2)) {
        output = 'Invalid input';
      } else {
        switch (op) {
          case '+':
            output = num1 + num2;
            break;
          case '-':
            output = num1 - num2;
            break;
          case '*':
            output = num1 * num2;
            break;
          case '/':
            output = num2 !== 0 ? num1 / num2 : 'Error: ÷ by 0';
            break;
          default:
            output = 'Unknown operation';
        }
      }

      result.innerHTML = output;
    };

    operand1.addEventListener("input", update);
    operand2.addEventListener("input", update);
    operation.addEventListener("change", update);

    update(); 
    });      
})();
