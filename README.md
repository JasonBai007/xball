# xball（叉烧包）
![screen](https://github.com/jasonBai007/Xball/raw/master/qr.png)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

## Stack
1. vue
2. vue-cli 3.x
3. animate.css
4. hammer.js

## Notes
1. 绑定click事件导致不能同时点击屏幕，于是改用hammer.js，使用里面的tap事件，实现多点同时点击
2. 点击时播放音乐，办公环境使用时请戴耳机