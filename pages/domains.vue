<template>
    <section class="mx-0.5 px-[24px]">
        <div class="flex items-center justify-between h-[72px]">
            <p class="text-[20px] px-0 pt-3 text-[#091E42] font-semibold">
                DOMAINS
            </p>
            <div class="flex items-center pt-2 relative space-x-4">
                <input class="!h-[32px] !w-[282px] !shadow-none rounded-[5px] text-xs text-[#8993A4] placeholder-[#8993A4]"
                    type="text" placeholder="Search Projects" />
                <forsvgSearch class="absolute right-[149px]"></forsvgSearch>
                <button  class="bg-[#0052CC] text-white p-2 rounded-[5px] space-x-[10px]"
                    @click="openAddDomainDialog">
                    <i class="fa-solid fa-plus"></i>
                    <span>Add Project</span>
                </button>
            </div>
        </div>
        <div class="rounded-[5px] my-[17px] c-sh overflow-hidden">
            <!-- table head -->
            <div class="flex bg-white pt-4 pb-3 pr-4 justify-between rounded-t-[5px]">
                <p class="pl-14 pt-2">All Clients</p>
                <div class="flex text-[12px] text-[#8993A4]">
                    <p class="border px-3 py-1 rounded-1 cursor-pointer" @click="orderingDomainLists('top')">
                        Top Performing
                    </p>
                    <p class="border px-3 py-1 rounded-1 cursor-pointer" @click="orderingDomainLists('low')">
                        Lowest Performing
                    </p>
                </div>
            </div>
            <div class="py-2">
                <div class="flex">
                    <div class="flex basis-1/2 mx-[45px]">
                        <p class="basis-1/3">CLIENT</p>
                        <p class="basis-2/3">DOMAIN</p>
                    </div>
                    <div class="flex basis-1/2 mr-10">
                        <p class="basis-1/3">IMPRESSIONS</p>
                        <p class="basis-1/3">CLICKS</p>
                        <p class="basis-1/3">CTR</p>
                    </div>
                </div>
            </div>

            <!-- table-data-cell--1 -->

            <template v-if="!loadingLoadDomainLists">
                <div class="w-full" v-for="(domain, index) in domainLists" :key="index">
                    <div class="py-2 bg-white border-b">
                        <div class="flex">
                            <div class="relative">
                                <button class="absolute left-[10px]" v-b-toggle="`collapse-${index}`">
                                    <i class="fa-solid fa-chevron-up text-[#B3BAC5] hidden"></i>
                                    <i class="fa-solid fa-chevron-down text-[#B3BAC5]"></i>
                                </button>
                            </div>
                            <div class="flex basis-1/2 mx-[45px]">
                                <p class="basis-1/3">
                                    {{ domain.client_name }}
                                </p>
                                <p class="basis-2/3">
                                    <nuxt-link :to="`/agency/dashboard/${domain.id}`">{{ domain.domain_url }}</nuxt-link>
                                </p>
                            </div>
                            <div class="flex basis-1/2 mr-10 relative">
                                <div class="flex basis-1/3 items-center">
                                    <p>{{ domain.totalImpressions }}</p>
                                    <div v-if="domain.avgImpressions > 0"
                                        class="flex text-[12px] bg-[#E3FCEF] ml-[10px] rounded-[16px] px-2 py-[2px] items-center">
                                        <p class="text-[#006644]">
                                            {{ domain.avgImpressions }}%
                                        </p>
                                        <i class="text-[#006644] fa-solid fa-caret-up ml-2"></i>
                                    </div>
                                    <div v-else
                                        class="flex text-[12px] bg-[#fce3e3] ml-[10px] rounded-[16px] px-2 py-[2px] items-center">
                                        <p class="text-black">
                                            {{ domain.avgImpressions }}%
                                        </p>
                                        <i class="fas fa-caret-down ml-2"></i>
                                    </div>
                                </div>
                                <div class="flex basis-1/3 items-center">
                                    <p>{{ domain.totalClicks }}</p>
                                    <div v-if="domain.avgClicks > 0"
                                        class="flex text-[12px] bg-[#E3FCEF] ml-[10px] rounded-[16px] px-2 py-[2px] items-center">
                                        <p class="text-[#006644]">
                                            {{ domain.avgClicks }}%
                                        </p>
                                        <i class="text-[#006644] fa-solid fa-caret-up ml-2"></i>
                                    </div>
                                    <div v-else
                                        class="flex text-[12px] bg-[#fce3e3] ml-[10px] rounded-[16px] px-2 py-[2px] items-center">
                                        <p class="text-black">
                                            {{ domain.avgClicks }}%
                                        </p>
                                        <i class="fas fa-caret-down ml-2"></i>
                                    </div>
                                </div>
                                <div class="flex basis-1/3 items-center">
                                    <p>{{ domain.totalCTR }}%</p>
                                    <div v-if="domain.avgCTR > 0"
                                        class="flex text-[12px] bg-[#E3FCEF] ml-[10px] rounded-[16px] px-2 py-[2px] items-center">
                                        <p class="text-[#006644]">
                                            {{ domain.avgCTR }}%
                                        </p>
                                        <i class="text-[#006644] fa-solid fa-caret-up ml-2"></i>
                                    </div>
                                    <div v-else
                                        class="flex text-[12px] bg-[#fce3e3] ml-[10px] rounded-[16px] px-2 py-[2px] items-center">
                                        <p class="text-black">
                                            {{ domain.avgCTR }}%
                                        </p>
                                        <i class="fas fa-caret-down ml-2"></i>
                                    </div>
                                </div>

                                <div 
                                    class="flex items-center space-x-4 absolute right-[1px]">
                                    <button  @click="openDomainSettingModal(domain)">
                                        <forsvgEditIcon></forsvgEditIcon>
                                    </button>
                                    <button title="Re Fetch The GSC Data" @click="refetchGSCData(domain, index)">
                                        <i class="fa-sharp fa-solid fa-rotate-right" :class="[
                                            domain.isLoadingProperty ===
                                                true
                                                ? 'animate-spin'
                                                : '',
                                        ]"></i>
                                    </button>
                                    <button  @click="
                                        openDeleteConfirmationDialog(domain)
                                        ">
                                        <forsvgDeleteIcon></forsvgDeleteIcon>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <b-collapse :id="`collapse-${index}`">
                        <div class="py-4">
                            <div class="bg-white p-4">
                                <div class="flex justify-between items-center">
                                    <div class="flex">
                                        <img src="../../static//images/roster.svg" alt="" srcset="" />
                                        <div class="ml-2 border-l pl-2">
                                            <p>{{ domain.company_name }}</p>
                                            <p class="text-[12px] text-[#8993A4] mt-1">
                                                {{ domain.client_email }}
                                            </p>
                                        </div>
                                    </div>
                                    <div v-if="domain.company_categories" class="flex text-[12px] text-[#0747A6]">
                                        <p v-for="(
                                                category, index
                                            ) in domain.company_categories" :key="index"
                                            class="bg-[#DEEBFF] mr-2 px-1 py-[2px] rounded-1">
                                            {{ category }}
                                        </p>
                                    </div>
                                </div>
                                <div class="mt-4 bg-[#F4F5F7] p-4 text-[12px]">
                                    <p class="text-[#42526E]">
                                        Company Overview
                                    </p>
                                    <p class="text-[#091E42] mt-3">
                                        {{ domain.company_overview }}
                                    </p>
                                    <div class="flex mt-3 items-center">
                                        <div class="flex border-1 items-center w-[146px] rounded-2">
                                            <p class="p-1 text-[#42526E] mr-2">
                                                Provide Feedback
                                            </p>
                                            <i class="fa-regular fa-message"></i>
                                        </div>
                                        <i class="fa-regular fa-thumbs-up ml-2"></i>
                                        <i class="fa-regular fa-thumbs-down ml-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-collapse>
                </div>
                <p v-if="domainLists.length === 0" class="text-center">
                    No data found
                </p>
            </template>
            <template v-else>
                <div class="w-full relative mt-3">
                    <div class="absolute bg-gray-100 opacity-60 w-full h-full top-0 flex items-center justify-center">
                        <div role="status">
                            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin fill-blue-600"
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                    fill="currentColor" />
                                <path
                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                    fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            </template>
            <!-- confirmation Modal -->
            <div class="confirmation-modal">
                <b-modal id="confirmDomainDeleteDialogFromDomainListPage" class="text-center modal-new-content" hide-footer
                    hide-header no-close-on-backdrop>
                    <div class="confirmation-modal-wrapper">
                        <div class="py-2 border-b flex">
                            <p class="basis-3/4 flex ml-[70px]">
                                Delete Domain
                            </p>
                            <button @click="closeModal()" class="basis-1/4 flex justify-end">
                                <forsvgClose />
                            </button>
                        </div>
                        <div class="pt-4 text-[12px] text-[#5E6C84] text-center">
                            <div>
                                <p>
                                    Remove
                                    <span class="text-black">{{
                                        getEditDomain
                                        ? getEditDomain.company_name
                                        : ""
                                    }}</span>
                                    from your domains?
                                </p>
                            </div>
                            <div class="mt-4 mb-4">
                                <p>
                                    When you remove a domain, you will lose
                                    access…
                                </p>
                            </div>
                            <div class="flex justify-end">
                                <button @click="closeModal()" class="p-2 border rounded-2">
                                    Cancel
                                </button>
                                <button :disabled="deleting" @click="deleteTheDomain"
                                    class="bg-[#172B4D] p-2 text-white ml-2 rounded-2">
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </b-modal>
            </div>
        </div>
        <div class="grid grid-cols-3 gap-6">
            <div
                class="col-span-1 rounded-[5px] px-[19px] py-[10px] h-[189px] max-h[189px] sm-card-shadow bg-white space-y-[6px]">
                <p class="text-[#172B4D] font-medium text-sm">
                    Funnel/Insight Card
                </p>
                <div class="flex justify-start space-x-[19px] mt-[13px]">

                    <!-- <div class="w-full p-[16px]">
                        <p class="text-[12px]">Organic Traffic</p>
                        <div
                            class="w-full h-[120px] mt-[14px] border border-[#F4F5F7] rounded-[5px] flex flex-col justify-between">
                            <div class="flex justify-between p-2 pb-0">
                                <div class="space-y-1.5">
                                    <p class="text-[#5E6C84] font-medium text-xs">
                                        By Visits
                                    </p>
                                    <button
                                        class="h-[24px] rounded-[5px] border p-1 sm-card-shadow flex items-center space-x-[3px] text-[#00875A]">
                                        <span> 65% </span>
                                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.56699 0.75C3.75944 0.416666 4.24056 0.416667 4.43301 0.75L7.03109 5.25C7.22354 5.58333 6.98298 6 6.59808 6L1.40192 6C1.01702 6 0.776461 5.58333 0.968911 5.25L3.56699 0.75Z"
                                                fill="#00875A" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <AgencyOrganicTrafficAreaChart></AgencyOrganicTrafficAreaChart>
                        </div>
                    </div> -->


                    <div class="w-1/2">
                        <div class="h-[120px] border border-[#F4F5F7] rounded-[5px]">
                            <div class="flex flex-col justify-between">
                                <div class="flex justify-between p-2 pb-0">
                                    <div class="space-y-1.5">
                                        <p class="text-[#5E6C84] font-medium text-xs">
                                            By Visits
                                        </p>
                                        <button
                                            class="h-[24px] rounded-[5px] border p-1 sm-card-shadow flex items-center space-x-[3px] text-[#00875A]">
                                            <span> 65% </span>
                                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.56699 0.75C3.75944 0.416666 4.24056 0.416667 4.43301 0.75L7.03109 5.25C7.22354 5.58333 6.98298 6 6.59808 6L1.40192 6C1.01702 6 0.776461 5.58333 0.968911 5.25L3.56699 0.75Z"
                                                    fill="#00875A" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <AgencyOrganicTrafficAreaChart></AgencyOrganicTrafficAreaChart>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 flex flex-col items-center space-y-[22px]">
                        <p class="text-[#172B4D] font-medium text-sm leading-6">
                            Roostercat Cafe has had a
                            <span
                                class="bg-[#DEEBFF] rounded-full w-[97px] h-[20px] text-[#0747A6] font-medium text-xs px-2 py-0.5">65%
                                Increase</span>
                            in traffic over the
                            <span
                                class="bg-[#DEEBFF] rounded-full h-[20px] text-[#0747A6] font-medium text-xs px-2 py-0.5">last
                                5 days</span>
                        </p>
                        <button
                            class="text-[#172B4D] text-xs font-medium w-[107px] h-[37px] rounded-[5px] p-2 sm-card-shadow">
                            Go to Analytics
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="col-span-1 rounded-[5px] px-[19px] py-[10px] h-[189px] max-h[189px] sm-card-shadow bg-white space-y-[6px]">
                <p class="text-[#172B4D] font-medium text-sm">
                    Funnel/Insight Card
                </p>
                <div class="flex justify-start space-x-[19px] mt-[13px]">
                    <div class="w-1/2">
                        <!-- <div class="h-[120px] border border-[#F4F5F7] rounded-[5px]">
                            <div class="space-y-2 pl-2 pt-2">
                                <p class="text-[#5E6C84] text-[11px] leading-4">
                                    By Visits
                                </p>
                                <button
                                    class="h-[24px] rounded-[5px] border p-1 sm-card-shadow flex items-center space-x-[3px] text-[#DE350B]">
                                    <span> 65% </span>
                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.56699 0.75C3.75944 0.416666 4.24056 0.416667 4.43301 0.75L7.03109 5.25C7.22354 5.58333 6.98298 6 6.59808 6L1.40192 6C1.01702 6 0.776461 5.58333 0.968911 5.25L3.56699 0.75Z"
                                            fill="#DE350B" />
                                    </svg>
                                </button>
                            </div>
                            <chartDomainCardLine></chartDomainCardLine>
                        </div> -->

                        <div class="h-[120px] border border-[#F4F5F7] rounded-[5px]">
                            <div class="flex flex-col justify-between">
                                <div class="flex justify-between p-2 pb-0">
                                    <div class="space-y-1.5">
                                        <p class="text-[#5E6C84] font-medium text-xs">
                                            By Visits
                                        </p>
                                        <button
                                            class="h-[24px] rounded-[5px] border p-1 sm-card-shadow flex items-center space-x-[3px] text-[#DE350B]">
                                            <span> 65% </span>
                                            <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M3.56699 0.75C3.75944 0.416666 4.24056 0.416667 4.43301 0.75L7.03109 5.25C7.22354 5.58333 6.98298 6 6.59808 6L1.40192 6C1.01702 6 0.776461 5.58333 0.968911 5.25L3.56699 0.75Z"
                                                    fill="#00875A" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <AgencyOrganicTrafficAreaChart></AgencyOrganicTrafficAreaChart>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 flex flex-col items-center space-y-[22px]">
                        <p class="text-[#172B4D] font-medium text-sm leading-6">
                            Roostercat Cafe has had a
                            <span
                                class="bg-[#DEEBFF] rounded-full w-[97px] h-[20px] text-[#0747A6] font-medium text-xs px-2 py-0.5">65%
                                Increase</span>
                            in traffic over the
                            <span
                                class="bg-[#DEEBFF] rounded-full h-[20px] text-[#0747A6] font-medium text-xs px-2 py-0.5">last
                                5 days</span>
                        </p>
                        <button
                            class="text-[#172B4D] text-xs font-medium w-[107px] h-[37px] rounded-[5px] p-2 sm-card-shadow">
                            Go to Analytics
                        </button>
                    </div>
                </div>
            </div>
            <div
                class="col-span-1 rounded-[5px] px-[19px] py-[10px] h-[189px] max-h[189px] sm-card-shadow bg-white space-y-[6px]">
                <p class="text-[#172B4D] font-medium text-sm">
                    Funnel/Insight Card
                </p>
                <div class="flex justify-start space-x-[19px] mt-[13px]">
                    <div class="w-1/2">
                        <div
                            class="h-[120px] border border-[#DFE1E6] px-4 py-[22.5px] rounded-[16px] flex items-center justify-center">
                            <div class="space-y-4">
                                <div class="flex items-center">
                                    <svg width="14" height="13" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.66667 5.16667C6.48996 4.34337 7 0.5 7 0.5C7 0.5 7.51004 4.34337 8.33333 5.16667C9.15663 5.98996 13 6.5 13 6.5C13 6.5 9.15663 7.01004 8.33333 7.83333C7.51004 8.65663 7 12.5 7 12.5C7 12.5 6.48996 8.65663 5.66667 7.83333C4.84337 7.01004 1 6.5 1 6.5C1 6.5 4.84337 5.98996 5.66667 5.16667Z"
                                            fill="#8993A4" />
                                        <path
                                            d="M7 0.5L7.49565 0.434224C7.46267 0.185684 7.25072 0 7 0C6.74928 0 6.53733 0.185684 6.50435 0.434224L7 0.5ZM1 6.5L0.934224 6.00435C0.685684 6.03733 0.5 6.24928 0.5 6.5C0.5 6.75072 0.685684 6.96267 0.934224 6.99565L1 6.5ZM7 12.5L6.50435 12.5658C6.53733 12.8143 6.74928 13 7 13C7.25072 13 7.46267 12.8143 7.49565 12.5658L7 12.5ZM13 6.5L13.0658 6.99565C13.3143 6.96267 13.5 6.75072 13.5 6.5C13.5 6.24928 13.3143 6.03733 13.0658 6.00435L13 6.5ZM7 0.5C6.50435 0.434224 6.50435 0.434194 6.50435 0.434179C6.50435 0.434194 6.50435 0.434193 6.50435 0.434222C6.50434 0.43428 6.50432 0.434395 6.5043 0.434569C6.50425 0.434915 6.50418 0.435492 6.50407 0.436296C6.50385 0.437904 6.50351 0.440421 6.50305 0.443821C6.50213 0.45062 6.50072 0.460948 6.49882 0.474596C6.49503 0.501895 6.48931 0.542462 6.48171 0.594627C6.46649 0.698985 6.44377 0.849601 6.41392 1.03314C6.35415 1.40077 6.26622 1.8979 6.1534 2.41875C6.04014 2.94165 5.90401 3.47792 5.74947 3.92769C5.58638 4.4023 5.42982 4.69641 5.31311 4.81311L6.02022 5.52022C6.31516 5.22528 6.53109 4.73022 6.69519 4.25265C6.86783 3.75024 7.01358 3.1713 7.13074 2.63045C7.24834 2.08754 7.33938 1.57237 7.40096 1.19364C7.4318 1.004 7.45535 0.847921 7.47125 0.738878C7.4792 0.684343 7.48524 0.641534 7.48932 0.612131C7.49136 0.597429 7.49291 0.586075 7.49397 0.57828C7.4945 0.574382 7.49491 0.571374 7.49519 0.569282C7.49533 0.568235 7.49544 0.567418 7.49551 0.566832C7.49555 0.56654 7.49558 0.566305 7.49561 0.566129C7.49562 0.566041 7.49563 0.565953 7.49564 0.565908C7.49565 0.565835 7.49565 0.565776 7 0.5ZM5.31311 4.81311C5.19641 4.92982 4.9023 5.08638 4.42769 5.24947C3.97792 5.40401 3.44165 5.54014 2.91875 5.6534C2.3979 5.76622 1.90077 5.85415 1.53314 5.91392C1.3496 5.94377 1.19899 5.96649 1.09463 5.98171C1.04246 5.98931 1.0019 5.99503 0.974596 5.99882C0.960948 6.00072 0.95062 6.00213 0.943821 6.00305C0.940421 6.00351 0.937904 6.00385 0.936296 6.00407C0.935492 6.00418 0.934915 6.00425 0.934569 6.0043C0.934395 6.00432 0.93428 6.00434 0.934222 6.00435C0.934193 6.00435 0.934194 6.00435 0.934179 6.00435C0.934194 6.00435 0.934224 6.00435 1 6.5C1.06578 6.99565 1.06583 6.99565 1.06591 6.99564C1.06595 6.99563 1.06604 6.99562 1.06613 6.99561C1.06631 6.99558 1.06654 6.99555 1.06683 6.99551C1.06742 6.99544 1.06824 6.99533 1.06928 6.99519C1.07137 6.99491 1.07438 6.9945 1.07828 6.99397C1.08608 6.99291 1.09743 6.99136 1.11213 6.98932C1.14153 6.98524 1.18434 6.9792 1.23888 6.97125C1.34792 6.95535 1.504 6.9318 1.69364 6.90096C2.07237 6.83938 2.58754 6.74834 3.13045 6.63074C3.6713 6.51358 4.25024 6.36783 4.75265 6.19519C5.23022 6.03109 5.72528 5.81516 6.02022 5.52022L5.31311 4.81311ZM1 6.5C0.934224 6.99565 0.934194 6.99565 0.934179 6.99565C0.934194 6.99565 0.934193 6.99565 0.934222 6.99565C0.93428 6.99566 0.934395 6.99568 0.934569 6.9957C0.934915 6.99575 0.935492 6.99582 0.936296 6.99593C0.937904 6.99615 0.940421 6.99649 0.943821 6.99695C0.95062 6.99787 0.960948 6.99928 0.974596 7.00118C1.0019 7.00497 1.04246 7.01069 1.09463 7.01829C1.19899 7.03351 1.3496 7.05623 1.53314 7.08608C1.90077 7.14585 2.3979 7.23378 2.91875 7.3466C3.44165 7.45986 3.97792 7.59599 4.42769 7.75053C4.9023 7.91362 5.19641 8.07018 5.31311 8.18689L6.02022 7.47978C5.72528 7.18484 5.23022 6.96891 4.75265 6.80481C4.25024 6.63217 3.6713 6.48642 3.13045 6.36926C2.58754 6.25166 2.07237 6.16062 1.69364 6.09904C1.504 6.0682 1.34792 6.04465 1.23888 6.02875C1.18434 6.0208 1.14153 6.01476 1.11213 6.01068C1.09743 6.00864 1.08608 6.00709 1.07828 6.00603C1.07438 6.0055 1.07137 6.00509 1.06928 6.00481C1.06824 6.00467 1.06742 6.00456 1.06683 6.00449C1.06654 6.00445 1.06631 6.00442 1.06613 6.00439C1.06604 6.00438 1.06595 6.00437 1.06591 6.00436C1.06583 6.00435 1.06578 6.00435 1 6.5ZM5.31311 8.18689C5.42982 8.30359 5.58638 8.5977 5.74947 9.07231C5.90401 9.52208 6.04014 10.0584 6.1534 10.5813C6.26622 11.1021 6.35415 11.5992 6.41392 11.9669C6.44377 12.1504 6.46649 12.301 6.48171 12.4054C6.48931 12.4575 6.49503 12.4981 6.49882 12.5254C6.50072 12.5391 6.50213 12.5494 6.50305 12.5562C6.50351 12.5596 6.50385 12.5621 6.50407 12.5637C6.50418 12.5645 6.50425 12.5651 6.5043 12.5654C6.50432 12.5656 6.50434 12.5657 6.50435 12.5658C6.50435 12.5658 6.50435 12.5658 6.50435 12.5658C6.50435 12.5658 6.50435 12.5658 7 12.5C7.49565 12.4342 7.49565 12.4342 7.49564 12.4341C7.49563 12.434 7.49562 12.434 7.49561 12.4339C7.49558 12.4337 7.49555 12.4335 7.49551 12.4332C7.49544 12.4326 7.49533 12.4318 7.49519 12.4307C7.49491 12.4286 7.4945 12.4256 7.49397 12.4217C7.49291 12.4139 7.49136 12.4026 7.48932 12.3879C7.48524 12.3585 7.4792 12.3157 7.47125 12.2611C7.45535 12.1521 7.4318 11.996 7.40096 11.8064C7.33938 11.4276 7.24834 10.9125 7.13074 10.3696C7.01358 9.8287 6.86783 9.24976 6.69519 8.74735C6.53109 8.26978 6.31516 7.77472 6.02022 7.47978L5.31311 8.18689ZM7 12.5C7.49565 12.5658 7.49565 12.5658 7.49565 12.5658C7.49565 12.5658 7.49565 12.5658 7.49565 12.5658C7.49566 12.5657 7.49568 12.5656 7.4957 12.5654C7.49575 12.5651 7.49582 12.5645 7.49593 12.5637C7.49615 12.5621 7.49649 12.5596 7.49695 12.5562C7.49787 12.5494 7.49928 12.5391 7.50118 12.5254C7.50497 12.4981 7.51069 12.4575 7.51829 12.4054C7.53351 12.301 7.55623 12.1504 7.58608 11.9669C7.64585 11.5992 7.73378 11.1021 7.8466 10.5813C7.95986 10.0584 8.09599 9.52208 8.25053 9.07231C8.41362 8.5977 8.57018 8.30359 8.68689 8.18689L7.97978 7.47978C7.68484 7.77472 7.46891 8.26978 7.30481 8.74735C7.13217 9.24976 6.98642 9.8287 6.86926 10.3696C6.75166 10.9125 6.66062 11.4276 6.59904 11.8064C6.5682 11.996 6.54465 12.1521 6.52875 12.2611C6.5208 12.3157 6.51476 12.3585 6.51068 12.3879C6.50864 12.4026 6.50709 12.4139 6.50603 12.4217C6.5055 12.4256 6.50509 12.4286 6.50481 12.4307C6.50467 12.4318 6.50456 12.4326 6.50449 12.4332C6.50445 12.4335 6.50442 12.4337 6.50439 12.4339C6.50438 12.434 6.50437 12.434 6.50436 12.4341C6.50435 12.4342 6.50435 12.4342 7 12.5ZM8.68689 8.18689C8.80359 8.07018 9.0977 7.91362 9.57231 7.75053C10.0221 7.59599 10.5584 7.45986 11.0813 7.3466C11.6021 7.23378 12.0992 7.14585 12.4669 7.08608C12.6504 7.05623 12.801 7.03351 12.9054 7.01829C12.9575 7.01069 12.9981 7.00497 13.0254 7.00118C13.0391 6.99928 13.0494 6.99787 13.0562 6.99695C13.0596 6.99649 13.0621 6.99615 13.0637 6.99593C13.0645 6.99582 13.0651 6.99575 13.0654 6.9957C13.0656 6.99568 13.0657 6.99566 13.0658 6.99565C13.0658 6.99565 13.0658 6.99565 13.0658 6.99565C13.0658 6.99565 13.0658 6.99565 13 6.5C12.9342 6.00435 12.9342 6.00435 12.9341 6.00436C12.934 6.00437 12.934 6.00438 12.9339 6.00439C12.9337 6.00442 12.9335 6.00445 12.9332 6.00449C12.9326 6.00456 12.9318 6.00467 12.9307 6.00481C12.9286 6.00509 12.9256 6.0055 12.9217 6.00603C12.9139 6.00709 12.9026 6.00864 12.8879 6.01068C12.8585 6.01476 12.8157 6.0208 12.7611 6.02875C12.6521 6.04465 12.496 6.0682 12.3064 6.09904C11.9276 6.16062 11.4125 6.25166 10.8696 6.36926C10.3287 6.48642 9.74976 6.63217 9.24735 6.80481C8.76978 6.96891 8.27472 7.18484 7.97978 7.47978L8.68689 8.18689ZM13 6.5C13.0658 6.00435 13.0658 6.00435 13.0658 6.00435C13.0658 6.00435 13.0658 6.00435 13.0658 6.00435C13.0657 6.00434 13.0656 6.00432 13.0654 6.0043C13.0651 6.00425 13.0645 6.00418 13.0637 6.00407C13.0621 6.00385 13.0596 6.00351 13.0562 6.00305C13.0494 6.00213 13.0391 6.00072 13.0254 5.99882C12.9981 5.99503 12.9575 5.98931 12.9054 5.98171C12.801 5.96649 12.6504 5.94377 12.4669 5.91392C12.0992 5.85415 11.6021 5.76622 11.0813 5.6534C10.5584 5.54014 10.0221 5.40401 9.57231 5.24947C9.0977 5.08638 8.80359 4.92982 8.68689 4.81311L7.97978 5.52022C8.27472 5.81516 8.76978 6.03109 9.24735 6.19519C9.74976 6.36783 10.3287 6.51358 10.8696 6.63074C11.4125 6.74834 11.9276 6.83938 12.3064 6.90096C12.496 6.9318 12.6521 6.95535 12.7611 6.97125C12.8157 6.9792 12.8585 6.98524 12.8879 6.98932C12.9026 6.99136 12.9139 6.99291 12.9217 6.99397C12.9256 6.9945 12.9286 6.99491 12.9307 6.99519C12.9318 6.99533 12.9326 6.99544 12.9332 6.99551C12.9335 6.99555 12.9337 6.99558 12.9339 6.99561C12.934 6.99562 12.934 6.99563 12.9341 6.99564C12.9342 6.99565 12.9342 6.99565 13 6.5ZM8.68689 4.81311C8.57018 4.69641 8.41362 4.4023 8.25053 3.92769C8.09599 3.47792 7.95986 2.94165 7.8466 2.41875C7.73378 1.8979 7.64585 1.40077 7.58608 1.03314C7.55623 0.849601 7.53351 0.698985 7.51829 0.594627C7.51069 0.542462 7.50497 0.501895 7.50118 0.474596C7.49928 0.460948 7.49787 0.45062 7.49695 0.443821C7.49649 0.440421 7.49615 0.437904 7.49593 0.436296C7.49582 0.435492 7.49575 0.434915 7.4957 0.434569C7.49568 0.434395 7.49566 0.43428 7.49565 0.434222C7.49565 0.434193 7.49565 0.434194 7.49565 0.434179C7.49565 0.434194 7.49565 0.434224 7 0.5C6.50435 0.565776 6.50435 0.565835 6.50436 0.565908C6.50437 0.565953 6.50438 0.566041 6.50439 0.566129C6.50442 0.566305 6.50445 0.56654 6.50449 0.566832C6.50456 0.567418 6.50467 0.568235 6.50481 0.569282C6.50509 0.571374 6.5055 0.574382 6.50603 0.57828C6.50709 0.586075 6.50864 0.597429 6.51068 0.612131C6.51476 0.641534 6.5208 0.684343 6.52875 0.738878C6.54465 0.847921 6.5682 1.004 6.59904 1.19364C6.66062 1.57237 6.75166 2.08754 6.86926 2.63045C6.98642 3.1713 7.13217 3.75024 7.30481 4.25265C7.46891 4.73022 7.68484 5.22528 7.97978 5.52022L8.68689 4.81311Z"
                                            fill="#8993A4" />
                                    </svg>
                                    <span class="text-[#8993A4] text-[11px] leading-4 font-medium">AI Magic
                                        Assist</span>
                                </div>
                                <div class="text-[#42526E] text-[12px] leading-5 font-semibold">
                                    Start a new article for
                                    <strong>“dating apps online” </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-1/2 flex flex-col items-center space-y-[22px]">
                        <p class="text-[#172B4D] font-medium text-sm leading-6">
                            Roostercat Cafe has had a
                            <span
                                class="bg-[#DEEBFF] rounded-full w-[97px] h-[20px] text-[#0747A6] font-medium text-xs px-2 py-0.5">65%
                                Increase</span>
                            in traffic over the
                            <span
                                class="bg-[#DEEBFF] rounded-full h-[20px] text-[#0747A6] font-medium text-xs px-2 py-0.5">last
                                5 days</span>
                        </p>
                        <button
                            class="text-[#172B4D] text-xs font-medium w-[107px] h-[37px] rounded-[5px] p-2 sm-card-shadow">
                            Start Writing
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
definePageMeta({
  layout: 'agency'
})
const domainLists = ref([]);
const loadingLoadDomainLists = ref(false);
const editDomain = ref(null);
const deleting = ref(false);

