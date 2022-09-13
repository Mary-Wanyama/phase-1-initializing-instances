// Write your code here


 class breakFast {
    constructor(food, drink){
        this.food = food
        this.drink = drink
    }
 }

 class lunch {
    constructor(food, soup, salad){
        this.food = food
        this.soup = soup
        this.salad= salad
    }
 }

 class dinner {
    #dessert
    constructor(salad, soup, entree, dessert){
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this.#dessert = dessert
    }
 }