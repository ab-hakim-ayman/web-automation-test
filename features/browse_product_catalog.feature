@browse_product_catalog
Feature: Browse Product Catalog

  Scenario: View Product Categories
    Given I am on the tv Hut website
    When I navigate to the product catalog
    Then I should see a list of product categories