/*  Buy chocolate
    add mint flavoring
    combine the chocolate and mint
    bake the mixture
    break the hardened sheet into 6 pieces */
    


const buyChocolate = () => {
    const chocolate = {type: "Milk chocolate"}
    return chocolate
};

// the chocolate obj now has a property {type: Milk chocolate}

const chocolateType = buyChocolate();

const addFlavoring = (chocolate) => {
    chocolate.flavor = "Mint"
    return chocolate
};

// the chocolate obj now has an added property {type: Milk chocolate, flavor: Mint}

const flavor = addFlavoring(chocolateType);

const makeBarkMixture = (chocolate) => {
    if (chocolate.flavor === "Mint") {
        chocolate.mixed = true;
    } else {
        chocolate.mixed = false;
    }
};

// checks that chocolateType has the value of flavor set to true

const mix = makeBarkMixture(chocolateType);

const bakeCandy = (chocolate) => {
    if (chocolate.mixed === true) {
        chocolate.baked = true;
    } else {
        chocolate.baked = false;
    }
};

// checks that chocolate.mixed is true

const baked = bakeCandy(chocolateType);

const breakBark = (chocolate) => {
    if (chocolate.baked === true) {
        return ["Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece", "Mint Chocolate Bark Piece"]
    }
};

const product = breakBark(chocolateType)

console.log(product)
