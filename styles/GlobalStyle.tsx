import { css, Global } from '@emotion/react';

import importFonts from '../lib/importFonts';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${importFonts}

        html,
        body {
          max-width: 375px;
          padding: 0;
          margin: 0 auto;
          letter-spacing: -0.09em;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        input {
          border: none;
        }

        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
        }

        * {
          box-sizing: border-box;
        }
      `}
    />
  );
}

export default GlobalStyles;
