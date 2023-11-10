export class Utils {

    public static truncate(source: string, size: number): string {
        return source.length > size ? source.slice(0, size - 1) + "…" : source;
    }

    public static replaceSpecialChars(text: string) {
        return text.replace(/[ÀÁÂÃÄÅ]/, "A")
                    .replace(/[àáâãäå]/, "a")
                    .replace(/[ÈÉÊË]/, "E")
                    .replace(/[èéê]/, "e")
                    .replace(/[ÌÍ]/, "I")
                    .replace(/[ìí]/, "i")
                    .replace(/[ÒÓÔÕ]/, "O")
                    .replace(/[òóoôõ]/, "o")
                    .replace(/[Ç]/, "C")
                    .replace(/[ç]/, "c")
                    .replace(/[^a-z0-9]/gi, '')
    }

}