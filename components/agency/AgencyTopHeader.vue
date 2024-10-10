<template>
    <nav
        class="h-[56px] flex items-center bg-[#FFFFFF] sticky top-0 z-10 font-medium px-3 app-header"
    >
        <div class="flex basis-2/3">
            <div class="flex basis-2/4 h-8 flex items-center justify-start space-x-4">
                <forsvgMenuBar @click="toggleSidebar" class="cursor-pointer"></forsvgMenuBar>
                <forsvgHeaderLogo></forsvgHeaderLogo>
            </div>
            <div
                class="basis-2/4 flex relative justify-end lg:ml-[50px] xl:ml-0 h-8"
            >
                <input
                    class="w-full relative !h-8 bg-[#F4F5F7] text-[#091E42] text-xs nav-search"
                    type="text"
                    placeholder="Search domains, articles, and more"
                />
                <forsvgSearch class="absolute top-2 right-2"></forsvgSearch>
            </div>
        </div>
        <div class="basis-1/3 flex justify-end items-center space-x-2">
            <a
                class="w-6 h-6 rounded-full bg-[#EBECF0] cursor-pointer flex items-center justify-center"
                href="https://docs.sageseo.ai/"
            >
                <forsvgQuestionMark></forsvgQuestionMark>
            </a>

            <a
                class="w-6 h-6 rounded-full bg-[#EBECF0] cursor-pointer flex items-center justify-center"
                href="javascript:void(0)"
            >
                <forsvgBellIcon></forsvgBellIcon>
            </a>

            <button
                @click="openAccountDialog"
                class="w-6 h-6 rounded-full bg-[#EBECF0] cursor-pointer flex items-center justify-center"
            >
                <forsvgSetting></forsvgSetting>
            </button>
            <div class="flex items-center justify-start space-x-2">
                <div
                    class="w-6 h-6 rounded-full bg-[#EBECF0] flex items-center justify-center"
                >
                    <img
                        :src="authUserData.data.avatar"
                        alt="avatar"
                        v-if="authUserData.data.avatar"
                    />
                </div>
                <div>
                    <p
                        class="text-[#091E42] font-12 font-medium"
                        v-if="authUserData.data.first_name != undefined"
                    >
                        {{ authUserData.data.first_name }}
                        {{ authUserData.data.last_name }} <br />
                    </p>
                    <p>
                        <a
                            class="text-[#5E6C84] text-[10px]"
                            href="javascript:void(0)"
                            @click="logout()"
                            >Sign Out</a
                        >
                    </p>
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
const profileStore = useProfileStore();
const authStore = useAuthStore();
const { data, status, getSession, signOut } = useAuth();
const authUserData = data;
// Local state
const sidebarCurrent = ref(true);

// Vuex and Vue Router
const router = useRouter();

// Computed property to access user info from Vuex store
const authUser = computed(() => authStore.user);

// Toggle sidebar state
const toggleSidebar = () => {
  sidebarCurrent.value = profileStore.sideBar ? false : true;
  profileStore.changeSideBar( sidebarCurrent.value );
  console.log('toggle')
};

// Log out and redirect to login page
const logout = async () => {
   try {
    await signOut({
      callbackUrl: 'login/',
      redirect: true
    })
   // Add after logout logic here, could be removing the session data from localstorage or whatever
  } catch (error) {
    toast.add({ severity: 'error', summary: 'error', detail: error?.data?.message || error?.message, life: 5000 });
  }
};

// Open or toggle the account settings dialog
const openAccountDialog = () => {
//   const isOpen = store.state.accountSetting.open;
//   store.commit('accountSetting/TOGGLE_DIALOG', !isOpen);
//   if (!isOpen) {
//     setTimeout(() => {
//       store.commit('accountSetting/TOGGLE_DIALOG', true);
//     });
//   }
};
</script>

<style scoped lang="scss">
.nav-search::placeholder {
    font-size: 12px !important;
}

input[type='text'],
input[type='password'],
input[type='email'],
input[type='number'],
select {
    box-shadow: none !important;
}

.userImage {
    width: 24px;
    height: 24px;
    line-height: 24px;
    overflow: hidden;
    text-align: center;
    background-color: #b6b6b6;
    border-radius: 25px;
    object-fit: cover;
    margin-top: 5px;
    margin-right: 8px;
}

.app-header {
    box-shadow: 0px 0.5px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
