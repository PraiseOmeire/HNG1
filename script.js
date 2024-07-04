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
    currentTimeElement.textContent = `Time Check: ${utcTime}`;
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000);
};

function toggleMoreGoals() {
  const moreGoals = document.getElementById("moreGoals");
  const seeMoreBtn = document.getElementById("seeMoreBtn");
  if (moreGoals.style.display === "none") {
    moreGoals.style.display = "block";
    seeMoreBtn.textContent = "See Less";
  } else {
    moreGoals.style.display = "none";
    seeMoreBtn.textContent =
      "UHH... We are not done yet. Just a little bit more 😁. Told you I have great plans🚀. See more";
  }
}
