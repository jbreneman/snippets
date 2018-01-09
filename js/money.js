export default (cents, currency = '$') => {
    return `${currency}${(+cents % 100) === 0 ? (+cents / 100) : (+cents / 100).toFixed(2)}`;
}