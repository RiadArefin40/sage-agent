<template>
    <svg
        width="16"
        height="16"
        :style="`width: ${width}px; height: ${height}px`"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clip-path="url(#clip0_3635_5973)">
            <path
                d="M8 2V7C8 7.55312 8.44687 8 9 8H14C14 4.6875 11.3125 2 8 2ZM0 8C0 5.87827 0.842855 3.84344 2.34315 2.34315C3.84344 0.842855 5.87827 0 8 0C10.1217 0 12.1566 0.842855 13.6569 2.34315C15.1571 3.84344 16 5.87827 16 8C16 10.1217 15.1571 12.1566 13.6569 13.6569C12.1566 15.1571 10.1217 16 8 16C5.87827 16 3.84344 15.1571 2.34315 13.6569C0.842855 12.1566 0 10.1217 0 8Z"
                fill="#FFAB00"
            />
        </g>
        <defs>
            <clipPath id="clip0_3635_5973">
                <rect width="16" height="16" fill="white" />
            </clipPath>
        </defs>
    </svg>
</template>

<script>
export default {
    name: "CircleThreeQuartersStroke",
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
