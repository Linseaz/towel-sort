
// You should implement your task here.

module.exports = function towelSort(m = []) {
    const r = [];
    for (let i = 0; i < m.length; i++) {
        (i % 2 == 0) ? r.push(...m[i])
            : r.push(...m[i].reverse())
    }
    return r;
}
