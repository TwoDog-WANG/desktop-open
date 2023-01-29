<template>
    <div class="main-space">
        <Setting></Setting>
        <Navigation></Navigation>
        <LinkApp></LinkApp>
    </div>
</template>

<script setup>
    import Setting from '../SettingSpace/Setting.vue';
    import Navigation from '../NavigationSpace/Navigation.vue';
    import LinkApp from '../LinkApp/LinkApp.vue';
import { onMounted } from 'vue-demi';

    const showWin = () => {
        window.showWin();
    }
    const hiddenWin = () => {
        window.hiddenWin();
    }
    onMounted(() => {
        document.addEventListener('mouseenter', showWin);
        document.addEventListener('mouseleave', hiddenWin);
    })
</script>

<style lang="less" scoped>
    .main-space {
        height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>