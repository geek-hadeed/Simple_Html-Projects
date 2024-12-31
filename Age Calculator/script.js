document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const birthdateInput = document.getElementById('birthdate');
    const resultDiv = document.getElementById('result');
    const yearsSpan = document.getElementById('years');
    const monthsSpan = document.getElementById('months');
    const daysSpan = document.getElementById('days');
    const errorP = document.getElementById('error');

    calculateBtn.addEventListener('click', calculateAge);

    function calculateAge() {
        const birthdate = new Date(birthdateInput.value);
        const today = new Date();

        errorP.classList.add('hidden');
        resultDiv.classList.add('hidden');

        if (isNaN(birthdate.getTime())) {
            showError("Please enter a valid date.");
            return;
        }

        if (birthdate > today) {
            showError("Birthdate cannot be in the future.");
            return;
        }

        let years = today.getFullYear() - birthdate.getFullYear();
        let months = today.getMonth() - birthdate.getMonth();
        let days = today.getDate() - birthdate.getDate();

        if (months < 0 || (months === 0 && days < 0)) {
            years--;
            months += 12;
        }

        if (days < 0) {
            const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, birthdate.getDate());
            days = Math.floor((today - prevMonth) / (1000 * 60 * 60 * 24));
            months--;
        }

        displayResult(years, months, days);
    }

    function displayResult(years, months, days) {
        yearsSpan.textContent = years;
        monthsSpan.textContent = months;
        daysSpan.textContent = days;
        resultDiv.classList.remove('hidden');
    }

    function showError(message) {
        errorP.textContent = message;
        errorP.classList.remove('hidden');
    }
});

