//class

// lab-1

// ให้สร้าง Class ชื่อ Calculator มี property และ method ดังนี้
// value คือค่าตัวเลขปัจจุบัน(เริ่มต้นเป็น 0 หรือตามที่กำหนด) เช่น new Calculator(10) ให้ value มีค่าเท่ากับ 10
// add() ให้รับค่าตัวเลขและรวมผลรวมเข้าใน value
// subtract() ให้รับค่าตัวเลขและหักออกจาก value
// multiply() ให้รับค่าตัวเลขและคูณตัวเลขกับ value
// divide() ให้รับค่าตัวเลขและนำไปหาร value
// show() ให้ console.log ค่า value


// class Calculator{
//   constructor(_start=0){
//     this.value = _start

//   }

//   show(){
//     console.log(`value = ${this.value}`)
//     return this
//   }

//   add(number){
//     this.value += number
//     console.log(`${this.value} +  ${number}  = ${this.value}`)
//     return this
//   }
//   subtract(number){
//     this.value -= number
//     console.log(`${this.value} -  ${number} = ${this.value}`)
//     return this
//   }

//   multiply(number){
//     this.value *= number
//     console.log(`${this.value} x  ${number} = ${this.value}`)
//     return this
//   }


//   divide(number){
//     this.value /= number
//     console.log(`${this.value} /  ${number} = ${this.value}`)
//     return this
//   }
// }

// let result = new Calculator(5)

// result.show()

// result.add(12)

// result.subtract(5)

// result.multiply(2)

// result.divide(2)

//----------------------------------------------------

// lab-2

//// ให้สร้าง Class ชื่อ Sale
//// มี property ชื่อ name, amount, price
//// มี method calcPrice()
//// ให้เขียน code คำนวณราคาไว้ที่ method นี้
//// ให้สร้าง Class ชื่อ Beverage สืบทอดมาจาก Sale
//// มี property ชื่อ amount, และ price
//// ให้สร้าง object ชื่อ beverage จาก Beverage โดย
//// name = “Pepsi”, amount = 3, price = 19
//// ให้ beverage เรียก method calcPrice() และแสดงผลของ calcPrice() ที่ได้

// class Sale{
//   constructor(_name, _amount, _price){
//     this.name = _name,
//     this.amount = _amount,
//     this.price = _price
//   }
//   calcPrice(){
//     return this.amount * this.price
//   }
// }

// class Berverage extends Sale{
//   constructor(_name, _amount, _price, _discountPercentage){
//     super(_name, _amount, _price)
//     this.discountPercentage = _discountPercentage
//   }    
// }


// let berverage = new Berverage('Pepsi',3,19,50)
// console.log('name',berverage.name)
// console.log('amount',berverage.amount)
// console.log('price',berverage.price)
// console.log('pricePercentage',berverage.discountPercentage)
// console.log(`calc price = `,berverage.calcPrice())

// console.log('----------------------------------------------------')

//-----------------------------------------------------------------------


//isArray

// lab-1

// จงเขียนฟังก์ชัน isArray(input) เพื่อตรวจสอบว่า input เป็น Array หรือไม่ 

// let arr = [1, 2, 3, 4, 5]
// let obj = {
//   name: 'tam'
// }

// function isArray(arr){
//   return console.log(Array.isArray(arr))
// }

// ////arrow version    
// //// checkArr = (arr) =>  return console.log(Array.isArray(arr))

// isArray(arr)
// isArray(obj)

//------------------------------------------------------------------------


//Object.values  ,keys  ,entries

// ให้คำนวณผลรวมของ salaries ใน object โดยใช้ Object.keys, Object.values

// lab1

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// };


//// result = 0
//// for (let key of Object.values(salaries)){
////   result += key 
//// }

//// console.log(result)

//ทำโดย Object.keys
// let keys = Object.keys(salaries)
// console.log(keys)

// let  sumSalaries = keys.reduce((accu,curr)=>{

//   return accu += salaries[curr]
// },0)

