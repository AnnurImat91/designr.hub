import { ref, reactive, watch, onMounted } from 'vue'
import { defineStore } from 'pinia'
import { layoutList } from '@/components/shared/ThemeData'
import { useDark, useToggle } from '@vueuse/core'

export const useLayoutStore = defineStore('layout', () => {
    const isDarkMode = ref(useDark())
    const isDark = ref(useDark());

    const theme = reactive({
        layout: localStorage.getItem('layout') || layoutList[0],
        dir: localStorage.getItem('dir') || 'ltr',
        isDark
    })
    const toggleDarkModeFunction = useToggle(isDarkMode)
    const toggleDark = () => {
        toggleDarkModeFunction()
        isDark.value = !isDark.value
    }
    const changeDir = (newDir: string) => {
        theme.dir = newDir
        localStorage.setItem('dir', newDir)
    }
    const changeLayout = (newLayout: string) => {
        theme.layout = newLayout
        localStorage.setItem('layout', newLayout)
    }
    watch(
        () => theme.dir,
        (newDir) => {
            document.documentElement.dir = newDir;
        }
    );

    onMounted(() => {
        document.documentElement.dir = theme.dir;
    })
    return { theme, changeDir, changeLayout, toggleDark }
})