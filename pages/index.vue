<template>
  <div class="flex flex-col min-h-screen">
    
    <!-- Hero Carousel -->
    <OccasionCarousel />
    
    <!-- Categories Carousel -->
    <CategoriesCarousel />
    
    <!-- Main Content Container -->
    <div class="mx-4 md:mx-16 lg:mx-28">
      
      <!-- New Arrivals Section -->
      <section class="container mx-auto px-4 py-16">
        <NewArrivals
        :products="products"
        title="وصل حديثاً"
        viewAllLink="/products/new-arrivals"/>
      </section>

      <!-- Special Products Section -->
      <section class="container mx-auto px-4 py-16">
        <SpicalProudcts
          title="منتجات مميزة"
          viewAllLink="/products"
          :products="spicalProudcts"
        /> 
      </section>


     <AboutSection id="about" />
  <ContactSection :form="form" :handleSubmit="handleSubmit" />

    </div>
       <!-- الاسئلة الشائعة -->
    <div class="bg-slate-50 py-10 px-4 md:px-10 lg:px-20">
      <h2 class="text-center text-lg md:text-2xl font-bold mb-8 text-gray-800">
          الاسئلة الشائعة
      </h2>
      <FooterTopLinks :items="topLinks" id="FooterTopLinks" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import OccasionCarousel from '~/components/layout/OccasionCarousel.vue';
import CategoriesCarousel from '~/components/layout/CategoriesCarousel.vue';
import NewArrivals from '~/components/layout/NewArrivals.vue';
import SpicalProudcts from '~/components/layout/SpicalProudcts.vue';
import IconsLinks from '~/components/auth/Icons-Links.vue';
import FooterTopLinks from '~/components/layout/FooterTopLinks.vue'
import BaseButton from '~/components/layout/BaseButton.vue';
import AboutSection from '~/components/sections/AboutSection.vue';
import ContactSection from '~/components/sections/ContactSection.vue';


// Products Data
  const products = ref([
  {
    id: 1,
    name: 'منتج تيست عساف',
    description: 'وصف',
    price: 80,
    image: '/images/105.jpg',
    rating: 4,
    isOutOfStock: false,
    isFav: false
  },
  {
    id: 2,
    name: 'اسم',
    description: 'وصف',
    price: 80,
    image: '/images/104.jpg',
    rating: 3,
    isOutOfStock: false,
    isFav: false
  },
  {
    id: 3,
    name: 'اسم',
    description: 'وصف',
    price: 80,
    image: '/images/102.jpg',
    rating: 4,
    isOutOfStock: false,
    isFav: false
  },
  {
    id: 4,
    name: 'اسم',
    description: 'وصف',
    price: 80,
    image: '/images/101.jpg',
    rating: 4,
    isOutOfStock: false,
    isFav: false
  }
]);

// Special Products Data
const spicalProudcts = ref([
  {
    id: 1,
    name: 'اسم',
    description: 'وصف',
    price: 80,
    image: '/images/101.jpg',
    rating: 4,
    isOutOfStock: false,
    isFav: false
  }
]);

// Contact Form Data
const form = reactive({
  phone: '',
  email: '',
  subject: '',
  message: ''
});


