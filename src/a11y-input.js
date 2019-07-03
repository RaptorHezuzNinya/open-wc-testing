import { LitElement, html, css } from 'lit-element';

export class A11yInput extends LitElement {
    static get properties() {
        return {
          label: { type: String },
          value: {type: String}
        };
      }

      constructor() {
        super();
        this.label = '';
        this.value = '';
      }
      render() {
          return html`
            <slot name="label"></slot>
            <slot name="input"></slot>
          `
      }

      update(changedProperties) {
        super.update(changedProperties);
        if (changedProperties.has('value')) {
          if (this.value === 'cat') {
            console.log('We like cats too :)');
          }
          this.inputEl.value = this.value;
        }
      }
      connectedCallback() {
        super.connectedCallback();
        this.labelEl = document.createElement('label');
        this.labelEl.innerText = this.label;
        this.labelEl.setAttribute('slot', 'label');
        this.appendChild(this.labelEl);

        this.inputEl = document.createElement('input');
        this.inputEl.setAttribute('slot', 'input');
        this.appendChild(this.inputEl);
      }
}

customElements.define('a11y-input', A11yInput);