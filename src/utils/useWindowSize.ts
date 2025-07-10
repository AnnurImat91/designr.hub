// useWindowSize.ts
import { onMounted, ref } from 'vue';

const useWindowSize = () => {
    const windowSize = ref<number>(window.innerWidth)
    const handleResize = () => {
        const width = window.innerWidth;
        windowSize.value = width
    };

    onMounted(() => {
        // Initial setup
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    return { windowSize };
};

export default useWindowSize;
