class Battery{
    energy;
    constructor(e) {
        this.energy = e;
    }
    setEnergy(e) {
        this.energy = e;
    }
    getEnergy() {
        return this.energy;
    }
    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}