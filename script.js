document.addEventListener('DOMContentLoaded', function () {
    const calculateButton = document.getElementById('calculateButton');
    const resultDiv = document.getElementById('result');

    const inputs = [
        'x1', 'y1', 'z1', 
        'x2', 'y2', 'z2'
    ];

    // Function to check if all inputs are valid numbers
    function validateInputs() {
        let allValid = true;
        inputs.forEach(id => {
            const input = document.getElementById(id);
            if (isNaN(input.value) || input.value.trim() === '') {
                allValid = false;
            }
        });
        calculateButton.disabled = !allValid;
    }

    // Event listener to validate inputs
    inputs.forEach(id => {
        document.getElementById(id).addEventListener('input', validateInputs);
    });

    // Function to calculate x and y
    function calculateValues() {
        const x1 = parseFloat(document.getElementById('x1').value);
        const y1 = parseFloat(document.getElementById('y1').value);
        const z1 = parseFloat(document.getElementById('z1').value);
        const x2 = parseFloat(document.getElementById('x2').value);
        const y2 = parseFloat(document.getElementById('y2').value);
        const z2 = parseFloat(document.getElementById('z2').value);

        const op1 = document.getElementById('operation1').value;
        const op2 = document.getElementById('operation2').value;

        // Convert operations to actual values
        const op1Value = op1 === '+' ? 1 : -1;
        const op2Value = op2 === '+' ? 1 : -1;

        // Calculate results for x and y using the linear equations
        const det = x1 * y2 - x2 * y1;
        const detX = z1 * y2 - z2 * y1;
        const detY = x1 * z2 - x2 * z1;

        // Check if determinant is 0
        if (det === 0) {
            resultDiv.innerHTML = 'Tidak ada solusi atau solusi tak terhingga.';
        } else {
            const x = detX / det;
            const y = detY / det;
            resultDiv.innerHTML = `<p>Nilai X: ${x.toFixed(2)}</p><p>Nilai Y: ${y.toFixed(2)}</p>`;
        }
    }

    // Add event listener to the calculate button
    calculateButton.addEventListener('click', calculateValues);
});
