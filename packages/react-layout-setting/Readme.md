#React layout setting

###Quick Start
1. install package in your project
```
npm i react-layout-table
```

2. import style and package
```
import 'react-layout-setting/dist/index.css';
import ReactLayoutSetting from 'react-layout-setting';

const AppComponent = () => (
  <div>
    <ReactLayoutSetting 
        row={2} col={2} tableRow={4} tableCol={4} 
        callback=((row, col) => { console.log("row is ", row); console.log("col is", col)}) />
  </div>
);
export default AppComponent;
```
