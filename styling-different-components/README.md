# Class 3: how to style different React components with css
(not including external frameworks or preprocessors)

1. EXTERNAL (inside a .jsx file, import `.index/css`) in the main index.css file update all styling for different components
  - good point: for global styling
  - bad point: could cause naming conflict

2. MODULES (create a dedicated stylesheet specifically for each component)
  - create a `folder` for the component, put `component.jsx` and `component.module.css` file in the folder
  - for the component, import the module 
  syntax: 
  ```
  import styles from './component.module.css'
  ```
  - apply the style: `{styles.class}`

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
External: put all styles in one folders src, then import this style.css in the index.html file，However, it might cause styling naming conflicts and overriding problems
Module: create a folder for a component，and its unique .module.css stylesheet , finally import this stylesheet in the component.jsx file. good point: prevent global naming overlap / confliction, bad point: it is hard to apply the global styling
Internal：directly define styles variable inside the component.jsx. This method can prevent global naming conflict but only suitable for small styling sheet，if there are lots of css styling . then it is unsuitable to use this method !!! 

