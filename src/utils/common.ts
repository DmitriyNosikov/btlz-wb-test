export function splitToChunks<T extends []>(data: T, chunkSize: number): T[] {
    const chunks: T[] = data.reduce((resultArray: T[], item, index) => {
        const chunkIndex = Math.floor(index / chunkSize);

        if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = [] as unknown as T;
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
    }, []);

    return chunks;
}

export function getGoogleColumnLetterByNum(colIndex: number): string {
    let index = colIndex;
    let column = "";

    while (index > 0) {
        const remainder = index % 26;

        column = String.fromCharCode(65 + remainder) + column;
        index = Math.floor(index / 26);
    }
    return column;
}
