react 非常简单
1. 一个新概念 组件
写一个简单的组件 只需要实现一个API

const HelloWorld = () => (
  <h2>Hello World</h2>
)

class HelloWorld extend React.Component {
  render() {
    return (
        <h2>Hello World</h2>
    )
  }
}

<HelloWorld />

2. 4个必须API props state setState render  


3. 单向数据流 父组件流向子组件
好处： 完全把控数据是怎么流动的
对于双向数据绑定，model改变，界面发生各种变化， 如果出现问题，难于调试

react 非常复杂

Web2.0 局部刷新 Ajax

1. 使用组件描述界面
react 只是view。 传统MVC model view， model不能完全描述view的状态
下拉框 open close 的状态不会写入model 
react 组件会在内部维护状态state。
react的 pops用于接受外部流入的数据， state维护内部的状态
对于传统页面， 我们会写很多方法 show， hide， beginEdit等控制页面展示行为， 这些都是状态。
+-----------------------------------------------------+
|   +--------+  |   +---------+        +-----------+  |
|   |  props |--|--+|   state | ++ ---+|react      |  |
|   |        |  |   |         |        |           |  |
|   +--------+      +---------+        +-----------+  |
+-----------------------------------------------------+
得出
* react组件一般不提供方法，而是某种状态机
* react可以理解为一个纯函数 （固定的输入 就拥有 固定的输出）
* 单向数据流

2. virtual dom
传统一个数转换成另一棵树的算法复杂度 O（n^3） 应用到前端不合理，性能损耗高
广度优先分层比较
