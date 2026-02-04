import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  typescript: { shim: false, strict: true },
  vite: { esbuild: { jsx: 'automatic' } },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@primevue/nuxt-module',
    '@nuxtjs/i18n',
  ],

  // i18n: استخدم 
  i18n: {
    baseUrl:
      process.env.NODE_ENV === "production"
        ? "http://vue.aait-sa.com:3000" // Production base URL
        : "http://localhost:3000", // Development base URL
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
    defaultLocale: "ar",
    defaultDirection: "rtl",
    langDir: "locales",
    strategy: "prefix_except_default", // URL strategy
    locales: [
      {
        code: "en",
        name: "English",
        dir: "ltr",
        file: { path: "en.json", cache: false },
        language: "en",
      },
      {
        code: "ar",
        name: "عربي",
        dir: "rtl",
        file: { path: "ar.json", cache: false },
        language: "ar",
      },
    ],
  },

  // PrimeVue v4 — الثيم عبر JS preset (متوافق وبدون CSS إضافي)
  primevue: {
    components: { 
      // ضيف اللي محتاجه فقط؛ InputGroup من @primevue/forms هيشتغل
      include: ['Select', 'InputGroup', 'Carousel']
    },
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'class', // سيب الثيم يتبع نظام الجهاز
          cssLayer: true              // يحط الـ CSS في layer، أحسن مع Tailwind
        }
      }
    }
  },

  // ترتيب الـ CSS: Tailwind أولًا (reset/utilities) ثم الأيقونات ثم ملفاتك
  css: [
    '@/assets/css/tailwind.css',
    'primeicons/primeicons.css',
    '~/assets/css/fonts.css',
    '~/assets/css/style.css'
  ]
})
