<template>
    <the-container>
        <template v-slot:header>
            <h1>Login to dashboard</h1>
        </template>
        <template v-slot:body>
            <form class="login" @submit.prevent="$emit('register', 
                {action: 'login', email: email, password: password})">
                <div class="login__each">
                    <span class="p-float-label p-input-icon-right">
                        <i class="pi pi-envelope" />
                        <InputText id="email" type="email" v-model="email" required/>
                        <label for="email">Email</label>
                    </span>
                </div>
                <div class="login__each">
                    <span class="p-float-label p-input-icon-right">
                        <i class="pi pi-user" />
                        <Password id="password" v-model="password" required/>
                        <label for="password">Password</label>
                    </span>
                </div>
                <div class="login__each">
                    <Button label="Login" type="submit"/>
                </div>
            </form>
        </template>
        <template v-slot:footer>
            <div class="login__footer">
                <p>Do not have an account?</p>
                <p @click="$emit('signup')">Sign up</p>
            </div>
        </template>
    </the-container>
</template>

<script>
import TheContainer from '@/components/Registration/TheContainer'
export default {
    components: {
        TheContainer
    },
    data () {
        return {
            email: null,
            password: null
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
    &__each {
        position: relative;
        display: flex;
        justify-content: center;
        margin: 2rem;
        button {
            width: 10rem;
        }
    }
    &__footer {
        display: flex;
        justify-content: center;
        width: 100%;
        p {
            color: $gray;
            &:nth-of-type(2) {
                color: $link;
                cursor: pointer;
                margin-left: .5rem;
            }
        }
    }
}
</style>