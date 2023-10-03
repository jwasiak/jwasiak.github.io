import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

export class FixedTopbar extends LitElement {
  static properties = {
    lang: { type: String },
    menu: { type: Object },
    home: { type: String },
  };

  static styles = css`
    :host {
      font-size: var(--topbar-font-size, 1rem);
      box-sizing: border-box;
      height: 5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 30;
      background-color: var(--primary-bg);
      border: solid 1px var(--border-color);
      border-radius: 6px;
      margin: auto;
      padding: 0 2rem 0 2rem;
      max-width: 960px;
      box-shadow: var(--shadow-level-1);
    }
    nav svg {
      height: 1.6rem;
      margin-right: 1rem;
      margin-bottom: -0.1rem;
    }
    a {
      color: var(--primary-color);
      text-decoration: none;
      text-transform: uppercase;
      margin-right: 24px;
    }
    div.icons {
      display: flex;
      align-items: center;
      text-align: center;
    }
    div.language-selector {
      text-transform: uppercase;
      background-color: var(--primary-bg);
      display: table-cell;
      width: 3.5rem;
      height: 3.5rem;
      text-align: center;
      vertical-align: middle;
      font-size: 1.2rem;
      font-weight: 700;
      border-radius: 50%;
      border: solid 1px var(--border-color);
      cursor: pointer;
    }
  `;

  constructor() {
    super();
  }

  setLanguage() {
    this.lang = this.lang === "pl" ? "en" : "pl";
    const event = new CustomEvent("change-language", {
      bubbles: true,
      composed: true,
      detail: {
        lang: this.lang,
      },
    });
    this.dispatchEvent(event);
  }

  languageSelector(lang) {
    return lang === "pl"
      ? html`<div class="language-selector">en</div> `
      : html`<div class="language-selector">pl</div> `;
  }

  homeLink(url) {
    if (!url) {
      return null;
    } else
      return html`
        <a href=${url} title="Home">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <path
              d="M261.56 101.28a8 8 0 00-11.06 0L66.4 277.15a8 8 0 00-2.47 5.79L63.9 448a32 32 0 0032 32H192a16 16 0 0016-16V328a8 8 0 018-8h80a8 8 0 018 8v136a16 16 0 0016 16h96.06a32 32 0 0032-32V282.94a8 8 0 00-2.47-5.79z"
            />
            <path
              d="M490.91 244.15l-74.8-71.56V64a16 16 0 00-16-16h-48a16 16 0 00-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0043 267.56L250.5 69.28a8 8 0 0111.06 0l207.52 198.28a16 16 0 0022.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"
            />
          </svg>
        </a>
      `;
  }

  render() {
    const menu = this.menu ? this.menu[this.lang] : [];
    return html`
      <nav>
        ${this.homeLink(this.home)}
        ${menu.map((item) => html`<a href=${item.href}> ${item.text} </a>`)}
      </nav>
      <div class="icons">
        <github-link></github-link>
        <linkedin-link></linkedin-link>
        <div
          class="selector-wrapper"
          @click="${this.setLanguage}"
          title="Change language"
        >
          ${this.languageSelector(this.lang)}
        </div>
        <!-- </div> -->
      </div>
    `;
  }
}

customElements.define("fixed-topbar", FixedTopbar);
