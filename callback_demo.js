console.log('callback demo')


const add = (num1, num2, callback) => {
    setTimeout(() => {
        console.log('add...')
        callback(num1 + num2)
    }, 2000);

}



add(1,4, (sum)=>{
    console.log(sum)
})

console.log('finished')