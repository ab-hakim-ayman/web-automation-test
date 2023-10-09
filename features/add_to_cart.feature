@add_to_cart
Feature: Add Product to Cart

  Scenario: Add a Product to the Cart
    Given I am on tvhut website
    When I search a product with the keyword "tv"
    And I select a tv from the search results
    And I add the selected tv to the cart
    Then I should see the product in the cart
