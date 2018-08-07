# hotfix
让您的Hbuilder APP应用快速拥有更新能力.


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
