<template>
  <div class="flex flex-col items-center">
    <!-- Circle Progress Container -->
    <div class="relative inline-block">
      <!-- Circle SVG -->
      <svg :style="{ width: `${width}px`, height: `${height}px` }" class="transform -rotate-90" viewBox="0 0 36 36">
        <!-- Background Circle -->
        <path
          class="text-gray-200"
          stroke-width="3"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <!-- Dynamic Progress Circle -->
        <path
          class="text-green-500"
          :stroke-dasharray="`${progress}, 100`"
          stroke-width="3"
          stroke-linecap="round"
          stroke="currentColor"
          fill="none"
          d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
        />
      </svg>

      <!-- Dynamic Number in Center -->
      <div class="absolute inset-0 flex items-center justify-center">
        <span class="font-semibold text-xs text-indigo-900">{{ value }}</span>
      </div>
    </div>

    <!-- Range Input Slider (hidden in your case) -->
    <input
      type="range"
      v-model="value"
      min="0"
      max="100"
      class="mt-4 w-64 hidden"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 10 // Default value for the circle progress
    },
    height: {
      type: Number,
      default: 33 // Default height for the SVG
    },
    width: {
      type: Number,
      default: 33 // Default width for the SVG
    }
  },
  computed: {
    // Calculate the stroke-dasharray based on the current value (as a percentage)
    progress() {
      return (this.value / 100) * 100;
    }
  }
};
</script>
