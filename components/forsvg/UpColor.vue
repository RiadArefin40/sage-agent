<template>
    <svg
        width="8"
        height="6"
        viewBox="0 0 8 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            v-if="up"
            d="M3.56699 0.75C3.75944 0.416666 4.24056 0.416667 4.43301 0.75L7.03109 5.25C7.22354 5.58333 6.98298 6 6.59808 6L1.40192 6C1.01702 6 0.776461 5.58333 0.968911 5.25L3.56699 0.75Z"
            :fill="color"
        />
        <path
            v-else
            d="M4.43301 5.25C4.24056 5.58333 3.75944 5.58333 3.56699 5.25L0.968911 0.749999C0.776461 0.416666 1.01702 -6.10471e-07 1.40192 -5.76822e-07L6.59808 -1.2256e-07C6.98298 -8.8911e-08 7.22354 0.416666 7.03109 0.75L4.43301 5.25Z"
            :fill="color"
        />
    </svg>
</template>
<script>
export default {
    name: "UpColor",
    props: {
        color: {
            type: String,
            default: "#006644",
        },
        up: {
            type: Boolean,
            default: true,
        },
    },
};
</script>
