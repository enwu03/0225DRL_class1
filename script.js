(() => {
  const clockEl = document.getElementById('clock');
  const dateEl  = document.getElementById('date');

  const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function tick() {
    const now = new Date();

    // Time
    const hours   = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());
    clockEl.textContent = `${hours}:${minutes}:${seconds}`;

    // Date
    const day   = WEEKDAYS[now.getDay()];
    const month = MONTHS[now.getMonth()];
    const date  = now.getDate();
    const year  = now.getFullYear();
    dateEl.textContent = `${day}, ${month} ${date}, ${year}`;
  }

  // Run immediately, then every second
  tick();
  setInterval(tick, 1000);
})();
