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
const manualStart = {
    0:[1,55,83],
    3:[28],
    5: [16,40]
}


// const N=5
// const manualStart = {
//     0: [0,3]
// }


const result = {}
let maxStep = 0

function resolve(){
    const machines = Array.from({length:N}).map(()=>(0))

    const nextStart = manualStart[0]

    startMachines(machines, nextStart, 0)
    console.info(Array.from(result[maxStep]))
}

function startMachines(machines,nextStart,step){
    //initialize the queue
    const queue = nextStart.map(start=>([start,step]))

    while(queue.length > 0){
        // console.info('queue',queue)

        const candidate = new Set()
        const usedToCalculateCandidate = []
        // process all machine in queue
        while(queue.length>0){

            const [machine,curstep] = queue.shift()
            usedToCalculateCandidate.push(machine)
            if(curstep>maxStep){
                maxStep=curstep
            }
            if(machines[machine] === 1) continue

            // console.info(machine,curstep)
            if(result[curstep]){
                result[curstep].add(machine)
            }else{
                result[curstep] = new Set([machine])
            }

            machines[machine] = 1
        }
        // calculate all candidate machines for autostart
        while(usedToCalculateCandidate.length>0){
            const machine = usedToCalculateCandidate.shift()
            if(machine === 0 && machines[machines.length-1] === 0){
                candidate.add(machines.length-1)
            }
            if(machine !== 0 && machines[machine-1] === 0){
                candidate.add(machine-1)
            }
    
            if(machine === machines.length-1 && machines[0] === 0){
                candidate.add(0)
            }
            if(machine !== machines.length-1 && machines[machine+1] === 0){
                candidate.add(machine+1)
            }
        }

        // console.info('updated result',maxStep,result)

        // console.info('pushing candidates',candidate,maxStep+1)
        candidate.forEach(value=>{              // pusing autoStart
            queue.push([value,maxStep+1])
        })

        if(manualStart[maxStep+1]){       // fill manualStart
            const newStart = manualStart[maxStep+1]
            newStart.forEach(start=>{
                if(machines[start]===0){
                    queue.push([start,maxStep+1])
                }
            })
        }
        
    }
}

resolve()
