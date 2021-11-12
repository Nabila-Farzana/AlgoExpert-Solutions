function isValidSubsequence(array, sequence) {
    let seqidx = 0;
    for (const value of array) {
        if (seqidx === sequence.length) break;
        if (sequence[seqidx] === value) seqidx++;
    }
    return seqidx === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
