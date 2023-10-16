import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

export class AboutSection extends LitElement {
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
    li {
      line-height: 1.8;
    }
    /* p {
      text-indent: 2rem;
    } */
    img {
      float: right;
      width: 250px;
      filter: drop-shadow(2px 3px 10px rgba(0, 0, 0, 0.5));
      margin-left: 1rem;
      margin-bottom: 1rem;
    }
    @media screen and (max-width: 768px) {
      img {
        display: none;
      }
    }
    @media print {
      img {
        display: none;
      }
    }
  `;

  versionEn() {
    return html` <div>
      <img src="img/my_photo.jpg" alt="my photo"></div>
      <p>
        Hello, my name is Jarosław Wasiak. I’m a web developer based in Poland,
        working mainly remotely.
      </p>
      <p>
        I have expertise in managing database systems, and I rely on mature Open
        Source solutions to ensure high quality while keeping costs manageable.
        <br />
        My preferred technology stack includes React (Typescript) for the
        frontend and either NodeJS or PHP for the backend. I frequently use
        PostgreSQL for database management, but I am open to other options as
        well. My technical and economic background helps me communicate
        effectively with end-users, enabling me to better understand and address
        their needs.
      </p>
      <p>
        Recently I worked as a front-end developer for RST Software Masters
        (Wrocław, Poland) in the development of software for creating
        administration panels (AdminJS) for the back office.
      </p>
      <p>
        I have experience working at the Angelius Provita Medical Center in
        Katowice, Poland. My role there involved developing and co-authoring the
        concept for an IT support system for outpatient clinics called Orion, as
        well as creating a module to support clinics in vitro. The original
        application was written in PHP as a monolithic system, but additional
        modules were later added using VueJS as a single page application.
      </p>
      <p>The system covers the following areas:</p>
      <ul>
        <li>Keeping records of patients,</li>
        <li>Managing documentation related to medical procedures</li>
        <li>Registering visits to the clinic</li>
        <li>Organizing the work schedule of medical staff</li>
        <li>Managing the waiting room queue system</li>
        <li>
          Providing outpatient clinic services including registration, medical
          data and information about procedures
        </li>
        <li>
          In vitro laboratory services including material management and genetic
          procedures
        </li>
        <li>Generating medical records</li>
        <li>
          Diagnostic laboratory services including referrals and presenting
          results in HL7 CDA format
        </li>
        <li>
          Exchanging data with the Cobas laboratory diagnostic device Roche
        </li>
        <li>
          Integrating with the Diagnostics IT system for sending orders and
          receiving results
        </li>
        <li>Settling medical visits and calculating commissions</li>
        <li>
          Keeping records of receipts, invoices, protocols, VAT and CIT
          registers
        </li>
        <li>
          Handling fiscal printers, cash payments, payments by card, transfers,
          loans and prepayments
        </li>
        <li>Handling the debt collection process</li>
      </ul>

      <p>
        Prior to my career as a developer, I worked as a consultant and ERP
        systems analyst. I have experience implementing various financial
        systems such as PeopleSoft (Oracle), SAP Business One, and systems from
        Polish suppliers Comarch and Impuls BPSC.
        <br />
        The skills and knowledge I gained during these implementations continue
        to benefit me today as I am able to analyze customer needs and
        effectively communicate them in the language of the IT industry.
      </p>

      <p>
        If you need my skills and competencies, feel free to contact me.
        <phone-link> +48 880 440 631</phone-link>
        <br />
        I’m willing to tackle new challenges or provide support for legacy
        solutions.
      </p>
    </div>`;
  }

  versionPl() {
    return html`
      <div>
        <img src="img/my_photo.jpg" alt="my photo" />
        <p>
          Witaj. Nazywam się Jarosław Wasiak i jestem programistą aplikacji
          internetowych.
        </p>
        <p>
          Specjalizuję się w systemach bazodanowych. Wykorzystuję do tego
          dojrzałe rozwiązania Open Source. Zapewniają one wysoką jakość przy
          zachowaniu relatywnie niskich kosztów.
          <br />
          Mój preferowany stos technologiczny to React (Typescript) po stronie
          frontendu i NodeJS lub PHP po stronie backendu. Najczęściej
          wykorzystywana przeze mnie baza danych to PostgreSQL. Oczywiście nie
          ograniczam się tylko to wymienionych technologii :) Wykształcenie
          techniczne i ekonomiczne ułatwia mi komunikację z użytkownikiem
          końcowym pozwalając lepiej zrozumieć jego potrzeby.
        </p>
        <p>
          Ostatnio pracowałem jako programista front end dla firmy RST Software
          Masters przy rozwoju oprogramowania do tworzenia paneli
          administracyjnych (AdminJS) dla back office.
        </p>
        <p>
          Wcześniej pracowałem dla Centrum Medycznego Angelius Provita. Byłem
          głównym programistą i współautorem koncepcji informatycznego systemu
          wspomagania pracy ambulatoriów - Orion i twórcą modułu obsługującego
          klinikę in vitro. Początkowo była to aplikacja monolityczna napisana w
          PHP, w późniejszym okresie nowe moduły powstawały jako SPA (VueJS)
        </p>
        <p>System obejmował nastepujące obszary:</p>
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

        <p>
          Zanim zostałem developerem pracowałem wcześniej jako konsultant i
          analityk systemów ERP. Wdrażałem m.in systemy PeopleSoft Financial
          (Oracle), SAP Business One oraz systemy polskich dostawców Comarch i
          Impuls BPSC.
          <br />
          Doświadczenie zdobyte podczas wdrożeń procentuje do dziś umiejętnością
          analizy potrzeb klienta i przekładania ich na język branży IT.
        </p>

        <p>
          Jeśli moje umiejętności i kompetencje mogą być Tobie pomocne zapraszam
          do kontaktu. <phone-link> 880 440 631</phone-link>
          <br />
          Jestem otwarty zarówno na nowe wyzwania jak również mogę wesprzeć
          istniejące rozwiązania.
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

customElements.define("about-section", AboutSection);
