<template>
   <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- <Menue :id="id" />
    <h1 class="text-4xl font-bold mb-8">{{ category?.name }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div 
        v-for="product in products" 
        :key="product.id"
        class="bg-white rounded-lg shadow overflow-hidden"
      >
        <img 
          :src="product.image" 
          :alt="product.name"
          class="w-full h-64 object-cover"
        />
        <div class="p-4">
          <h3 class="font-bold text-lg">{{ product.name }}</h3>
          <p class="text-gray-600 text-sm mt-2">{{ product.description }}</p>
          <p class="text-xl font-bold mt-3">{{ product.price }} SAR</p>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import Menue from '~/components/auth/Menue.vue';

const id = useRoute().params.id
definePageMeta({ layout: 'default' })



const products = ref([
  {
    id: 1,
    name: 'dress',
    description: 'Beautiful dress',
    price: 600,
    image: '/assets/images/mr1.png'
  },
  {
    id: 1,
    name: 'Bags',
    description: 'Beautiful dress',
    price: 600,
    image: '/assets/images/mr1.png'
  },
  {
    id: 1,
    name: 'shoes',
    description: 'Beautiful dress',
    price: 600,
    image: '/assets/images/mr1.png'
  },
  {
    id: 1,
    name: 'Accessories',
    description: 'Beautiful dress',
    price: 600,
    image: '/assets/images/mr1.png'
  },
  {
    id: 1,
    name: 'Fjff',
    description: 'Beautiful dress',
    price: 600,
    image: '/assets/images/mr1.png'
  }
]);
const category = ref({ name: 'Dresses' })
</script>
