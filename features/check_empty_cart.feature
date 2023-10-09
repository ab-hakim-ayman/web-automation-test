@check_empty_cart
Feature: Check if Cart is Empty

  Scenario: Verify cart is empty
    Given I am on the website home page
    And I should logged in
    And navigate to the cart page 
    Then I should see an empty cart
