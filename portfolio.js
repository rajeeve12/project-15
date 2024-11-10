import {assets} from './asset';
const calculatePortfolioValue = () => {
    return assets.reduce((total, asset) => {
        return total + (asset.price * asset.quantity);
    }, 0);
};

const getPortfolioAllocation = () => {
    const totalValue = calculatePortfolioValue();
    
    return assets.map(asset => {
        const assetValue = asset.price * asset.quantity;
        const allocation = (assetValue / totalValue) * 100;)
        
        return {id: asset.id, name: asset.name, type: asset.type, value: assetValue, 
            allocation: Number(allocation.toFixed()) 
        }};
        export { calculatePortfolioValue, getPortfolioAllocation };
