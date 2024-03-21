// Write a function that takes an array of integers representing the price of a stock on different days.
// Return the maximum profit that can be made from buying and selling a single stock.

// TODO: Complete the function below:

//first solution 
var maxProfit = function (prices) {
    let buy;
    for (let i = 1; i < prices.length - 1; i++ )    {
        if (prices[i] < prices[i - 1] && prices[i] < prices[i + 1]) {
            buy = prices[i];
            break;
        } else if (prices[i - 1] < prices[i] )  {
            buy = prices[i - 1];
            break;
        } else if (prices[i + 1] < prices[i])   {
            buy = prices[i+1];
            break;
        }
    }
    let boughtIndex = prices.indexOf(buy) + 1;
    let sell = 0;
    let compare = buy;
    for (let i = boughtIndex; i < prices.length; i++)   {
        if (prices[i] > compare)    {
            sell = prices[i];
            compare = prices[i];
        } 
    }
    if (sell < buy )    {
        return 0
    }
    return (sell - buy);


};

//second solution 
var maxProfit = function(prices) {
    if (prices.length < 2) {
        return 0; // Not enough data to make a profit
    }

    let buy = prices[0]; // Initialize minPrice to the first price
    let profit = 0; // Initialize maxProfit to 0

    for (let i = 1; i < prices.length; i++) {
        let sell = prices[i];

        // If the current price is lower than the minimum price encountered so far, update minPrice
        if (sell < buy) {
            buy = sell;
        } else {
            // Calculate the profit we would make by selling at the current price
            let potentialProfit = sell - buy;
            // Update maxProfit if the potential profit is greater
            if (potentialProfit > profit) {
                profit = potentialProfit;
            }
        }
    }

    return profit;
};
