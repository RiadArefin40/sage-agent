<template>
    <section
        class="login-wrapper d-flex justify-content-center align-items-start h-100 position-relative"
    >
        <div class="login-content bg-white rounded-5 mb-5">
            <nuxt-link to="/"
                ><img
                    src="/images/login-logo.png"
                    alt=""
                    class="login-logo d-block mb-32 mt-4"
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
                <div class="terms-conditions mb-4 ms-3">
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

<script>
export default {
    middleware: ["auth"],
    name: "Login",
    data: () => ({
        btnText: "Sign In",
        page: "login",
        loading: false,
    }),
    mounted() {
        // if (this.$auth.loggedIn) {
        //     this.$router.push({ path: "/" });
        // }
        // this.$store.dispatch("formValidation/clearErrors");
    },
    methods: {
        async loginAccount(user) {
            this.loading = true;
            // try {
            //     let res = await this.$auth.loginWith("local", { data: user });
            //     localStorage.setItem("token", res.data.access_token);
            //     if (this.$auth.user.user_type === 1) {
            //         if (this.$auth.user.domain) {
            //             this.$router.push(
            //                 "/agency/dashboard/" + this.$auth.user.domain.id
            //             );
            //         } else {
            //             this.$router.push("/agency/domains");
            //         }

            //         setTimeout(() => {
            //             if (res.data.is_first_login) {
            //                 const toggleDialog = (open) => {
            //                     this.$store.commit(
            //                         "accountSetting/TOGGLE_DIALOG",
            //                         open
            //                     );
            //                 };

            //                 const updateTab = (tab) => {
            //                     this.$store.commit(
            //                         "accountSetting/UPDATE_CURRENT_ACCOUNT_SETTING_DIALOG_TAB",
            //                         tab
            //                     );
            //                 };

            //                 if (this.$store.state.accountSetting.open) {
            //                     toggleDialog(false);
            //                     setTimeout(() => {
            //                         updateTab("");
            //                         toggleDialog(true);
            //                         setTimeout(
            //                             () => updateTab("change-password"),
            //                             0
            //                         );
            //                     }, 0);
            //                 } else {
            //                     updateTab("");
            //                     toggleDialog(true);
            //                     setTimeout(
            //                         () => updateTab("change-password"),
            //                         0
            //                     );
            //                 }
            //             }
            //         }, 1000);
            //     }
            // } catch (err) {
            //     console.log("login error");
            // }
            this.loading = false;
            console.log('okkkkk login')
        },
    },
};
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
