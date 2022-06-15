Feature: Ecommerce Site: Orange HRM

    Scenario: Login with Valid Credentials
        Given Visit Orange HRM Site
        And Fill the Username
        And Fill the Password
        When Click on login Button
        Then Validate the Dashboard


    Scenario: Login with Invalid Credentials
        Given Visit Orange HRM Site
        And Fill the Invalid Username
        And Fill the Invalid Password
        When Click on login Button
        Then Validate the Error Message
