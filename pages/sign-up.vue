<template>
    <section
        class="login-wrapper flex justify-center items-start h-screen relative"
    >
        <div class="login-content bg-white rounded-5 mb-[48px]">
            <nuxt-link class="w-full inline-block text-center" to="/"
                ><img
                    src="/images/login-logo.png"
                    alt=""
                    class="login-logo d-block mb-32 mt-4"
                />
            </nuxt-link>
            <div class="divider mb-32">Create An Account</div>
            <div class="login-form">
                <OnboardingForm
                    :fromBtnText="btnText"
                    @form-submit="createAccount"
                    :termcheck="termcheck"
                    :page="page"
                    :loading="loading"
                />
                <div class="terms-conditions mb-4 text-center">
                    <input
                        type="checkbox"
                        name="terms-conditions"
                        id="terms-conditions"
                        v-model="termcheck"
                    />
                    <label for="terms-conditions">
                        I agree to the
                        <a href="" class="">Terms of Services</a> and
                        <a href="" class="">Privacy Policies</a>.
                    </label>
                </div>
                <p class="text-center">
                    Already have an account?
                    <NuxtLink to="/login">Sign In.</NuxtLink>
                </p>
            </div>
        </div>
        <div class="custom-shape-divider-top-1641529306">
            <forsvgLoginBg />
        </div>
    </section>
</template>

<script setup lang="ts">
definePageMeta({
  auth: false,
})
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
const runtimeConfig = useRuntimeConfig();
const { signIn } = useAuth();
        const router = useRouter();
        const auth = useAuth();

        const btnText = ref("Sign Up");
        const termcheck = ref(false);
        const loading = ref(false);
        const page = ref("signUP");

        onMounted(() => {
            // store.dispatch("formValidation/clearErrors");
        });

        const createAccount = async (user: any) => {
            try{
                loading.value = true;
            const res = await $fetch (`${runtimeConfig.public.apiBase}auth/register`,{
                method: 'POST',
                body:user
            });
 
         
            //     window.dataLayer = window.dataLayer || [];
            //     dataLayer.push({
            //         'event' : 'signup',
            //     });
            //     toast.success("Account Created Successfully");
             await loginAccount(user);

            }
            catch (error){
              //  if (res.data.email) {
            //         toast.error(res.data.email[0]);
            //     } else if (res.data.password) {
            //         toast.error(res.data.password[0]);
            //     } else {
            //         toast.error("Internal server error");
            //     }
            loading.value = false;
            }
        };

        const loginAccount = async (user: { username?: string; email?: string; password?: string; } & Record<string, any>) => {
            try {
                let res = await signIn({ ...user}, { callbackUrl: '/' } )
                // setTimeout(() => {
                //     store.commit("freeTrialModal/TOGGLE_DIALOG", true);
                // }, 1000);
            } catch (err) {
                console.log("login error");
            }
        };


</script>

<style scoped lang="scss">
.terms-conditions {
    input {
        vertical-align: top;
    }
    label {
        width: 90%;
    }
}
</style>
