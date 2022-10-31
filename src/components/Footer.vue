<template>
	<div class="m-0 flex h-screen w-full flex-col items-stretch justify-start">
		<footer
			aria-label="Site Footer"
			class="bg-gray-900">
			<div class="sm:px-6 mx-auto px-4 py-8 lg:px-8">
				<div class="sm:flex sm:items-center sm:justify-between">
					<div class="sm:justify-start flex justify-center text-teal-600">
						<img
							:src="logo"
							class="w-20" />
					</div>

					<p
						class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
						Copyright &copy; 2022. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script setup>
	import logo from "../../resources/logo.webp";
</script>
