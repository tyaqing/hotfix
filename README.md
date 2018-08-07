# hotfix[查看文档](https://tyaqing.github.io/mogo-h5plus/hotfix/introduction.html)
让您的Hbuilder APP应用快速拥有更新能力.

# 接入方式

## 引入方式

可以在`main.js`中添加`checkUpdate(URL);`,打开 app 就会自动检测.还可以放在`检查更新`的按钮上触发.

### ES6 Module 引入

首先在`page.json`把用到`checkUpdate`的页面加上管道`|plusReady`.

然后加载使用.

```js
import { checkUpdate } from "./utils/hotfix";
checkUpdate(URL); // 填入您检查api的url地址
```

### `<script>`方式引入

这种用于没有使用脚手架的开发者

```html
<title>APP</title>
<script src="html5plus://ready"></script>  // 这段必须加载title底下
....
<script src="path/hotfix-bs.js"></script>
<script>
  checkUpdate('https://api.hotfix.femirror.com/public/app/checkUpdate?bundleId=你的appId'); // 填入您检查api的url地址
</script>
```

如果您没有后端接入,可以使用`FEmirror云更新`
