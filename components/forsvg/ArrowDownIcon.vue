<template>
    <svg
        class="ms-2"
        :style="`width: ${width}px; height: ${height}px`"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
    >
        <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5L5 1l4 4"
        />
    </svg>
</template>

<script>
export default {
    name: "ArrowDownIcon",
    props: {
        width: {
            type: Number,
            default: 8,
        },
        height: {
            type: Number,
            default: 8,
        },
    },
};
</script>
