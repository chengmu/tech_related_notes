/**
 * 解密
 * 把第一个数字删掉 把第二个放到尾部
 * 重复进行，直到剩下最后一个数
 */

let Queue = class {
  constructor(props) {
    this.items = props.initValue
  }
  enqueue (el) {
    return this.items.push(el)
  }
  dequeue () {
    return this.items.shift()
  }
  front () {
    return this.items[0]
  }
}


class Decrep extends Queue {
  constructor(props) {
    super(props);
  }
  result () {
    let resultQue = []
    length = this.items.length
    for (let [index, item] of this.items.entries()) {
      // console.log(index, item)
      if (index >= length) break;
      if (index % 2 === 1) {
        resultQue.push(this.dequeue())
      } else {
        this.enqueue(this.dequeue)
      }
    }
    return resultQue
  }
}

window.q = new Decrep({initValue : [0,6,3,1,7,5,8,9,2,4]})
// q.result()


let nums = [0,6,3,1,7,5,8,9,2,4]
let head = 1, tail = 10, result = []
while (head < tail) {
  console.log(nums[head], '出列')
  head++
  nums[tail] = nums[head]
  tail++
  head++
}
console.log(nums, head, tail)