Feature: Regres API

    Scenario: GET User Via API
        Given User sent the request for get multiple users list
        Then Users list should be displayed

    Scenario Outline: Create user via post request
        Given User sent the request to create new user with <name> and <job>
        Then Users should be created with <name> and <job>
        Examples:
            | name   | job       |
            | Keya   | Developer |
            | Asma   | Tester    |
            | Raghav | Manager   |

    Scenario Outline: Update user via put request
        Given User sent the request to update existing user with <name> and <job>
        Then Users should be updated with <name> and <job>
        Examples:
            | name   | job        |
            | Shreya | HR         |
            | Savi   | IT_Support |
            | Ovi    | DB         |
