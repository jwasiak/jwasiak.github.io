import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

export class DeleteButton extends LitElement {
  static styles = css`
    :host {
      font-size: var(--notification-font-size, 1rem);
    }
    button {
      right: 0.5rem;
      top: 0.5rem;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      display: inline-block;
      font-size: 0;
      height: 20px;
      max-height: 20px;
      max-width: 20px;
      min-height: 20px;
      min-width: 20px;
      outline: none;
      position: relative;
      vertical-align: top;
      width: 20px;
    }
    button::before,
    button::after {
      background-color: white;
      content: "";
      display: block;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
      transform-origin: center center;
    }
    button::before {
      height: 2px;
      width: 50%;
    }
    button::after {
      height: 50%;
      width: 2px;
    }
    button:hover,
    button:focus {
      background-color: rgba(10, 10, 10, 0.3);
    }

    button:active {
      background-color: rgba(10, 10, 10, 0.4);
    }
  `;

  render() {
    return html` <button type="button"></button> `;
  }
}

customElements.define("delete-button", DeleteButton);
