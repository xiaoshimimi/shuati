/**
华为OD机试E卷
C0E3 数大雁
一群大雁往南飞，给定一个字符串记录地面上的游客听到的大雁叫声，请给出叫声最少由几只大雁发出。
具体的:
​ 1.大雁发出的完整叫声为”quack“，因为有多只大雁同一时间嘎嘎作响，所以字符串中可能会混合多个”quack”。
​ 2.大雁会依次完整发出”quack”，即字符串中’q’ ,‘u’, ‘a’, ‘c’, ‘k’ 这5个字母按顺序完整存在才能计数为一只大雁。如果不完整或者没有按顺序则不予计数。
​ 3.如果字符串不是由’q’, ‘u’, ‘a’, ‘c’, ‘k’ 字符组合而成，或者没有找到一只大雁，请返回-1。

输入描述
一个字符串，包含大雁quack的叫声。1 <= 字符串长度 <= 1000，字符串中的字符只有’q’, ‘u’, ‘a’, ‘c’, ‘k’。

输出描述
大雁的数量
*/

// const input = 'quackquack'
// const input = 'qaauucqcaa'
// const input ='quacqkuackquack'
// const input = 'qququaauqccauqkkcauqqkcauuqkcaaukccakkck'
const input ='quacqkuquacqkacuqkackuack'

const nextMap = {
    'q':'u',
    'u':'a',
    'a':'c',
    'c':'k',
    'k':'q'
}
const quacks = []
const quackstail = []

function resolve () {
    const inputArr = Array.from(input)
    // console.info(inputArr)

    while(inputArr.length>0){
        const cur = inputArr.shift()

        let findQuack=-1
        for(var i=0; i<quacks.length; i++){
            if(quackstail[i] && nextMap[quackstail[i]] === cur){
                findQuack = i
                break
            }
        }
        if(findQuack>=0){
            quacks[findQuack].push(cur)
            quackstail[findQuack] = cur
        } else {
            if(cur === 'q'){
                quacks.push(['q'])
                quackstail.push('q')
            }
        }
    }

    // console.info(quacks,quackstail)
    let result = 0
    while(quacks.length>0){
        const oneQuack = quacks.shift()
        if(oneQuack.length >= 5){
            result+=1
        }
    }
    if(result === 0){
        console.info(-1)
    } else {
        console.info(result)
    }
}



resolve()