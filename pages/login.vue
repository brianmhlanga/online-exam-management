git <template>
  <NuxtLayout name="authentication">
      <div class="block-content">
          <div class="surface-card shadow-2 border-round  lg:w-6 w-full lg:w-6 p-4 lg:p-7">
              <div class="text-center mb-5">
                  <div class="text-900 text-3xl font-medium mb-3">Login</div>
              </div>
              <div> <label for="email1" class="block text-900 font-medium mb-2">Email</label> 
                  <input class="p-inputtext p-component w-full mb-3" id="email1" v-model="email" type="text" placeholder="Email address"> 
                  <label for="password1" class="block text-900 font-medium mb-2">Password</label>
                   <input class="p-inputtext p-component w-full mb-3" id="password1" type="password" v-model="password" placehoder="Password">
                  <div class="flex align-items-center justify-content-between mb-6">
                      <div class="flex align-items-center">
                          <div class="p-checkbox p-component mr-2" id="rememberme1">
                              <div class="p-hidden-accessible"> <input type="checkbox"> </div>
                              <div class="p-checkbox-box">
                                  <!---->
                              </div>
                          </div> <label for="rememberme1">Remember me</label>
                      </div> <a class="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot password?</a>
                  </div> <button class="p-button p-component w-full" type="button" aria-label="Sign In" > <span class="p-button-icon p-button-icon-left pi pi-user"></span> <span class="p-button-label">Sign In</span>
                      <!----> <span class="p-ink" role="presentation" aria-hidden="true"></span>
                  </button>
              </div>
          </div>
          <!---->
      </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
  import { useToast } from "primevue/usetoast";
  import { storeToRefs } from "pinia";

  definePageMeta({
      middleware: ["not-auth"]
  });

  const toast = useToast();
  const email = ref()
  const password = ref()
  // const employeeData = storeToRefs(authStore).employeeData
  // const employee_id = storeToRefs(authStore).employee_id
  const isLoading = ref(false);

  const goToRegister = async () => {

      navigateTo('/register')
      
  }


</script>

<style>
  .content-wrapper.d-flex.align-items-center.auth.px-0 {
      /* background-color: red; */
      background-position: bottom;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url(/images/signin-2.jpg);
  }
  .auth .brand-logo {
      margin-bottom: 2rem;
      text-align: center;
  }
  .auth .auth-form-light {
      background: #ffffff9c !important;
  }
  button.p-button.p-component.p-disabled.p-button-loading.p-button-loading-label-only.bg-secondary.btn.btn-bg.text-white {
      width: 100% !important;
      height: 70px !important;
  }
  .w-full.lg\:w-6.p-4.lg\:p-7.surface-card {
  margin: auto;
  }
  input.p-inputtext.p-component.w-full.mb-4 {
  height: 70px;
}
  button.p-button.p-component.bg-primary.btn.btn-bg.text-white {
      height: 70px !important;
  }
  button.p-button.p-component.bg-primary.btn.btn-bg.text-white {
      width: 100%;
      height: 50px;
      background-color: #141414 !important;
  }
  button.p-button.p-component.w-full {
  background-color: black;
  }
</style>