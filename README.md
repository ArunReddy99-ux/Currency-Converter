# CURRENCY CONVERTER 

## Overview
This project is a currency converter built with React. Users can input an amount, select a source currency, and a target currency. 
The app fetches the latest conversion rate from the Frankfurter API and displays the converted amount.

## Features
Convert between USD, EUR, CAD, and INR.
Real-time conversion using a public API.
Simple, clean UI.
Handles invalid or incomplete input gracefully.

## How It Works
➡️User Input:
The user enters an amount and selects the source and target currencies.
➡️API Request:
When any input changes, the app fetches the latest conversion rate from the Frankfurter API.
➡️Display Result:
The converted amount is displayed below the input fields.

## Component Breakdown
App Component
### State Variables:
val: The amount to convert (number).
from: The source currency (string).
to: The target currency (string).
op: The converted amount (string/number).
### UI Elements:
Input field for the amount.
Two dropdowns for selecting currencies.
Output area for the converted value.
### Logic:
Handles user input and passes values to the Conversion component.
Displays the conversion result.

## Conversion Component
### Purpose:
Handles fetching the conversion rate from the API and updating the result.
### Props:
val, to, from: Input values from the user.
setop: Function to update the converted value in the parent.
### Logic:
Uses useEffect to trigger an API call whenever val, to, or from changes.
Fetches conversion data and updates the result.
Handles errors gracefully.

## API Used
Frankfurter API:
https://www.frankfurter.app/
Endpoint Example:
https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD

