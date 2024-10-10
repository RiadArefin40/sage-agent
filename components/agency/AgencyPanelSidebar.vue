<template>
    <div class="left-menu-wrapper relative">


        <div class="left-sidebar-menu py-b">
            <div class="d-flex flex-column menu-content w-full h-100 relative">
                <nav class="primary-menu">
                   
                    <ul class="space-y-1 py-2">
                        <li
                            class="menu rounded-5 text-[#172B4D] text-sm font-medium"
                        >
                            <nuxt-link
                                to="/agency/launchpad"
                                class="sageWriter flex items-center justify-start space-x-1"
                            >
                                <forsvgRocketIcon></forsvgRocketIcon>
                                <span>Launchpad</span>
                            </nuxt-link>
                        </li>

                        <li
                        
                            class="menu rounded-5 text-[#172B4D] text-sm font-medium"
                        >

                            <nuxt-link
                                to="/agency/article-new"
                                class="sageWriter flex items-center justify-start space-x-1"
                            >
                                <forsvgArticleIcon></forsvgArticleIcon>
                                <span>Articles</span>
                            </nuxt-link>
                        </li>

                        <li
                          
                            class="menu rounded-5 text-[#172B4D] text-sm font-medium"
                        >
                            <nuxt-link
                                to="/domains"
                                class="sageWriter flex items-center justify-start space-x-1"
                            >
                                <forsvgDashboardIcon></forsvgDashboardIcon>
                                <span>Domains</span>
                            </nuxt-link>
                        </li>

                        <li
                            class="menu rounded-5 text-[#172B4D] text-sm font-medium"
                        >
                            <nuxt-link
                                to="/agency/coming-soon"
                                class="sageWriter flex items-center justify-start space-x-1"
                            >
                                <forsvgSeoToolIcon></forsvgSeoToolIcon>
                                <span>SEO Tools</span>
                            </nuxt-link>
                        </li>

                        <li
                            class="menu rounded-5 text-[#172B4D] text-sm font-medium"
                        >
                            <nuxt-link
                                to="/agency/coming-soon"
                                class="sageWriter flex items-center justify-start space-x-1"
                            >
                                <forsvgReportIcon></forsvgReportIcon>
                                <span>Reports</span>
                            </nuxt-link>
                        </li>

                        <div
                          
                            class="h-8 text-[#5E6C84] text-xs flex items-center justify-between space-x-1 border-t border-t-[#EBECF0] px-[17px]"
                        >
                            <span>Domains</span>
                            <div
                                class="border border-[#EBECF0] h-4 w-4 flex items-center justify-center"
                            >
                                <forsvgPlusIcon></forsvgPlusIcon>
                            </div>
                        </div>
                        <li
                          
                            v-for="(domain, index) in domainLists"
                            :key="index"
                            class="menu rounded-5 text-[#172B4D] text-sm font-medium h-8"
                        >
                            <a
                                href="javascript:void(0)"
                                @click="gotoAgencyDashboard(domain)"
                                class="flex items-center justify-start space-x-1 pr-3"
                            >
                                <span class="truncate">{{
                                    domain.company_name
                                }}</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <!-- my-domains modal container -->
                <div
                    v-if="showMyDomain"
                    class="my-domains-container rounded-[5px]"
                    ref="myDomainsContainer"
                >
                    <div class="border-b flex justify-between p-2 h-9">
                        <p>My Domains</p>
                        <i
                            v-can="['create domain']"
                            class="fa-solid fa-plus cursor-pointer"
                            @click="openAddDomainDialog"
                        ></i>
                    </div>
                    <div>
                        <div class="border-b h-12 p-2">
                            <input
                                v-model="searchDomain"
                                class="border border-[#EBECF0] !h-8 !shadow-none"
                                type="text"
                                placeholder="Search Domains"
                            />
                        </div>
                        <div class="w-[232px]">
                            <ul class="w-full">
                                <li
                                    v-for="(domain, index) in domainLists"
                                    :key="index"
                                    class="hover:bg-[#F4F5F7] cursor-pointer h-8 px-6 py-1 text-[#172B4D] font-medium w-full"
                                >
                                    <div
                                        @click="gotoAgencyDashboard(domain)"
                                        class="w-full h-full flex items-center"
                                    >
                                        <span class="truncate text-[#172B4D]">
                                            {{ domain.company_name }}</span
                                        >
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div
                            @click="gotoDomainListPages"
                            class="border-t px-3 flex text-[#0052CC] items-center space-x-3 h-9 cursor-pointer"
                        >
                            <p>View All Domains</p>
                            <svg
                                width="18"
                                height="14"
                                viewBox="0 0 18 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_322_3144)">
                                    <path
                                        d="M13.5 6.99993C13.5 7.28779 13.3901 7.57579 13.1704 7.79517L7.54541 13.4202C7.10596 13.8596 6.39404 13.8596 5.95459 13.4202C5.51514 12.9807 5.51514 12.2688 5.95459 11.8293L10.7859 6.99993L5.95547 2.16946C5.51602 1.73001 5.51602 1.0181 5.95547 0.578643C6.39492 0.13919 7.10684 0.13919 7.54629 0.578643L13.1713 6.20364C13.391 6.42337 13.5 6.71165 13.5 6.99993Z"
                                        fill="#0052CC"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_322_3144">
                                        <rect
                                            width="13.5"
                                            height="18"
                                            fill="white"
                                            transform="matrix(0 -1 1 0 0 13.75)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="!mb-[65px] bottom-menu-area mt-auto px-2 space-y-2">
                    <div class="border-b border-[#F4F5F7]"></div>
                    <div class="text-center space-y-0.5">
                        <!-- <p class="text-[11px] text-[#172B4D]">
                            {{ $auth.user.remaining }} Tokens Remaining
                        </p> -->
                        <p class="text-[#5E6C84] text-[11px]">
                            <!-- <span
                                >{{
                                    $store.state.profile.myplan.ai_tokens_limit
                                }}
                                Tokens</span
                            >
                            <span>{{ $store.state.profile.myplan.name }}</span> -->
                        </p>
                        <p class="text-[#0065FF] text-[12px] cursor-pointer">
                            Get More Tokens
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- <b-modal
            id="modal-center"
            centered
            hide-footer
            hide-header
            size="xl"
            no-close-on-backdrop
        >
            <ModalSettings :hideModal="hideModal" />
        </b-modal>

        <b-modal
            id="keyword-request"
            class="text-center modal-new-content"
            hide-footer
            hide-header
            no-close-on-backdrop
        >
            <div class="keyword-request-wrapper">
                <p class="deleteMsg mb-3">
                    You are out of keyword requests until your expiration date
                </p>
                <p>
                    Your keyword requests renew on
                    <b>{{ currentPlan.end_date | getExpairDate }}</b>
                </p>
                <div class="mb-4 text-end">
                    <button
                        class="mt-1 btn seo-btn__red"
                        block
                        @click="closeModal()"
                    >
                        Ok
                    </button>
                </div>
            </div>
        </b-modal> -->
    </div>
