import React from 'react';
import ListItem from './ListItem';

class ListTest extends React.Component {
  constructor(props){
    super(props);
    this.state={
      listItemSource:[],
      inputValue:''
    };
    this.addListItem=this.addListItem.bind(this);
    this.inputValueChangeEvent=this.inputValueChangeEvent.bind(this);
    //this.getSelectItemIndex=this.getSelectItemIndex.bind(this);
    
  }
  addListItem(){
    this.setState({
      listItemSource:[...this.state.listItemSource,this.state.inputValue],
      inputValue:''
    })
}
  deleteSelectValue(index){
    //console.log(index);
    const listItemSource=[...this.state.listItemSource];
    listItemSource.splice(index,1);
    this.setState({listItemSource})
}
  inputValueChangeEvent(e){
    this.setState({
      inputValue:e.target.value
    })
}
  getSelectItemIndex(index){
    console.log(index);
  }
//父组件通过子组件属性向子控件传值，子组件通过props接收父组件传递过来的值
  render()
  {
    var thischangestr="nihaoa ";
    var Func=function() {
      console.log(thischangestr);
      //var thischangestr="nihaoa ";
    };
    
  //   var name = "The Window";
  //   var object = {
  //     name : "My Object",
  //     getNameFunc : function(){
  //     return function(){
  //       return this.name;
  //       };
  //     }
  // };
//alert(object.getNameFunc()()); //"The Window"（在非严格模式下）
  
     
      
    
  return (
    <div>
      <div>
        <input value={this.state.inputValue} onChange={this.inputValueChangeEvent}></input>
        <button onClick={this.addListItem}>add</button>
      </div>
      <ul>
      {
        this.state.listItemSource.map((item,index)=>{
          console.log(index);
          return <ListItem content={item} 
          getSelectIndex={this.getSelectItemIndex.bind(this)} 
          deleteListItem={this.deleteSelectValue.bind(this,index)} 
          key={index}/>
          // return <li key={index} onClick={this.deleteSelectVlaue.bind(this,index)} >{item}</li>
        })}
      </ul>
      
    </div>
  );
}
  
}

export default ListTest;
