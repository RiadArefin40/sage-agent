import { defineStore } from 'pinia';

export const useProfileStore = defineStore('profile', () => {
    // State
    const siteName = ref("");
    const siteDescription = ref("");
    const userProfile = ref([]);
    const sideBar = ref(false);
    const sidebar2 = ref(false);
    const googleAuth = ref(false);
    const startGscLoader = ref(false);
    const myplan = ref([]);
    const isConnectedWithTwitter = ref(false);


    // Getters (using computed properties)
    const getSiteName = computed(() => siteName.value);
    const getSiteDescription = computed(() => siteDescription.value);
    const getUserProfile = computed(() => userProfile.value);
    const isSideBarOpen = computed(() => sideBar.value);
    const isSidebar2Open = computed(() => sidebar2.value);
    const isGoogleAuth = computed(() => googleAuth.value);
    const getGscLoader = computed(() => startGscLoader.value);
    const getMyPlan = computed(() => myplan.value);
    const isTwitterConnected = computed(() => isConnectedWithTwitter.value);



        // Actions
    function changeSiteName(newName) {
        siteName.value = newName;
    }
    function changeSiteDescription(newDescription) {
        siteDescription.value = newDescription;
    }
    function changeUserProfile(newProfile) {
        userProfile.value = newProfile;
    }
    function changeSideBar(status) {
        console.log('setSidebar',status )
        sideBar.value = status;
        
    }
    function changeSideBar2(status) {
        sidebar2.value = status;
    }
    function changeGoogleAuth(status) {
        googleAuth.value = status;
    }
    function changeGSCLoader(status) {
        startGscLoader.value = status;
    }
    function changeMyPlan(newPlan) {
        myplan.value = newPlan;
    }
    function setConnectedTwitter(status) {
        isConnectedWithTwitter.value = status;
    }

      // Return the state, getters, and actions
  return {
    siteName,
    siteDescription,
    userProfile,
    sideBar,
    sidebar2,
    googleAuth,
    startGscLoader,
    myplan,
    isConnectedWithTwitter,
    getSiteName,
    getSiteDescription,
    getUserProfile,
    isSideBarOpen,
    isSidebar2Open,
    isGoogleAuth,
    getGscLoader,
    getMyPlan,
    isTwitterConnected,
    changeSiteName,
    changeSiteDescription,
    changeUserProfile,
    changeSideBar,
    changeSideBar2,
    changeGoogleAuth,
    changeGSCLoader,
    changeMyPlan,
    setConnectedTwitter
  };
})
