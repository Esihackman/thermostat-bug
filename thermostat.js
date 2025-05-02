

// Function to set the selected room data to the UI
function setSelectedRoom(roomData) {
  const roomNameElement = document.querySelector('.room-name');
  const currentTempElement = document.querySelector('.currentTemp');
  const scheduleTimeElement = document.querySelector('.schedule-time');

  if (roomNameElement && currentTempElement && scheduleTimeElement) {
    roomNameElement.textContent = roomData.name;
    currentTempElement.textContent = `${roomData.currentTemp}°`;
    scheduleTimeElement.textContent = roomData.schedule.time;
  }
}

// Function to set the background image based on the temperature
function setOverlay(rooms) {
  rooms.forEach(room => {
    const roomElement = document.querySelector('.room');
    if (roomElement) {
      const backgroundImage = room.currentTemp > 32 ? 'warm-bg.jpg' : 'cool-bg.jpg';
      roomElement.style.backgroundImage = `url(${backgroundImage})`;
    }
  });
}

module.exports = { setSelectedRoom, setOverlay };
