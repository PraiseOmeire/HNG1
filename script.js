window.onload = function () {
  const currentDayElement = document.querySelector(
    '[data-testid="currentDay"]'
  );
  const currentTimeElement = document.querySelector(
    '[data-testid="currentTimeUTC"]'
  );

  function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const currentDay = days[now.getUTCDay()];

    currentDayElement.textContent = `${currentDay}`;
    currentTimeElement.textContent = `${utcTime}`;
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000);
};
