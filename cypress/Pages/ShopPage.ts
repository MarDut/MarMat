import { forEach } from "cypress/types/lodash";

class ShopPage {

    // getters

    get productListElement() {
        return cy.get('.products.content-wrap li');
    }

    get addToCartButton() {
        return cy.get('.add_to_cart_button');
    }

    get productCategoryCheckbox() {
        return cy.get('.wpfLiLabel');
    }

    get filterButton() {
        return cy.get('.wpfFilterButton');
    }

    get LeftPriceSliderHandle() {
        return cy.get('.ui-slider-handle').eq(0);
    }

    get RightPriceSliderHandle() {
        return cy.get('.ui-slider-handle').eq(1);
    }

    get productsPriceList() {
        return cy.get('.price>.woocommerce-Price-amount>bdi, .price>ins>.woocommerce-Price-amount>bdi');
    }

    get selectOrderElement() {
        return cy.get('.orderby')
    }

    /*
    get filteredBottomPrizeRange() {
        var elementValue = (document.getElementsByClassName('wpfPriceRangeField')[0] as HTMLInputElement).value  
        return parseInt(elementValue)
    }

    get filteredUpperPrizeRange() {
        var elementValue = (document.getElementsByClassName('wpfPriceRangeField')[1] as HTMLInputElement).value
        return parseInt(elementValue)
    }
    */



    // methods

    visit() {
        return cy.visit('/shop');
    }

    selectProduct(index: number) {
        this.productListElement.eq(index).click()
    }

    addToCart(index: number) {
        cy.intercept('POST', '/?wc-ajax=add_to_cart').as('addToCartRequest')
        this.addToCartButton.eq(index).click()
        cy.wait('@addToCartRequest').its('response.statusCode').should('eq', 200)
    }

    selectCategory(categoryName: string) {
        this.productCategoryCheckbox.contains(categoryName).click()
        cy.wait(100)
        this.filterButton.click()
    }

    verifyAllProductsCategory(categoryName: string){
        this.productListElement.each((el)=>{cy.wrap(el).should('have.class', 'product_cat-'+categoryName)})
    }

    setPriceRangeFilter(bottomRange: number, upperRange: number){
        for(let n=0; n<bottomRange; n++) {
            this.LeftPriceSliderHandle.click().type('{rightArrow}')
        }
        
        for(let n=0; n<45-upperRange; n++) {
            this.RightPriceSliderHandle.click().type('{leftArrow}')
        }
        this.filterButton.click()
    }

    verifyAllProductsPricesWithinRange(bottomRange: number, upperRange: number){
        this.productsPriceList.each((el)=>{cy.wrap(el).invoke('text')
        .then(parseFloat)
        .should('be.at.least', bottomRange)
        .should('not.be.greaterThan', upperRange)
    })
    }

    orderBy(orderRule: string) {
        this.selectOrderElement.select(orderRule)
    }

    verifyProductsAreSortedAscByPrice(){
        this.productsPriceList.then(($elements) => {
            const prices = $elements.map((index, element) => {
                return parseFloat(element.innerText)
            })
            for (let i = 0; i < prices.length - 1; i++) {
                expect(prices[i]).to.be.at.most(prices[i + 1])
            }
        })
    }

}

export default ShopPage;