import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

const menu = {
  pl: [
    {
      href: "#",
      text: "Jarosław Wasiak - programista aplikacji internetowych",
    },
  ],
  en: [
    {
      href: "#",
      text: "Jarosław Wasiak - full stack developer",
    },
  ],
};

export class CvComponent extends LitElement {
  static properties = {
    lang: { state: true },
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
    @media print {
      :host {
        padding-top: 0;
      }
      fixed-topbar {
        display: none;
      }
    }
  `;

  constructor() {
    super();
    this.lang = "en";
    this.addEventListener("change-language", (ev) => {
      this.lang = ev.detail.lang;
    });
  }

  render() {
    return html`
      <fixed-topbar
        lang=${this.lang}
        menu=${JSON.stringify(menu)}
        home="index.html"
      ></fixed-topbar>
      <cv-header></cv-header>
      <curriculum-vitae lang=${this.lang}></curriculum-vitae>
    `;
  }
}

customElements.define("cv-component", CvComponent);
