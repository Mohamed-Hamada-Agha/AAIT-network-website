// middleware/auth.js
export default defineNuxtRouteMiddleware(() => {
  const { isLoggedIn, showLoginModal } = useAuth()

  if (!isLoggedIn.value) {
    showLoginModal.value = true
    return abortNavigation()
  }
})
