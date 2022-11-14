<template>
	<div class="m-4">
		<div class="mx-auto max-w-screen-xl lg:px-8">
			<div class="flex flex-col">
				<h2 class="section-header">PROFESJONALNY RETUSZ</h2>

				<p class="mx-auto py-4 text-lg lg:px-48">
					Po sesji wspólnie wybierzemy 9 najlepszych zdjęć
				</p>
			</div>

			<div class="lg:mt-2 grid grid-cols-1 lg:gap-8 lg:grid-cols-2">
				<div
					class="m-2 lg:m-12 flex flex-col rounded-xl border border-gray-800 p-4 lg:p-8 shadow-xl transition"
					href="/services/digital-campaigns">
					<img src="../../resources/photoshop.png" />
					<h2 class="mb-0 mt-4 pb-0 text-lg text-white lg:text-xl lg:font-bold">
						Każde wybrane zdjęcie zostanie poddane 15 stopniowej obróbce i
						retuszowi wg. autorskiej metody
					</h2>
				</div>

				<div
					class="m-2 lg:m-12 flex flex-col rounded-xl border border-gray-800 p-4 lg:p-8 shadow-xl transition"
					href="/services/digital-campaigns">
					<img src="../../resources/peoples.png" />
					<h2 class="mb-0 mt-4 pb-0 text-lg text-white lg:text-xl lg:font-bold">
						Metoda ta powstawała i była nieustannie ulepszana przez ostatnie 4
						lata podczas pracy z ponad 100+ klientami
					</h2>
				</div>
			</div>
			<div class="pt-8">
				<video
					loop
					autoplay
					class="rounded-xl shadow-xl"
					src="../../resources/2022-03-31-01-11-50.mp4" />
			</div>
		</div>
		<div>
			<h2
				class="container mx-auto py-6 lg:p-10 text-4xl font-black text-gray-200 lg:text-5xl">
				ZOBACZ RÓŻNICĘ
			</h2>
			<BeforeAndAfter />
			<a
				class="md-4 mt-4 inline-block rounded border border-gold bg-gold lg:px-32 py-2 text-2xl font-medium text-black hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-indigo-500"
				href="/download">
				Rezerwuję Sesję
			</a>
		</div>
	</div>
</template>

<script setup>
	import { BeforeAndAfter } from "../components";
</script>
