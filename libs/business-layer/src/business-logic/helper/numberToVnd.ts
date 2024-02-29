
export const NumberToVND = ({ amount }: { amount: number }) => {
    const formatToVND = (num: number): string => {
        return num.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };

    return formatToVND(amount) 
}; 
