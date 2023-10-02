import { useAuthStore } from "../stores/auth";

export default defineNuxtRouteMiddleware (async (to, from) => {
  const authStore = useAuthStore();
  const isValid: any = await authStore.me();

  if(isValid?.success){
    //Redirect to the home page 
    navigateTo('/');
  }
});