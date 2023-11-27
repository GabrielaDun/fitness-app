export function capitalizeCategory (category) {
    if (!category) return '';
    return category.charAt(0).toUpperCase() + category.slice(1);
};