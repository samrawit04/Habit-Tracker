document.getElementById('add-habit').addEventListener('click', function() {
    const habitInput = document.getElementById('habit-input');
    const habitText = habitInput.value;

    if (habitText) {
        const li = document.createElement('li');
        li.textContent = habitText;

        // Mark habit as completed
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        document.getElementById('habit-list').appendChild(li);
        habitInput.value = ''; // Clear input
    }
});

document.getElementById('reset-habits').addEventListener('click', function() {
    const habits = document.querySelectorAll('#habit-list li');
    habits.forEach(function(habit) {
        habit.classList.remove('completed');
    });
});