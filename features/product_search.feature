@product_search
Feature: Product Search

  Scenario: Search for a Product
    Given I am in the website
    When I search for a product with the keyword "laptop"
    Then I should see search results for "laptop"
