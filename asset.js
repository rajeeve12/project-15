const assets = [
    {id: '1', name: 'Company A', type: 'stock', price: 200, quantity: 100},
    {id: '2', name: 'Company B', type: 'bond', price: 100, quantity: 50},
    {id: '3', name: 'Company C', type: 'stock', price: 300, quantity: 75},]

    const getAssetById = (id) => {
        return assets.find(asset => asset.id === id);
    };
    
    export { assets, getAssetById };