</template>

<script setup>
const domainStore = useDomainStore();
const router = useRouter();

// State
const currentMonth = ref("");
const showMyDomain = ref(false);
const searchDomain = ref("");
const activeDomain = ref({});
const activeDomainOfDashboardFavicon = ref(null);

// Domain list initialization
const domainLists = ref(JSON.parse(JSON.stringify(domainStore.allDomains)));

// Watchers
// watch(() => domainStore.allDomains, (newValue) => {
//   domainLists.value = JSON.parse(JSON.stringify(newValue));
// });

// watch(() => domainStore.activeDomainOfDashboard, (newValue) => {
//   activeDomain.value = JSON.parse(JSON.stringify(newValue));
// });

// watch(searchDomain, () => {
//   const searchProperties = [
//     "domain_url",
//     "company_name",
//     "company_goal",
//     "client_email",
//     "client_name",
//   ];
//   const partialMatchResult = filterByPartialMatch(store.allDomains, searchProperties, searchDomain.value);
//   domainLists.value = JSON.parse(JSON.stringify(partialMatchResult));
// });

// Computed properties
const currentPlan = computed(() => store.myplan);
const addDomaindialog = computed(() => store.addDomain.open);
const allDomains = computed(() => store.allDomains);
const getFirstDomain = computed(() => {
  return activeDomain.value && activeDomain.value.id
    ? activeDomain.value
    : domainLists.value.length > 0
    ? domainLists.value[0]
    : {};
});

// Lifecycle hooks
onMounted(() => {
  calculateThisMonth();
  getMyPlans();
//   document.addEventListener("click", handleClickOutside, true);
});

// Filters (inlined as methods since Vue 3 no longer supports filters)
function getPlanName(plan) {
  return plan == 1
    ? "Free Trial"
    : plan == 2
    ? "Starter Plan"
    : plan == 3
    ? "Research Plan"
    : plan == 4
    ? "Creative Plan"
    : null;
}

