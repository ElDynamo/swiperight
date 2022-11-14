<template>
	<div
		id="home"
		class="flex h-screen flex-col justify-between">
		<Nav />
		<Hero />
		<PromoVideo />
		<SwipeRightDescription />
		<Posing />
		<PromotionPart1 />
		<Retouch />
		<SimpleGallery
			galleryID="my-test-gallery"
			:images="images" />
		<StepAfterStep />
		<UpcomingPhotoshoots />
		<ContactForm />
		<FAQ />
	</div>
</template>

<script setup>
	import {
		Nav,
		Hero,
		PromoVideo,
		SwipeRightDescription,
		Posing,
		Retouch,
		PromotionPart1,
		SimpleGallery,
		StepAfterStep,
		UpcomingPhotoshoots,
		ContactForm,
		FAQ,
	} from "../components";
</script>
