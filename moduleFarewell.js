// export function sayGoodBye(){
//     console.log('Good Byeee~')
// }

// export function goodNight(){
//     console.log('Good night~')
// }

//export มี  3แบบ
// 1  export หน้า function
// 2  export  ข้างล่างทีละหลาย funciton
// 3  export default ได้ทีละ 1 ตัวต่อไฟล์



function sayGoodBye(){
    console.log('Good Byeee~')
}

function goodNight(){
    console.log('Good night~')
}


export { sayGoodBye as bye,goodNight as night }