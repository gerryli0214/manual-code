/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 新建一个空的ListNode
    let newList = null
    let currentNode = null
    let pNode = null
    while (list1 || list2) {
        if (!list1) {
          currentNode = list2
          list2 = list2.next
        } else if (!list2) {
          currentNode = list1
          list1 = list1.next
        } else {
          if (list1.val > list2.val) {
              currentNode = list2
              list2 = list2.next
          } else {
              currentNode = list1
              list1 = list1.next
          }
        }
        if (!newList) {
          newList = currentNode
          pNode = newList
        } else {
          pNode.next = currentNode
          pNode = pNode.next
        }
    }
    return newList
};
/**
 * @description JavaScript实现单向链表
 * @param {string} val 
 * @param {ListNode} next 
 */
function ListNode (val, next) {
    this.val = (val=== undefined ? 0 : val)
    this.next = (next=== undefined ? null : next)
}

function createListNode (arr) {
    let list = null
    while (arr.length > 0) {
        let val = arr.pop()
        list = new ListNode(val, list)
    }
    return list
}
let l1 = createListNode([1,2,4]), l2 = createListNode([1,3,4])
console.log(mergeTwoLists(l1, l2))