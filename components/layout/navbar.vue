<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-slate-200 shadow-sm duration-300">
    <div class="mx-4 md:mx-16 lg:mx-32 lg:ml-40">
      <nav class="flex items-center justify-between h-16 lg:h-20">
          
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center gap-3 font-bold">
            <div class="text-center">
              <img src="/assets/images/aait.png" class="w-[70px] md:w-[90px] h-[50px]"/>
             <!-- <h1 class="text-base md:text-lg font-bold">أوامر الشبكة</h1>
              <p class="text-[10px]">AWAMER ALSHABAKA</p>  -->
            </div>
          </NuxtLink>

          <!-- Desktop Menu -->
        <ul class="hidden lg:flex items-center gap-8 text-white font-medium list-none">
          <li>
            <NuxtLink 
              to="/" 
              class="nav-link text-white font-medium"
              @click="scrollToTop"
            >
              الرئيسية
            </NuxtLink>
          </li>

          <li>
            <button @click="handleOrdersClick" class=" hover:text-cyan-500 transition-colors duration-300">
              الطلبات
            </button>
          </li>

          <li>
            <button @click="handleFavoritesClick" class="hover:text-cyan-500 transition-colors duration-300">
              المفضلة
            </button>
          </li>

          <li>
            <button @click="scrollToSection('about')" class="hover:text-cyan-500 transition-colors duration-300">
              من نحن
            </button>
          </li>

          <li>
            <button @click="scrollToSection('FooterTopLinks')" class="hover:text-cyan-500 transition-colors duration-300">
              الأسئلة الشائعة
            </button>
          </li>
        </ul>
      <Teleport to="body">
  <ExModal
    v-if="showExModal"
    @close="showExModal = false"
  />
</Teleport>



          <!-- Right Actions -->
          <div class="flex items-center gap-2 md:gap-3">
            
       <!-- جوه الـ nav: خلي زرار واحد بس (اختياري) -->
        <button
          @click="openAuthModal('login')"
          class="hidden md:flex items-center gap-2 px-6 py-2 text-cyan-500 border border-cyan-500  bg-white rounded-lg transition"
        >
          <i class="fa-regular fa-user"></i>
          <span>تسجيل</span>
        </button>

        <!-- ... باقي الناف ... -->

        <!-- خارج الـ header/nav (آخر template) -->
        <Teleport to="body">
          <AuthModal 
            :is-open="isAuthModalOpen"
            :initial-view="authView"
            @close="closeAuthModal"
            @switch="switchAuthView"
          />
        </Teleport>
        <!-- Search Button -->
        <button
          @click="openSearch"
          class="hidden sm:flex items-center justify-center w-10 h-10
                border border-cyan-500 bg-white rounded-lg transition"
        >
          <svg class="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>

        <!-- Search Bar (Height = Navbar only) -->
        <Teleport to="body">
          <div
            class="fixed top-0 left-0 w-full z-50
                  transition-transform duration-300"
            :class="isSearchOpen ? 'translate-y-0' : '-translate-y-full'"
          >
            <!-- الستارة -->
            <div
              class="
                h-16 md:h-20
                bg-slate-200
                border-b border-gray-300
                flex items-center
              "
            >
              <!-- المحتوى -->
              <div
                class="
                  w-full
                  px-4
                  flex items-center gap-3
                "
              >
              

                <!-- Search Input Wrapper -->
                <div class="relative flex-1 max-w-md sm:max-w-xl md:max-w-2xl mx-auto">
                <!-- Search Icon -->
                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500">
                <svg class="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                  </span>

                  <!-- Input -->
                  <input ref="searchInput" type="text" placeholder="ابحث هنا"
                    class="w-full h-11 md:h-12 pl-12 pr-4 rounded-full border border-cyan-300 focus:outline-none
                    focus:ring-2 focus:ring-cyan-400 bg-white" />
                </div>
              </div>
              <!-- زر الإغلاق -->
                  <button 
                  @click="closeModal"
                  class="absolute top-4 left-4 w-5 h-5  text-cyan-400 border border-cyan-400 rounded-full flex items-center justify-center transition-colors z-10"
                  aria-label="Close"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
            </div>
            
          </div>
        </Teleport>

        <!-- Cart -->
        <button class="relative flex items-center justify-center w-10 h-10 border border-cyan-500  bg-white rounded-lg transition">
          <svg class="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <!-- <span class="absolute -top-1 -right-1 w-5 h-5 bg-cyan-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
            0
          </span> -->
        </button>

        <!-- Language Switcher -->
        <div class="hidden md:block">
          <button
            @click="toggleLangMenu"
            class="flex items-center gap-2 px-3 py-2 border border-cyan-500  bg-white rounded-lg transition"
          >
          <i class="pi pi-globe text-cyan-500"></i>
            <!-- <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
            </svg> -->
            <span class="text-sm text-gray-700">{{ currentLocale }}</span>
          </button>

          <!-- Language Dropdown -->
          <div v-if="isLangMenuOpen" class="absolute  top-full mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[120px] z-50">
            <button
              v-for="locale in availableLocales"
              :key="locale.code"
              @click="changeLocale(locale.code)"
              class="w-full px-4 py-2 text-right  hover:bg-gray-100 transition text-sm"
            >
              {{ locale.name }}
            </button>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden flex items-center justify-center w-10 h-10 hover:bg-gray-300 rounded-lg transition"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
          </div>
        </nav>

        <!-- Mobile Menu -->
        <transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 -translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-4"
        >
          <div v-if="isMenuOpen" class="lg:hidden py-4 border-t border-gray-300">
            <ul class="flex flex-col gap-2">
              <li>
                <NuxtLink to="/" @click="closeMobileMenu" class="block px-4 py-3 hover:bg-gray-300 rounded-lg transition">
                  الرئيسية
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/auth/ExModal" @click="closeMobileMenu" class="block px-4 py-3 hover:bg-gray-300 rounded-lg transition">
                  الطلبات
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/favorites" @click="closeMobileMenu" class="block px-4 py-3 hover:bg-gray-300 rounded-lg transition">
                  المفضلة
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" @click="closeMobileMenu" class="block px-4 py-3 hover:bg-gray-300 rounded-lg transition">
                  من نحن
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/layout/FooterTopLinks" @click="closeMobileMenu" class="block px-4 py-3 hover:bg-gray-300 rounded-lg transition">
                  الاسئلة الشائعة
                </NuxtLink>
              </li>
              
              <!-- Mobile Actions -->
              <li class="pt-2 border-t border-gray-300 mt-2">
                <button
                  @click="openAuthModal('login')"
                  class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition"
                >
                  <i class="fa-regular fa-user"></i>
                  تسجيل الدخول
                </button>
              </li>

              <!-- Language Switcher Mobile -->
              <li>
                <div class="px-4 py-2">
                  <p class="text-xs text-gray-600 mb-2">اللغة:</p>
                  <div class="flex gap-2">
                    <button
                      v-for="locale in availableLocales"
                      :key="locale.code"
                      @click="changeLocale(locale.code)"
                      class="flex-1 px-3 py-2  bg-gray-300 hover:bg-gray-400 rounded-lg transition text-sm"
                    >
                      {{ locale.name }}
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </header>
   <ExModal
      v-if="showExModal"
      @close="showExModal = false"
      @login="openAuthModal('login')"
   />
