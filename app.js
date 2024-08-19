function sayhi() {
    console.log('Hello module')
}

// import { bye , night } from "./moduleFarewell.js" //ถ้ามาจากไฟล์เดี่ยวกันแบบนี้ได้เลย      import   แบบที่1
// ตรง as เราจะทำที่ import หรือ export ก็ได้แล้วแต่ แต่ที่เทียวพอ ไอย่อฟังชั้นอะ
import * as say from './moduleFarewell.js'   // import แบบ2  แบบที่ 2
//import default ไม่ต้องใส่ {}  และสามารถตั้งชื่อเป็นอะไรก็ได้
import hi from './module2.js'



sayhi()

say.bye()

say.night()

hi()


