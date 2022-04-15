export class Language {

  constructor(public ApKosten: number, public name: string, public level: number, public MS: boolean) {
    this.Apcalculation();
  }
  Apcalculation() {
    if (!this.MS) {
      this.ApKosten = this.level * 2
    } else {
      this.ApKosten = 0;
    }
  }
}
