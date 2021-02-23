(function () {

    class Node {
        constructor(element) {
            this.element = element;
            this.next = null;
        }

        toString() {
            return `${this.element}`;
        }
    }

    class LinkedList {
        constructor() {
            this.head = null;
            this.size = 0;
        }

        add(element) {
            let node = new Node(element);
            let current = this.head;

            if (current === null) {
                this.head = node;
            } else {
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }
            this.size++;
        }

        draw() {
            let current = this.head;
            let linkedListStr = ` head => ${current.element} =>`;
            while (current.next) {
                linkedListStr += ` ${current.next.toString()} =>`;
                current = current.next;
            }
            console.log(linkedListStr);
        }

        getFirst() {
            return this.head.element;
        }

        getLast() {
            let current = this.head;
            if (current === null) {
                return 'The list is empty';
            }
            while (current.next) {
                current = current.next;
            }
            return current;
        }

        reverse() {
            let prev = null;
            let current = this.head;
            let next = current.next;
            while (current) {
                next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            this.head = prev;
        }

        removeKNode(k) {
            let prev;
            if (k > this.size || k < 0) {
                console.log('Error, can not delete this node.');

            }
            else if (k === 1) {
                prev = this.head;
                this.head = this.head.next
                prev.next = null;
            } else {
                let current = this.head;
                for (let i = 1; i < k; i++) {
                    if (i + 1 === k) {
                        prev = current.next;
                        current.next = current.next.next;
                        prev.next = null;
                    }
                    current = current.next;
                }
            }
        }

        makeTheListCircular() {
            this.getLast().next = this.head;
        }

    }


    let linkedList = new LinkedList();
    linkedList.add(1);
    linkedList.add(2);
    linkedList.add(3);
    linkedList.add(4);
    linkedList.add(5);
    linkedList.add(6);

    linkedList.draw();

    console.log(`First Element : ${linkedList.getFirst()}`);
    console.log(`Last Element : ${linkedList.getLast()}`);

    linkedList.removeKNode(5);
    linkedList.removeKNode(7);
    linkedList.draw();

    linkedList.reverse();
    linkedList.draw();

    // linkedList.makeTheListCircular();

    let circularLinkedList = (list) => {
        let slow = list.head;
        let fast = slow.next;

        while (slow !== fast) {
            if (fast.next === null || fast.next.next === null) {
                return false;
            } else {
                fast = fast.next.next;
                slow = slow.next;
            }
        }
        return true;
    }

    console.log(circularLinkedList(linkedList));

})();