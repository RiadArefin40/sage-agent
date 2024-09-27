<template>
    <svg
        width="16"
        height="16"
        :style="`width: ${width}px; height: ${height}px`"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M12.4984 3C12.7734 3 12.9984 3.225 12.9984 3.5V10.5C12.9984 10.775 12.7734 11 12.4984 11C12.2234 11 11.9984 10.775 11.9984 10.5V4.70625L3.85156 12.8531C3.65781 13.0469 3.33906 13.0469 3.14531 12.8531C2.95156 12.6594 2.95156 12.3406 3.14531 12.1469L11.2922 4H5.49844C5.22344 4 4.99844 3.775 4.99844 3.5C4.99844 3.225 5.22344 3 5.49844 3H12.4984Z"
            fill="#5E6C84"
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
