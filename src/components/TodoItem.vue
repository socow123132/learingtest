<template>
    <RouterLink class="item-link" :to="{ name: 'item-details', params: { id: item.id } }">
        <div>
            <img class="img" :src="item.img">
        </div>
    </RouterLink>
    <p style="text-align:center;">{{ item.title }}</p>
    <p style="text-align:center;">{{ item.date }}</p>
    <p style="text-align:center;" v-text="item.finished ? '已结束' : '进行中'"></p>
</template>

<script setup >
defineProps({
    item: {
        type: Object,
        required: true,
    },
})
</script>
    
<style scoped>
.img {
    width: 100px;
    height: 100px;
}
</style>