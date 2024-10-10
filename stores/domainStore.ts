import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useDomainStore = defineStore('domainStore', () => {
  const open = ref(false);
  const defaultData = ref({});
  const singleDomain = ref({});
  const isOpenSuggestedArticleTitleDialog = ref(false);
  const isRefetchDomainLists = ref(false);
  const reservedAllDomains = ref([]);
  const allDomains = ref([]);
  const activeDomainOfDashboard = ref({});
  const activeDomainOfDashboardFavicon = ref(null);

  function toggleDialog(payload: boolean) {
    open.value = payload;
  }

  function setActiveDomainOfDashboard(payload: {}) {
    activeDomainOfDashboard.value = payload;
  }

  function setSingleArticle(payload: {}) {
    singleDomain.value = payload;
  }

  function setDefaultData(payload: {}) {
    defaultData.value = payload;
  }

  function setSuggestedArticleTitle(payload: boolean) {
    isOpenSuggestedArticleTitleDialog.value = payload;
  }

  function editDomain(payload: {}) {
    singleDomain.value = payload;
  }

  function setAllDomains(payload: never[]) {
    reservedAllDomains.value = payload;
    allDomains.value = payload;
  }

  function refetchDomainLists(payload: boolean) {
    isRefetchDomainLists.value = payload;
  }

  function updateDomainFavicon(payload: null) {
    activeDomainOfDashboardFavicon.value = payload;
  }

  return {
    open,
    defaultData,
    singleDomain,
    isOpenSuggestedArticleTitleDialog,
    isRefetchDomainLists,
    reservedAllDomains,
    allDomains,
    activeDomainOfDashboard,
    activeDomainOfDashboardFavicon,
    toggleDialog,
    setActiveDomainOfDashboard,
    setSingleArticle,
    setDefaultData,
    setSuggestedArticleTitle,
    editDomain,
    setAllDomains,
    refetchDomainLists,
    updateDomainFavicon,
  };
});
