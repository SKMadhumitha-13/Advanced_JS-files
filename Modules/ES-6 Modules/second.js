
const findMax = (arr)=>{
    return arr.reduce((acc,ele)=>{
        if (acc>ele) return acc;
        else return ele;
    })
}
const findMin = (arr)=>{
    return arr.reduce((acc,ele)=>{
        if (acc<ele) return acc;
        else return ele;
    })
}

export default findMax
export {findMin}