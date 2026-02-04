<template>
  <div class="flex flex-wrap justify-center items-center w-full py-4">
    <ul class="flex items-center space-x-4"> 
      <li v-for="(social, index) in socials" :key="index">
        <a :href="social.link" 
           rel="noopener noreferrer" 
           target="_blank"
           class="flex items-center justify-center rounded-md bg-white w-8 h-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          <img :src="social.icon" 
               :alt="social.name"
               class="w-5 h-5 object-contain">
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
// الأفضل دايماً في Vue إننا نحط البيانات في مصفوفة عشان الكود يكون أنضف وأسهل في التعديل
const socials = [
  { name: 'Twitter', link: 'https://twitter.com/', icon: 'https://backend.rawrentals.org/public/storage/images/socials/1715670978_1176.png' },
  { name: 'Whatsapp', link: 'https://www.whatsapp.com', icon: 'https://backend.rawrentals.org/public/storage/images/socials/1714561234_1552.png' },
  { name: 'Telegram', link: 'http://www.telegram.org', icon: 'https://backend.rawrentals.org/public/storage/images/socials/1714561054_3336.png' },
  { name: 'Instagram', link: 'https://www.instagram.com', icon: 'https://backend.rawrentals.org/public/storage/images/socials/1714560263_2345.png' }
];
</script>