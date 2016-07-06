/**
 * 桶排序
 * @param  {array} list 等待排序的整数数组 整数取值范围0-10
 * @return {array}      排好顺序的整数数组
 */
function bucket(list) {
  var result = []
  var buckets = []
  buckets.length = 11
  var item
  for (var i = 0; i < list.length; i++) {
    if (buckets[list[i]]) {
      buckets[list[i]]++
    } else {
      buckets[list[i]] = 1
    }
  }

  for (var j = 0; j < buckets.length; j++) {
    console.log('第'+ j + '个筐子:' + buckets[j])
    if (!buckets[j]) continue;
    console.log('有' + buckets[j] + '个')
    for (var k = buckets[j]; k > 0; k--){
      console.log('输出一个', buckets[j])
      result.push(j)
    }
  }
  return result
}


// console.log(bucket(source))


/**
 * 冒泡
 * @param  {[type]} list [description]
 * @return {[type]}      [description]
 */
function buble(list) {
  var first, second, tmp
  console.log('初始数组：'+ list)
  for (var i = 0; i < list.length ; i++) {
    for (var j = 0; j < list.length - 1 ; j++) {
      first = list[j]
      second = list[j+1]
      if (list[j+1] < list[j]) {
        tmp = list[j]
        list[j] = list[j+1]
        list[j+1] = tmp
      }
      console.log(j + '位数值' + first + '和' + (j+1) + '位数值'+ second +'比较, 调整结果为[' + list + ']')
    }
  }

  return list
}


// console.log(buble(source))


function quickSort(list) {

  function quick(left, right) {
    console.log('调用quick', left, right)
    if (left >= right ) return

    var base = list[left]
    var i=left, j=right, tmp
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

}

var source = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8]

quickSort(source)
console.log(source)
