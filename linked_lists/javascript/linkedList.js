class List {
  constructor () {
    this._length = 0;
    this.head = null;
  }

  checkNextNode(node, newNode){
    if(node.nextNode === null){
      node.nextNode = newNode;
    } else {
      let nextNodeInList = node.nextNode;
      this.checkNextNode(nextNodeInList, newNode)
    }
  }

  push(data) {
    if(this._length === 0) {
      this.head = new ListNode(data);
    } else{
      this.checkNextNode(this.head, new ListNode(data))
    }
    this._length++;
  }

  findLastNode(node){
    if(node.nextNode.nextNode === null){
      let lastNode = node.nextNode;
      node.nextNode = null;
      return lastNode;
    }
  }

  pop(){
    if(this._length === 1){
      let lastNode = this.head;
      this.head = null;
      this._length--;
      return lastNode;
    } else if(this._length > 1){
      return this.findLastNode(this.head);
    }
    return null;
  }
}
