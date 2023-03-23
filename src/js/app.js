export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const contentСheck = /(^[a-zA-Z])[\w-]+[a-zA-Z]$/.test(this.name);
    const repetitionСheck = /\d{4,}/g.test(this.name);
    return contentСheck && !repetitionСheck;
  }
}
