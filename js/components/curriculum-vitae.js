import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

export class CurriculumVitae extends LitElement {
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

  versionEn() {
    return html`
      <div>
        <h2>Profesional profile</h2>
        <p>
          Experienced web application developer (full stack). Focused on solving
          problems. Easily establishing contact with the client. Efficiently
          translating user's business requirements into IT language.
        </p>

        <h2>Projects</h2>
        <p>
          Since May 2022, I have been participating in the development of the
          OpenSource AdminJS library as a front-end developer.
        </p>
        <p>
          In the years 2013-2020 I worked for the Angelius Provita Medical
          Center. I was a co-author of the concept of an IT system supporting
          the work of outpatient clinics - Orion and the creator of the
          assumptions for the module supporting the in vitro clinic.
          <br />

          As part of the project, I was initially a backend developer, and then
          I expanded my competences to front-end. I was responsible for system
          development, testing and implementation.<br />
        </p>

        <p style="margin-bottom: 0.5rem;">
          The Orion system has covered the following areas with its
          functionality:
        </p>
        <ul>
          <li>
            keeping patient files, managing medical records, handling marketing
            programs
          </li>
          <li>
            registration of visits and organization of working time of medical
            staff
          </li>
          <li>management of the queuing system in the waiting room</li>
          <li>
            operating the outpatient clinic, recording the medical history,
            medical data and information on medical procedures
          </li>
          <li>
            in vitro laboratory support: management of genetic material, support
            for medical procedures, generation of medical records
          </li>
          <li>
            service of the diagnostic laboratory: referrals, presentation of
            results in the HL7 CDA format
          </li>
          <li>
            data exchange with the Cobas Roche laboratory diagnostic device
          </li>
          <li>
            integration with the Diagnostics IT system (sending orders and
            receiving results)
          </li>
          <li>settlement of medical visits, calculation of commissions</li>
          <li>
            keeping registers: receipts, invoices, protocols, VAT and CIT
            registers
          </li>
          <li>
            support for fiscal printers, cash payments, card payments,
            transfers, loans and prepayments
          </li>
          <li>handling the debt collection process</li>
        </ul>

        <h2>Professional experience</h2>
        <h3>
          front-end developer,
          <a href="https://www.rst.software/" target="_blank"
            >RST Software Masters, Wrocław</a
          >
          , May 2022 - July 2023
        </h3>
        <ul>
          <li>
            I participate in the development of the OpenSource AdminJS library
          </li>
        </ul>
        <h3>
          web app developer,
          <a href="https://www.fluid-desk.com/" target="_blank"
            >Fluid Desk, Szczecin</a
          >
          , September 2020 - April 2022
        </h3>
        <ul>
          <li>
            I created a SPA for clients and partners of the company using React,
            Redux and other JS libraries
          </li>
          <li>
            I implemented functionalities on the backend side using the PHP
            Symfony framework
          </li>
        </ul>
        <h3>
          PHP & JavaScript developer, system architect
          <a href="https://angelius.pl/" target="_blank"
            >Centrum Medyczne Angelius Provita, Katowice</a
          >
          , 2013-2020
        </h3>
        <h3>
          PHP & JavaScript developer, analyst, J. Wasiak Sp. z o.o., 2008 - 2013
        </h3>
        <p style="margin-bottom: 0.5rem;">Completed projects:</p>
        <ul>
          <li>
            medical orders module of comprehensive hospital management software
            for m-Soft, Warsaw
          </li>
          <li>
            municipal road management software for the Iwonicz-Zdrój Commune
            Office
          </li>
          <li>employer assessment software for Digital Art Division, Warsaw</li>
          <li>file repository software for Tres, Gdynia</li>
          <li>conference management application for Conferis, Warsaw</li>
          <li>online store for Stogar, Piaseczno</li>
          <li>
            database application for supporting sponsors and running ecological
            campaigns for Klub Gaja, Wilkowice
          </li>
        </ul>

        •

        <h3>business analyst, EDS Poland Sp. z o.o., Warszawa, 2005 - 2007</h3>
        <p>
          I participated in the implementation of several Project Costing,
          Contracts and General Ledger modules of the PeopleSoft system for the
          needs of the controlling department of the Mazovian branch of PGNiG.
        </p>
        <p style="margin-bottom: 0.5rem;">My work included:</p>

        <ul>
          <li>analysis of the needs and requirements of the department</li>
          <li>
            optimization of processes and their implementation in the system
          </li>
          <li>
            preparation of specifications for developers to create additional
            functionalities
          </li>
          <li>software testing and implementation</li>
          <li>user training</li>
          <li>
            preparation of specialized reports based on data from the Oracle
            database
          </li>
        </ul>

        <h2>Education</h2>
        <ul>
          <li>Business School at WUT, Finance and accounting, MBA (1995)</li>
          <li>
            Warsaw University of Technology, Environmental engineering (1989)
          </li>
        </ul>

        <h2>Skills</h2>
        <p>
          JavaScript, React, Redux, JQuery, VueJS, HTML5, XML, CSS, LESS,
          webpack, PHP, NodeJS, SQL, PostgreSQL, Unix administration, Git,
          english at B1
        </p>
      </div>
    `;
  }

