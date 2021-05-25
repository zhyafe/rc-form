# rc-form

## 使用方法一：创建一个 props 对象，传入组件

form.getFieldProps(name,option) 返回一个 props

```js
let props = from.getFieldProps("normal")生成一个对象 {onChagne:()=>{},ref:()=>{},value:}
<input {...props}>
```

## 使用方法二：创建一个装饰器函数，包裹组件

form.getFieldDecorator(name,option) 返回一个函数

```js
let decorator = form.getFieldDecorator("demo", {
  rules: [{ required: true }],
});
<div>{
  decorator(<input />);
}</div>
```

## 常用表单

- 基本输入
- select
- datePicker
- 文本框
- 页面跳转
- 图片选择
- 特殊情况
