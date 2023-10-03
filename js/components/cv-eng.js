import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

export class CvEng extends LitElement {
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
    return this.lang !== "eng"
      ? null
      : html`
          <div>
            <h2>Profesional profile</h2>
            <p>
              Experienced web application developer (full stack). Focused on
              solving problems. Easily establishing contact with the client.
              Efficiently translating user's business requirements into IT
              language.
            </p>

            <h2>Projects</h2>
            <p>
              Since May 2022, I have been participating in the development of
              the OpenSource AdminJS library as a front-end developer.
            </p>
            <p>
              In the years 2013-2020 I worked for the Angelius Provita Medical
              Center. I was a co-author of the concept of an IT system
              supporting the work of outpatient clinics - Orion and the creator
              of the assumptions for the module supporting the in vitro clinic.
              <br />

              As part of the project, I was initially a backend developer, and
              then I expanded my competences to front-end. I was responsible for
              system development, testing and implementation.<br />
            </p>

            <p style="margin-bottom: 0.5rem;">
              The Orion system has covered the following areas with its
              functionality:
            </p>
            <ul>
              <li>
                keeping patient files, managing medical records, handling
                marketing programs
              </li>
              <li>
                registration of visits and organization of working time of
                medical staff
              </li>
              <li>management of the queuing system in the waiting room</li>
              <li>
                operating the outpatient clinic, recording the medical history,
                medical data and information on medical procedures
              </li>
              <li>
                in vitro laboratory support: management of genetic material,
                support for medical procedures, generation of medical records
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
                I participate in the development of the OpenSource AdminJS
                library
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
                I created a SPA for clients and partners of the company using
                React, Redux and other JS libraries
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
              PHP & JavaScript developer, analyst, J. Wasiak Sp. z o.o., 2008 -
              2013
            </h3>
            <p style="margin-bottom: 0.5rem;">Completed projects:</p>
            <ul>
              <li>
                medical orders module of comprehensive hospital management
                software for m-Soft, Warsaw
              </li>
              <li>
                municipal road management software for the Iwonicz-Zdrój Commune
                Office
              </li>
              <li>
                employer assessment software for Digital Art Division, Warsaw
              </li>
              <li>file repository software for Tres, Gdynia</li>
              <li>conference management application for Conferis, Warsaw</li>
              <li>online store for Stogar, Piaseczno</li>
              <li>
                database application for supporting sponsors and running
                ecological campaigns for Klub Gaja, Wilkowice
              </li>
            </ul>

            •

            <h3>
              business analyst, EDS Poland Sp. z o.o., Warszawa, 2005 - 2007
            </h3>
            <p>
              I participated in the implementation of several Project Costing,
              Contracts and General Ledger modules of the PeopleSoft system for
              the needs of the controlling department of the Mazovian branch of
              PGNiG.
            </p>
            <p style="margin-bottom: 0.5rem;">My work included:</p>

            <ul>
              <li>analysis of the needs and requirements of the department</li>
              <li>
                optimization of processes and their implementation in the system
              </li>
              <li>
                preparation of specifications for developers to create
                additional functionalities
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
              <li>
                Business School at WUT, Finance and accounting, MBA (1995)
              </li>
              <li>
                Warsaw University of Technology, Environmental engineering
                (1989)
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
}

customElements.define("cv-eng", CvEng);
