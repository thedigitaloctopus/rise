<template>
  <div class="layout">
    <slot/>
    <footer class="footer">
      <g-image src="~/favicon.png" class="footer__logo" width="66"></g-image>
      <p>This site is made possible by members of Flywheel's Employee Resource Group, Rise.</p>
      <p>Rise's mission​ is to provide a safe, open environment to promote, educate, and advocate for people of underrepresented racial groups and allies.</p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
:root {
  --white: #ffffff;
  --gray: #5d5e5e;
  --lightGray: #e7e7e7;
  --darkGray: #434344;
  --darkerGray: #262727;
  --darkRed: #ba3e51;
}

*, *:before, *:after {
  box-sizing: border-box;
}

*:focus,
input.sr:focus + label {
  outline: 1px dashed var(--darkGray);
  outline-offset: 2px;
}

body {
  font-family: 'Libre Franklin', -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin: 4rem 0 0;
  padding: 0;
  line-height: 1.4;
  color: var(--darkerGray);
  background: var(--white);
  max-width: 100vw;
  overflow-x: hidden;
}

.layout {
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media(min-width: 800px) {
    display: grid;
    grid-template-columns: 20rem 1fr;
    grid-gap: 2rem;
    padding: 0 2rem;
    align-items: stretch;
  }

  @media(min-width: 1080px) {
    padding: 0 3rem;
  }
}

h1 {
  font-size: 3rem;
  line-height: 1.2em;

  @media(min-width: 800px) {
    font-size: 3.6rem;
  }
}

h2 {
  font-size: 1.8rem;
  margin: 0 0 1rem;
  line-height: 1em;
  border-bottom: 1px solid;
  padding-bottom: 1rem;
}

a, a:visited {
  color: #01516e;
}

.subhead {
  font-size: 1.4rem;
  color: var(--gray);
}

.sr {
  position: absolute;
  left: -100vw;
  width: 1px;
  height: 1px;
  opacity: 0;
}

.footer {
  padding: 2rem 0;
  grid-column: 1 / -1;
  font-size: .9rem;
  margin-top: 6rem;

  &__logo {
    float: left;
    margin: .3rem 1rem 2rem 0;
  }

  p {
    max-width: 46em;
    margin-top: 0;
  }
}
</style>
