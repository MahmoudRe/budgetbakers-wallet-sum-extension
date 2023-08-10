# Budgetbakers Wallet sum-extension

At the time of development, the web-base version of Wallet doesn't show the sum of records in foreign currency, rather it convert them to the default currency of the account.

Currently, this ~~extension~~ hack sum all the records that are rendered. It sum the numbers regardless of the currency, hence it is useful for records of the same (foreign) currency. It is a quick-hack rather a full extension.

A listener to re-calculate the sum fires on `scrollend``, so after scrolling down to ensure all records are rendered it shows the correct results next to the sum of the dashboard.
