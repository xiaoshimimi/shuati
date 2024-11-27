/**
华为OD机试E卷
C0E2 斗地主之顺子
扑克牌游戏中， 扑克牌由小到大的顺序为：3,4,5,6,7,8,9,10,J,Q,K,A,2，玩家可以出的扑克牌阵型有：单张、对子、顺子、飞机、炸弹等。
其中顺子的出牌规则为：由至少5张由小到大连续递增的扑克牌组成，且不能包含2。
例如：{3,4,5,6,7}、{3,4,5,6,7,8,9,10,J,Q,K,A}都是有效的顺子；而{J,Q,K,A,2}、 {2,3,4,5,6}、{3,4,5,6}、{3,4,5,6,8}等都不是顺子。
给定一个包含13张牌的数组，如果有满足出牌规则的顺子，请输出顺子。
如果存在多个顺子，请每行输出一个顺子，且需要按顺子的第一张牌的大小（必须从小到大）依次输出。
如果没有满足出牌规则的顺子，请输出No。


输入描述
13张任意顺序的扑克牌，每张扑克牌数字用空格隔开，每张扑克牌的数字都是合法的，并且不包括大小王：
2 9 J 2 3 4 K A 7 9 A 5 6

输出描述
组成的顺子，每张扑克牌数字用空格隔开：
3 4 5 6 7

注意，选取单个最长的顺子, 例: 如果输入中含3,4,5,6,7,8，则是3,4,5,6,7,8是一个答案，而不是3,4,5,6,7和4,5,6,7,8两个答案
*/

// const input = '2 9 J 2 3 4 K A 7 9 A 5 6'
// const input = '2 9 9 9 3 4 K A 10 Q A 5 6'
const input = '2 9 J 10 3 4 K A 7 Q A 5 6'

const cardMapping = {
    '3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':11,'Q':12,'K':13,'A':14,'2':16
}

function resolve(){
    const allcards = input.split(' ')
    allcards.sort((a,b)=>(cardMapping[a]-cardMapping[b]))
    // console.info(allcards)

    const resultSet = []
    let currentResult = []
    while(allcards.length>0){
        const currCard = allcards.shift()

        if(currentResult.length === 0){
            currentResult.push(currCard)
        } else {
            const top = currentResult[currentResult.length-1]
            if((cardMapping[currCard]-cardMapping[top]) === 1){
                currentResult.push(currCard)
            } else if((cardMapping[currCard]-cardMapping[top]) > 1){
                if(currentResult.length>=5){
                    resultSet.push(currentResult)
                }
                currentResult=[currCard]
            }
        }
    }
    // console.info(resultSet)
    if(resultSet.length === 0){
        console.info('No')
    }

    //output resultSet
    while(resultSet.length>0){
        const result = resultSet.shift()
        console.info(result.join(' '))
    }

}



resolve()