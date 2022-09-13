const correctAnswers = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'];

const form = document.querySelector('.quiz-form');

const results = document.querySelector('.results');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value,
    form.q6.value, form.q7.value, form.q8.value];

    // create a check answers method

    userAnswer.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 12.5;
        }
    });

    // show results on page
    scrollTo(0, 0);
    results.querySelector('span').textContent = `${score}%`;
    results.classList.remove('d-none');

    let output = 0;
    const animateTimer = setInterval(() => {
    results.querySelector('span').textContent = `${output}%`;
        if (output === score) {
            clearInterval(animateTimer);
        } else {
            output++;
        }
    }, 10);
});




// window object (global object)