// Watchers
// watch(() => store.state.domainSetting.reservedAllDomains, (val) => {
//   const lists = JSON.parse(JSON.stringify(val));
//   domainLists.value = lists;
// });

// Computed
const getEditDomain = computed(() => editDomain.value);

onMounted(() => {
  if (domainLists.value.length <= 0) {
    setTimeout(() => {
    //   const lists = JSON.parse(
    //     JSON.stringify(store.state.domainSetting.reservedAllDomains)
    //   );
    //   domainLists.value = lists;
    }, 1000);
  }
});

const numberAbbreviations = (number) => {
  return number;
};

const refetchGSCData = async (domain, index) => {
//   domainLists.value[index].isLoadingProperty = true;
//   const res = await callApi('post', 'agency/get-gsc-data-by-domain', {
//     domain_url: domain.domain_url,
//     id: domain.id,
//   });
//   if (res.status === 200) {
//     domainUpdated();
//   }
//   domainLists.value[index].isLoadingProperty = false;
};

const openDeleteConfirmationDialog = (domain) => {
//   editDomain.value = null;
//   $bvModal.show('confirmDomainDeleteDialogFromDomainListPage');
//   editDomain.value = JSON.parse(JSON.stringify(domain));
};

const closeModal = () => {
//   $bvModal.hide('confirmDomainDeleteDialogFromDomainListPage');
};

