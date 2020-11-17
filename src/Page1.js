import React from "react"
import ReactFileReader from 'react-file-reader';

import Imgs from "./Page2"
class Pic extends React.Component{
  constructor(){
    super();
    this.state={};
  }
  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
    // Use reader.result
      this.setState({text:this.csvToTable(reader.result)});
    }
    reader.readAsText(files[0],'utf-8');
  }
  csvToTable = (content) => {//csv转表格obj格式
    var userList = content.split("\n");
    var data = [];
    for (var i = 1; i < userList.length; i++) {
      var userary = userList[i].split(",");
      var tr = {};
      //表里的7行
      tr.link = userary[0];
      data.push({...tr});
    }
    return data;
  }
  render() {
    return (
      <div>
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
          <button className='btn'>Upload</button>
        </ReactFileReader>
        <div>
          <Imgs link={this.state.text}></Imgs>
        </div>
        
        
        Page1
      </div>
    );
  }
}
  // componentDidMount = () => {
  // }
  export default Pic;
