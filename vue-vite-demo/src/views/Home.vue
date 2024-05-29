<template>
HOME_PAGE
</template>


<script setup>
import { storeToRefs } from 'pinia'
import { useDemoStore } from '../store/demoStore.js'

const store = useDemoStore()
const { state } = storeToRefs(store)
const { increment } = store

</script>


<style scoped>

</style>