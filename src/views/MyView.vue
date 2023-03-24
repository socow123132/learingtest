<template>
    <div class="todoItem" v-for="item in items" :key="item.id">
        <TodoItem :item="item" />
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import TodoItem from '@/components/TodoItem.vue'
import axios from 'axios';
import ItemService from '../services/ItemService'
const items = ref(null)
onMounted(() => {
    ItemService.getTodoItems().then(res => {
        items.value = res.data

    }).catch((error) => {
        console.log(error)
    })
})
</script>

<style scoped>
.todoItem {
    float: left;
    margin: 20px;
}
</style>