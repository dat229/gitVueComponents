function separateByThousandths(str, delimiter) {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, `${delimiter}`) //chia mỗi hàng nghìn ngăn cách với nhau bởi phân cách
}

export function wearMask(num) {
    num = num.replace(/^\./g, '') //loại bỏ dấu chấm trước khi format lại
    return separateByThousandths(num, ".")
}

