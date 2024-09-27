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
            d="m1 1 4 4 4-4"
        />
    </svg>
</template>

<script>
export default {
    name: "ArrowUpIcon",
    props: {
        width: {
            type: Number,
        },
        height: {
            type: Number,
        },
    },
};
</script>
