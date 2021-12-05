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
    if (!list1.next) return list2
    if (!list2.next) return list1
    // 新建一个空的ListNode
    let newList = new ListNode()
    let item1 = list1
    let item2 = list2
    while (list1.next || list2.next) {
        if (item1 > item2) {
            newList.next = new ListNode(item2)
            item2 = list2.next
        } else {
            newList.next = new ListNode(item1)
            item1 = list1.next
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
let l1 = [1,2,4], l2 = [1,3,4]
console.log(mergeTwoLists(l1, l2))