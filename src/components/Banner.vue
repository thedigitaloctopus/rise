<template>
	<header class="banner" ref="banner">
		<p>We’re counting on you to vote!</p>
		<a class="button" href="/rise-poster-files.zip">Download posters</a>
	</header>
</template>


<script>
export default {
	mounted() {
		setTimeout(() => {
			this.$refs.banner.classList.add('move-down')
		}, 3000)
	}
}
</script>



<style scoped lang="scss">
.banner {
	background: var(--blue);
	display: flex;
	justify-content: flex-end;
	padding: 1rem 2rem;
	align-items: center;
	color: var(--white);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 3;
	width: 100%;
	transform: translateY(-6rem);
	transition: all 1.3s cubic-bezier(.69,-0.01,.17,1);
	z-index: 3;
	opacity: 0;

	&.move-down {
		transform: translateY(0);
		opacity: 1;
	}

	.button, p {
		margin: 0;
	}

	.button {
		background: var(--blue-dark);
		margin-left: 1.5rem;
		padding: .25rem 1rem;
		font-size: .875rem;

		&:hover {
			cursor: pointer;
			color: var(--blue25);
		}
	}

}

</style>
