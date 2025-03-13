// export function formatNumber (num){
//     if (num >= 10000000) {
//         return Math.floor(num / 10000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "万";
//     }
//     return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// };

export function formatNumber (num){
    const tenthousand = 10000;
    const tenmillion = 10000000;
    // 3桁ごとにカンマを挿入
    // 1000→1,000
    // 賃料が1千万以上の場合は万単位で表示
    // 10000000→1,000万
    if (num >= tenmillion) {
        return Math.floor(num / tenthousand).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "万";
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};