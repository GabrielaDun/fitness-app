export function CalculeteDownPayment(price) {
    return Math.round(price/1000) * 100
}