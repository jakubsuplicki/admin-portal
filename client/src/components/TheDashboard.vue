<template>
    <div class="container">
        <div class="users">
            <div class="users__heading">
                <p class="users__id">ID</p>
                <p class="users__email">Email</p>
                <p class="users__created">Created</p>
            </div>
            <div class="users__each" v-for="user of users" :key="user.id">
                <p class="users__id">{{user.id}}</p>
                <p class="users__email">{{user.email}}</p>
                <p class="users__created">{{convertDate(user.createdAt)}}</p>
            </div>
        </div>
        <the-content />
    </div>
</template>

<script>
import { convertDate } from '@/assets/helpers/formatDate.js'
import TheContent from './Dashboard/TheContent.vue'
export default {
    components: { TheContent },
    props: {
        users: Array
    },
    methods: {
        convertDate(date) {
            return convertDate(date)
        },
    }
}
</script>

<style lang="scss" scoped>
.container {
    min-height: calc(100vh - 60px);
    background-color: $lightest-gray;
}
.users {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: $shadow-element;
    &__heading {
        display: flex;
        font-weight: 500;
        background-color: #cacaca;
        padding: 1rem;
    }
    &__each {
        display: flex;
        padding: 1rem;
    }
    &__id {
        min-width: 3rem;
    }
    &__email {
        min-width: 10rem;
    }
    &__created {
        min-width: 10rem;
    }
}
</style>