import { LitElement, html, css, unsafeCSS  } from 'lit';
import { createRoot } from 'react-dom/client';
import React from 'react';
import App  from './src/App.jsx';

export class Component extends LitElement {
  static properties = {
    name: { type: String },
  };

  static styles = css`
    h1 {
      color: blue;
    }
      .bg-blue-500 {
      background-color: #3b82f6;
    }
  `;

  constructor() {
    super();
    this.name = 'Mundo';
  }

  firstUpdated() {
    const mountPoint = this.renderRoot.querySelector('#react-root');
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
    return html`<div id="react-root"></div>`;
  }
}

customElements.define('emilio-component', Component);