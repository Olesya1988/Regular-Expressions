export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const contentСheck = /[\d\w\-_]*/.test(this.name);
    const startCheck = /^[^\d\-_]/.test(this.name);
    const endCheck = /[^\d\-_]$/.test(this.name);
    const repetitionСheck = /\d{4,}/g.test(this.name);
    return contentСheck && startCheck && endCheck && !repetitionСheck;
  }
}