function getExpairDate(data) {
  return new Date(data).toLocaleDateString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Methods
function gotoAgencyDashboard(domain) {
//   activeDomain.value = domain;
//   searchDomain.value = "";
//   showMyDomain.value = false;
//   router.push(`/agency/dashboard/${domain.id}`);
}

function filterByPartialMatch(array, searchProperties, searchTerm) {
  return array.filter((item) => {
    for (let prop of searchProperties) {
      if (item[prop].toString().toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
    }
    return false;
  });
}

function showMyDomains() {
//   showMyDomain.value = !showMyDomain.value;
}

function hideModal() {
//   this.$bvModal.hide("modal-center");
}

async function logout() {
//   await store.$auth.logout();
//   await router.push("/login");
}

function calculateThisMonth() {
  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December",
  ];
  const d = new Date();
  currentMonth.value = monthNames[d.getMonth()];
}

function dashboard() {
//   this.$bvModal.show("all-domains");
}

function goToGenerateKeyword() {
//   store.commit("article/CLEAR_ALL");
//   openAutomatedKeywordFlowDialog();
//   if (store.auth.user.remaining > 0) {
//     openAutomatedKeywordFlowDialog();
//   } else {
//     this.$bvModal.show("keyword-request");
//   }
}

function openAutomatedKeywordFlowDialog() {
//   store.commit("automatedKeywordFlowModal/SET_DEFAULT_DATA", {});
//   if (store.automatedKeywordFlowModal.open) {
//     store.commit("automatedKeywordFlowModal/TOGGLE_DIALOG", false);
//     setTimeout(() => {
//       store.commit("automatedKeywordFlowModal/TOGGLE_DIALOG", true);
//     });
//   } else {
//     store.commit("automatedKeywordFlowModal/TOGGLE_DIALOG", true);
//   }
}

function closeModal() {
//   this.$bvModal.hide("keyword-request");
}

async function getMyPlans() {
//   const res = await this.callApi("get", "my-plan");
//   if (res && res.status === 200) {
//     store.commit("profile/CHANGE_MY_PLAN", res.data.data);
//   }
}

function openAddDomainDialog() {
//   if (store.addDomain.open) {
//     store.commit("addDomain/TOGGLE_DIALOG", false);
//     setTimeout(() => {
//       store.commit("addDomain/TOGGLE_DIALOG", true);
//     });
//   } else {
//     store.commit("addDomain/TOGGLE_DIALOG", true);
//   }
}

function gotoDomainListPages() {
//   showMyDomain.value = false;
//   router.push("/agency/domains");
}
</script>


<style scoped lang="scss">
.main-body.compact-view .left-sidebar-menu {
  width: 0px !important;
  overflow: hidden;
}
.menu-content {
  width: 100% !important;
}
.custom-badge {
  width: 25px;
  position: fixed;
  margin-left: 7px;
}

.sidebar-logo {
  height: 36.19px;
  width: 128px;
  margin: 0 auto;
}

.primary-menu {
  ul {
      li {
          line-height: 24px;
          padding: 4px 16px;

          a {
              color: $n800;
          }

          &:hover,
          &.active {
              background-color: $n100;

              a,
              i {
                  color: $b400;
              }
          }
      }
  }
}

.bottom-menu-area {
  margin: 0px -8px;
  padding: 0px;

  nav {
      margin-left: 20px;

      i {
          font-size: 14px;
          vertical-align: middle;
      }
  }
}

.articleInfo {
  overflow: hidden;
  border-radius: 8px;

  .plan-name {
      padding: 8px 12px;
      background-color: $g300;
  }

  .remaining-number {
      display: inline-block;
      font-size: 42px;
      line-height: 44px;
  }

  .total {
      display: inline-block;
      vertical-align: baseline;
  }
}

.userInfo {
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

  a {
      font-size: 10px;
      line-height: 16px;
      color: $n600;
      display: flex;
  }
}

hr {
  height: 3px;
  background: #e5e5e5;
  margin: 0px -15px 0px -15px;
}

.nuxt-link-exact-active {
  color: $b300 !important;
}

.keyword-request-wrapper {
  padding: 24px 32px 0;
  position: relative;

  &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 8px;
      z-index: 2;
      background: $r400;
      overflow: hidden;
  }
}

.wrapper-green {
  &:before {
      background: $g300 !important;
  }
}

.deleteOk {
  width: 50px;
  color: $n50;
  background: $g300;
  border-radius: 5px;
  padding: 6px;
}

.cancelButton {
  color: $n700;
  background: $n100;
}

.seo-btn__red {
  background-color: $r400;
  color: white;
}

.my-domains-container {
  width: 232px;
  left: 12px;
  max-height: 312px;
  position: fixed;
  background-color: white;
  top: 110px;
  box-shadow: 0px 0.5px 4px 0px #00000040;
}
</style>
