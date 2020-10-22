<template>
	<header class="banner" ref="banner move-down">
		<p>We’re counting on you to vote!</p>
		<a class="button" href="/rise-poster-files.zip">Download posters</a>
	</header>
</template>



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
	transition: all 1.3s cubic-bezier(.69,-0.01,.17,1);
	z-index: 3;
	opacity: 0;
	animation: banner-in 1.3s cubic-bezier(.69,-0.01,.17,1) forwards;
	animation-delay: 1.3s;

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
