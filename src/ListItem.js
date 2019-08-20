import React from 'react'
class ListItem extends React.Component{
    constructor(props){
        super(props);
        this.state={ 
            selectIndex:3
        }
    }
    setSelectItemAndDelete(index){
        this.props.getSelectIndex(index);
        this.props.deleteListItem();
        
    }
    render(){
        return <li key={this.props.index} 
        onClick={this.setSelectItemAndDelete.bind(this,this.state.selectIndex)} >{this.props.content}</li>
    }
}
export default ListItem