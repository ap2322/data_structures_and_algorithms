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


  pop(){
    if(this._length < 1){
      return null;
    } else if (this._length === 1){
      this._length--;
      let lastNode = this.head;
      this.head = null;
      return lastNode;
    } else if (this._length > 1){
      console.log('start', this.head)
      this.findLastNode(this.head);
    }
  }

  findLastNode(node){
    if(node.nextNode === null){
      console.log('last', node)
      return node;
    } else {
      console.log(node)
      this.findLastNode(node.nextNode)
    }
  }
}
