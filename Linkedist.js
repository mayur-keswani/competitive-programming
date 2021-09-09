class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  append(value){
    const newNode = { value: value , next : null}
    if(this.tail){
      this.tail.next = newNode 
    }
    this.tail = newNode;

    if(!this.head){
       this.head=newNode
    }
 
  }

  preAppend(value){
    let newNode = {value: value , next : null}
   
     newNode.next = this.head;
     this.head = newNode;

      if(!this.tail){ this.tail=newNode;}
   
  }

  delete(value){    // To delete all the node which has passed param as value
     if(!this.head){
        return null;
     }
     
     while(this.head && this.head.value===value){
      this.head=this.head.next;
     }
      let currentNode = this.head;
      while(currentNode.next){    // looping from next elem bc if we dont we cant store our next next node ref into our parent node
        if(currentNode.next.value===value){
              currentNode.next = currentNode.next.next
        }else{
           currentNode = currentNode.next;
         }         

      }

      if(this.tail.value====value){
             this.tail = currentNode
      }
     
    
    
  }

  find(value){
   let currentNode = this.head;
   while(currentNode){
     if(currentNode.value===value)
         return currentNode;

     currentNode=currentNode.next;
   }
  }

  insertAfter(value,afterValue){
    let existingNode=this.find(afterValue);

   if(existingNode)
     {
    
        
          let newNode={value:value,next: existingNode.next}
          existingNode.next=newNode
      
     } 
  }
  toArray(){    // Add all nodes into array and return that
    let element = [];
    let currentNode = this.head;
    while(currentNode){
      element.push(currentNode)
      currentNode=currentNode.next;
    }
    return elemnt
  }


}


const linkedlist1 = new LinkList()