const openAddDomainDialog = () => {
//   store.commit('addDomain/ADD_STEP', 1);
//   if (store.state.addDomain.open) {
//     store.commit('addDomain/TOGGLE_DIALOG', false);
//     setTimeout(() => {
//       store.commit('addDomain/TOGGLE_DIALOG', true);
//     });
//   } else {
//     store.commit('addDomain/TOGGLE_DIALOG', true);
//   }
};

const openDomainSettingModal = (domain) => {
//   store.commit('domainSetting/EDIT_DOMAIN', domain);
//   if (store.state.domainSetting.open) {
//     store.commit('domainSetting/TOGGLE_DIALOG', false);
//     setTimeout(() => {
//       store.commit('domainSetting/TOGGLE_DIALOG', true);
//     });
//   } else {
//     store.commit('domainSetting/TOGGLE_DIALOG', true);
//   }
};

const deleteTheDomain = async () => {
//   deleting.value = true;
//   let data = getEditDomain.value;
//   data.status = 'Disable';
//   const res = await callApi('post', 'agency/update-agency-domain', data);
//   if (res.status == 200) {
//     $toast.success('Domain successfully deleted');
//     closeModal();
//     domainUpdated();
//   }
//   deleting.value = false;
};

const domainUpdated = () => {
//   if (store.state.domainSetting.isDomainUpdated) {
//     store.commit('domainSetting/REFETCH_DOMAIN_LISTS', false);
//     setTimeout(() => {
//       store.commit('domainSetting/REFETCH_DOMAIN_LISTS', true);
//     });
//   } else {
//     store.commit('domainSetting/REFETCH_DOMAIN_LISTS', true);
//   }
};

const orderingDomainLists = (label) => {
//   domainLists.value = domainLists.value?.sort((a, b) => {
//     if (label === 'top') {
//       return b.totalClicks - a.totalClicks;
//     } else if (label === 'low') {
//       return a.totalClicks - b.totalClicks;
//     }
//   });
};
</script>

<style scoped lang="scss">
.c-sh {
    box-shadow: 0px 0.5px 4px 0px #00000040;
}

.collapsed .fa-chevron-down {
    display: inline-block;
}

.collapsed .fa-chevron-up {
    display: none;
}

.not-collapsed .fa-chevron-down {
    display: none;
}

.not-collapsed .fa-chevron-up {
    display: inline-block;
}

.sm-card-shadow {
    box-shadow: 0px 0.5px 4px 0px rgba(0, 0, 0, 0.25);
}
</style>
<style>
#confirmDomainDeleteDialogFromDomainListPage {
    .modal-dialog {
        width: 300px !important;

        .modal-content {
            position: absolute !important;
            top: 25vh;
        }
    }
}
</style>
