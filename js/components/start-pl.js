import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

export class StartPl extends LitElement {
  static properties = {
    lang: {},
  };

  static styles = css`
    :host {
      font-size: var(--page-font-size, 1rem);
      display: block;
    }
    ul {
      list-style: square;
    }
    p,
    li {
      line-height: 1.6;
    }
  `;

  render() {
    return this.lang !== "pl"
      ? null
      : html`
          <div>
            <p>
              Witaj. Nazywam się Jarosław Wasiak i jestem programistą aplikacji
              internetowych.
            </p>
            <p>
              Specjalizuję się w systemach bazodanowych. Wykorzystuję do tego
              dojrzałe rozwiązania Open Source. Zapewniają one wysoką jakość
              przy zachowaniu relatywnie niskich kosztów.
              <br />
              Mój preferowany stos technologiczny to React (Typescript) po
              stronie frontendu i NodeJS lub PHP po stronie backendu.
              Najczęściej wykorzystywana przeze mnie baza danych to PostgreSQL.
              Oczywiście nie ograniczam się tylko to wymienionych technologii :)
              Wykształcenie techniczne i ekonomiczne ułatwia mi komunikację z
              użytkownikiem końcowym pozwalając lepiej zrozumieć jego potrzeby.
            </p>
            <p>
              Ostatnio pracowałem pracowałem jako programista front end dla
              firmy RST Software Masters przy rozwoju oprogramowania do
              tworzenia paneli administracyjnych (AdminJS) dla back office.
            </p>
            <p>
              Wcześniej pracowałem dla Centrum Medycznego Angelius Provita.
              Byłem głównym programistą i współautorem koncepcji informatycznego
              sytemu wspomagania pracy ambulatoriów - Orion i twórcą modułu
              obsługującego klinikę in vitro. Początkowo była to aplikacja
              monolityczna napisana w PHP, w późniejszym okresie nowe moduły
              powstawały jako SPA (VueJS)
            </p>
            <p>System obejmował nastepujące obszary:</p>
            <ul>
              <li>
                prowadzenie kartotek pacjentów, zarządzanie dokumentacją
                medyczną, obsługa programów marketingowych rejestracja wizyt i
                organizacja czasu pracy personelu medycznego
              </li>
              <li>zarządzanie systemem kolejkowym w poczekalni</li>
              <li>
                obsługa ambulatorium, rejestracja wywiadu, danych medycznych i
                informacji o procedurach medycznych
              </li>
              <li>
                obsługa laboratorium in vitro: zarządzanie materiałem
                genetycznym, obsługa procedur medycznych,
              </li>
              <li>generowanie dokumentacji medycznej</li>
              <li>
                obsługa laboratorium diagnostycznego: skierowania, prezentacja
                wyników w formacie HL7 CDA
              </li>
              <li>
                wymiana danych z laboratoryjnym urządzeniem diagnostycznym Cobas
                Roche
              </li>
              <li>
                integracja z systemem informatycznym Diagnostyki (wysyłanie
                zleceń i odbiór wyników)
              </li>
              <li>rozliczanie wizyt lekarskich, naliczanie prowizji,</li>
              <li>
                prowadzenie rejestrów: paragonów, faktur, protokołów, rejestrów
                VAT i CIT
              </li>
              <li>
                obsługa drukarek fiskalnych, płatności gotówkowych, płatności
                kartą , przelewów, kredytów i przedpłat
              </li>
              <li>obsługa procesu windykacji</li>
            </ul>

            <p>
              Zanim zostałem developerem pracowałem wcześniej jako konsultant i
              analityk systemów ERP. Wdrażałem m.in systemy PeopleSoft Financial
              (Oracle), SAP Business One oraz systemy polskich dostawców Comarch
              i Impuls BPSC.
              <br />
              Doświadczenie zdobyte podczas wdrożeń procentuje do dziś
              umiejętnością analizy potrzeb klienta i przekładania ich na język
              branży IT.
            </p>

            <p>
              Jeśli moje umiejętności i kompetencje mogą być Tobie pomocne
              zapraszam do kontaktu. Jestem otwarty zarówno na nowe wyzwania jak
              również mogę wesprzeć rozwiązania typu legacy.
            </p>
          </div>
        `;
  }
}

customElements.define("start-pl", StartPl);
