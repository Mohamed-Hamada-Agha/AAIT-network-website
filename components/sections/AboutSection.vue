<template>
  <!-- About Us Section -->
  <section class="py-8 md:py-16">
    <div class="text-center flex flex-col gap-4 md:gap-6 max-w-3xl mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900">من نحن</h2>
      <h3 class="text-lg md:text-xl text-cyan-500 font-bold">About</h3>

      <p class="text-base md:text-lg text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi accusamus, cupiditate molestias ea mollitia
        esse praesentium. Porro facilis provident labore ab! Voluptas, mollitia. Praesentium officia a laborum quam provident nihil?
      </p>

      <div class="mt-4">
        <BaseButton label="المزيد عن أوامر" class="" />
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../layout/BaseButton.vue';
</script>
