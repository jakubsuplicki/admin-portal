<template>
    <div>
        <div class="loader">
            <ProgressSpinner/>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.loader {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    &__spinner {
        position: relative;
        display: block;
        z-index: 105;
    }
}
</style>