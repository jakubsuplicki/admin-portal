<template>
    <div class="container">
        <header class="container__header">
            <slot name="header"></slot>
        </header>
        <section class="container__body">
            <slot name="body"></slot>
        </section>
        <footer class="container__footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>
<style lang="scss" scoped>
.container {
    &__header {
        margin-bottom: 1rem;
        text-align: center;
    }
    padding: 1rem 0;
    display: block;
    position: relative;
    border-radius: $radius-main;
    background-color: $lightest-gray;
    &__footer {
        display: flex;
    }
}
</style>