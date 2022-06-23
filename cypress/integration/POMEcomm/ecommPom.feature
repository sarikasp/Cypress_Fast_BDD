Feature: Ecommerce Site: Green Kart

    @focus
    Scenario: E-Commerce Product Delivery
        Given Open E-Commerce Site with POM
        And Search product which is starts from br with POM
        And Add to cart Brinjal with POM
        When Place order and select country with POM
        Then Validate the Thank you message with POM
        
# npx cypress-tags run -e TAGS="@focus" --headed --browser chrome