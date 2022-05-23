class FlashLamp{
    status;
    battery;
    constructor(s,b) {
        this.battery = b;
        this.status = s;
    }
    setBattery(b) {
        this.battery = b;
    }
    getBatteryInfo() {
        return this.battery.getEnergy();
    }
    light() {
        if (this.status) {
            alert('Lighting');
        }
        else {
            alert('Not lighting');
        }
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
}