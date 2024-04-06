<template>
    <div>
        <h4 class="mb-5 text-2xl font-semibold">
                Get In Touch
            </h4>
        <form @submit.prevent="submit" id="contact-form">
            <div class="grid grid-cols-1">
                <div class="mb-5">
                    <label class="form-label font-medium"
                        >Name: <span class="text-red-600">*</span></label
                    >
                    <div class="form-icon relative mt-2">
                        <i
                            data-feather="user"
                            class="w-4 h-4 absolute top-3 left-4"
                        ></i>
                        <input
                            type="text"
                            class="form-input pl-12"
                            :class="{ 'border-1 border-red-500': v$.name.$error }"
                            placeholder="Name"
                            name="name"
                            v-model="name"
                        />
                        <small class="text-red-500" v-for="error in v$.name.$errors">{{ error.$message }}</small>
                    </div>
                </div>

                <div class="mb-5">
                    <label class="form-label font-medium"
                        >Company: <span class="text-red-600">*</span></label
                    >
                    <div class="form-icon relative mt-2">
                        <i
                            data-feather="globe"
                            class="w-4 h-4 absolute top-3 left-4"
                        ></i>
                        <input
                            type="text"
                            class="form-input pl-12"
                            :class="{ 'border-1 border-red-500': v$.company.$error }"
                            placeholder="Company"
                            name="company"
                            v-model="company"
                        />
                        <small class="text-red-500" v-for="error in v$.company.$errors">{{ error.$message }}</small>
                    </div>
                </div>

                <div class="mb-5">
                    <label class="form-label font-medium"
                        >Phone number:
                        <span class="text-red-600">*</span></label
                    >
                    <div class="form-icon relative mt-2">
                        <i
                            data-feather="phone"
                            class="w-4 h-4 absolute top-3 left-4"
                        ></i>
                        <input
                            name="phone"
                            id="phone"
                            class="form-input pl-12"
                            :class="{ 'border-1 border-red-500': v$.phone.$error }"
                            placeholder="1212458854"
                            v-model="phone"
                        />
                        <small class="text-red-500" v-for="error in v$.phone.$errors">{{ error.$message }}</small>
                    </div>
                </div>

                <div class="mb-5">
                    <label class="form-label font-medium"
                        >Email: <span class="text-red-600">*</span></label
                    >
                    <div class="form-icon relative mt-2">
                        <i
                            data-feather="mail"
                            class="w-4 h-4 absolute top-3 left-4"
                        ></i>
                        <input
                            type="email"
                            class="form-input pl-12"
                            :class="{ 'border-1 border-red-500': v$.email.$error }"
                            placeholder="Email"
                            name="email"
                            v-model="email"
                        />
                        <small class="text-red-500" v-for="error in v$.email.$errors">{{ error.$message }}</small>
                    </div>
                </div>

                <div class="mb-5">
                    <label class="form-label font-medium"
                        >Subject: <span class="text-red-600">*</span></label
                    >
                    <div class="form-icon relative mt-2">
                        <i
                            data-feather="edit"
                            class="w-4 h-4 absolute top-3 left-4"
                        ></i>
                        <input
                            type="text"
                            class="form-input pl-12"
                            :class="{ 'border-1 border-red-500': v$.subject.$error }"
                            placeholder="Subject"
                            name="subject"
                            v-model="subject"
                        />
                        <small class="text-red-500" v-for="error in v$.subject.$errors">{{ error.$message }}</small>
                    </div>
                </div>

                <div class="mb-5">
                    <label class="form-label font-medium"
                        >Message: <span class="text-red-600">*</span></label
                    >
                    <div class="form-icon relative mt-2">
                        <i
                            data-feather="message-circle"
                            class="w-4 h-4 absolute top-3 left-4"
                        ></i>
                        <textarea
                            name="message"
                            id="message"
                            cols="30"
                            rows="6"
                            class="form-textarea pl-12"
                            :class="{ 'border-1 border-red-500': v$.message.$error }"
                            v-model="message"
                        ></textarea>
                        <small class="text-red-500" v-for="error in v$.message.$errors">{{ error.$message }}</small>
                    </div>
                </div>
                <div>
                    <button
                        href=""
                        class="btn bg-sp-blue-600 hover:bg-sp-blue-700 border-sp-blue-600 hover:border-sp-blue-700 text-white rounded-md w-full"
                        >Send</button
                    >
                </div>
            </div>
            <!--end grid-->
        </form>
    </div>
</template>

<script>
import axios from "axios";
import useVuelidate from "@vuelidate/core";
import { email, helpers, required } from "@vuelidate/validators";

export default {
    name: "ContactForm",
    setup() {
        return {
            v$: useVuelidate(),
        };
    },
    data: () => ({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
    }),
    validations() {
        return {
            name: {
                required: helpers.withMessage(
                    "Please enter your name.",
                    required
                ),
            },
            company: {
                required: helpers.withMessage(
                    "Please enter your company.",
                    required
                ),
            },
            email: {
                required: helpers.withMessage(
                    "Please enter your email address.",
                    required
                ),
                email: helpers.withMessage(
                    "Please enter a valid email address. E.g. example@emailaddress.com",
                    email
                ),
            },
            phone: {
                required: helpers.withMessage(
                    "Please enter your phone number.",
                    required
                ),
            },
            subject: {
                required: helpers.withMessage(
                    "Please enter the subject of your message.",
                    required
                ),
            },
            message: {
                required: helpers.withMessage(
                    "Please enter your message.",
                    required
                ),
            },
        };
    },
    methods: {
        scrollToTopOfForm() {
            setTimeout(() => {
                const formWrapper = document.querySelector('#contact-form');
                formWrapper.scrollIntoView(true);
            }, 20);
        },

        async submit() {
            const isValid = await this.v$.$validate();
            if (!isValid) {
                this.validationError = true;
                this.scrollToTopOfForm();

            } else {
                this.validationError = false;
                this.scrollToTopOfForm();

              }
        }
    },
};
</script>
