import React from 'react';

class ListTest extends React.Component {
  constructor(props){
    super(props);
    this.state={
      listItemSource:[],
      inputValue:''
    }
  }
  addListItem(){
    this.setState({
      listItemSource:[...this.state.listItemSource,this.state.inputValue],
      inputValue:''
    })
}
  deleteSelectVlaue(index){
    console.log(index);
    const listItemSource=[...this.state.listItemSource];
    listItemSource.splice(index,1);
    this.setState({listItemSource})
}
inputValueChangeEvent(e){
  this.setState({
    inputValue:e.target.value
  })
}
  render()
  {
  return (
    <div>
      <div>
        <input value={this.state.inputValue} onChange={this.inputValueChangeEvent.bind(this)}></input>
        <button onClick={this.addListItem.bind(this)}>add</button>
      </div>
      <ul>
      {
        this.state.listItemSource.map((item,index)=>{
          console.log(index);
          return <li key={index} onClick={this.deleteSelectVlaue.bind(this,index)} >{item}</li>
        })}
      </ul>
    </div>
  );
}
  
}

export default ListTest;
