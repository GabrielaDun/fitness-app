export function shortenString(str, numberOfsymbols) {
    if (str.length <= numberOfsymbols ) {
        return str
    }
    let lastSpace = str.substring(0, numberOfsymbols).lastIndexOf(' ');
    if (lastSpace === -1) lastSpace = numberOfsymbols;
    return str.substring(0, lastSpace) + '...';
}