// console.log('sum of salaries : ',sumSalaries)


//ทำโดย Object.value

// let value = Object.values(salaries)
// console.log(value)

// let sumSalaries2 = value.reduce((accu, curr) => {

//   return accu += curr
// }, 0)

// console.log('sum of salaries2 : ', sumSalaries2)

//--------------------------------------------------------

// lab-2

// ให้เขียนฟังก์ชัน checkEmptyObj(obj) เพื่อเช็คว่า obj เป็น object ว่างหรือไม่ 

// function checkEmptyObj(obj){
//   let objToCheck =  Object.keys(obj)
//   console.log(objToCheck)
//   return objToCheck.length == 0 ? true : false
// }

// console.log(checkEmptyObj({}))

// console.log(checkEmptyObj({1:5,2:8,3:9}))



//-------------------------------------------------------

//-------------------------------------------------------------------------

//...Rest

//lab-1

// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด

// let calMulti = (...nums) => {
//   let sum = 1
//   for (let num of nums){
//     // console.log(num)
//     sum *= num
//   }
//   return sum 
// }

// let result = calMulti(1,2,3,4,5)
// console.log('--------------------')
// console.log('calMulti result : ',result)
// console.log('--------------------')

//---------------------------------------------

// lab-2

// จงเขียนฟังก์ชัน filterOutOdds โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด และให้ return ค่าเป็น array ของเลขที่เป็นเลขคู่

// function filterOutOdds(...nums){
//   let newArr = []
//   for (let num of nums){
//     if(num %2 ==0) newArr.push(num)
//   }
//   return newArr
// }

// let getOnlyEven = filterOutOdds(1,2,3,4,5,6,7,8,9,10)
// console.log('Array of even numbers :' , getOnlyEven)

//-------------------------------------------

// lab-3
// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน



// function mergeObjects(...obj) {
//   //rest เป็น array อยู่แล้ว
//   console.log(`what i get from rest`, obj)
//   result = obj.reduce((prev,curr)=>{
//     Object.assign(prev,curr)
//     return prev
//   },{})
//   return result
// }



// console.log(`------------------------`)
// console.log(mergeObjects({a:1},{b:2},{c:3}))
// console.log(`------------------------`)
// console.log(mergeObjects({ a: 1 }, { b: 2 }, { c: 3 },{1:25},{25:52}))



//-------------------------------------------------------------------------
//spead operator

//lab 4

// จงรวม nums1 และ num2 เข้าด้วยกัน
// จงสร้าง array ที่ได้จากการนำ nums1 และ nums2 มารวมกัน แต่ให้เพิ่ม 5 เข้าไปก่อน nums1 และเพิ่ม - 6, -1 เข้าไประหว่าง nums1 กับ nums2
// หาผลรวมของทุก element ใน Array ที่ได้


// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];

// // num1 + num 2
// let newArr1 = [...nums1,...nums2]
// console.log(newArr1)

// result1 = newArr1.reduce( (accu , curr)=> {
//   accu += curr
//   return accu
// },0 )

// console.log('result of nums1 + nums2 = ',result1)

// console.log(`-----------------------------------------------------`)

// // num1 + num 2  modify
// newArr2 = [5,...nums1,-6,-1,...nums2]
// console.log(newArr2)
// result2 = newArr2.reduce( (accu , curr) =>{
//   accu += curr
//   return accu
// },0 )

// console.log('result of nums1 + nums2 that modified = ',result2)

//----------------------------------------------------------------------

// lab-5

// จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง

// function modifyArr(arr){
//   console.log(arr.length)
//   if (arr.length<4) {
//     return alert(`array must has range more than 3 to apply this function` )
//   }
//   arr2 = [...arr]
//   arr2[3] = arr2[3]**2
  
//   return console.log(`modify array : `,arr2)  
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// modifyArr(arr)
// console.log('Original array ',arr)
// console.log(`----------------------------`)

// let arrEx = [1, 2, 3]

