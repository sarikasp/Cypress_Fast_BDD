Feature: Ecommerce Site: Green Kart

    @focus
    Scenario: E-Commerce Product Delivery
        Given Open E-Commerce Site
        And Search product which is starts from ca
        And Add to cart Cashews
        When Place order and select country
        Then Validate the Thank you message
        
# npx cypress-tags run -e TAGS="@focus" --headed --browser chrome