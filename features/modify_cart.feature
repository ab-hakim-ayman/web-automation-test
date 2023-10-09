@modify_cart
Feature: Modify Cart

  Scenario: Update Quantity in Cart
    Given I am on the tvhut home page
    When the user have to login
    When I navigate to the cart page directly
    And I update the quantity of the product to 2
    Then I should see the updated quantity in the cart
