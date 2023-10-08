import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
::after,
::before {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}



html {
  font-size: 62.5%;
} 

:root {
  /* colors */
  &,  &.light--theme{
    --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-200: #bfdbfe;
  --primary-300: #93c5fd;
  --primary-400: #60a5fa;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --primary-800: #1e40af;
  --primary-900: #1e3a8a;

  /**danger */
  --danger-50: #ffe3e3;
  --danger-100: #ffb3b3;
  --danger-200: #ff8383;
  --danger-300: #fa5252;
  --danger-400: #f03e3e;
  --danger-500: #e03131;
  --danger-600: #c92a2a;
  --danger-700: #a61e1e;
  --danger-800: #86181d;
  /**success */
  --success-light: #dcffe4;
  --success-50: #f0fdf4;
  --success-100: #dcfce7;
  --success-200: #bbf7d0;
  --success-300: #86efac;
  --success-400: #4ade80;
  --success-500: #22c55e;
  --success-600: #16a34a;
  --success-700: #15803d;
  --success-800: #166534;
  --success-900: #14532d;
  --success-dark: #0d3321;
  /* grey */
  --grey-50: #f0f4f8;
  --grey-100: #d9e2ec;
  --grey-200: #bcccdc;
  --grey-300: #9fb3c8;
  --grey-400: #829ab1;
  --grey-500: #627d98;
  --grey-600: #486581;
  --grey-700: #334e68;
  --grey-800: #243b53;
  --grey-900: #102a43;
  /* rest of the colors */
  --black: #222;
  --white: #fff;
  --red: #842029;
  --green: #0f5132;


      }
      &.dark--theme{
        --red: #f8d7da;
  --green: #d1e7dd;

      }
        /* fonts  */
  --headingFont: 'Roboto Condensed', Sans-Serif;
  --bodyFont: 'Cabin', Sans-Serif;
  --small-text: 0.875rem;
  --extra-small-text: 0.7em;
  /* rest of the vars */
  --backgroundColor: var(--grey-50);
  --textColor: var(--grey-900);
  --borderRadius: 0.25rem;
  --letterSpacing: 1px;
  --transition: 0.3s ease-in-out all;
  --max-width: 1120px;
  --fixed-width: 500px;
  --fluid-width: 90vw;
  --breakpoint-lg: 992px;
  --nav-height: 6rem;
  /* box shadow*/
  --shadow-1: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-2: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-3: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-4: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}


body {
  background: var(--backgroundColor);
  font-family: var(--bodyFont);
  font-weight: 400;
  line-height: 1.75;
  color: var(--textColor);
  font-size: 1.6rem;
}

p {
  margin-bottom: 1.5rem;
  max-width: 40em;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  margin-bottom: 1.38rem;
  font-family: var(--headingFont);
  font-weight: 400;
  line-height: 1.3;
  text-transform: capitalize;
  letter-spacing: var(--letterSpacing);
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
}

h2 {
  font-size: 2.441rem;
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

small,
.text-small {
  font-size: var(--small-text);
}

a {
  text-decoration: none;
  letter-spacing: var(--letterSpacing);
}
a,
button {
  line-height: 1.15;
}
button:disabled {
  cursor: not-allowed;
}
ul {
  list-style-type: none;
  padding: 0;
}

img {
  width: 100%;
  display: block;
  object-fit: cover;
}
@media screen and (max-width: 850px) {
 html{
    font-size: 55%;
 }
}
`;

export default GlobalStyle;
