document.addEventListener("DOMContentLoaded", function() {
    const currentDate = new Date();
    const daysContainer = document.getElementById("days");
    const monthYearElement = document.getElementById("month-year");

    const events = [
        { date: '2024-06-14', description: 'Día del Maestro' },
        { date: '2024-06-21', description: 'Examen de Matemáticas' },
        { date: '2024-06-30', description: 'Reunión de Padres' }
        // Agrega más eventos según sea necesario
    ];

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        const monthName = date.toLocaleString('default', { month: 'long' });
        monthYearElement.textContent = `${monthName} ${year}`;

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

        daysContainer.innerHTML = '';

        for (let i = 0; i < firstDayOfMonth; i++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("filler");
            daysContainer.appendChild(dayElement);
        }

        for (let i = 1; i <= lastDateOfMonth; i++) {
            const dayElement = document.createElement("div");
            dayElement.textContent = i;
            dayElement.classList.add("day");

            const event = events.find(e => e.date === `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`);
            if (event) {
                const eventElement = document.createElement("div");
                eventElement.textContent = event.description;
                eventElement.classList.add("event");
                dayElement.appendChild(eventElement);
            }

            daysContainer.appendChild(dayElement);
        }

        const totalDays = firstDayOfMonth + lastDateOfMonth;
        const nextMonthDays = (totalDays % 7 === 0) ? 0 : 7 - (totalDays % 7);
        for (let i = 1; i <= nextMonthDays; i++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("filler");
            daysContainer.appendChild(dayElement);
        }
    }

    document.getElementById("prev").addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    document.getElementById("next").addEventListener("click", function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});
