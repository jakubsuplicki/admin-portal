<template>
    <div class="registration">
        <transition-group name="swap">
            <the-signup v-if="!isLogin" @login="isLogin=true" @register="register" key="signup"/>
            <the-login v-else @signup="isLogin=false"  @register="register" key="login"/>
        </transition-group>
        <the-loader v-if="isLoading" />
    </div>
</template>

<script>
import TheLogin from './Registration/TheLogin.vue'
import TheSignup from './Registration/TheSignup.vue'
import TheLoader from '@/components/Utils/TheLoader.vue'

export default {
  components: { TheSignup, TheLogin, TheLoader },
    data () {
        return {
            isLoading: false,
            isLogin: false
        }
    },
    methods: {
        register(params) {
            this.isLoading = true
            return this.$axios.post(`${this.$serverUrl}/users/${params.action}`, {
                email: params.email,
                password: params.password
            })
            .then((response) => {
                this.isLoading = false
                if (params.action === 'login') {
                    this.$store.commit('authenticate', {token: response.data.token, cookie: this.$cookie})
                    this.$toast.add({severity:'success', summary: 'Login', detail:'You logged in to your account.', life: 5000});
                    return this.$nextTick(() => {
                        this.$router.push({ path: 'dashboard' })
                    })
                }else {
                    this.$toast.add({severity:'success', summary: 'Sign up', detail:'Your account has been created! Log in to your account.', life: 5000});
                    this.isLogin = true
                }
            }, () => {
                this.isLoading = false
                this.$toast.add({
                    severity:'error', 
                    summary: params.action === 'login' ? 'Login' : 'Sign up', 
                    detail:  params.action === 'login' ? 'Login credentials are wrong!' : 'Account could not be created. Try again later or contact support.', 
                    life: 5000
                });                
            })
        }
    },
    created() {
        //bypass registration page is the user is authenticated
        if(this.$store.getters.isAuthenticated) {
            this.$router.push({ path: 'dashboard' })
        }
    }
}
</script>

<style lang="scss" scoped>
.registration {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100%;
    background-image: linear-gradient(120deg, $color-secondary 0%, $color-main 65%);
}
.swap-leave-active {
    transition: all .5s ease;
}
.swap-enter-active {
    transition: all .5s cubic-bezier(1.0, 1.0, 0.8, 1.0);
    position: absolute;
}
.swap-enter, .swap-leave-to {
    transform: translateX(10rem) translateY(5rem);
    opacity: 0;
}

</style>