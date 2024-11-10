import {assets,getAssetById,transaction} from './transaction';
const displayPortfolioSummary = (label) => {
    const totalValue = calculatePortfolioValue();
    const allocation = getPortfolioAllocation();
    
    console.log(`\nTotal Portfolio Value: $${totalValue.toFixed(2)}`);
    console.log('\nPortfolio Allocation:');
    console.log('-'.repeat(40));
    
    allocation.forEach(asset => {
        console.log(`${asset.name.padEnd(20)} $${asset.value.toFixed(2).padStart(12)} ${asset.allocation.toFixed(2).padStart(7)}%`);
    });
};
