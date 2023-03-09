<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
	<div class="w-3/4 m-auto">
		<h1 class="text-primary text-3xl mt-20 mb-10">WELCOME</h1>
		<div>Count: {{ count }}</div>
		<el-button @click="count++">{{ $t('btn_click') }} </el-button>
		<Versions class="mt-20" />
	</div>
</template>
