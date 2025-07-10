import { ref, computed } from 'vue';

export const useTableFunctions = (initialData: any, perPage: number = 10) => {
    const tableData = ref(initialData);
    const order = ref('ASC');
    const searchTerm = ref('');
    const itemsPerPage = ref(perPage);
    const currentPage = ref(1);

    const sortData = (col: string) => {
        const colString = String(col);

        const [parentCol, childCol] = colString.split('.');

        if (order.value === 'ASC') {
            const sorted = [...tableData.value].sort((a, b) => {
                const aValue = childCol ? a[parentCol][childCol] : a[colString];
                const bValue = childCol ? b[parentCol][childCol] : b[colString];

                if (typeof aValue === 'string' && typeof bValue === 'string') {
                    return aValue.toLowerCase() > bValue.toLowerCase() ? 1 : -1;
                } else {
                    return aValue > bValue ? 1 : -1;
                }
            });

            tableData.value = sorted;
            order.value = 'DSC';
        } else {
            const sorted = [...tableData.value].sort((a, b) => {
                const aValue = childCol ? a[parentCol][childCol] : a[colString];
                const bValue = childCol ? b[parentCol][childCol] : b[colString];

                if (typeof aValue === 'string' && typeof bValue === 'string') {
                    return aValue.toLowerCase() < bValue.toLowerCase() ? 1 : -1;
                } else {
                    return aValue < bValue ? 1 : -1;
                }
            });

            tableData.value = sorted;
            order.value = 'ASC';
        }
    };

    const deleteItem = (id: number) => {
        const updatedData = tableData.value.filter((item: any) => item.id !== id);
        tableData.value = updatedData;
    };

    const search = (event: any) => {
        const term = event.target.value;
        const filteredData = initialData.filter((item: any) =>
            Object.values(item).some((value) => String(value).toLowerCase().includes(term.toLowerCase()))
        );
        tableData.value = filteredData;
        currentPage.value = 1;
    };

    const paginatedData = computed(() => {
        const indexOfLastItem = currentPage.value * itemsPerPage.value;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage.value;
        return tableData.value.slice(indexOfFirstItem, indexOfLastItem);
    });

    const totalPages = computed(() => Math.ceil(tableData.value.length / itemsPerPage.value));

    const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage.value);
    const endIndex = computed(() => Math.min(startIndex.value + itemsPerPage.value - 1, tableData.value.length - 1));
    const totalData = computed(() => tableData.value.length);

    const paginate = (page: number) => {
        currentPage.value = page;
    };

    const nextPage = () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value++;
        }
    };

    const prevPage = () => {
        if (currentPage.value > 1) {
            currentPage.value--;
        }
    };

    return {
        tableData,
        searchTerm,
        itemsPerPage,
        currentPage,
        sortData,
        deleteItem,
        search,
        paginatedData,
        totalPages,
        startIndex,
        endIndex,
        totalData,
        paginate,
        nextPage,
        prevPage,
    };
};
