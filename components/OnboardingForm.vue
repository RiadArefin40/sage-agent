<template>
    <form @submit.prevent="handleSubmit">
        <div class="w-full h-[162px]">
            <transition name="fade">
                <div v-if="show" class="w-full h-full">
                    <div class="form-item mb-3">
                        <label
                            for="email-address"
                            class="mb-1 d-block wt-600"
                            :class="{ 'is-invalid-label': errors.email }"
                            >Email</label
                        >
                        <input
                            type="email"
                            name="email-address"
                            v-model="user.email"
                            id="email-address"
                            class="email-input d-block"
                            :class="{ 'is-invalid': errors.email }"
                            placeholder="john.smith@gmail.com"
                            @input="checkCredentialFill"
                        />
                        <div class="invalid-feedback" v-if="errors.email">
                            {{ errors.email[0] }}
                        </div>
                    </div>
                    <div class="form-item clearfix position-relative">
                        <label
                            for="password"
                            class="mb-1 d-block wt-600 d-block"
                            :class="{ 'is-invalid-label': errors.password }"
                            >Password</label
                        >
                        <input
                            :type="passwordFieldType"
                            name="password"
                            v-model="user.password"
                            id="password"
                            class="email-input d-block mb-2"
                            placeholder="8+ characters"
                            :class="{ 'is-invalid': errors.password }"
                            @input="checkCredentialFill"
                        />
                        <span
                            class="password-view"
                            @click="switchPasswordFieldType"
                            ><i :class="passwordViewIcon"></i
                        ></span>
                        <div class="invalid-feedback" v-if="errors.password">
                            {{ errors.password[0] }}
                        </div>
                    </div>
                </div>
            </transition>
        </div>
        <div class="form-item clearfix position-relative">
            <NuxtLink
                to="/forget-password"
                style="float: right"
                v-if="page == 'login'"
                >Forgot password?</NuxtLink
            >
        </div>
        <div class="divider mb-32">or</div>
        <div class="social-signup mb-32">
            <button
                type="button"
                class="google text-start w-100 seo-btn border-0 rounded-5 seo-btn__transparent ps-2"
                @click="socialLogin('google')"
            >
                <img src="/images/google.png" alt="" class="me-2" />
                <span>Continue with Google</span>
            </button>
        </div>
        <button
            :disabled="!btnActive || loading"
            type="submit"
            class="login-button mb-4 login-submit flex items-center justify-center"
            @keyup.enter="handleSubmit"
            :class="[btnActive ? 'credentialfilled' : '']"
        >
            <forsvgMyBlueBtnSpinner v-if="loading" />
            <span v-else> {{ fromBtnText }}</span>
        </button>
    </form>
</template>

<script>
export default {
    name: "OnboardingForm",
    props: ["fromBtnText", "termcheck", "page", "loading"],
    data: () => ({
        errors:{
          
        },
        user: {
            email: "",
            password: "",
        },
        isCredentialsFilled: false,
        show: false,
        passwordFieldType: "password",
        passwordViewIcon: "fa-light fa-eye",
    }),
    computed: {
        btnActive() {
            // if (this.isCredentialsFilled && this.fromBtnText === "Sign In") {
            //     return true;
            // } else if (
            //     this.isCredentialsFilled &&
            //     this.fromBtnText === "Sign Up" &&
            //     this.termcheck
            // ) {
            //     return true;
            // } else {
            //     return false;
            // }
            return true
        },
    },
    mounted() {
        setTimeout(() => {
            this.show = true;
        }, 200)
            // this.$store.dispatch("formValidation/clearErrors");
    },
    methods: {
        handleSubmit() {
            this.$emit("form-submit", this.user);
        },

        socialLogin(service) {
            window.location.href = `${process.env.baseUrl}social-login/${service}`;
        },
        checkCredentialFill() {
            // if (this.user.email.length > 0 && this.user.password.length > 0) {
            //     this.isCredentialsFilled = true;
            // } else {
            //     this.$store.dispatch("formValidation/clearErrors");
            //     this.isCredentialsFilled = false;
            // }
        },
        switchPasswordFieldType() {
            this.passwordFieldType =
                this.passwordFieldType == "password" ? "text" : "password";
            this.switchPasswordViewIcon();
        },
        switchPasswordViewIcon() {
            this.passwordViewIcon =
                this.passwordFieldType == "password"
                    ? "fa-light fa-eye"
                    : "fa-light fa-eye-slash";
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
