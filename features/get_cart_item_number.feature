@get_cart_item_number
Feature: Get Cart Item Number

  Scenario: Retrieve the number of items in the cart
    Given I am on the tvhut home
    When the user should to login
    And I navigate to the cart page
    Then I should see the number of items in the cart
