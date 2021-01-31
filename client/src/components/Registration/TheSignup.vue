<template>
    <the-container>
        <template v-slot:header>
            <h1>Sign up to dashboard</h1>
        </template>
        <template v-slot:body>
            <form class="signup" @submit.prevent="$emit('register', 
                {action: 'sign-up', email: email, password: password})">
                <div class="signup__each">
                    <span class="p-float-label p-input-icon-right">
                        <i class="pi pi-envelope" />
                        <InputText id="email" type="email" v-model="email" required/>
                        <label for="email">Email</label>
                    </span>
                </div>
                <div class="signup__each">
                    <span class="p-float-label p-input-icon-right">
                        <i class="pi pi-user" />
                        <Password id="password" 
                            :feedback="false"
                            minlength="6"
                            pattern=".*[0-9].*"
                            title="Must contain at least one number"
                            v-model="password" required/>
                        <label for="password">Password</label>
                    </span>
                </div>
                <div class="signup__each">
                    <Button label="Sign up" type="submit"/>
                </div>
            </form>
        </template>
        <template v-slot:footer>
            <div class="signup__footer">
                <p>Already have an account?</p>
                <p @click="$emit('login')">Login</p>
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
.signup {
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