// modifyArr(arrEx)
// console.log('Original array ', arrEx)
// console.log(`----------------------------`)

//----------------------------------------------------

// lab-6

// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ spread parameter

// function getInfo(name,surname,...hobby){
//   newObj =  {}
//   newObj['name'] = name
//   newObj['surname'] = surname
//   newObj['hobby'] = [...hobby]
//   return newObj
// }

// console.log(getInfo('pack','ded','playing game','play football','swimming'))

//-------------------------------------------------------------

// lab-7

// จงเขียนฟังก์ชัน doubleAndReturnArgs โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้ และ return ค่าเป็น Array ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง

// function doubleAndReturnArgs( arr,...obj){
//   num2 = [...obj].map((item) => item*2)
//   return [arr,...num2]
// }

// console.log(doubleAndReturnArgs([1, 2, 3], 4, 4))
// console.log(doubleAndReturnArgs([2], 10, 4)); 


//----------------------------------------------------

// lab-9

// จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

// function cloneArray(arr){
//   newArr = [...arr]
//   return  newArr
// }

// console.log(cloneArray([[1, 2, 3], 4, 4]))

//-----------------------------------------------------

// lab-10

// จงเขียนฟังก์ชัน cloneObject โดยรับพารามิเตอร์มาเป็น Object และ return ค่าเป็น Object ที่มี key - value เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัว

// function cloneObject(obj){
//   newObj = {...obj}
//   return newObj
// }
// let obj = { a: 1, b: 2, c: 3, 1: 25, 25: 52 }

// console.log(cloneObject(obj))


//--------------------------------------------------------------------------

// Destructuring  

//lab-11

// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // * 'Maya'
// console.log(second); // ** 'Marisa'
// console.log(third); // *** 'Chi'

//--------------------------------------------------------------------------


// lab-12

// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร


// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // * 'Raindrops on roses'
// console.log(whiskers); // **  'whiskers on kittens'
// console.log(aFewOfMyFavoriteThings); // *** ['Bright copper kettles','warm woolen mittens']  เพราะเป็น ...rest  เลยเป็น  array

//---------------------------------------------------------------------------


// lab-13


// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // * [10,30,20]    = เป็นการ update

//--------------------------------------------------------------------------

// lab-14

// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // * 8  เพราะ obj แค่ชื่อเหมือน key ตรงก็ถือว่าได้แล้ว
// console.log(yearNeptuneDiscovered); // **1846  เพราะ obj แค่ชื่อเหมือน key ตรงก็ถือว่าได้แล้ว


//---------------------------------------------------------------------

// lab-15

// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// console.log(discoveryYears); // * numPlanets ถูก assign ไปแล้ว ที่เหลือเลยเป็น  yearNeptuneDiscovered: 1846,yearMarsDiscovered: 1659 เนื่องจากการใช้ spread

//------------------------------------------------------------------

// lab-16

//ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // * Your name is Alejandro and you like purple  ประกาศเป็นแบบ
// getUserData({ firstName: 'Melissa' }); // ** Your name is Melissa and you like green
// getUserData({}); // ***  Your name is undefined and you like green    เพราะมี  default favoriteColor green

//-------------------------------------------------------------------


// lab-17

// ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin
// let guest = 'Jane';
// let admin = 'Pete';

// // console.log(guest ,'Guest')
// // console.log(admin ,'Admin')

// let [a,b] =  [guest, admin] 

// console.log('a', 'guest' , guest)
// console.log('b', 'admin' ,admin)

// guest  = b
// admin  = a

// console.log(guest)
// console.log(admin)


//---------------------------------------------------------------

// lab-18

// จงเขียนฟังก์ชันตรวจสอบอายุ โดยรับข้อมูล user ที่อยู่ใน object ที่มี keys เป็น firstName lastName และ age โดยถ้า user มีอายุมากกว่า 18 ให้แสดงผลเป็นการทักทายแล้วตามด้วยชื่อ - นามสกุล ในกรณีที่มีอายุน้อยกว่าหรือเท่ากับ 18 ให้แสดงผลว่า ไม่มีสิทธิ์เข้าใช้งาน(ใช้ destructuring)

