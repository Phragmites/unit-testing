This is a React Webpack project front-end test scaffolding, based on enzyme+karma+mocha+chai



## Clone


    ```bash

    $ git clone https://github.com/Phragmites/unit-testing.git<yourAppName>
    $ cd <yourAppName>
    $ npm install

    ```

## Start

    ```bash

    $ npm run test

    ```

 
## waring

如果你的jsx或者js内没有引入css、sass，不需要安装以下插件（安装前可以在package.json内删除）


    "node-sass": "^3.13.1",
    "css-loader": "^0.24.0",
    "sass-loader": "^4.1.1",
    "style-loader": "^0.13.2",
    "file-loader": "^0.9.0",
    "url-loader": "^0.5.8",


