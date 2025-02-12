<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">연습실 예약 시스템</h1>
      <div class="grid grid-cols-3 gap-4">
        <button
          v-for="hour in hours"
          :key="hour"
          :disabled="reservedHours.includes(hour)"
          @click="reserve(hour)"
          class="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 disabled:bg-gray-400"
        >
          {{ hour }}:00 - {{ hour + 1 }}:00
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        hours: Array.from({ length: 15 }, (_, i) => i + 10), // 10시~24시
        reservedHours: [], // 예약된 시간
      };
    },
    methods: {
      reserve(hour) {
        if (!this.reservedHours.includes(hour)) {
          this.reservedHours.push(hour);
        }
      },
    },
  };
  </script>
  