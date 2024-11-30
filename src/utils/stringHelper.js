const stringHelper = {
    clearUUID(filename) {
        const pattern = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}_/;
        const newFilename = filename.replace(pattern, '');
        // console.log(newFilename);
        return newFilename;
    },
    checkExistedSpecifications(product, key) {

        const checkExisted=  product.specifications.some(spec => spec.specKey === key);

        if (!checkExisted) {
            return false;
        }

        const spec = this.getBriefSpecValue(product, key);
        if (spec === null || spec === '') {
            return false;
        }
        return true;


    },
    getBriefSpecValue(product,key){
        const spec = product.specifications.find(spec => spec.specKey === key);
        return spec.briefSpecValue;
    },
    formatPrice(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + " ₫";
    },

};

export default stringHelper;
