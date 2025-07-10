<script setup lang="ts">
import { computed, ref } from 'vue'
import Checkbox from '../shared/Checkbox.vue'
import { IconEye } from '@tabler/icons-vue'
import { IconEyeOff } from '@tabler/icons-vue'
import OptionsVertical from '../shared/OptionsVertical.vue'
import Slider from 'primevue/slider'
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const length = ref(8)
const password = ref('')
const showPass = ref(true)
const lowercase = ref(true)
const uppercase = ref(true)
const number = ref(true)
const symbol = ref(false)

const handleChangeLower = () => {
  lowercase.value = !lowercase.value
}
const handleChangeUpper = () => {
  uppercase.value = !uppercase.value
}
const handleChangeNumber = () => {
  number.value = !number.value
}
const handleChangeSymbol = () => {
  symbol.value = !symbol.value
}


function generatePwd(length: number, uppercase: boolean, lowercase: boolean, symbol: boolean, number: boolean) {
  const generateRandomChar = (charset: string) => {
    const randomIndex = Math.floor(Math.random() * charset.length);
    return charset[randomIndex];
  };

  const uppercaseCharset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseCharset = 'abcdefghijklmnopqrstuvwxyz';
  const symbolCharset = '!@#$%^&*()-_+=<>?/{}[]|';
  const numberCharset = '0123456789';

  let charset = '';

  if (uppercase) {
    charset += uppercaseCharset;
  }
  if (lowercase) {
    charset += lowercaseCharset;
  }
  if (symbol) {
    charset += symbolCharset;
  }
  if (number) {
    charset += numberCharset;
  }

  if (!uppercase && !lowercase && !symbol && !number) {
    return ''
    // If none of the options are selected, include all character sets
    // charset = uppercaseCharset + lowercaseCharset + symbolCharset + numberCharset;
  }

  let password = '';

  for (let i = 0; i < length; i++) {
    password += generateRandomChar(charset);
  }

  return password;
}

const savePass = () => {
  const pass = generatePwd(length.value, uppercase.value, lowercase.value, symbol.value, number.value)
  password.value = pass
}

const handleCopy = () => {
  navigator.clipboard.writeText(password.value)
  toast.add({ severity: 'success', summary: 'Password Copied', detail: 'Password Copied to clipboard', life: 3000 });
}
const isAnyTrue = computed(() => lowercase.value || uppercase.value || number.value || symbol.value);

</script>

