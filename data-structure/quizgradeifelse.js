function scoreChecker(score) {
    let result;
    score = 100
    if (score>=90) {
        result = "Nilai km A"
    } else if (score>=80 && score<=89) {
        result = "Nilai km B"
    } else if (score>=70 && score <=79) {
        result = "Nilai km C"
    } else if (score<70) {
        result = "Gak lulus km"
    }
    return result;
}
console.log(scoreChecker())