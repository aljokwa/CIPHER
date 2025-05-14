document.addEventListener('DOMContentLoaded', () => {
    console.log('Cipher Hunter: The Montana Code - Game script loaded.');

    const puzzleArea = document.getElementById('puzzle-area');
    const narrativeArea = document.getElementById('narrative-area');

    // --- Game State ---
    let currentPuzzleIndex = 0;
    let puzzles = []; // This will be populated with puzzle data

    // --- Puzzle Definitions (Example Structure) ---
    // Puzzles would be defined here. For example:
    
    puzzles = [
        {
            id: 'puzzle1',
            type: 'substitution',
            title: 'Urgent Warning: DC Threat',
            description: 'An partial, encrypted message intercepted. It mentions Washington D.C., a delivery from Canada, and a \'package\' of grave concern. Decipher it immediately!',
            cipherText: 'QEB NREKC LMPDR LK BZKRZ QEB ZMBRDA NVDI ZGGZXP. GRB GNLIV ZM QCZMPAIZPV.',
            solution: 'THE SOUTH BORDER IS CLEAR THE AGENCY WILL ATTACK. USE TRUCK AND TRANSPONDER.',
            hint: 'Common English letter frequencies might be a good start. E is often the most used letter.',
            narrativeOnSolve: 'The message is chillingly clear. A \'package\' via truck, likely a dirty bomb, is planned for an attack in D.C. We need more information, fast.'
        },
        // More puzzles...
    ];
    

    // --- Core Game Logic ---
    function loadPuzzle(puzzleIndex) {
        if (puzzleIndex >= puzzles.length) {
            puzzleArea.innerHTML = '<p>All puzzles solved! You\'ve uncovered the mystery.</p>';
            narrativeArea.innerHTML = 'Congratulations, Cryptanalyst!';
            return;
        }

        const puzzle = puzzles[puzzleIndex];
        puzzleArea.innerHTML = `
            <h2>${puzzle.title}</h2>
            <p>${puzzle.description}</p>
            <div class="cipher-text">${puzzle.cipherText}</div>
            <input type="text" id="solution-input" placeholder="Enter your solution">
            <button id="submit-solution">Submit</button>
            <p class="hint">Hint: ${puzzle.hint}</p>
        `;

        narrativeArea.innerHTML = ''; // Clear previous narrative

        document.getElementById('submit-solution').addEventListener('click', () => {
            checkSolution(puzzle);
        });
    }

    function checkSolution(puzzle) {
        const solutionInput = document.getElementById('solution-input');
        if (solutionInput.value.toUpperCase() === puzzle.solution.toUpperCase()) {
            narrativeArea.innerHTML = `<p class="success">Correct! ${puzzle.narrativeOnSolve}</p>`;
            currentPuzzleIndex++;
            // Add a slight delay before loading the next puzzle for a better user experience
            setTimeout(() => loadPuzzle(currentPuzzleIndex), 2000);
        } else {
            narrativeArea.innerHTML = '<p class="error">Incorrect. Try again.</p>';
        }
    }

    // --- Initialization ---
    function initGame() {
        // For now, we'll just show a placeholder message as puzzles are not defined yet.
        if (puzzles.length === 0) {
            puzzleArea.innerHTML = '<p>Puzzles are being prepared...</p><p>To add puzzles, edit <code>script.js</code> and populate the `puzzles` array.</p>';
            narrativeArea.innerHTML = 'Welcome, Cryptanalyst. Your first challenge awaits integration.';
        } else {
            loadPuzzle(currentPuzzleIndex);
        }
    }

    initGame();
}); 