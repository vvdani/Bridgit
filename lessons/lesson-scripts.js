document.addEventListener('DOMContentLoaded', function() {
    // Update iterations display
    const iterationsInput = document.getElementById('loop-iterations');
    const iterationsDisplay = document.getElementById('iterations-display');

    if (iterationsInput && iterationsDisplay) {
        iterationsInput.addEventListener('input', function() {
            iterationsDisplay.textContent = this.value;
        });
    }

    // Run loop animation
    const runLoopBtn = document.getElementById('run-loop-btn');
    const loopOutput = document.getElementById('loop-output');
    const loopRunner = document.querySelector('.dynamic-loop-runner');

    if (runLoopBtn && loopOutput && loopRunner) {
        runLoopBtn.addEventListener('click', function() {
            const loopType = document.getElementById('loop-type-select').value;
            const iterations = parseInt(iterationsInput.value);

            // Reset
            loopOutput.innerHTML = '';
            loopRunner.style.transition = 'none';
            loopRunner.style.left = '0%';
            void loopRunner.offsetWidth; // Trigger reflow

            // Animate
            loopRunner.style.transition = `left ${iterations * 0.5}s linear`;
            loopRunner.style.left = '100%';

            // Output steps
            for (let i = 0; i < iterations; i++) {
                setTimeout(() => {
                    const line = document.createElement('div');
                    line.textContent = `Iteration ${i + 1}: Crossing bridge...`;
                    loopOutput.appendChild(line);
                    loopOutput.scrollTop = loopOutput.scrollHeight;
                }, i * 500);
            }

            // Completion
            setTimeout(() => {
                const line = document.createElement('div');
                line.textContent = 'Loop completed!';
                line.style.fontWeight = 'bold';
                line.style.color = 'var(--success)';
                loopOutput.appendChild(line);
                loopOutput.scrollTop = loopOutput.scrollHeight;
            }, iterations * 500);
        });
    }

    // Interactive concept visualization
    const conceptLoopRunner = document.querySelector('.loop-runner');
    if (conceptLoopRunner) {
        let counter = 0;
        setInterval(() => {
            counter = (counter + 1) % 5;
            document.querySelector('.loop-counter').textContent = counter;
        }, 1000);
    }
});