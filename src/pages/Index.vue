<template>
  <Layout>
    <main>
      <h1>Here</h1>
    </main>
  </Layout>
</template>

<script>
export default {
  data: () => ({
    businesses: [],
    shownCategories: [],
    searchText: '',
  }),
  metaInfo: {
    title: 'Support Black Business in Omaha'
  },
  created() {
    this.shownCategories = this.allCategories
    this.businesses = this.shownBusinesses
    console.log(this.businesses)
  },
  watch: {
    searchText(entered) {
      if(entered != '') {
        this.shownCategories = this.allCategories
      }
    }
  },
  methods: {
    trimUrl(urlString) {
      return urlString.replace(/https?:\/\//, '').replace(/\/$/, '')
    },
    formatAddress(address) {
      if(address) {
        return address.split('Omaha').join('\nOmaha')
      }
      return "Unknown"
    }
  },
  computed: {
    allCategories() {
      return [...new Set(
        this.$page.allGoogleSheet.edges.map(bus => bus.node.Category || 'Misc')
      )]
    },
    shownBusinesses() {
      let businesses = this.$page.allGoogleSheet.edges

      if(this.searchText) {
        const comparison = new RegExp(this.searchText, 'ig')
        businesses = businesses.filter(bus => {
          return bus.node.Business_name.match(comparison)
        })
      } else {
        businesses = businesses.filter(bus => this.shownCategories.includes(bus.node.Category))
      }

      return businesses
    }
  }
}
</script>

<style lang="scss">
.intro {
  grid-column: span 2;
  max-width: 40rem;
}

.business-filter {
  margin-top: 3rem;

  @media(min-width: 800px) {
    top: 1rem;
    position: sticky;
  }

  fieldset {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    padding: 3rem 1rem 1rem;
    border: none;
    border-radius: 2px;
    background: var(--lightGray);

    & + fieldset {
      margin-top: 1rem;
    }

    input[type=text] {
      background: transparent;
      padding: .5rem 0;
      border: none;
      border-bottom: 2px solid;
      font-size: inherit;
      font-family: inherit;
    }

    label {
      position: relative;
      display: flex;
      align-items: center;

      &.sr {
        grid-column: 1 / -1;
      }
    }

    input[type=checkbox] {

      & + label:before {
        content: '';
        width: 1em;
        height: 1em;
        border: 2px solid;
        display: inline-block;
        margin-right: .75em;
        vertical-align: middle;
        background: transparent;
      }

      &:checked {
        & + label:before {
          background: var(--darkerGray);
        }

        & + label:after {
          content: '';
          width: .7em;
          height: .4em;
          border-bottom: 2px solid var(--white);
          border-left: 2px solid var(--white);
          transform: rotate(-45deg);
          display: inline-block;
          position: absolute;
          left: .15em;
          top: .4em;
        }
      }
    }

    legend {
      font-weight: bold;
      padding: 0;
      display: block;
      position: relative;
      top: 1.5rem;
    }

    div {
      margin: 0 0 .25rem;
    }
  }
}

.business-list {
  padding: 0;
  list-style-type: none;
  margin: 4rem 0 0;
  display: flex;
  flex-wrap: wrap;

  .business {
    padding: 0;
    margin-bottom: 6rem;
    display: inline-block;
    line-height: 1.8;
    margin-right: 2rem;
    width: 100%;

    @media(min-width: 640px) and (max-width: 799px) {
      flex: 1 1 40%;

      &:nth-of-type(even) {
        margin-right: 0;
      }
    }

    @media(min-width: 1080px) {
      max-width: unset;
      flex: 1 1 26rem
    }

    h2 a {
      color: inherit;
      text-decoration: none;
    }

    &__address {
      white-space: pre-line;
      margin-top: -1.2rem;
    }
  }

  .details {
    display: flex;
    margin: 0 0 1rem;
    align-content: flex-start;
    align-items: flex-start;
    line-height: 1.2;

    &.category {
      border: 2px solid;
      padding: .2em .75em .3em;
      line-height: 1;
      display: inline-block;
      border-radius: 2em;
      margin-top: .5rem;
      margin-left: -2px;
    }

    a {
      word-break: break-word;
    }

    strong {
      flex: 0 0 7em;
      text-transform: uppercase;
      font-size: .75rem;
      padding-top: .25rem;
    }
  }
}

.error {
  width: auto !important;
  max-width: unset !important;

  h2 {
    color: var(--darkRed);
  }
}

.fade {
	&-enter-active,
	&-leave-active {
		transition: all .45s cubic-bezier(0.645, 0.045, 0.355, 1);
	}

	&-leave-active {
    position: absolute;
    width: 100%;
	}

	&-enter, &-leave-to {
		opacity: 0;
	}

  &-move {
    transition: transform .45s cubic-bezier(0.86, 0, 0.07, 1);
  }

	&-enter {
		transform: translateY(1rem);
	}

	&-leave-to {
		transform: translateY(1rem);
	}
}
</style>
