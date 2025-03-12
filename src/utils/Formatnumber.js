export function formatNumber (num){
    if (num >= 10000000) {
        return Math.floor(num / 10000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "万";
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};