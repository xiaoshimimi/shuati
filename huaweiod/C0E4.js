/**
 * 华为OD机试E卷
   C0E4 最大利润
 * 题目描述
商人经营一家店铺，有 number 种商品，由于仓库限制每件商品的最大持有数量是 item［index］，每种商品的价格是 item-pricelitem_index」 Iday」
通过对商品的买进和卖出获取利润，请给出商人在 days 天内能获取的最大的利润注：同一件商品可以反复买进和卖出
输入描述
•第一行输入商品的种类数 number，比如3
•第二行输入商品售货天数 days，比如3
•第三行输入仓库限制每件商品的最大持有数量是 itemlindex］，比如 4 5 6
后面继续输入 number 行 days 列，含义如下：
• 第一件商品每天的价格，比如1 2 3
• 第二件商品每天的价格，比如4 3 2
• 第三件商品每天的价格，比如1 5 3
输出描述
输出商人在这段时间内的最大利润。


similar to https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
 */

const input = `3
3
4 5 6
1 2 3
4 3 2
1 5 2
`

// const input = `1
// 1
// 1
// 1
// `
const inputs = input.split('\n')
const kinds = parseInt(inputs[0])
const days = parseInt(inputs[1])
const goodsCapacity = inputs[2].split(' ').map((x)=>(parseInt(x)))
// console.info(goodsCapacity)

const goodsPrices = []
let inputLines = 3
while(inputLines<(3+kinds)){
    goodsPrices.push(inputs[inputLines].split(' ').map((x)=>parseInt(x)))
    inputLines += 1
}
// console.info(goodsPrices)

function resolve(){
    let sum = 0
    let goodsKind = 0
    while(goodsPrices.length>0){
        const curGoodPrices = goodsPrices.shift()
        let pre = curGoodPrices[0]
        for(let index=1; index<curGoodPrices.length;index++){
            let cur = curGoodPrices[index]
            if(cur-pre > 0){
                sum += (cur-pre)*goodsCapacity[goodsKind]
            }
            pre=cur
        }
        goodsKind+=1
    }

    console.info(sum)

}


resolve()