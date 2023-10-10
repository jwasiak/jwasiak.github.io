import {
  html,
  css,
  LitElement,
} from "https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js";

export class ModalComponent extends LitElement {
  static properties = {
    visible: { type: Boolean },
  };

  static styles = css`
    :host {
    }
    ::slotted(img) {
      width: 100%;
    }
    div.background {
      display: flex;
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      background-color: rgba(10, 10, 10, 0.86);
      z-index: 100;
    }
    div.background > div {
      margin: auto;
      z-index: 110;
      object-fit: contain;
      max-width: 80%;
      background-color: white;
    }
  `;

  closeModal() {
    const event = new CustomEvent("close-modal", {
      bubbles: true,
      composed: true,
      detail: {
        isModal: false,
      },
    });
    this.dispatchEvent(event);
  }

  render() {
    return this.visible
      ? html`
          <div class="background" @click=${this.closeModal}>
            <div
              @click=${(e) => {
                e.stopPropagation();
              }}
            >
              <slot></slot>
            </div>
          </div>
        `
      : null;
  }
}

customElements.define("modal-component", ModalComponent);
