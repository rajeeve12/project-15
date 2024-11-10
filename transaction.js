import {assets,getAssetById} from './asset';
class Transaction {
    constructor(assetId, type, quantity) {
        executeTransaction() {
            const asset = getAssetById(this.assetId);
            
            if (!asset) {
                throw new Error(`Asset with ID ${this.assetId} not found`);
            }
    
            if (this.type === 'sell' && asset.quantity < this.quantity) {
                throw new Error(`Insufficient quantity for sale of ${asset.name}`);
            }}}};