// test/dom/dom-interaction.test.js
const { setSelectedRoom, setOverlay } = require('../../thermostat'); // Adjust the path based on your project structure

describe('DOM Interaction Tests for Smart Thermostat', () => {
  beforeEach(() => {
    // Create mock DOM elements that can be returned by querySelector
    const mockRoomNameElement = { textContent: '' };
    const mockCurrentTempElement = { textContent: '' };
    const mockScheduleTimeElement = { textContent: '' };
    const mockRoomElement = { style: { backgroundImage: '' } };
    
    // Mock document.querySelector
    document.querySelector = jest.fn((selector) => {
      if (selector === '.room-name') return mockRoomNameElement;
      if (selector === '.currentTemp') return mockCurrentTempElement;
      if (selector === '.schedule-time') return mockScheduleTimeElement;
      if (selector === '.room') return mockRoomElement;
      return null;
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('setSelectedRoom updates UI elements with room data', () => {
    const roomData = {
      name: 'Living Room',
      currentTemp: 32,
      schedule: { time: '18:00' }
    };

    setSelectedRoom(roomData);

    expect(document.querySelector).toHaveBeenCalledWith('.room-name');
    expect(document.querySelector).toHaveBeenCalledWith('.currentTemp');
    expect(document.querySelector).toHaveBeenCalledWith('.schedule-time');
  });

  test('setOverlay sets background image based on temperature', () => {
    const rooms = [
      { name: 'Living Room', currentTemp: 32 },
      { name: 'Bedroom', currentTemp: 27 }
    ];

    setOverlay(rooms);

    expect(document.querySelector).toHaveBeenCalledWith('.room');
    expect(document.querySelector).toHaveBeenCalledTimes(2);
  });
});
