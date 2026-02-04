// composables/useCounter.js
export const useCounter = () => {
  // ١. نعرف البيانات
  const count = ref(0)
  
  // ٢. نعرف الدوال
  const increment = () => {
    count.value++
  }
  
  const decrement = () => {
    count.value--
  }
  
  const reset = () => {
    count.value = 0
  }
  
  // ٣. نرجع كل شيء نريد استخدامه
  return {
    count,
    increment,
    decrement,
    reset
  }
}