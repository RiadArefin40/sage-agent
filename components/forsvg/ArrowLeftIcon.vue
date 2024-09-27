<template>
    <svg
        width="10"
        height="16"
        :style="`width: ${width}px; height: ${height}px`"
        viewBox="0 0 10 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M9.35315 7.6469C9.5469 7.84065 9.5469 8.1594 9.35315 8.35315L3.35315 14.3531C3.1594 14.5469 2.84065 14.5469 2.6469 14.3531C2.45315 14.1594 2.45315 13.8407 2.6469 13.6469L8.29377 8.00002L2.6469 2.35315C2.45315 2.1594 2.45315 1.84065 2.6469 1.6469C2.84065 1.45315 3.1594 1.45315 3.35315 1.6469L9.35315 7.6469Z"
            fill="#42526E"
        />
    </svg>
</template>

<script>
export default {
    name: "ArrowLeftIcon",
    props: {
        width: {
            type: String,
            default: 8,
        },
        height: {
            type: String,
            default: 8,
        },
    },
};
</script>
