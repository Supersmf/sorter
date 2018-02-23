class Sorter {
    constructor() {
        this.array = [];
        this.comparator = (a, b) => a - b;
    }

    add(element) {
        this.array.push(element)
    }

    at(index) {
        return this.array[index];
    }

    get length() {
        return this.array.length;
    }

    toArray() {
        return this.array;
    }

    sort(indices) {

        let sortMass = [];

        this.array.forEach((value, index) => {
          indices.forEach((e) => {if (e === index) sortMass.push(value)})
        })

        sortMass.sort(this.comparator);

        this.array.forEach((value, index) => {
          indices.forEach((e) => {if (e === index) this.array[index] = sortMass.shift()})
        })

    }

    setComparator(comparator) {
        this.comparator = comparator;
    }
}

module.exports = Sorter;