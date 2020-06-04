<template>
  <div class="layout">
    <BLM />
    <slot/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import BLM from '~/components/BLM'

export default {
  components: { BLM },
  comments: true
}
</script>

<style lang="scss">
:root {
  --ink: var(--gray-dark);
  --paper: var(--white);

  //Green
  --green: #51bb7b;
  --green-dark: #267048;
  --green-dark50: #419564;
  --green75: #add9b8;
  --green25: #d4ead9;

  //Blue
  --blue: #50c6db;
  --linkblue: #00C1DB;
  --blue-dark50: #338199;
  --blue75: #b0e0ea;
  --blue25: #d6eef2;
  --blue-dark: #01516E;

  //Purple
  --purple: #8351a0;
  --purple-dark: #4e2760;
  --purple-dark50: #693f7e;
  --purple75: #b69cc8;
  --purple25: #d5c9e2;

  //Orange
  --orange: #f47820;
  --orange-dark: #8e4402;
  --orange-dark50: #bb5f23;
  --orange75: #fab889;
  --orange25: #fdd9be;

  //Yellow
  --yellow: #f0ce15;
  --yellow-dark: #9a7700;
  --yellow-dark50: #c3a028;
  --yellow75: #f6e299;
  --yellow25: #f9edc9;
  --yellowish: #F7EBB4;

  //Red
  --red: #ef4e65;
  --red-dark: #8c2738;
  --red-dark50: #ba3e51;
  --red75: #f18085;
  --red25: #fad1cd;

  //Gray
  --gray: #5d5e5e;
  --gray-dark: #262727;
  --gray-dark50: #434344;
  --gray75: #9f9c9c;
  --gray25: #c7c4c4;
  --gray15: #e7e7e7;
  --gray5: #f7f6f6;
  --gray2: #fafafa;
  --gray1: #fcfcfc;

  --white: #ffffff;

  --transition: .65s cubic-bezier(0.215, 0.610, 0.355, 1);

  color: var(--ink);
  background: var(--paper);
  scroll-behavior: smooth;

  @media(min-width: 800px) {
    font-size: 18px;
  }
}

*, *:before, *:after {
  box-sizing: border-box;
  position: relative;
  font-family: inherit;
  max-width: 100%;
}

*:focus,
input.sr:focus + label {
  outline: 1px dashed var(--darkGray);
  outline-offset: 2px;
}

body {
  font-family: 'Museo Sans Rounded', -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  color: var(--darkerGray);
  background: var(--white);
  max-width: 100vw;
  font-display: swap;
}

.layout {
  width: 100%;
  margin: 0;
  padding: 0;
}

main > section:first-of-type .container {
  margin-top: 0;
}

.container {
  width: 100%;
  margin: 4rem auto;
  max-width: 60rem;
  padding: 1rem;
}

h1, h2, h3 {
  margin: 0 auto 1rem;
  font-size: 2rem;
  font-weight: normal;
  line-height: 1.2em;
  max-width: 20em;

  @media(min-width: 800px) {
    font-size: 2.6rem;
  }
}

h3 {
  font-size: 1.8rem;
  margin: 0 0 2rem;
}

ul {
  margin: 2rem auto;
  padding: 0;
  list-style-type: none;
}

hr {
  border: none;
  border-top: 2px solid var(--gray25);
  margin: 4rem 0;
}

a {
  color: inherit;
  text-decoration-color: var(--blue);
}

img {
  width: 100%;
  max-width: 100%;

  @media (min-width: 800px) {
    width: 100%;
  }
}

.button {
  background: var(--blue);
  padding: .75em 2em;
  border-radius: 2em;
  color: var(--white);
  text-decoration: none;
  margin: 2rem 0 4rem;
  text-transform: uppercase;
  display: inline-block;
  letter-spacing: .05em;
}

.centered {
  text-align: center;
  margin-bottom: 2rem;
}

.span-all {
  grid-column: 1 / -1;
}

.sr {
  position: absolute;
  left: -100vw;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.fade-in-up {
  animation: fadeInUp var(--transition) forwards;
  animation-delay: .6s;
  opacity: 0;
}

.fade-in-left {
  animation: fadeInLeft var(--transition) forwards;
  animation-delay: .8s;
  opacity: 0;
}

.fade-in-right {
  opacity: 0;
  animation: fadeInRight var(--transition) forwards;
  animation-delay: 1s;

  & + .fade-in-right {
    animation-delay: 1.3s;

    & + .fade-in-right {
      animation-delay: 1.45s;

      & + .fade-in-right {
        animation-delay: 1.6s;
      }

    }

  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-1rem)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(1rem)
  }
  to {
    opacity: 1;
    transform: translateX(0)
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(1rem)
  }
  to {
    opacity: 1;
    transform: translateY(0)
  }
}
</style>
