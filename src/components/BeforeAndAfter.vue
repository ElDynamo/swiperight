<template>
	<div class="space-between grid grid-cols-1 gap-x-3 lg:p-4 lg:grid-cols-2">
		<ImgComparisonSlider class="mb-8 rounded-xl shadow-2xl lg:mb-auto">
			<!-- eslint-disable -->
			<img
				slot="first"
				style="width: 100%"
				src="../../resources/mati-po.jpg" />
			<img
				slot="second"
				style="width: 100%"
				src="../../resources/mati-przed.jpg" />
			<!-- eslint-enable -->
		</ImgComparisonSlider>

		<ImgComparisonSlider class="rounded-xl shadow-2xl">
			<!-- eslint-disable -->
			<img
				slot="first"
				style="width: 100%"
				src="../../resources/igor-po.jpg" />
			<img
				slot="second"
				style="width: 100%"
				src="../../resources/igor-przed.jpg" />
			<!-- eslint-enable -->
		</ImgComparisonSlider>
	</div>
</template>

<script>
	import { ImgComparisonSlider } from "@img-comparison-slider/vue";

	export default {
		name: "ExampleComponent",
		components: {
			ImgComparisonSlider,
		},
	};
</script>
