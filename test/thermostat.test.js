describe('Thermostat Object Tests', () => {
  let thermostat;

  beforeEach(() => {
    thermostat = {
      currTemp: 22,
      coldPreset: 18,
      warmPreset: 30,
      increaseTemp() {
        this.currTemp++;
      },
      decreaseTemp() {
        this.currTemp--;
      },
      setColdPreset(temp) {
        this.coldPreset = temp;
      },
      setWarmPreset(temp) {
        this.warmPreset = temp;
      },
      toggleHeating() {
        this.heating = !this.heating;
      },
    };
  });

  test('setColdPreset should update cold preset temperature', () => {
    thermostat.setColdPreset(16);
    expect(thermostat.coldPreset).toBe(16);
  });

  test('setWarmPreset should update warm preset temperature', () => {
    thermostat.setWarmPreset(28);
    expect(thermostat.warmPreset).toBe(28);
  });

  test('increaseTemp should increase the current temperature by 1', () => {
    const originalTemp = thermostat.currTemp;
    thermostat.increaseTemp();
    expect(thermostat.currTemp).toBe(originalTemp + 1);
  });

  test('decreaseTemp should decrease the current temperature by 1', () => {
    const originalTemp = thermostat.currTemp;
    thermostat.decreaseTemp();
    expect(thermostat.currTemp).toBe(originalTemp - 1);
  });

  test('toggleHeating should toggle heating state', () => {
    thermostat.toggleHeating();
    expect(thermostat.heating).toBe(true);
    thermostat.toggleHeating();
    expect(thermostat.heating).toBe(false);
  });
});
