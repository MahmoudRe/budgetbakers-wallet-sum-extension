# Budgetbakers Wallet sum-extension

At the time of development, the web-base version of Wallet doesn't show the sum of records per currency or in forging currency, rather it convert all currency to the default one of the account, then it shows the sum of that.

Currently, this ~~extension~~ quick-hack sum all the records that are rendered. A listener to re-calculate the sum fires on `click` event on filter side-baron and on `scrollend`, so scroll down to ensure all records are rendered and the correct results is shown next to the total sum of the dashboard.
