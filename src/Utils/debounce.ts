export default function debounce(fn: Function, delay: number, event?: Event) {
    console.log(delay)
    setTimeout(() => {
        fn(event)
    }, delay)
}