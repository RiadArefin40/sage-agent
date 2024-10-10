<template>
  <section
    class="login-wrapper flex justify-center items-start h-screen relative"
  >
    <div class="login-content bg-white rounded-5 mb-[48px]">
      <nuxt-link class="w-full inline-block text-center" to="/">
        <img
          src="/images/login-logo.png"
          alt=""
          class="login-logo d-block mb-32 mt-4"
        />
      </nuxt-link>
      <div class="divider">Forget Password</div>
      <div class="login-form">
        <form>
          <div class="form-item mb-3">
            <label
              for="email-address"
              class="mb-2 d-block wt-600"
              :class="{ 'is-invalid-label': errors?.email }"
              >Email</label
            >
            <input
              type="email"
              name="email-address"
              v-model="email"
              id="email-address"
              class="email-input d-block"
              placeholder="john.smith@gmail.com"
              @input="checkCredentialFill"
            />
            <div class="invalid-feedback" v-if="errors?.email">
              {{ errors.email[0] }}
            </div>
          </div>

          <button
            type="button"
            class="login-button mb-4 login-submit active"
            :class="{ credentialfilled: isCredentialsFilled }"
            @click="sendMail"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <div class="custom-shape-divider-top-1641529306">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
definePageMeta({
  auth: false,
});
import { useToast } from "vue-toastification";
const formValidationStore = useFormValidationStore();
const router = useRouter();
const runtimeConfig = useRuntimeConfig();
const toast = useToast();
const email = ref("");
const isCredentialsFilled = ref(false);

const checkCredentialFill = () => {
  if (email.value.length > 0) {
    isCredentialsFilled.value = true;
  } else {
    formValidationStore.clearErrors();
    isCredentialsFilled.value = false;
  }
};

const sendMail = async () => {
  const data = {
    email: email.value,
  };

  try {
    const res = await $fetch(
      `${runtimeConfig.public.apiBase}auth/forgot-password`,
      {
        method: "POST",
        body: data,
      }
    );
    if (res.status == "success") {
      toast.success("Check your mail to reset password");
      await router.push("/login");
    } else {
        toast.error(error);
    }
  } catch (error) {
    formValidationStore.setErrors(error);
    toast.error(error);
  }
};
</script>
<style scoped lang="scss">
.credentialfilled {
  background: $b400;
  color: white;
}
</style>
