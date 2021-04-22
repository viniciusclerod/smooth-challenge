function SmoothieService() {
    this.smoothies = {}
}

SmoothieService.prototype.init = function () {
    this.smoothies = {
        "Classic": new Set(["strawberry", "banana", "pineapple", "mango", "peach", "honey", "ice", "yogurt"]),
        "Forest Berry": new Set(["strawberry", "raspberry", "blueberry", "honey", "ice", "yogurt"]),
        "Freezie": new Set(["blackberry", "blueberry", "black currant", "grape juice", "frozen yogurt"]),
        "Greenie": new Set(["green apple", "kiwi", "lime", "avocado", "spinach", "ice", "apple juice"]),
        "Vegan Delite": new Set(["strawberry", "passion fruit", "pineapple", "mango", "peach", "ice", "soy milk"]),
        "Just Desserts": new Set(["banana", "ice cream", "chocolate", "peanut", "cherry"])
    }
}

SmoothieService.prototype.list = function () {
    return this.smoothies
}

SmoothieService.prototype.save = function (smoothie) {
    const stream = `${smoothie}`.split(',')
    const name = stream[0]
    const ingredients = stream.splice(1)
    // console.log(name, ingredients)
    // console.log(this.sortSmoothie(name))
    ingredients.forEach(ingredient => {
        switch (ingredient.substr(0, 1)) {
            case '+': {
                this.addIngredient(name, ingredient.substr(1))
            } break
            case '-': {
                this.removeIngredient(name, ingredient.substr(1))
            } break
            default: break
        }
    })
    // console.log(this.sortSmoothie(name))
    return this.sortSmoothie(name)
}

SmoothieService.prototype.addIngredient = function (name, ingredient) {
    this.smoothies[name].add(ingredient)
}

SmoothieService.prototype.removeIngredient = function (name, ingredient) {
    this.smoothies[name].delete(ingredient)
}

SmoothieService.prototype.sortSmoothie = function (name) {
    return [...this.smoothies[name]].sort()
}

module.exports = SmoothieService