<script setup lang="ts">
import Checkbox from '@/components/shared/Checkbox.vue';
import CommonDropdown from '@/components/shared/CommonDropdown.vue';


</script>

<template>
    <div class="grid grid-cols-12 gap-4 xxxxxl:gap-6">
        <div class="col-span-12 lg:col-span-6">
            <div class="box xl:p-8 xxl:p-10">
                <p class="font-medium bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
                    Personal Information
                </p>
                <p class="text-lg font-medium mb-4">Profile Photo</p>
                <div class="flex flex-wrap gap-5 md:gap-10 items-center bb-dashed mb-6 pb-6">
                    <img src="/images/profile-photo.png" :width="120" :height="120" class="rounded-full" alt="img" />
                    <div class="flex gap-4">
                        <button class="btn">Upload Photo</button>
                        <button class="btn-outline">Cancel</button>
                    </div>
                </div>
                <form class="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxxxl:gap-6">
                    <div class="col-span-2 md:col-span-1">
                        <label for="fname" class="md:text-lg font-medium block mb-4">
                            First Name
                        </label>
                        <input type="text"
                            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 md:px-6 md:py-3"
                            id="fname" placeholder="First Name" value="Darrel" required />
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <label for="lname" class="md:text-lg font-medium block mb-4">
                            Last Name
                        </label>
                        <input type="text"
                            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 md:px-6 md:py-3"
                            placeholder="Enter Last Name" value="Steward" id="lname" required />
                    </div>
                    <div class="col-span-2">
                        <label for="email" class="md:text-lg font-medium block mb-4">
                            Email
                        </label>
                        <input type="email"
                            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 md:px-6 md:py-3"
                            placeholder="Enter Email" value="example@mail.com" id="user-email" required />
                    </div>
                    <div class="col-span-2">
                        <label for="phone" class="md:text-lg font-medium block mb-4">
                            Phone (Optional)
                        </label>
                        <input type="text"
                            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 md:px-6 md:py-3"
                            placeholder="Enter Phone" value="91021421144" id="phone" required />
                    </div>
                    <div class="col-span-2">
                        <label for="phone" class="md:text-lg font-medium block mb-4">
                            Gender :
                        </label>
                        <div class="flex gap-5">
                            <label for="male" class="flex items-center gap-2 cursor-pointer">
                                <input type="radio" id="male" name="gender" class="accent-primary scale-125" />
                                Male
                            </label>
                            <label for="female" class="flex items-center gap-2 cursor-pointer">
                                <input type="radio" id="female" name="gender" class="accent-primary scale-125" />
                                Female
                            </label>
                            <label for="other" class="flex items-center gap-2 cursor-pointer">
                                <input type="radio" id="other" name="gender" class="accent-primary scale-125" />
                                Other
                            </label>
                        </div>
                    </div>

                    <div class="col-span-2">
                        <label for="tagline" class="md:text-lg font-medium block mb-4">
                            Tagline :
                        </label>
                        <!-- <QuillEditor /> -->
                    </div>
                    <div class="col-span-2">
                        <div class="flex flex-col gap-4">
                            <Checkbox label="I agree to the privacy & policy" />
                            <Checkbox label="I agree with all terms & conditions" />
                        </div>
                        <div class="flex mt-6 md:mt-10 gap-4">
                            <button class="btn px-5">Save Changes</button>
                            <button class="btn-outline px-5">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-span-12 lg:col-span-6">

            <div class="box xl:p-8 xxl:p-10 mb-6">
                <p class="font-medium bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
                    Address
                </p>
                <form class="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
                    <div class="col-span-2">
                        <label for="location" class="md:text-lg font-medium block mb-4">
                            Location
                        </label>
                        <CommonDropdown input-class="!py-3.5" placeholder-props="Select Country"
                            :options="[{ name: 'USA' }, { name: 'UK' }, { name: 'SA' }]" />
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <label for="address1" class="md:text-lg font-medium block mb-4">
                            Address 1
                        </label>
                        <input type="text"
                            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 md:px-6 md:py-3"
                            placeholder="Enter Address 1" value="Road 12, House 3, New York" id="address1" required />
                    </div>
                    <div class="col-span-2 md:col-span-1">
                        <label for="address2" class="md:text-lg font-medium block mb-4">
                            Address 2 (Optional)
                        </label>
                        <input type="text"
                            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 md:px-6 md:py-3"
                            placeholder="Enter Address 2" value="Road 12, House 3, Los angelos" id="address2" required />
                    </div>
                    <div class="col-span-2">
                        <label for="zip" class="md:text-lg font-medium block mb-4">
                            Zip Code
                        </label>
                        <input type="text"
                            class="w-full text-sm focus:outline-none bg-primary/5 dark:bg-bg3 border border-n30 dark:border-n500 rounded-3xl px-3 py-2 md:px-6 md:py-3"
                            placeholder="Enter Zip Code" value="2250" id="zip" required />
                    </div>
                    <div class="col-span-2 flex pt-4 gap-4">
                        <button class="btn px-5">Save Changes</button>
                        <button class="btn-outline px-5">Cancel</button>
                    </div>
                </form>
            </div>

            <div class="box xl:p-8 xxl:p-10 mb-6">
                <p class="font-medium bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
                    Privacy
                </p>
                <form class="mt-6 xl:mt-8 grid grid-cols-2 gap-4 xxxl:gap-6">
                    <div class="col-span-2">
                        <label for="privacy" class="md:text-lg font-medium block mb-4">
                            Who can see your profile photo?
                        </label>
                        <CommonDropdown input-class="!py-3.5"
                            :options="[{ name: 'Anyone' }, { name: 'Friends' }, { name: 'Friends of friends' }]" />
                    </div>
                    <div class="col-span-2 flex pt-4 gap-4">
                        <button class="btn px-5">Save Changes</button>
                        <button class="btn-outline px-5">Cancel</button>
                    </div>
                </form>
            </div>

            <div class="box xl:p-8 xxl:p-10 mb-6">
                <p class="font-medium bb-dashed mb-4 pb-4 md:mb-6 md:pb-6">
                    Delete Your Account
                </p>
                <form class="mt-6 xl:mt-8 gap-4 xxxl:gap-6">
                    <p class="mb-4">
                        When you delete your account, you lose access to Front account
                        services, and we permanently delete your personal data. You can
                        cancel the deletion for 14 days.
                    </p>
                    <Checkbox label="Confirm that I want to delete my account." />
                    <div class="col-span-2 flex mt-6 lg:mt-10 gap-4">
                        <button class="btn px-5">Save Changes</button>
                        <button class="btn-outline px-5">Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>