import React from "react"
const add=(a,b,...more)=>{
return more.reduce((m,n)=>m+n)+a+b
}
class AddDataTest extends React.Component{
    render(){
        return<div>{add(1,2,3,4,5,6)}</div>
    };
// const add=(a,b,...more)=>{
// return more.reduce((m,n)=>m+n)+a+b
// }
}
export default AddDataTest