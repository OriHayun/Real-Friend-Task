export default function capitelizeFirstLetter(str: string): string {
    if (!str) {
        return '';
    }
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
}