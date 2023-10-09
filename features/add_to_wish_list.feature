@add_to_wish_list
Feature: Add Product to Wish List

  Scenario: Add a Product to the Wish List
    Given I am on tvhut website home page
    When I search product with the keyword "monitor"
    And I select a monitor from the search results
    And I add the selected monitor to the wish list
    Then I should see the product in the wish list