// let user1 =  {firstName: 'Nattpol',
//              lastName : 'Dedruktip',
//              age : 29
// }

// let user2 = {
//   firstName: 'Nattpol',
//   lastName: 'Dedruktip',
//   age: 9
// }

// function checkAge(user){
//   let {firstName,lastName,age} = user
//   return age >18 ? ` Greeting ${firstName} ${lastName}` : `Not allow` 
// }

// console.log(checkAge(user1))
// console.log(checkAge(user2))

//----------------------------------------------------------

// let-19

// จงเขียน Object destructuring โดยกำหนดให้
// ตัวแปร name เก็บค่า name property
// ตัวแปร age เก็บค่า years property
// ตัวแปร isAdmin เก็บค่า isAdmin property หากไม่มีค่าให้ default value เป็น false


// let user = {
//   name: 'John',
//   years: 27
// };

// let {name, years : age ,isAdmin = false} = user

// console.log('name',name)
// console.log('age',age)
// console.log('isAdmin',isAdmin)

//-------------------------------------------------------------


//lab-21

// //ให้ใช้ Array destructuring โดยให้ a, b, c, d, e และ f มีค่า 1, 2, 3, 4, 5, และ 6 ตามลำดับ
// let arr = [1, [2, [[[3, 4], 5], 6]]];

// let [a, [b, [[[c, d], e], f]]] = arr

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

//--------------------------------------------------------------


// lab-22

// ให้ใช้ Object destructuring โดยให้ a เท่ากับ 5 และ b เท่ากับ 10

// const obj = { prop: 5, prop2: 10 };

// let {prop:a , prop2:b } = obj


// console.log(a)
// console.log(b)

//--------------------------------------------------------------

// let-23

// let a, b;
// { a, b } = { a: 1, b: 2 };


// error   เพราะเราประกาศถ้าจะให้ไม่ eror ต้องลบ let a, b; แล้วไป let ข้างหน้าบรรทัดถัดไป

//--------------------------------------------------------------

//lab-24

// a และ b มีค่าเท่าไร


// const [, , , a, b] = [1, 2, 3]; // undefined


//---------------------------------------------------------------

//lab-25

// ให้ใช้ destructuring โดยให้ x เท่ากับ 5 และ y เท่ากับ 100

// const q = { prop: 5, prop2: [10, 100] };

// let { prop: x, prop2: [, y]} = q


// console.log('x',x)

// console.log('y',y)


//---------------------------------------------------------------

// lab-26

// ให้ใช้ destructuring โดยให้ x เท่ากับ Hello และ y เท่ากับ b

// const q = {
//   prop: 'Hello',
//   prop2: {
//     prop2: {
//       nested: ['a', 'b', 'c']
//     }
//   }
// };


// let {
//   prop: x,
//   prop2: {
//     prop2: {
//       nested: [, y, ]
//     }
//   }
// } = q

// console.log('x',x)
// console.log('y',y)

//------------------------------------------------------------------

// lab-27

// ให้ใช้ for … of กับ names(ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า Full name ออกมา



// const names = [
//   { firstName: 'John', lastName: 'Doe' },
//   { firstName: 'Jack', lastName: 'Dann' },
//   { firstName: 'Joe', lastName: 'Dunne' }
// ];

// for (let name of names){
//   let {firstName,lastName} = name
//   console.log(`${firstName} ${lastName}`)
// }

//--------------------------------------------------------------


// lab-28

// ให้ใช้ for … of กับ users(ให้ destructuring object ในแต่ละ iteration)
// ในแต่ละ iteration ให้ console.log ค่า user ตามด้วย age หาก age ไม่มีค่าให้ใช้ unknown


// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (let item of users){
//   let { user , age='unkown' } =  item
//   console.log(`${user} ${age}`)
// }

//---------------------------------------------------------------