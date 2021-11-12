function isValidSubsequence(array, sequence) {
    let arridx = 0;
    let seqIdx = 0;

    while (arridx < array.length && seqIdx < sequence.length) {
        if (array[arridx] === sequence[seqIdx]) seqIdx++;
        arridx++;
    }
    return seqIdx === sequence.length;
}

exports.isValidSubsequence = isValidSubsequence;
