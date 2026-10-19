(() => {
  const clock = document.querySelector("#clock");

  if (!clock) {
    return;
  }

  const pad = (value) => String(value).padStart(2, "0");

  const updateClock = () => {
    const now = new Date();
    const hours = pad(now.getHours());
    const minutes = pad(now.getMinutes());
    const seconds = pad(now.getSeconds());

    clock.textContent = `${hours}:${minutes}:${seconds}`;
    clock.dateTime = now.toISOString();
  };

  updateClock();
  window.setInterval(updateClock, 1000);
})();
