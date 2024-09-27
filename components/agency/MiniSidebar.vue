<template>
    <aside class="w-[40px] absolute top-[3.5rem] left-0 bg-white h-[calc(100vh-56px)]">
        <div class="flex flex-col items-center py-4">
            <ul class="space-y-1 py-2">
                <li class="text-[#172B4D] h-10 text-sm font-medium">
                    <a href="javascript:void(0)" class="sageWriter flex items-center justify-start space-x-1"
                        @click="toggle_sidebar('/agency/launchpad')">
                        <forsvgRocketIcon></forsvgRocketIcon>
                    </a>
                </li>
                <li class="text-[#172B4D] h-10 text-sm font-medium">
                    <a href="javascript:void(0)" class="sageWriter flex items-center justify-start space-x-1"
                    @click="toggle_sidebar('/agency/article-new')"
                    >
                        <forsvgArticleIcon></forsvgArticleIcon>
                    </a>
                </li>
                <li class="text-[#172B4D] h-10 text-sm font-medium">
                    <a href="javascript:void(0)" class="sageWriter flex items-center justify-start space-x-1"
                    @click="toggle_sidebar('/agency/domains')"
                    >
                        <forsvgDashboardIcon></forsvgDashboardIcon>
                    </a>
                </li>
                <li class="text-[#172B4D] h-10 text-sm font-medium">
                    <a href="javascript:void(0)" class="sageWriter flex items-center justify-start space-x-1"
                    @click="toggle_sidebar('/agency/coming-soon')"
                    >
                        <forsvgSeoToolIcon></forsvgSeoToolIcon>
                    </a>
                </li>
                <li class="text-[#172B4D] h-10 text-sm font-medium">
                    <a href="javascript:void(0)" class="sageWriter flex items-center justify-start space-x-1"
                    @click="toggle_sidebar('/agency/coming-soon')"
                    >
                        <forsvgReportIcon></forsvgReportIcon>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>
<script>
export default {
    name: 'MiniSidebar',
    data() {
        return {

        }
    },
    methods: {
        toggle_sidebar(path) {
            this.$store.dispatch("profile/changeSideBar", {
                sideBar: false,
            });
            this.$router.push(path)
        },
    },
}
</script>
