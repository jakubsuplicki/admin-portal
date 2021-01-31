<template>
    <div class="dashboard">
        <the-header />
        <the-dashboard :users="users" />
        <the-loader v-if="isLoading" />
    </div>
</template>

<script>
import TheDashboard from '@/components/TheDashboard.vue'
import TheHeader from '../components/Dashboard/TheHeader.vue'
import TheLoader from '@/components/Utils/TheLoader.vue'

export default {
    name: 'Dashboard',
    components: {
        TheDashboard,
        TheHeader,
        TheLoader
    },
    data () {
        return {
            isLoading: false,
            isSidebar: false,
            users: []
        }
    },
    mounted() {
        this.isLoading = true
        return this.$axios.get(`${this.$serverUrl}/dashboard/get-users`, {
            params: {
                token: this.$store.getters.getToken
            }
        })
        .then((response) => {
            this.isLoading = false
            this.users = response.data
        }, (e) => {
            this.isLoading = false
            console.log(e)
        })
    }
}
</script>

<style lang="scss" scoped>
.dashboard {
  color: $black;
}
</style>
