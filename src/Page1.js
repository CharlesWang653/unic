import React from "react"
import ReactFileReader from 'react-file-reader';
import Avatar from '@material-ui/core/Avatar';
class Pic extends React.Component {
  // componentDidMount = () => {

  // }
  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
    // Use reader.result
      this.setState({text:this.csvToTable(reader.result)});
      console.log(this.state);
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
        {this.state && (<div>
          {this.state.text.map((item) => {
            console.log(item.link);
            return (
              <Avatar alt="Remy Sharp" src={item.link}/>
            );
          })}
        </div>)}
        Page1
      </div>
    );
  }
}
export default Pic;