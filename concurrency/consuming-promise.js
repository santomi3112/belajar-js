const stock = {
    coffeeBeans: 250,
    water:1
}

const checkStock = () => {
    return new Promise((resolve, reject) => {
        if (stock.coffeeBeans >= 16 && stock.water >= 250) {
            resolve ("stok cukup, bisa membuat kopi")
        } else {
            reject ("stok tidak cukup")
        }
    })
}

const handleSuccess = resolvedValue => {
    console.log(resolvedValue);
}

const handleFailure = rejectionReason => {
    console.log(rejectionReason);
}

checkStock().then(handleSuccess, handleFailure)