(() => {
  const clock = document.querySelector("#clock");
  const digits = [...document.querySelectorAll(".digit")];

  if (!clock || digits.length !== 6) {
    return;
  }

  const pad = (value) => String(value).padStart(2, "0");
  const createDigitTrack = () => {
    const track = document.createElement("span");
    track.className = "digit-track";

    for (let value = 0; value <= 9; value += 1) {
      const number = document.createElement("span");
      number.textContent = value;
      number.setAttribute("aria-hidden", "true");
      track.append(number);
    }

    return track;
  };

  digits.forEach((digit) => {
    digit.replaceChildren(createDigitTrack());
  });

  const render = (time, animate = true) => {
    const values = time.split("").filter((value) => value !== ":");

    digits.forEach((digit, index) => {
      const track = digit.querySelector(".digit-track");
      const value = Number(values[index]);

      if (!animate) {
        track.style.transition = "none";
      } else {
        track.style.removeProperty("transition");
      }

      track.style.transform = `translateY(-${value}em)`;
      digit.dataset.digit = String(value);
    });
  };

  const updateClock = (animate = true) => {
    const now = new Date();
    const time = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;

    clock.dateTime = now.toISOString();
    clock.setAttribute("aria-label", `当前时间 ${time}`);
    render(time, animate);
  };

  updateClock(false);
  window.setTimeout(() => updateClock(true), 80);
  window.setInterval(() => updateClock(true), 1000);
})();
