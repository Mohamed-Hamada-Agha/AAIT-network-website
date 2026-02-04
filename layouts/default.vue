<template>
  <div  class="w-full ">
    <LayoutNavbar />
 
    <main>
      <slot /> 
    </main>
 

    <!-- الفوتر -->
<AppFooter :brand="brand" :links-groups="footerLinksGroups" :icons="icons" />

  </div>
</template>
<script setup>

// const { locale } = useI18n();

// const direction = computed(() => {
//   return locale.value === 'ar' ? 'rtl' : 'ltr';
// });    

// watch(locale, (newLocale) => {
//   document.dir = newLocale === 'ar' ? 'rtl' : 'ltr';
//   document.documentElement.lang = newLocale;
// }, { immediate: true });

import AppFooter from '~/components/layout/AppFooter.vue'
const props = defineProps({ brand: Object })
const brand = {
  logo: '/_nuxt/assets/images/aait.png', // تأكد من مسار الصورة في نكست 3
  name: 'أوامر الشبكة',
  subName: 'AWAMER ALSHABAKA',
  descriptionKey: 'هذا الموقع منصة توفير خدمات البيع والشراء الخاصة بالمنتجات والمواقع الإلكترونية'
}



const footerLinksGroups = [
  [
    { to: '/', label: 'الرئيسية' },
    { to: '/orders', label: 'الطلبات' },
    { to: '/favorites', label: 'المفضلة' },
    { to: '/complaints', label: 'الشكاوي والمقترحات' },
    { to: '/terms', label: 'الشروط والاحكام' },
  ],
  [
    { to: '/about', label: 'من نحن' },
    { to: '/faq', label: 'الاسئلة' },
  ]
]

const icons = [
  { href: '#', src: '/images/icon1.png', alt: 'icon' },
  { href: '#', src: '/images/icon2.png', alt: 'icon' },
]
</script>