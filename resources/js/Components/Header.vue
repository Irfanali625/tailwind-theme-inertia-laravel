<template>
    <div>
        <nav
            id="topnav"
            class="defaultscroll is-sticky bg-white dark:bg-black z-10"
        >
            <div class="container">
                <i v-feather="settings" class="h-4 w-4" hidden></i>

                <!-- Logo container-->
                <a class="logo pl-0" href="#">
                    <img
                        src="/public/images/svg/logo1.svg"
                        class="inline-block dark:hidden w-40 md:w-60"
                        alt=""
                    />
                    <img
                        src="/public/images/svg/logo1-white.svg"
                        class="hidden dark:inline-block w-40 md:w-60"
                        alt=""
                    />
                </a>

                <!-- End Logo container-->
                <div class="menu-extras">
                    <div class="menu-item">
                        <!-- Mobile menu toggle-->
                        <a
                            class="navbar-toggle"
                            id="isToggle"
                            @click="toggleMenu"
                        >
                            <div class="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </a>
                        <!-- End mobile menu toggle-->
                    </div>
                </div>

                <div id="navigation">
                    <!-- Navigation Menu-->
                    <ul class="navigation-menu" id="navItems">
                        <li>
                            <Link
                                :href="route('home')"
                                class="sub-menu-item"
                                :class="{ active: isCurrentRoute('home') }"
                                >Home</Link
                            >
                        </li>
                        <li>
                            <Link
                                :href="route('about')"
                                class="sub-menu-item"
                                :class="{ active: isCurrentRoute('about') }"
                                >About</Link
                            >
                        </li>
                        <li>
                            <Link
                                :href="route('services')"
                                class="sub-menu-item"
                                :class="{ active: isCurrentRoute('services') }"
                                >Services</Link
                            >
                        </li>
                        <li>
                            <Link
                                :href="route('contact')"
                                class="sub-menu-item"
                                :class="{ active: isCurrentRoute('contact') }"
                                >Contact</Link
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>
<script setup>
import { Head, Link } from "@inertiajs/vue3";

function toggleMenu() {
    document.getElementById("isToggle").classList.toggle("open");
    var isOpen = document.getElementById("navigation");
    if (isOpen.style.display === "block") {
        isOpen.style.display = "none";
    } else {
        isOpen.style.display = "block";
    }
}

function isCurrentRoute(routeName) {
    return route().current(routeName);
}
</script>
<style></style>
