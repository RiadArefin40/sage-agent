<template>
    <svg
        :width="width"
        :height="height"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clip-path="url(#clip0_3489_2543)">
            <path
                d="M7.27501 3.57129H4.42712V0.714146C4.42712 0.635218 4.3634 0.571289 4.28472 0.571289H3.71514C3.63647 0.571289 3.57275 0.635218 3.57275 0.714146V3.57129H0.724853C0.64618 3.57129 0.582458 3.63522 0.582458 3.71415V4.28557C0.582458 4.3645 0.64618 4.42843 0.724853 4.42843H3.57275V7.28557C3.57275 7.3645 3.63647 7.42843 3.71514 7.42843H4.28472C4.3634 7.42843 4.42712 7.3645 4.42712 7.28557V4.42843H7.27501C7.35369 4.42843 7.41741 4.3645 7.41741 4.28557V3.71415C7.41741 3.63522 7.35369 3.57129 7.27501 3.57129Z"
                fill="#172B4D"
            />
        </g>
        <defs>
            <clipPath id="clip0_3489_2543">
                <rect
                    width="6.85714"
                    height="6.85714"
                    fill="white"
                    transform="translate(0.571289 0.571289)"
                />
            </clipPath>
        </defs>
    </svg>
</template>

<script>
export default {
    name: "PlusIcon",
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
