/**
华为OD机试E卷
C0E1 流浪地球
流浪地球计划在赤道上均匀部署了N个转向发动机，按位置顺序编号为0~N-1。

    初始状态下所有的发动机都是未启动状态;
    发动机启动的方式分为”手动启动"和”关联启动"两种方式;
    如果在时刻1一个发动机被启动，下一个时刻2与之相邻的两个发动机就会被”关联启动”;
    如果准备启动某个发动机时，它已经被启动了，则什么都不用做;
    发动机0与发动机N-1是相邻的;

地球联合政府准备挑选某些发动机在某些时刻进行“手动启动”。当然最终所有的发动机都会被启动。

哪些发动机最晚被启动呢?
*/

const N=100
const manualStart = [1,55,83]


const result = {}
let maxStep = 0

function resolve(){
    const machines = Array.from({length:N}).map(()=>(0))

    const nextStart = new Set(manualStart)

    startMachines(machines, nextStart, 0)
    console.info(Array.from(result[maxStep]))
}

function startMachines(machines,nextStart,step){
    if(nextStart.size === 0){
        return
    } else {
        if(step>maxStep){
            maxStep = step
        }
        if(result[step]){
            result[step] = result[step].union(nextStart)
        } else {
            result[step] = nextStart
        }
        const findNext = new Set()
        nextStart.forEach(index=>{
            machines[index]=1
        })
        nextStart.forEach(index=>{
            if(index+1<machines.length && machines[index+1]===0){
                findNext.add(index+1)
            } else if(index+1>=machines.length && machines[0]===0){
                findNext.add(0)
            }
            if(index-1>=0 && machines[index-1]===0){
                findNext.add(index-1)
            } else if(index-1<0 && machines[machines.length-1]===0){
                findNext.add(machines.length-1)
            }
        })
        // console.info(machines,findNext)
        startMachines(machines,findNext,step+1)
    }
}

resolve()
