<template>
    <Head title="Contact" />

    <div
        class="font-nunito text-base text-black dark:text-white dark:bg-slate-900"
    >
        <Header></Header>

        <div class="py-44">
            <h1 class="text-center text-6xl">Contact</h1>
        </div>

        <ChangeMode></ChangeMode>

        <Footer></Footer>
    </div>
</template>

<script setup>
import Header from "../Components/Header.vue";
import ChangeMode from "../Components/ChangeMode.vue";
import Footer from "../Components/Footer.vue";
</script>

<style></style>
