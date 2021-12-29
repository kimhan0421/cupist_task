const importNotoSansCJKkr = `
@font-face {
  font-family: 'NotoSansCJKkr-Regular';
  src: url('/font/NotoSansCJKkr-Regular.otf') format('truetype');;
}
`;

const importFonts = `
  ${importNotoSansCJKkr}
  html {
    font-family: 'NotoSansCJKkr', sans-serif;
    font-display: swap;
  }
`;

export default importFonts;
