Feature: Ecommerce Site: Orange HRM

    Scenario: Login with Valid Credentials
        Given Visit Practice Automation Site
        And User log-in using username and password
            | username        | password    |
            | sarika@test.com | @Minskole12 |
        When User click on submit button
        Then Dashoard sholud be visible


    Scenario Outline: Login with Valid Credentials
        Given Visit Practice Automation Site
        And User log-ins using <username> and <passwords>
        When User click on submit button
        Then Dashboard sholud be visibles

        Examples:
            | username        | passwords   |
            | sarika@test.com | @Minskole12 |
            | gauri@test.com  | 12Minskole@ |
            | pratik@test.com | @Minskole12 |

