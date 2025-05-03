import { LitElement, unsafeCSS, html } from 'lit'
import React from 'react';
import { createRoot } from 'react-dom/client';
import style from "./assets/tailwind.global.css?inline";


import App from './app/App';

const tailwindElement = unsafeCSS(style);

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      name: { type: String },
    }
  }

  static styles = [tailwindElement, unsafeCSS(style)];

  constructor() {
    super()
  }

  firstUpdated() {
    const mountPoint = this.renderRoot.querySelector('#root');
    this.reactRoot = createRoot(mountPoint);
    this._renderReact();
  }

  updated() {
    this._renderReact();
  }

  _renderReact() {
    this.reactRoot.render(
      React.createElement(App, { props: { name: this.name } })
    );  
  }

  render() {
    return html`
      <div id="root"></div>
    `;
  }
}

window.customElements.define('my-element', MyElement)