// Form Submit Handler
const handleSubmit = () => {
  console.log('Form submitted:', form.value);
  
  // TODO: API call
  // await $fetch('/api/contact', {
  //   method: 'POST',
  //   body: form.value
  // });
  
  // Success message
  alert('تم إرسال رسالتك بنجاح!');
  
  // Reset form
  form.value = {
    phone: '',
    email: '',
    subject: '',
    message: ''
  };
};
const topLinks = [
  { to:'/help', labelKey:'footer.top.helpTitle', descKey:'footer.top.helpDesc' },

  { to: '/support', labelKey: '|||||||||||||', descKey:'footer.top.helpDesc' },
  { to: '/contact', labelKey: 'تقديم تجربة ذات طابع شخصي لك' },
  { to: '/faq', labelKey: 'توفير إمكانيةالتواصل معا الاشخاص والمؤسسات التي تهتم بها',
   descKey:'تقديم تجربة ذات طابع شخصي لك تقديم تجربة ذات طابع شخصي لك: تجربة ذات طابع شخصي لك:' },
  { to: '/help', labelKey: 'تشجيعك على التعبير عن نفسك والتواصل بشأن مايهمك:',
    descKey:'تقديم تجربة ذات طابع شخصي لك تقديم تجربة ذات طابع شخصي لك: تجربة ذات طابع شخصي لك:'},
  { to: '/support', labelKey: 'مساعدتك فى اكتشاف المحتوي والمنتجات والخدمات التي قد تهتم بها:',
    descKey:'تقديم تجربة ذات طابع شخصي لك تقديم تجربة  تجربة ذات طابع شخصي لك: تجربة ذات طابع شخصي لك تجربة ذات طابع شخصي لك: تجربة ذات طابع شخصي لك تجربة ذات طابع شخصي لك: تجربة ذات طابع شخصي لك ذات طابع شخصي لك: تجربة ذات طابع شخصي لك:'},
  { to: '/contact', labelKey: 'مواجهة السلوكيات الضارة وحماية ودعم مجتمعنا:',
    descKey:'تقديم تجربة ذات طابع شخصي لك تقديم تجربة ذات طابع شخصي لك: تجربة  تجربة ذات طابع شخصي لك: تجربة ذات طابع شخصي لك تجربة ذات طابع شخصي لك: تجربة ذات طابع شخصي لك ذات طابع شخصي لك:'},
  { to: '/faq', labelKey: 'تقديم تجربة ذات طابع شخصي لك:',
    descKey:'تقديم تجربة ذات طابع شخصي لك تقديم تجربة ذات طابع شخصي لك: تجربة ذات طابع شخصي لك:'},
  { to: '/help', labelKey: 'توفير إمكانية التاصل معا الاشخاص و المؤسسات التي تهتم بها',
    descKey:'تقديم تجربة ذات طابع شخصي لك تقديم تجربة ذات طابع شخصي لك: تجربة ذات طابع شخصي لك:'},
  { to: '/support', labelKey: 'تشجيعك على التعبير عن نفسك والتواصل بشأن مايهمك:',
    descKey:'تقديم تجربة ذات طابع شخصي لك تقديم تجربة ذات طابع  تجربة ذات طابع شخصي لك: تجربة ذات طابع شخصي لك شخصي لك: تجربة ذات طابع شخصي لك:'},
  { to: '/support', labelKey: 'مساعدتك فى اكتشاف المحتوي والمنتجات والخدمات التي قد تهتم بها:',
    descKey:'تقديم تجربة ذات طابع شخصي لك تقديم تجربة ذات طابع شخصي لك: تجربة ذات طابع شخصي لك تجربة ذات طابع شخصي لك: تجربة ذات طابع شخصي لك: على التعبير عن نفسك والتواصل بشأن'},
  { to: '/faq', labelKey: 'تقديم تجربة ذات طابع شخصي لك:',
    descKey:'تقديم تجربة ذات طابع شخصي لك تقديم تجربة ذات طابع شخصي لك: تجربة ذات طابع شخصي لك:على التعبير عن نفسك والتواصل بشأن'},
]

</script>

<style scoped>
/* RTL Support */
input::placeholder,
textarea::placeholder {
  text-align: right;
}

/* Remove spinner from number input */
input[type="tel"]::-webkit-inner-spin-button,
input[type="tel"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* PrimeVue Button Styling */
.p-button {
  align-items: center;
  background-color: transparent;
  color: #dec8ab;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  justify-content: flex-start;
}

/* Discount Badge */
.discount-badge {
  background-color: #fff;
  border-end-end-radius: 6px;
  border-start-end-radius: 6px;
  inset-block-start: 65px;
  inset-inline-start: 0;
  padding: 10px 15px;
  position: absolute;
  font-weight: bolder;
  font-size: larger;
}

/* Smooth Transitions */
button {
  transition: all 0.3s ease;
}

/* Focus States */
input:focus,
textarea:focus {
  box-shadow: 0 0 0 3px rgba(6, 182, 212, 0.1);
}
</style>