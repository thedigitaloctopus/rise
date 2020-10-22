<template>
	<header class="banner" ref="banner move-down">
		<p>We’re counting on you to vote!</p>
		<a class="button" href="/rise-poster-files.zip">Download&nbsp;posters</a>
	</header>
</template>



<style scoped lang="scss">
.banner {
	background: var(--blue);
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	text-align: center;
	padding: 1rem 2rem;
	align-items: center;
	color: var(--white);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 3;
	width: 100%;
	transition: all 1.3s cubic-bezier(.69,-0.01,.17,1);
	z-index: 3;
	opacity: 0;
	animation: banner-in 1.3s cubic-bezier(.69,-0.01,.17,1) forwards;
	animation-delay: 1.3s;

	@media (min-width: 768px) {
		flex-wrap: nowrap;
	}

	.button, p {
		margin: 0;
	}

	p {
		width: 100%;

		@media (min-width: 768px) {
			text-align: right;
			width: auto;
		}
	}

	.button {
		background: var(--blue-dark);
		padding: .25rem 1rem;
		margin-top: 0.5rem;
		font-size: .875rem;

		@media(min-width: 768px) {
			margin-top: 0;
			margin-left: 1.5rem;
		}

		&:hover {
			cursor: pointer;
			color: var(--blue25);
		}
	}
}

@keyframes banner-in {
	from {
		opacity: 0;
		transform: translateY(-6rem);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
</style>
