export default function debounce(fn, delay, event) {
    console.log(delay);
    setTimeout(() => {
        fn(event);
    }, delay);
}
