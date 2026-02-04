export const useAuth = () => {
  // 1. تعريف حالات التفاعل (Reactivity State)
  const user = useState('auth_user', () => null)        // بيانات المستخدم
  // const isLoggedIn = computed(() => !!user.value)      // هل المستخدم مسجل دخول؟
  const isLoading = ref(false)                         // حالة التحميل
  // 
  const isLoggedIn = useState('isLoggedIn', () => false)
  const showLoginModal = useState('showLoginModal', () => false)

  // 2. الدوال الرئيسية
  
  // أ. تسجيل الدخول
  const login = async (credentials) => {
    isLoading.value = true;
    try {
      // ... (كود الاتصال بالـ API)
      // ... (تخزين الـ Token في Local Storage أو Cookies)
      
      await fetchUser(); // جلب بيانات المستخدم بعد النجاح  
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      isLoading.value = false;
    }
  }

  // ب. تسجيل الخروج
  const logout = async () => {
    // ... (مسح الـ Token)
    user.value = null;
    await navigateTo('/');
  }
  
  // ج. جلب بيانات المستخدم
  const fetchUser = async () => {
    // يتم استدعاؤها بعد تسجيل الدخول وعند تحميل التطبيق للتحقق من الجلسة
    try {
      // ... (الاتصال بـ API لـ /me)
      // user.value = data;
    } catch (error) {
      user.value = null;
    }
  }

  // 3. إرجاع الخصائص والدوال المتاحة
  return {
    user,
    isLoggedIn,
    showLoginModal,
    isLoading,
    login,
    logout,
    fetchUser
  }
}