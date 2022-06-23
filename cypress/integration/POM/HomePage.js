let url = 'https://rahulshettyacademy.com/seleniumPractise/#/'
class Product {

    visitUrl(url) {
        cy.visit(url)
    }

    searchProduct(value) {
        cy.get('[class="search-keyword"]').type(value)
        cy.get('[type="submit"]').click()
    }

    selectProduct(value) {
        cy.get('h4[class="product-name"]').each((el, index) => {
            if (el.text().replace(' - 1 Kg', ' ').trim() == value) {
                cy.get('[class="product-action"] button').eq(index).click()
            }
        })
    }

    addProduct() {
        cy.get('img[alt="Cart"]').click()
        cy.get('[class="action-block"] button').first().click()
        cy.contains('Place Order').click()
        cy.get('select').select('India')
        // cy.get('[class="chkAgree"]').click()
        // cy.get('button').click()
        this.clickItem('[class="chkAgree"]')
        this.clickItem('button')
    }


    clickItem(element) {
        cy.get(element).click()
    }






}
export default Product




// class CSSSelector{

//     agreeBtn = '[class="chkAgree"]'
// }


// let selector = new CSSSelector()
// productLst.clickItem(selector.agreeBtn)
