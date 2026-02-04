// src/composables/useLocale.ts
import { useI18n } from 'vue-i18n'

export function useLocale() {
  const { locale } = useI18n()

  function setLang(lang: 'ar' | 'en') {
    locale.value = lang
    // HTML attributes مهمة عشان الاتجاه وقارئ الشاشة
    document.documentElement.lang = lang
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('lang', lang)
  }

  // تحميل الإعداد المحفوظ
  function initLang() {
    const saved = localStorage.getItem('lang') as 'ar' | 'en' | null
    setLang(saved ?? (navigator.language.startsWith('ar') ? 'ar' : 'en'))
  }

  return { locale, setLang, initLang }
}
