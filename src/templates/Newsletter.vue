<template>
	<Layout>
		<main class="newsletter">
			 <section class="color yellowish bleed-bottom">

				<g-link to="/">
					<g-image id="logo" class="fade-in-up" src="~/assets/images/rise-logo.svg" alt="RISE" />
				</g-link>

				<h1>
					<span class="sr">Rise newsletter </span>
					<span class="newsletter-title fade-in-up">{{ newsletter.title }}</span>
				</h1>

				<div class="featured-image fade-in-up">
					<g-image :src="newsletter.featuredImage ? require(`!!assets-loader!@images/${newsletter.featuredImage}`) : ''" />
				</div>
			</section>

			<section>
				<div class="container">
					<div id="content" v-html="newsletter.content"></div>
				</div>
			</section>
		</main>
	</Layout>
</template>

<page-query>
query($id: ID!) {
	newsletter(id: $id) {
		title
		content
		id
		featuredImage
	}
}
</page-query>

<script>
export default {
	data: () => ({
		newsletter: {
			content: null,
			title: null,
			featuredImage: '',
		}
	}),

	mounted() {
		this.newsletter = this.$page.newsletter



		if (typeof window !== 'undefined' && window.location.hash) {
			this.scrollToAnchor()
		}
	},

	methods: {
		// Necessary because the markdown content is actually rendered on the fly, not part of the server response (for some dumb reason. I might have reconsidered using markdown if I would've realized this.)
		scrollToAnchor() {
			setTimeout(() => {
				const scrollToEl = document.querySelector(`${window.location.hash}`)
				if (scrollToEl) {
					scrollToEl.scrollIntoView({ behavior: 'smooth' })
				} else {
					this.scrollToAnchor()
				}
			}, 200)
		}
	}
}
</script>



<style lang="scss">
.newsletter {

	.container {
		max-width: 44rem;
	}

	#content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;

		& > * {
			grid-column: 1 / 3;
		}

		& > p {
			margin: 0;
		}

		& > blockquote {
			font-size: 1.3rem;

			& + p {
				width: calc(100% + 4rem);
				max-width: calc(100% + 4rem);
				margin-left: -2rem;
			}

			@media(min-width: 560px) {
				grid-column: 1 / 2;
				margin: 2rem 0;
				padding: 0;
				position: relative;
				display: flex;
				align-items: center;

				& + p {
					grid-column: 2 / 3;
					display: flex;
					align-items: center;
					margin: 2rem 0;
					width: 100%;
				}
			}

			p {
				position: relative;

				&:before {
					content: url('/double-quote.svg');
					position: absolute;
					left: -3.5rem;
					top: 0;
					width: 3rem;
					height: auto;
				}
			}
		}

		h2 {
			margin: 1em 0 0;

			& + p {
				color: var(--blue);
				text-transform: uppercase;
				position: relative;
				top: -5rem;
				margin-bottom: -2rem;

				@media (min-width: 800px) {
					top: -6rem;
				}
			}
		}

		hr {
			margin: 4rem;
		}

		hr + p {
			width: calc(100% + 4rem);
			max-width: calc(100% + 4rem);
			margin-left: -2rem;
			display: block;

			@media (min-width: 720px) {
				width: calc(100% + 8rem);
				max-width: calc(100% + 8rem);
				margin-left: -4rem;
			}
		}
	}

	#logo {
		width: 100%;
		max-width: 16rem;
		padding-bottom: 0;
	}

	.newsletter-title {
		text-transform: uppercase;
		text-align: center;
		font-size: 1.2rem;
		display: block;
	}

	.featured-image {
		width: 100%;
		max-width: 960px;
		margin: auto;
	}
}
</style>
