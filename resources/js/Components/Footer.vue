<template>
    <footer
        class="footer bg-dark-footer relative text-gray-200 dark:text-gray-200"
    >
        <div class="container">
            <div class="grid grid-cols-12">
                <div class="col-span-12">
                    <div class="py-[60px] px-0">
                        <div
                            class="grid md:grid-cols-12 grid-cols-1 gap-[30px]"
                        >
                            <div class="lg:col-span-4 md:col-span-12">
                                <a
                                    href="#"
                                    class="text-[22px] focus:outline-none"
                                >
                                    <img
                                        src="/public/images/svg/logo1-white.svg"
                                        class="inline-block  w-40 md:w-60"
                                        alt=""
                                    />
                                </a>
                                <p class="mt-6 text-gray-300">
                                    Start working with Tailwind CSS that can
                                    provide everything you need to generate
                                    awareness, drive traffic, connect.
                                </p>
                                <ul class="list-none mt-6">
                                    <li class="inline">
                                        <a
                                            href="#"
                                            target="_blank"
                                            class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-sp-blue-600 dark:hover:border-sp-blue-600 hover:bg-sp-blue-600 dark:hover:bg-sp-blue-600"
                                            ><i
                                                class="uil uil-shopping-cart align-middle"
                                                title="Buy Now"
                                            ></i
                                        ></a>
                                    </li>
                                    <li class="inline">
                                        <a
                                            href="#"
                                            target="_blank"
                                            class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-sp-blue-600 dark:hover:border-sp-blue-600 hover:bg-sp-blue-600 dark:hover:bg-sp-blue-600"
                                            ><i
                                                class="uil uil-dribbble align-middle"
                                                title="dribbble"
                                            ></i
                                        ></a>
                                    </li>
                                    <li class="inline">
                                        <a
                                            href="#"
                                            target="_blank"
                                            class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-sp-blue-600 dark:hover:border-sp-blue-600 hover:bg-sp-blue-600 dark:hover:bg-sp-blue-600"
                                            ><i
                                                class="uil uil-behance"
                                                title="Behance"
                                            ></i
                                        ></a>
                                    </li>
                                    <li class="inline">
                                        <a
                                            href="#"
                                            target="_blank"
                                            class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-sp-blue-600 dark:hover:border-sp-blue-600 hover:bg-sp-blue-600 dark:hover:bg-sp-blue-600"
                                            ><i
                                                class="uil uil-linkedin"
                                                title="Linkedin"
                                            ></i
                                        ></a>
                                    </li>
                                    <li class="inline">
                                        <a
                                            href="#"
                                            target="_blank"
                                            class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-sp-blue-600 dark:hover:border-sp-blue-600 hover:bg-sp-blue-600 dark:hover:bg-sp-blue-600"
                                            ><i
                                                class="uil uil-facebook-f align-middle"
                                                title="facebook"
                                            ></i
                                        ></a>
                                    </li>
                                    <li class="inline">
                                        <a
                                            href="#"
                                            target="_blank"
                                            class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-sp-blue-600 dark:hover:border-sp-blue-600 hover:bg-sp-blue-600 dark:hover:bg-sp-blue-600"
                                            ><i
                                                class="uil uil-instagram align-middle"
                                                title="instagram"
                                            ></i
                                        ></a>
                                    </li>
                                    <li class="inline">
                                        <a
                                            href="#"
                                            target="_blank"
                                            class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-sp-blue-600 dark:hover:border-sp-blue-600 hover:bg-sp-blue-600 dark:hover:bg-sp-blue-600"
                                            ><i
                                                class="uil uil-twitter align-middle"
                                                title="twitter"
                                            ></i
                                        ></a>
                                    </li>
                                    <li class="inline">
                                        <a
                                            href="#"
                                            class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-sp-blue-600 dark:hover:border-sp-blue-600 hover:bg-sp-blue-600 dark:hover:bg-sp-blue-600"
                                            ><i
                                                class="uil uil-envelope align-middle"
                                                title="email"
                                            ></i
                                        ></a>
                                    </li>
                                    <li class="inline">
                                        <a
                                            href="#"
                                            target="_blank"
                                            class="btn btn-icon btn-sm border border-gray-800 rounded-md hover:border-sp-blue-600 dark:hover:border-sp-blue-600 hover:bg-sp-blue-600 dark:hover:bg-sp-blue-600"
                                            ><i
                                                class="uil uil-file align-middle"
                                                title="customization"
                                            ></i
                                        ></a>
                                    </li>
                                </ul>
                                <!--end icon-->
                            </div>
                            <!--end col-->

                            <div class="lg:col-span-2 md:col-span-4">
                                <h5
                                    class="tracking-[1px] text-gray-100 font-semibold"
                                >
                                    Company
                                </h5>
                                <ul class="list-none footer-list mt-6">
                                    <li>
                                        <Link
                                            :href="route('home')"
                                            class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                            ><i
                                                class="uil uil-angle-right-b me-1"
                                            ></i>
                                            Home</Link
                                        >
                                    </li>
                                    <li class="mt-2">
                                        <Link
                                            :href="route('about')"
                                            class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                            ><i
                                                class="uil uil-angle-right-b me-1"
                                            ></i>
                                            About</Link
                                        >
                                    </li>
                                    <li class="mt-2">
                                        <Link
                                            :href="route('services')"
                                            class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                            ><i
                                                class="uil uil-angle-right-b me-1"
                                            ></i>
                                            Services</Link
                                        >
                                    </li>
                                    <li class="mt-2">
                                        <Link
                                            :href="route('contact')"
                                            class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                            ><i
                                                class="uil uil-angle-right-b me-1"
                                            ></i>
                                            Contact</Link
                                        >
                                    </li>
                                  
                                </ul>
                            </div>
                            <!--end col-->

                            <div class="lg:col-span-3 md:col-span-4">
                                <h5
                                    class="tracking-[1px] text-gray-100 font-semibold"
                                >
                                    Usefull Links
                                </h5>
                                <ul class="list-none footer-list mt-6">
                                    <li>
                                        <a
                                            href="#"
                                            class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                            ><i
                                                class="uil uil-angle-right-b me-1"
                                            ></i>
                                            Terms of Services</a
                                        >
                                    </li>
                                    <li class="mt-[10px]">
                                        <a
                                            href="#"
                                            class="text-gray-300 hover:text-gray-400 duration-500 ease-in-out"
                                            ><i
                                                class="uil uil-angle-right-b me-1"
                                            ></i>
                                            Privacy Policy</a
                                        >
                                    </li>
                                </ul>
                            </div>
                            <!--end col-->

                            <div class="lg:col-span-3 md:col-span-4">
                                <h5
                                    class="tracking-[1px] text-gray-100 font-semibold"
                                >
                                    Newsletter
                                </h5>
                                <p class="mt-6">
                                    Sign up and receive the latest tips via
                                    email.
                                </p>
                                <form>
                                    <div class="grid grid-cols-1">
                                        <div class="foot-subscribe my-3">
                                            <label class="form-label"
                                                >Write your email
                                                <span class="text-red-600"
                                                    >*</span
                                                ></label
                                            >
                                            <div
                                                class="form-icon relative mt-2"
                                            >
                                                <i
                                                    data-feather="mail"
                                                    class="w-4 h-4 absolute top-3 left-4"
                                                ></i>
                                                <input
                                                    type="email"
                                                    class="form-input bg-gray-800 border border-gray-800 text-gray-100 pl-12 focus:shadow-none"
                                                    placeholder="Email"
                                                    name="email"
                                                    required=""
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            id="submitsubscribe"
                                            name="send"
                                            class="btn bg-sp-blue-600 hover:bg-sp-blue-700 border-sp-blue-600 hover:border-sp-blue-700 text-white rounded-md"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <!--end col-->
                        </div>
                        <!--end grid-->
                    </div>
                    <!--end col-->
                </div>
            </div>
            <!--end grid-->
        </div>
        <!--end container-->

        <div class="py-[30px] px-0 border-t border-slate-800">
            <div class="container text-center">
                <div class="grid md:grid-cols-2 items-center">
                    <div class="md:text-left text-center">
                        <p class="mb-0 flex">
                            © Simon Pioli
                            <i class="mdi mdi-heart text-red-600"></i>
                            <a
                                href="#"
                                target="_blank"
                                class="text-reset mx-1"
                                >All Rights Reserved.</a
                            >
                        </p>
                    </div>

                    <ul
                        class="list-none md:text-right text-center mt-6 md:mt-0"
                    >
                        <li class="inline">
                            <a href="#"
                                ><img
                                    src="/public/images/payments/american-ex.png"
                                    class="max-h-6 inline"
                                    title="American Express"
                                    alt=""
                            /></a>
                        </li>
                        <li class="inline">
                            <a href=""
                                ><img
                                    src="/public/images/payments/discover.png"
                                    class="max-h-6 inline"
                                    title="Discover"
                                    alt=""
                            /></a>
                        </li>
                        <li class="inline">
                            <a href="#"
                                ><img
                                    src="/public/images/payments/master-card.png"
                                    class="max-h-6 inline"
                                    title="Master Card"
                                    alt=""
                            /></a>
                        </li>
                        <li class="inline">
                            <a href="#"
                                ><img
                                    src="/public/images/payments/paypal.png"
                                    class="max-h-6 inline"
                                    title="Paypal"
                                    alt=""
                            /></a>
                        </li>
                        <li class="inline">
                            <a href="#"
                                ><img
                                    src="/public/images/payments/visa.png"
                                    class="max-h-6 inline"
                                    title="Visa"
                                    alt=""
                            /></a>
                        </li>
                    </ul>
                </div>
                <!--end grid-->
            </div>
            <!--end container-->
        </div>
    </footer>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<style></style>
