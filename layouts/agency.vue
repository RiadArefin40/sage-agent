<template>
  <section class="main-body" :class="{ 'compact-view': profileStore.sideBar }">
    <AgencyTopHeader />
    <AgencyPanelSidebar @openAutomatedKeywordFlowModal="dialog = true" />
    <AgencyMiniSidebar></AgencyMiniSidebar>
    <div class="main-content">
      <div class="layout-body overflow-y-auto py-3 mx-3">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
   const profileStore = useProfileStore();
   
</script>

<style scoped>
.layout-body {
    height: calc(100vh - 56px);
}

.main-content {
    min-height: calc(100vh - 56px);
}

input::placeholder {
    color: white !important;
}

.search-magnify-icon {
    right: 20px;
    top: 8px;
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

.nav-search::placeholder {
    font-size: 12px !important;
}

.active {
    background-color: white;
    color: rgb(27, 27, 27) !important;
    padding: 8px;
    border-radius: 5px;
}

.nav-item:hover {
    background-color: #deebff;
    color: rgb(24, 24, 27) !important;
    padding: 8px;
    border-radius: 5px;
}

.nav-item:hover .forBlackActive {
    display: inline-block;
}

.nav-item:hover .forWhiteActive {
    display: none;
}

.forBlackActive {
    display: none;
}

.active .forWhiteActive {
    display: none;
}

.active .forBlackActive {
    display: inline-block;
}
</style>
<style lang="scss">
#continueToBrowseDialog {
    #continueToBrowseDialog___BV_modal_content_ {
        padding: 0 !important;
    }
    .cancelButton {
        color: $n700;
        background: $n100;
    }
    .purchases-inform-dialog-wrapper {
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
            background: $g300;
            overflow: hidden;
        }
    }
}
</style>
