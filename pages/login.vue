<template>
    <section
        class="login-wrapper flex justify-center items-start h-screen relative"
    >
        <div class="login-content bg-white rounded-5 mb-[48px]">
            <nuxt-link class="w-full inline-block text-center" to="/"
                ><img
                    src="/images/login-logo.png"
                    alt=""
                    class="login-logo d-block mb-32 mt-6"
                />
            </nuxt-link>
            <div class="divider mb-32">Log in to Your Account</div>
            <div class="login-form">
                <OnboardingForm
                    :fromBtnText="btnText"
                    @form-submit="loginAccount"
                    :page="page"
                    :loading="loading"
                />
                <div class="terms-conditions mb-6 ms-4">
                    <input
                        type="checkbox"
                        name="terms-conditions"
                        id="terms-conditions"
                        class="me-2"
                    />
                    <label for="terms-conditions">Keep me logged in</label>
                </div>
                <p class="text-center">
                    Don't have an account?
                    <NuxtLink to="/sign-up">Create a new one.</NuxtLink>
                </p>
            </div>
        </div>
        <div class="custom-shape-divider-top-1641529306">
            <forsvgLoginBg />
        </div>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const btnText = ref("Sign In");
const page = ref("login");
const loading = ref(false);
const { signIn } = useAuth();
const { data, status, getSession } = useAuth()
const runtimeConfig = useRuntimeConfig();
const formValidationStore = useFormValidationStore();

const  loginAccount = async(user) => {
                loading.value = true;
    
             
                const  {data,error,status} = await useAsyncData('post', () =>  signIn({ ...user}, { callbackUrl: '/domains' } ) )
                //  if(status.value = "success"){
                //     console.log('response',status)
                //      router.push('/')
                //  }
                 if(error?.value?.data){
                    formValidationStore.setErrors(error.value.data);
                    console.log('error','data',error.value.data)
                 }
                 

   
                // localStorage.setItem("token", res.data.access_token);
               
                // if (this.$auth.user.user_type === 1) {
                //     if (this.$auth.user.domain) {
                //         this.$router.push(
                //             "/agency/dashboard/" + this.$auth.user.domain.id
                //         );
                //     } else {
                //         this.$router.push("/agency/domains");
                //     }

                //     setTimeout(() => {
                //         if (res.data.is_first_login) {
                //             const toggleDialog = (open) => {
                //                 this.$store.commit(
                //                     "accountSetting/TOGGLE_DIALOG",
                //                     open
                //                 );
                //             };

                //             const updateTab = (tab) => {
                //                 this.$store.commit(
                //                     "accountSetting/UPDATE_CURRENT_ACCOUNT_SETTING_DIALOG_TAB",
                //                     tab
                //                 );
                //             };

                //             if (this.$store.state.accountSetting.open) {
                //                 toggleDialog(false);
                //                 setTimeout(() => {
                //                     updateTab("");
                //                     toggleDialog(true);
                //                     setTimeout(
                //                         () => updateTab("change-password"),
                //                         0
                //                     );
                //                 }, 0);
                //             } else {
                //                 updateTab("");
                //                 toggleDialog(true);
                //                 setTimeout(
                //                     () => updateTab("change-password"),
                //                     0
                //                 );
                //             }
                //         }
                //     }, 1000);
                // }
            // } catch (err) {
            //     const formValidationStore = useFormValidationStore();
            //     console.log("login error",err);
            // }
            loading.value = false;
}
</script>
<style scoped lang="scss">
.password-view {
    position: absolute;
    top: 36px;
    right: 10px;
    font-size: 23px;
    z-index: 2;
    cursor: pointer;
    color: $n400;
}

.credentialfilled {
    background: $b400;
    color: white;
}
</style>
