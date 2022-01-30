export const formatId = (id: number): string => id.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