<template>
  <div class="grid grid-cols-12 gap-4 xxxl:gap-6 items-center">
    <Toast :pt="{
      root: ({ props: e }) => ({ class: ['w-96 rounded-md', { '-translate-x-2/4': e.position == 'top-center' || e.position == 'bottom-center' }] }),
      container: ({ props: e }) => ({ class: ['my-4 rounded-md w-full', 'border-solid border-0 border-l-[6px] border-primary', 'backdrop-blur-[10px] shadow-md', 'bg-primary/40'] }),
      content: {
        class: 'flex items-start p-4'
      },
      icon: {
        class: ['w-6 h-6', 'text-lg leading-none mr-2 shrink-0']
      },
      text: {
        class: ['text-base leading-none', 'ml-2', 'flex-1']
      },
      summary: {
        class: 'font-bold block'
      },
      detail: {
        class: 'mt-2 block'
      },
      closebutton: {
        class: ['flex items-center justify-center', 'w-8 h-8', 'ml-auto  relative', 'rounded-full', 'bg-transparent', 'transition duration-200 ease-in-out', 'hover:bg-surface-0/50 dark:hover:bg-surface-0/10', 'overflow-hidden']
      },
      transition: {
        enterFromClass: 'opacity-0 translate-y-2/4',
        enterActiveClass: 'transition-[transform,opacity] duration-300',
        leaveFromClass: 'max-h-[1000px]',
        leaveActiveClass: '!transition-[max-height_.45s_cubic-bezier(0,1,0,1),opacity_.3s,margin-bottom_.3s] overflow-hidden',
        leaveToClass: 'max-h-0 opacity-0 mb-0'
      }
    }" />
    <div class="col-span-12 lg:col-span-6">
      <div class="box">
        <div class="flex justify-between items-center mb-6 pb-6 bb-dashed">
          <p class="font-medium">Generate Password</p>
          <OptionsVertical />
        </div>
        <div class="box bg-primary/5 lg:p-6">
          <p class="text-xl font-medium mb-3">New Password</p>
          <p class="mb-6 pb-6 bb-dashed">
            Change the length value to generate a new random password. You can also change the
            character types.
          </p>
          <label for="password" class="md:text-lg font-medium block mb-4"> Password </label>
          <div class=" bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3 mb-6 relative">
            <input :type="showPass ? 'text' : 'password'" class="w-11/12 text-sm focus:outline-none bg-transparent"
              placeholder="Password" id="password" :min="6" :max="50" :value="password" required readOnly />
            <button @click="showPass = !showPass" class="absolute ltr:right-5 rtl:left-5 top-1/2 -translate-y-1/2">
              <IconEye v-if="showPass" />
              <IconEyeOff v-else />
            </button>
          </div>
          <label for="length" class="md:text-lg font-medium block mb-4">
            Password length
          </label>
          <input type="number"
            class="w-full text-sm focus:outline-none bg-n0 dark:bg-bg4 border border-n30 dark:border-n500 rounded-3xl px-6 py-3"
            placeholder="Password Length" v-model="length" required readonly />
          <div id="range" class="py-6">
            <label for="character" class="md:text-lg font-medium block mb-4">
              Character Scale
            </label>
            <Slider :pt="{
              root: ({ props: e }) => ({
                class: [
                  'relative',
                  {
                    'h-2 w-full': e.orientation == 'horizontal',
                    'w-2 h-56': e.orientation == 'vertical'
                  },
                  'border-0',
                  'bg-n30 dark:bg-n500 rounded-lg',
                  { 'opacity-60 select-none pointer-events-none cursor-default': e.disabled }
                ]
              }),
              range: ({ props: e }) => ({
                class: [
                  'block absolute',
                  {
                    'top-0 left-0': e.orientation == 'horizontal',
                    'bottom-0 left-0': e.orientation == 'vertical'
                  },
                  {
                    'h-full': e.orientation == 'horizontal',
                    'w-full': e.orientation == 'vertical'
                  },
                  'bg-primary rounded-lg'
                ]
              }),
              handle: ({ props: e }) => ({
                class: [
                  'block',
                  'h-[1.143rem]',
                  'w-[0.543rem]',
                  {
                    'top-[50%] mt-[-0.5715rem] ml-[-0.5715rem]': e.orientation == 'horizontal',
                    'left-[50%] mb-[-0.5715rem] ml-[-0.5715rem]': e.orientation == 'vertical'
                  },
                  'rounded-full',
                  'border',
                  'bg-primary',
                  'border-n0',
                  'transition duration-200',
                  'cursor-grab',
                  'touch-action-none'
                ]
              })
            }" v-model="length" class="w-full" :min="6" :max="30" />
          </div>
          <p class="mb-5 font-medium mt-6">Character Types</p>
          <div class="grid grid-cols-2 gap-4 pb-6 bb-dashed">
            <div class="col-span-1">
              <Checkbox :checked="lowercase" label="Lowercase" :onChange="handleChangeLower" />
            </div>
            <div class="col-span-1">
              <Checkbox :checked="uppercase" label="Uppercase" :onChange="handleChangeUpper" />
            </div>
            <div class="col-span-1">
              <Checkbox :checked="number" label="Numbers" :onChange="handleChangeNumber" />
            </div>
            <div class="col-span-1">
              <Checkbox :checked="symbol" label="Symbols" :onChange="handleChangeSymbol" />
            </div>
          </div>
          <div class="mt-6 xl:mt-8 xxl:mt-10 flex-wrap flex gap-6">
            <button @click="savePass" class="btn disabled:cursor-not-allowed" :disabled="!isAnyTrue">
              Generate New
            </button>
            <button class="btn-outline disabled:cursor-not-allowed" @click="handleCopy" :disabled="!password">
              Copy to Clipboard
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 lg:col-span-6">
      <img src="/images/password-gen.png" :width="756" :height="705" alt="illustration password gen" />
    </div>
  </div>
</template>
