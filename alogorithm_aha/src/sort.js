/**
 * 桶排序
 * @param  {array} list 等待排序的整数数组 整数取值范围0-10
 * @return {array}      排好顺序的整数数组
 */
function bucket(list) {
  let result = []
  let buckets = []
  buckets.length = 11
  let item
  for (let i = 0; i < list.length; i++) {
    if (buckets[list[i]]) {
      buckets[list[i]]++
    } else {
      buckets[list[i]] = 1
    }
  }

  for (let j = 0; j < buckets.length; j++) {
    if (!buckets[j]) continue;
    console.log(`第${j}个筐里有${buckets[j]}个`)
    for (let k = buckets[j]; k > 0; k--){
      console.log(`输出一个${j}`);
      result.push(j)
    }
  }
  return result
}


/**
 * 冒泡
 * @param  {[type]} list [description]
 * @return {[type]}      [description]
 */
function buble(list) {
  let first, second, tmp
  for (let i = 0; i < list.length ; i++) {
    for (let j = 0; j < list.length - 1 ; j++) {
      first = list[j]
      second = list[j+1]
      if (list[j+1] < list[j]) {
        tmp = list[j]
        list[j] = list[j+1]
        list[j+1] = tmp
      }
      console.log(`${j}位【${first}】和${j+1}位的【${second}】作比较，调整结果为[${list}]`);
      // console.log(j + '位数值' + first + '和' + (j+1) + '位数值'+ second +'比较, 调整结果为[' + list + ']')
    }
  }

  return list
}


/**
 * 快排
 * @param  {[type]} list [description]
 * @return {[type]}      [description]
 */
function quickSort(list) {

  function quick(left, right) {
    console.log('调用quick', left, right)
    if (left >= right ) return

    let base = list[left]
    let i=left, j=right, tmp
    while(i != j) {

      while (list[j] >= base && i<j) {
        j--
      }
      while (list[i] <= base && i<j) {
        i++
      }

      if (i < j) {
        tmp = list[j]
        list[j] = list[i]
        list[i] = tmp
      }

    }

    list[left] = list[i]
    list[i] = base
    quick(left, i - 1)
    quick(i + 1, right)
    return
  }

  quick(0, list.length -1)

  console.log(list)

}




let source = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8]
console.log('=========桶排序===================================================')
console.log(bucket(source))
console.log('=========冒泡排序===================================================')
console.log(buble(source))
console.log('=========快速排序===================================================')
quickSort(source)