</template>

<script setup>
import { ref, computed } from 'vue'
import AuthModal from '~/components/auth/AuthModal.vue'
import ExModal from '../auth/ExModal.vue'

const isLoggedIn = false
const showExModal = ref(false)
const handleOrdersClick = () => {
  if (isLoggedIn) {
    navigateTo('/orders')
  } else {
    showExModal.value = true
        console.log('modal should open')
  }
}
const handleFavoritesClick   = () => {
  if (isLoggedIn) {
    navigateTo('/orders')
  } else {
    showExModal.value = true
        console.log('modal should open')
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // عشان يطلع بنعومة مش فجأة
  });
};
const isSearchOpen = ref(false)
const searchInput = ref(null)

const openSearch = async () => {
  isSearchOpen.value = true
  await nextTick()
  searchInput.value?.focus()
}

const closeModal = () => {
  isSearchOpen.value = false
}



// i18n
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})

const currentLocale = computed(() => {
  const current = locales.value.find((i) => i.code === locale.value)
  return current?.name || 'العربية'
})

// الحالة
const isMenuOpen = ref(false)
const isLangMenuOpen = ref(false)

const isAuthModalOpen = ref(false)
const authView = ref('login')

// Methods
const toggleMobileMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  isLangMenuOpen.value = false
}

const closeMobileMenu = () => {
  isMenuOpen.value = false
}

const toggleLangMenu = () => {
  isLangMenuOpen.value = !isLangMenuOpen.value
}

const changeLocale = (code) => {
  setLocale(code)
  isLangMenuOpen.value = false
  isMenuOpen.value = false
}

const openAuthModal = (view) => {
  authView.value = view
  isAuthModalOpen.value = true
  isMenuOpen.value = false
  isLangMenuOpen.value = false
}

const closeAuthModal = () => {
  isAuthModalOpen.value = false
}

const switchAuthView = (view) => {
  authView.value = view
}
const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  })
}

</script>


<style scoped>
a {
  position: relative;
}
a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  right: 0;
  width: 0;
  height: 2px;
  background: #06b6d4;
  transition: width 0.3s ease;
}
a:hover::after {
  width: 50%;
}
</style>