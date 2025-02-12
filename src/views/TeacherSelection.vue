<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">선생님 선택 시스템</h1>
      <p>현재 선택된 학생 수: {{ selectedStudents.length }} / {{ maxStudents }}</p>
      <ul>
        <li v-for="(teacher, index) in teachers" :key="index" class="p-2">
          {{ teacher }}
          <button
            @click="selectTeacher(teacher)"
            :disabled="isFull || selectedStudents.includes(teacher)"
            class="ml-2 px-3 py-1 bg-green-500 text-white rounded disabled:bg-gray-400"
          >
            선택
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teachers: ["김 선생님", "박 선생님", "이 선생님", "최 선생님"],
        selectedStudents: [],
        maxStudents: 4,
      };
    },
    computed: {
      isFull() {
        return this.selectedStudents.length >= this.maxStudents;
      },
    },
    methods: {
      selectTeacher(teacher) {
        if (!this.selectedStudents.includes(teacher) && !this.isFull) {
          this.selectedStudents.push(teacher);
        }
      },
    },
  };
  </script>
  