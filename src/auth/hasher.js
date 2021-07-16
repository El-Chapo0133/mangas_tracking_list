class Hasher {
        constructor() {
                this.source;
                this.hash;
        }

        setSource(source) {
                this.source = source;
        }
        async eat() {
                if (!this.source)
                        throw new Error("No source setted");
                
                this.hash = [];
                await this.transformToHash(this.source);
                return this;
        }
        exportHashString() {
                if (!this.hash)
                        throw new Error("No hash value found");
                return this.transformHashToString();
        }
        exportHashInt() {
                if (!this.hash)
                        throw new Error("No hash value found");
                return this.hash;
        }

        //#region private fields

        transformToHash(source) {
                this.applyModulo(source);
                this.applyFibbo(source);
        }

        applyModulo(source) {
                for (let index = 0; index < source.length - 1; index++) {
                        this.hash[index] = source.charCodeAt(index) % source.charCodeAt(index + 1);
                }
        }
        applyFibbo(source) {
                for (let index = 0; index < source.length - 1; index++) {
                        this.hash[index] += source.charCodeAt(index + 1);
                }
        }

        transformHashToString() {
                let toReturn = "";

                const MIN = 33;
                const MAX = 128 - MIN;

                for (let index = 0; index < this.hash.length; index++){
                        toReturn += String.fromCharCode(this.hash[index] % MAX + MIN);
                }

                return toReturn;
        }

        //#endregion
}


module.exports = new Hasher();