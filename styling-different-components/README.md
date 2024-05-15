# Class 3: how to style different React components with css
(not including external frameworks or preprocessors)

1. EXTERNAL (inside a .jsx file, import `.index/css`) 在主要的一个.css file中更新所有的styling
  - good point: for global styling
  - bad point: could cause naming conflict
2. MODULES (create a dedicated stylesheet specifically for each component 每一个react component为他特定一个单独的.css stylesheet)
  - create a folder for the component, put component.jsx and component.module.css file in the folder
  - for the component, import the module 
  syntax: import styles from './component.module.css'
  - apply the style: {styles.class}

  good points: don't have naming conflict, the unique class will be generated for you. className is unique and generated via a hash. And modules can give different components unique styles
  bad points: 1. require additional setup and global style aren't applied easily. have to import them from otherwhere
3. INLINE (define a const styles variables for specific stylings.)

    .jsx convention: 
        1. property naming no '-' short-dashes, change all into camel cases. 
        2. all values should be string
        3. all should be using , dot connected

    - Good point: inline styling also prevent global naming conflict because we define styling inside the function. it is good for isolating for minimal styling.
    - Bad points: if have lots of css property, it can reduce the performance


Conclusion: 
External: 将所有的styles放在一个folders src中，然后import 他们，但是这样做可能造成styling naming conflicts and 覆盖
Module: 创建一个folder for component，然后放入具体的.jsx .module.css file, 最后可以import这个module，然后module.class 引用，好处是可以防止global naming overlap / confliction, 坏处是想要使用global styling就比较难了
Internal：直接在.jsx function内部定义styles variable并且应用变量在具体的components上，同样可以防止global naming conflict但是只适用于微型styling sheet，若是有大量的css styling 的话不适合，造成代码的混乱，难以阅读

