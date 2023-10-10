import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

export class OrionComponent extends LitElement {
  static properties = {
    isModal: { state: true },
    image: { state: true },
  };

  static styles = css`
    :host {
      font-size: var(--page-font-size, 1rem);
      display: block;
      color: var(--primary-color);
      background-color: var(--primary-bg);
      min-height: 100vh;
      margin: 0 auto;
      padding-top: 60px;
      max-width: 960px;
      padding: 60px 2rem 0 2rem;
    }
    ::slotted(*) {
      border: solid 1px red;
    }
    ul.images li {
      cursor: pointer;
    }
  `;

  constructor() {
    super();
    this.isModal = false;
    this.addEventListener("close-modal", (ev) => {
      this.isModal = ev.detail.isModal;
    });
    this.addEventListener("", (ev) => {
      this.isModal = ev.detail.isModal;
    });
  }

  showImage(name) {
    const imagePath = `img/orion/${name}.png`;
    this.image = html`<img src=${imagePath} alt="Orion screenshot" />`;
    this.isModal = true;
  }

  render() {
    return html`
      <h2>System Orion</h2>
      <p>
        Orion to informatyczny system wspomagania pracy ambulatoriów jak również
        kliniki in vitro. Początkowo była to aplikacja monolityczna napisana w
        PHP, w późniejszym okresie nowe moduły powstawały jako SPA (VueJS)
      </p>
      <p>System obejmował nastepujące obszary:</p>
      <ul>
        <li>
          prowadzenie kartotek pacjentów, zarządzanie dokumentacją medyczną,
          obsługa programów marketingowych rejestracja wizyt i organizacja czasu
          pracy personelu medycznego
        </li>
        <li>zarządzanie systemem kolejkowym w poczekalni</li>
        <li>
          obsługa ambulatorium, rejestracja wywiadu, danych medycznych i
          informacji o procedurach medycznych
        </li>
        <li>
          obsługa laboratorium in vitro: zarządzanie materiałem genetycznym,
          obsługa procedur medycznych,
        </li>
        <li>generowanie dokumentacji medycznej</li>
        <li>
          obsługa laboratorium diagnostycznego: skierowania, prezentacja wyników
          w formacie HL7 CDA
        </li>
        <li>
          wymiana danych z laboratoryjnym urządzeniem diagnostycznym Cobas Roche
        </li>
        <li>
          integracja z systemem informatycznym Diagnostyki (wysyłanie zleceń i
          odbiór wyników)
        </li>
        <li>rozliczanie wizyt lekarskich, naliczanie prowizji,</li>
        <li>
          prowadzenie rejestrów: paragonów, faktur, protokołów, rejestrów VAT i
          CIT
        </li>
        <li>
          obsługa drukarek fiskalnych, płatności gotówkowych, płatności kartą ,
          przelewów, kredytów i przedpłat
        </li>
        <li>obsługa procesu windykacji</li>
      </ul>

      <h2>Wybrane zrzuty ekranu z aplikacji</h2>
      <ul class="images">
        <li
          @click="${() => this.showImage("rejestracja")}"
          data-img="orion/rejestracja.png"
        >
          Rejestracja wizyty
        </li>
        <li @click="${() => this.showImage("poczekalnia")}">
          Poczekalnia - system kolejkowy
        </li>
        <li @click="${() => this.showImage("wizyta")}">Rozliczenie wizyty</li>
        <li @click="${() => this.showImage("punkcja")}">
          Opis zabiegu medycznego
        </li>
        <li @click="${() => this.showImage("kalkulator")}">
          Kalkulator medyczny
        </li>
      </ul>

      <modal-component .visible=${this.isModal}>${this.image}</modal-component>
    `;
  }
}

customElements.define("orion-component", OrionComponent);
