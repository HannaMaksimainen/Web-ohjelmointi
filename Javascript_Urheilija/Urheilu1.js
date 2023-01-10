/*Määrittele olio-ohjelmointikielille ominainen luokkamäärittely ja periytyminen javaScript-kielellä.

Määrittele yliluokka Henkilo, joka sisältää ihmisen henkilötietoja:
etunimet,
sukunimi,
kutsumanimi,
syntymävuosi

Määrittele luokka Urheilija, joka perii Henkilo-luokan ja toteuttaa lisäksi saantifunktiot (get- ja set-) 
Urheilija-luokalle merkityksellisiin attribuutteihin. Lisää Urheilija luokkaan seuraavat ominaisuudet:

linkki kuvaan,
omapaino,
laji,
saavutukset.

Web-ohjelmointi Hanna Maksimainen
Syksy2022*/

// Luodaan luokka henkilö
class Henkilo {
  // Luodaan luokkaan Henkilö konstruktori ja asetetaan arvot etunimet, sukunimi, kutsumanimi ja syntymävuosi
  constructor(etunimet, sukunimi, kutsumanimi, syntvuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntvuosi = syntvuosi;
  }

  // Tehdään get-ja set-metodit attribuuteille

  // Get etunimi
  get etunimet() {
    return this._etunimet;
  }

  // Set etunimi
  set etunimet(etunimet) {
    this._etunimet = etunimet;
  }

  // Get sukunimi
  get sukunimi() {
    return this._sukunimi;
  }

  // Set sukunimi
  set sukunimi(sukunimi) {
    this._sukunimi = sukunimi;
  }

  // Get kutsumanimi
  get kutsumanimi() {
    return this._kutsumanimi;
  }

  // Set kutsumanimi
  set kutsumanimi(kutsumanimi) {
    this._kutsumanimi = kutsumanimi;
  }

  // Get syntymävuosi
  get syntvuosi() {
    return this._syntvuosi;
  }

  // Set syntymävuosi
  set syntvuosi(syntvuosi) {
    this._syntvuosi = syntvuosi;
  }

  // toString tulostusta varten.
  toString() {
    return `(${this.etunimet}, ${this.sukunimi}, ${this.kutsumanimi}, ${this.syntvuosi})`;
  }
}

module.exports = Henkilo;

// Luodaan luokka Urheilija, joka perii luokan Henkilo

class Urheilija extends Henkilo {
  // Asetetaan konstruktoriin Henkilo-luokan attribuutit sekä luokaan Urheilija-luokalle omat attribuutit
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntvuosi,
    kuva,
    omaPaino,
    laji,
    saavutukset
  ) {
    // Peritään superin kautta etunimet, sukunimi, kutsumanimi ja syntymävuosi
    super(etunimet, sukunimi, kutsumanimi, syntvuosi);

    // Luodaan Urheilija-luokan attribuutit
    this.kuva = kuva;
    this.omaPaino = omaPaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  // Luodaan get-ja set-metodit

  // Get kuva
  get kuva() {
    return this._kuva;
  }

  // Set kuva
  set kuva(kuva) {
    this._kuva = kuva;
  }

  // Get omaPaino
  get omaPaino() {
    return this._omaPaino;
  }

  // Set omaPaino
  set omaPaino(omaPaino) {
    this._omaPaino = omaPaino;
  }

  // Get laji
  get laji() {
    return this._laji;
  }

  // Set laji
  set laji(laji) {
    this._laji = laji;
  }

  // Get saavutukset
  get saavutukset() {
    return this._saavutukset;
  }

  // Set saavutukset
  set saavutukset(saavutukset) {
    this._saavutukset = saavutukset;
  }

  //toString tulostusta varten
  toString() {
    return (
      super.toString() +
      this.kuva +
      this.omaPaino +
      this.laji +
      this.saavutukset
    );
  }
}

// Luodaan olio hlo1 ja asetetaan sille arvot attribuuteille
const hlo1 = new Urheilija();

hlo1._etunimet = "Matti Ensio";
hlo1._sukunimi = "Nykanen";
hlo1._kutsumanimi = "Matti";
hlo1._syntvuosi = "1963";
hlo1.kuva =
  "img=https://is.mediadelivery.fi/img/468/8c95d086124d478e9215b1bd52c5f6c7.jpg";
hlo1.omaPaino = "80";
hlo1.laji = "Makihyppy";
hlo1.saavutukset = "5 Olynpiamitalia";

// Tulostetaan tyhjä rivi, jotta on helpompi lukea
console.log(" ");

// Tulostetaan hlo1 eli ensimmäisen urheilijan tiedot
console.log(
  "URHEILIJA1: Etunimet: " + hlo1._etunimet + ", sukunimi: " + hlo1._sukunimi,
  ", kutsumanimi: " +
    hlo1._kutsumanimi +
    ", syntymavuosi: " +
    hlo1._syntvuosi +
    ", kuva: " +
    hlo1.kuva +
    ", omapaino: " +
    hlo1.omaPaino +
    ", laji: " +
    hlo1.laji +
    " ja saavutukset: " +
    hlo1._saavutukset
);

// Tulostetaan tyhjä rivi, jotta on helpompi lukea
console.log(" ");

// Luodaan olio hlo2 ja asetetaan sille arvot attribuuteille
const hlo2 = new Urheilija();
hlo2._etunimet = "Kimi Matias";
hlo2._sukunimi = "Raikkonen";
hlo2._kutsumanimi = "Kimi";
hlo2._syntvuosi = "1979";
hlo2.kuva =
  "https://images.cdn.yle.fi/image/upload/c_crop,x_0,y_0,w_5542,h_3117/w_1200,h_675,ar_1.7779917,dpr_2,c_fill/q_auto:eco,f_auto,fl_lossy/39-97972862c8014a2abf8";
hlo2.omaPaino = "79";
hlo2.laji = "Formula 1";
hlo2.saavutukset = "2007 vuoden maailmanmestari";

// Tulostetaan hlo2 eli toisen urheilijan tiedot
console.log(
  "URHEILIJA2: Etunimet: " + hlo2._etunimet + ", sukunimi: " + hlo2._sukunimi,
  ", kutsumanimi: " +
    hlo2._kutsumanimi +
    ", syntymavuosi: " +
    hlo2._syntvuosi +
    ", kuva: " +
    hlo2.kuva +
    ", omapaino: " +
    hlo2.omaPaino +
    ", laji: " +
    hlo2.laji +
    " ja saavutukset: " +
    hlo2._saavutukset
);
// Tulostetaan tyhjä rivi, jotta on helpompi lukea
console.log(" ");

// Tulostetaan hlo3 eli kolmannen urheilijan tiedot, laitetaan tiedoista vain osa tulostukseen
const hlo3 = new Urheilija();
hlo3._sukunimi = "Makarainen";
hlo3._kutsumanimi = "Kaisa";
hlo3._syntvuosi = "1983";
hlo3.kuva =
  "https://www.airutlehti.fi/wp-content/uploads/2018/06/kaisa_makarainen.jpg";
hlo3.laji = "Hiihto";

console.log(
  "URHEILIJA3: Sukunimi: " +
    hlo3._sukunimi +
    " kutsumanimi: " +
    hlo3._kutsumanimi +
    ", syntymavuosi: " +
    hlo3._syntvuosi +
    ", kuva: " +
    hlo3.kuva +
    ", laji: " +
    hlo3.laji
);

module.exports = Henkilo;
