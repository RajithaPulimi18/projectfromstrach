Feature: Login to the Creatio Application
   @automationexcersice
  Scenario: Verify signup page by passing hardcode page
    Given Launch the application
    Then home page should be displayed
    When User clicks on signup button
    And enter the username and email 
    Then user should fill all the details
    And Login page should be displayed