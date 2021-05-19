# rc-form

## 使用方法一：创建一个 props 对象，传入组件

```js
let props = from.getFieldProps("normal")生成一个对象 {onChagne:()=>{},ref:()=>{},value:}
<input {...props}>
```

## 使用方法二：创建一个装饰器函数，包裹组件

```js
let decorator = getFieldDecorator("demo", {
  rules: [{ required: true }],
});
<div>{
  decorator(<input />);
}</div>
```
