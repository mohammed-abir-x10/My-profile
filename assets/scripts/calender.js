let currentDate = new Date();

// Render the calendar
function renderCalendar(date) {
    const calendarGrid = document.getElementById('calendarGrid');
    const monthYear = document.getElementById('monthYear');
    
    // Clear existing calendar
    calendarGrid.innerHTML = '';
    
    // Set month and year header
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    monthYear.textContent = `${monthNames[date.getMonth()]} ${date.getFullYear()}`;

    // Create day headers
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });

    // Get first day of month and last date of month
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    
    // Calculate padding for previous month's days
    const startDay = firstDay.getDay();
    for (let i = 0; i < startDay; i++) {
        const prevDay = new Date(date.getFullYear(), date.getMonth(), -i);
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day inactive';
        dayElement.textContent = prevDay.getDate();
        calendarGrid.appendChild(dayElement);
    }

    // Add current month's days
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        
        // Highlight today
        const today = new Date();
        if (date.getMonth() === today.getMonth() && 
            date.getFullYear() === today.getFullYear() &&
            day === today.getDate()) {
            dayElement.classList.add('today');
        }
        
        dayElement.textContent = day;
        calendarGrid.appendChild(dayElement);
    }

    // Calculate remaining days for next month
    const totalCells = startDay + lastDay.getDate();
    const remainingCells = 42 - totalCells; // 6 weeks
    for (let i = 1; i <= remainingCells; i++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day inactive';
        dayElement.textContent = i;
        calendarGrid.appendChild(dayElement);
    }
}

// Navigation handlers
document.getElementById('prevMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

document.getElementById('nextMonth').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Age Calculator Functionality
document.getElementById('ageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const birthDate = new Date(document.getElementById('birthDate').value);
    const resultDiv = document.getElementById('result');
    
    if (!birthDate.getTime()) {
        resultDiv.innerHTML = "Please select a valid date!";
        return;
    }

    const today = new Date();
    if (birthDate > today) {
        resultDiv.innerHTML = "Your birth date cannot be in the future!";
        return;
    }

    const age = calculateAge(birthDate, today);
    resultDiv.innerHTML = `
        Your age is: <span>${age.years} years</span>, 
        <span>${age.months} months</span>, 
        <span>${age.days} days</span>
    `;
});

function calculateAge(birthDate, currentDate) {
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
    }

    if (days < 0) {
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 0);
        days += lastMonth.getDate();
        months--;
    }

    return { years, months, days };
}

renderCalendar(currentDate);