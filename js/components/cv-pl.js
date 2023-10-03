import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

export class CvPl extends LitElement {
  static properties = {
    lang: {},
  };

  static styles = css`
    :host {
      font-size: var(--page-font-size, 1rem);
      display: block;
    }
    h2 {
      padding: 0.5rem;
      font-weight: 400;
      text-transform: uppercase;
      border: 1px solid var(--border-color);
      font-size: var(--page-font-size, 1rem);
    }
    h3 {
      font-size: 1.4rem;
      font-weight: 400;
      text-decoration: underline;
      text-underline-offset: 0.5rem;
    }
    p {
      font-size: 1.4rem;
    }
    a:link,
    a:visited {
      color: var(--primary-color);
    }
    h3 a,
    p a {
      line-height: 1.8;
    }
    ul {
      font-size: 1.4rem;
      list-style: square;
      margin: 0;
    }
    li {
      line-height: 1.8;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return this.lang !== "pl"
      ? null
      : html`
          <div>
            <h2>Profil zawodowy</h2>
            <p>
              Doświadczony programista aplikacji webowych, full stack developer.
              Ukierunkowany na rozwiązywanie problemów. Łatwo nawiązujący
              kontakt z klientem. Sprawnie przekładający wymagania biznesowe
              użytkownika na język IT.
            </p>

            <h2>Projekty</h2>
            <p>
              Od maja 2022 roku uczestniczę w rozwoju biblioteki OpenSource
              AdminJS jako front-end developer.
            </p>
            <p>
              W latach 2013-2020 pracowałem dla Centrum Medycznego Angelius
              Provita. Byłem współautorem koncepcji informatycznego sytemu
              wspomagania pracy ambulatoriów - Orion i twórcą założeń modułu
              obsługującego klinikę in vitro. <br />

              W ramach projektu początkowo byłem programistą backend, a
              następnie rozszerzyłem swoje kompetencje o front-end.<br />
              Odpowiadałem za rozwój systemu, testowanie oraz wdrożenie.
            </p>

            <p style="margin-bottom: 0.5rem;">
              System Orion objął swoją funkcjonalnością następujące obszary:
            </p>
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

            <h2>Doświadczenie</h2>
            <h3>
              programista front-end,
              <a href="https://www.rst.software/" target="_blank"
                >RST Software Masters, Wrocław</a
              >
              , maj 2022 - lipiec 2023
            </h3>
            <ul>
              <li>uczestniczyłem w rozwoju biblioteki OpenSource AdminJS</li>
            </ul>
            <h3>
              programista aplikacji webowych,
              <a href="https://www.fluid-desk.com/" target="_blank"
                >Fluid Desk, Szczecin</a
              >
              , wrzesień 2020 - kwiecień 2022
            </h3>
            <ul>
              <li>
                tworzyłem SPA dla klientów i partnerów firmy z wykorzystaniem
                React, Redux oraz innych bibliotek JS
              </li>
              <li>
                realizowałem funkcjonalności po stronie backendu z
                wykorzystaniem frameworku PHP Symfony
              </li>
            </ul>
            <h3>
              programista PHP & JavaScript, projektant systemu
              <a href="https://angelius.pl/" target="_blank"
                >Centrum Medyczne Angelius Provita, Katowice</a
              >
              , 2013-2020
            </h3>
            <h3>
              programista PHP & JavaScript,, analityk, J. Wasiak Sp. z o.o.,
              2008 - 2013
            </h3>
            <p style="margin-bottom: 0.5rem;">Wybrane zrealizowane projekty:</p>
            <ul>
              <li>
                moduł zleceń medycznych kompleksowego oprogramowania obsługi
                szpitala dla dla firmy m-Soft, Warszawa
              </li>
              <li>
                oprogramowanie do zarządzania drogami gminnymi dla Urzędu Gminy
                Iwonicz-Zdrój
              </li>
              <li>
                oprogramowanie do oceny pracodawców dla firmy Digital Art
                Division, Warszawa
              </li>
              <li>oprogramowanie repozytorium plików dla firmy Tres, Gdynia</li>
              <li>
                aplikacja do obsługi konferencji dla firmy Conferis, Warszawa
              </li>
              <li>sklep internetowy dla firmy Stogar, Piaseczno</li>
              <li>
                aplikacja bazodanowa do obsługi sponsorów i prowadzenia kampanii
                ekologicznych dla Klubu Gaja, Wilkowice
              </li>
            </ul>
            <h3>
              analityk biznesowy, EDS Poland Sp. z o.o., Warszawa, 2005 - 2007
            </h3>
            <p>
              Uczestniczyłem we wdrożeniu kilku modułów Project Costing,
              Contracts i General Ledger systemu PeopleSoft dla potrzeb wydziału
              kontrolingu mazowieckiego oddziału PGNiG.
            </p>
            <p style="margin-bottom: 0.5rem;">Moja praca obejmowała:</p>

            <ul>
              <li>analizę potrzeb i wymagań działu</li>
              <li>optymalizację procesów i ich implementacja w systemie</li>
              <li>
                przygotowanie specyfikacji dla programistów w celu utworzenia
                dodatkowych funkcjonalności
              </li>
              <li>testowanie oprogramowania i wdrożenie</li>
              <li>szkolenie użytkowników</li>
              <li>
                przygotowywanie specjalistycznych raportów w oparciu o dane z
                bazy Oracle
              </li>
            </ul>
            <h2>Wykształcenie</h2>
            <ul>
              <li>
                Szkoła Biznesu Politechniki Warszawskiej, Finanse i księgowość,
                MBA (1995)
              </li>
              <li>
                Politechnika Warszawska, Inżynieria Środowiska, magisterskie
                (1989)
              </li>
            </ul>
            <h2>Umiejętności</h2>
            <p>
              JavaScript, React, Redux, JQuery, VueJS, HTML5, XML, CSS, LESS,
              webpack, PHP, NodeJS, SQL, PostgreSQL, Unix administration, Git,
              język angielski B1
            </p>
          </div>
        `;
  }
}

customElements.define("cv-pl", CvPl);
