import React from "react"
import ReactFileReader from 'react-file-reader';
import MaterialTable from "material-table";
import { forwardRef } from 'react';

import {Edit, Delete, Add} from '@material-ui/icons';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};
class Home extends React.Component {
  constructor(props) {
    super(props); // You have to run this before you init state
    this.state = {};
  }
  handleFiles = files => {
    var reader = new FileReader();
    reader.onload = (e) => {
    // Use reader.result
      this.setState({text:this.csvToTable(reader.result)});
    }
    reader.readAsText(files[0],'gbk');
  }
  csvToTable = (content) => {
  // 对csv文件的数据先以行分割
    var userList = content.split("\n");
    var data = [];
  // 我们在对每一行以逗号作分割
    for (var i = 1; i < userList.length; i++) {
      var userary = userList[i].split(",");
      var tr = {};
    // 对每行的内容遍历到td标签去
      tr.key = userary[1];
      tr.platform = userary[2];
      tr.name = userary[3];
      tr.linkName = userary[3];
      tr.link = userary[4];
      tr.price = userary[5];
      data.push({...tr});
    }
    return data;
  }
  print = () => {
    console.log(this.state);
  }
  handleClick = (e, rowd) => {
    console.log(rowd);
    window.location.href = rowd.link;
  }
  render() {
    return (
      <div>
        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
          <button className='btn'>Upload</button>
        </ReactFileReader>
        <MaterialTable
          icons={tableIcons}
          onRowClick={this.handleClick}
          columns={[
            { title: "key", field: "key", disableClick:true},
            { title: "平台", field: "platform", disableClick:true},
            { title: "名称", field: "name", disableClick:true},
            { title: "连接", field: "linkName" },
            { title: "价格", field: "price", disableClick:true},
            { title: "url", field: "link", hidden:true},
          ]}
          data={this.state.text}
          title="Demo Title"
        />
          <button onClick={this.print}>b1</button>
      </div>
    );
  }
}
export default Home;