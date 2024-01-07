const fs = require('fs');
const path = require('path');
const goalFilePath = path.join(__dirname, 'goal.json');

// Read the goal from a file
function readGoal() {
    try {
        const data = fs.readFileSync(goalFilePath, 'utf8');
        return JSON.parse(data).goal;
    } catch (error) {
        return 100; // Default goal if file doesn't exist or read fails
    }
}

// Write the goal to a file
function writeGoal(goal) {
    fs.writeFileSync(goalFilePath, JSON.stringify({ goal }));
}

const decrementButton = document.getElementById('decrementButton');
const goalValue = document.getElementById('goalValue');

goalValue.innerText = readGoal();

decrementButton.addEventListener('click', () => {
    let currentValue = parseInt(goalValue.innerText);
    if (currentValue > 0) {
        goalValue.innerText = currentValue - 1;
        writeGoal(currentValue - 1);
    }
});
