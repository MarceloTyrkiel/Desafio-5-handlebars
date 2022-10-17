class ContainerMemory {
    constructor(){
        this.elements = []
    }
getAll(){
    return this.elements;
}

save(element) {
    element.id = !this.elements.length ? 1 : this.elements[this.elements.length - 1].id + 1

    this.elements.push(element)

    return element
}

getByid(id){
    return this.elements.find(element => element.id === id)
}

updateByid(id, newData) {
    const elementIndex = this.elements.findIndex(element => element.id == id)

    if(elementIndex === -1) return {error: true}

    this.elements[elementIndex] = {
        ...this.elements[elementIndex],
        ...newData
    }
    
  return this.elements[elementIndex];
}

deleteByid(id) {
    return this.elements.filter(element => element.id != id);
}
}

export {ContainerMemory}