  versionPl() {
    return html`
      <div>
        <h2>Profil zawodowy</h2>
        <p>
          Doświadczony programista aplikacji webowych, full stack developer.
          Ukierunkowany na rozwiązywanie problemów. Łatwo nawiązujący kontakt z
          klientem. Sprawnie przekładający wymagania biznesowe użytkownika na
          język IT.
        </p>

        <h2>Projekty</h2>
        <p>
          Od maja 2022 roku uczestniczę w rozwoju biblioteki OpenSource AdminJS
          jako front-end developer.
        </p>
        <p>
          W latach 2013-2020 pracowałem dla Centrum Medycznego Angelius Provita.
          Byłem współautorem koncepcji informatycznego sytemu wspomagania pracy
          ambulatoriów - Orion i twórcą założeń modułu obsługującego klinikę in
          vitro. <br />

          W ramach projektu początkowo byłem programistą backend, a następnie
          rozszerzyłem swoje kompetencje o front-end.<br />
          Odpowiadałem za rozwój systemu, testowanie oraz wdrożenie.
        </p>

        <p style="margin-bottom: 0.5rem;">
          System Orion objął swoją funkcjonalnością następujące obszary:
        </p>
        <ul>
          <li>
            prowadzenie kartotek pacjentów, zarządzanie dokumentacją medyczną,
            obsługa programów marketingowych rejestracja wizyt i organizacja
            czasu pracy personelu medycznego
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
            obsługa laboratorium diagnostycznego: skierowania, prezentacja
            wyników w formacie HL7 CDA
          </li>
          <li>
            wymiana danych z laboratoryjnym urządzeniem diagnostycznym Cobas
            Roche
          </li>
          <li>
            integracja z systemem informatycznym Diagnostyki (wysyłanie zleceń i
            odbiór wyników)
          </li>
          <li>rozliczanie wizyt lekarskich, naliczanie prowizji,</li>
          <li>
            prowadzenie rejestrów: paragonów, faktur, protokołów, rejestrów VAT
            i CIT
          </li>
          <li>
            obsługa drukarek fiskalnych, płatności gotówkowych, płatności kartą
            , przelewów, kredytów i przedpłat
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
            tworzyłem SPA dla klientów i partnerów firmy z wykorzystaniem React,
            Redux oraz innych bibliotek JS
          </li>
          <li>
            realizowałem funkcjonalności po stronie backendu z wykorzystaniem
            frameworku PHP Symfony
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
          programista PHP & JavaScript,, analityk, J. Wasiak Sp. z o.o., 2008 -
          2013
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
            oprogramowanie do oceny pracodawców dla firmy Digital Art Division,
            Warszawa
          </li>
          <li>oprogramowanie repozytorium plików dla firmy Tres, Gdynia</li>
          <li>aplikacja do obsługi konferencji dla firmy Conferis, Warszawa</li>
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
          Uczestniczyłem we wdrożeniu kilku modułów Project Costing, Contracts i
          General Ledger systemu PeopleSoft dla potrzeb wydziału kontrolingu
          mazowieckiego oddziału PGNiG.
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
            przygotowywanie specjalistycznych raportów w oparciu o dane z bazy
            Oracle
          </li>
        </ul>
        <h2>Wykształcenie</h2>
        <ul>
          <li>
            Szkoła Biznesu Politechniki Warszawskiej, Finanse i księgowość, MBA
            (1995)
          </li>
          <li>
            Politechnika Warszawska, Inżynieria Środowiska, magisterskie (1989)
          </li>
        </ul>
        <h2>Umiejętności</h2>
        <p>
          JavaScript, React, Redux, JQuery, VueJS, HTML5, XML, CSS, LESS,
          webpack, PHP, NodeJS, SQL, PostgreSQL, Unix administration, Git, język
          angielski B1
        </p>
      </div>
    `;
  }

  render() {
    switch (this.lang) {
      case "en":
        return this.versionEn();
      case "pl":
        return this.versionPl();
      default:
        return null;
    }
  }
}

customElements.define("curriculum-vitae", CurriculumVitae);
