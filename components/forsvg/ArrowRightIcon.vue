<template>
    <svg
        width="8"
        height="14"
        :style="`width: ${width}px; height: ${height}px`"
        viewBox="0 0 8 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            d="M0.646899 7.35315C0.453149 7.1594 0.453149 6.84065 0.646899 6.6469L6.6469 0.646899C6.84065 0.453149 7.1594 0.453149 7.35315 0.646899C7.5469 0.840649 7.5469 1.1594 7.35315 1.35315L1.70627 7.00002L7.35315 12.6469C7.5469 12.8407 7.5469 13.1594 7.35315 13.3531C7.1594 13.5469 6.84065 13.5469 6.6469 13.3531L0.646899 7.35315Z"
            fill="#172B4D"
        />
    </svg>
</template>

<script>
export default {
    name: "ArrowRightIcon",
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
