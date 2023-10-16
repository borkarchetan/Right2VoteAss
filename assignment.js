function findCombinations(budget) {
    const tshirtAmt = 50.00;
    const jeansAmt = 80.00;
    const jacketAmt = 100.00;
    
    const combinations = [];

    for (let tshirt = 1; tshirt <= budget / tshirtAmt; tshirt++) {
        for (let jeans = 1; jeans <= budget / jeansAmt; jeans++) {
            for (let jacket = 1; jacket <= budget / jacketAmt; jacket++) {
                const totalAmt = (tshirt * tshirtAmt) + (jeans * jeansAmt) + (jacket * jacketAmt);
                const balance = budget - totalAmt;

                if (tshirt >= 1 && jeans >= 1 && jacket >= 1) {
                    if (balance >= 0 && balance < tshirtAmt) {
                        combinations.push(`T-shirts= ${tshirt}, Jeans= ${jeans}, Jackets= ${jacket}`);
                    }
                }
            }
        }
    }

    return combinations;
}

function finalCombinations() {
    const budget = 600.00;
    const combinations = findCombinations(budget);

    if (combinations.length >= 1) {
        console.log(`A Person total Budget Rs. ${budget}:`);
        for (const val of combinations) {
            console.log(val);
        }
    } else {
        console.log("Low budget.");
    }
}

finalCombinations();
