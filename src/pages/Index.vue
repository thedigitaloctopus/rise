<template>
  <Layout>
    <main>
      <Banner />
      <section class="color yellowish bleed-bottom swipe-in">

        <g-image id="logo" class="fade-in-up" src="~/assets/images/rise-logo.svg" alt="RISE" />

        <div class="container split">
          <g-image src="~/assets/images/Bre.jpg" immediate="true" class="fade-in-left" alt="" />
          <div>
            <p class="pre-heading fade-in-right">What we stand for</p>
            <h1 class="fade-in-right">We stand with underrepresented<br>racial&nbsp;groups</h1>

            <p class="fade-in-right"><a href="https://getflywheel.com/about/" target="_blank">Flywheel</a> stands in solidarity with the fight against systemic racism, white supremacy, and the historic oppression of the Black community, both nationally and in our hometown community of Omaha, Nebraska. We believe in being excellent to each other, no matter what your skin color is. This page is dedicated to providing educational resources for the local Omaha community.
            </p>
          </div>
        </div>
      </section>


      <section>
        <div class="container split">
          <div>
            <p class="pre-heading">Who we are</p>
            <h2>Rise is one of Flywheel’s Employee Resource Groups</h2>
            <p>Our mission is to provide a safe, open environment to promote, educate, and advocate for people of underrepresented racial groups and allies at <a href="https://getflywheel.com/layout/life-at-flywheel/" target="_blank">Flywheel</a>.</p>
            <a href="#resources" class="button">Resources</a>
          </div>
          <g-image src="~/assets/images/Jason.jpg" alt=""/>
        </div>
      </section>

      <Organizations/>

      <Resources/>

      <NewsletterBlock/>

      <section class="color yellowish bleed-top">
        <div class="container split">
          <g-image src="~/assets/images/Cam.jpg" alt=""/>
          <div>
            <h2>Change starts locally</h2>
            <p>Thank you for supporting and advocating for members of underrepresented racial groups in our community. Check out <a href="https://www.connectblackomaha.com/" target="_blank" rel="noopener">Connect Black Omaha</a> to see a list of Black-owned businesses in Omaha.</p>

            <p><a href="https://www.connectblackomaha.com/" class="button">Connect Black Omaha</a></p>
          </div>
        </div>
      </section>
    </main>
  </Layout>
</template>

<script>
import Organizations from '../components/Organizations'
import Resources from '../components/Resources'
import NewsletterBlock from '../components/NewsletterBlock'
import Banner from '../components/Banner'

export default {
  metaInfo: {
    title: 'Rise, a Flywheel Employee Resource Group'
  },

  components: {
    NewsletterBlock, Resources, Organizations, Banner
  },

  mounted () {
    if (typeof window == 'undefined') return
    if ('IntersectionObserver' in window) {
    const animatedElements = document.querySelectorAll('h2, h3, .button, li, img, p, hr');

		const onChange = (changes, observer) => {
			changes.forEach((change) => {
        if (change && change?.target && (
            change.intersectionRatio > 0.5
            || change.isIntersecting
            || target.parentNode.boundingClientRect.y >= window.offsetTop
          )
        ) {
					setTimeout(() => {
						change?.target.classList.remove('hidden');
					}, 200)
					observer.unobserve(change?.target)
				}
			})
		}

		const config = {
			root: null,
			rootMargin: '20px',
			threshold: 1
		}

		const scrollObserver = new IntersectionObserver(onChange, config)

		animatedElements.forEach((el) => {
			// Make sure the element isn't already in the viewport
			const rect = el.getBoundingClientRect()
			if ((rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) || (window.innerHeight || document.documentElement.clientHeight) - rect.top > 0) {
				return
			}
			el.classList.add('hidden', 'transition')
			scrollObserver.observe(el)
		})
	}
  },
}
</script>

<style lang="scss">
section {
  padding: 4rem 0;

  @media (max-width: 799px) {
    & + section .container {
      padding-top: 0;
      margin-top: 0;
    }
  }
}

#logo {
  width: 6rem;
  display: block;
  margin: 3rem auto 0;
  padding: 0 0 6rem;
}

.pre-heading {
  text-transform: uppercase;
  color: var(--blue);
  line-height: 1em;
}

.split {
  display: grid;

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 4rem;
  }
}

.narrow {
  max-width: 48rem;
}

.yellowish {
  background: var(--yellowish);
}

.very-light-gray {
  background: var(--gray2);
}

.bleed-bottom {
  padding-bottom: 0;

  @media (max-width: 799px) {
    .container {
      margin-bottom: 0;
    }
  }

  img {
    margin-bottom: 2rem;
  }

  @media(min-width: 800px) {

    img {
      margin: 3.5rem 0 -6rem;
    }
  }

  p:last-of-type {
    margin-bottom: 2rem;
  }
}

.bleed-top {
  padding-top: 0;

  h2 {
    margin-top: 4rem;
  }

  img {
    margin-top: -6rem;
  }
}

.hidden {
  opacity: 0;
  transform: translateY(1rem);
}

hr.hidden {
  transform: translateY(0) scaleX(0.01);
}

.transition {
  transition: opacity var(--transition), transform var(--transition);
}

.swipe-in {
  transform-origin: bottom;
  animation: swipeIn .6s cubic-bezier(1, 0, 0, 1) forwards;
}

@keyframes swipeIn {
  from {
    transform: scaleY(0)
  }
  to {
    transform: scaleY(1)
  }
}
</style>
