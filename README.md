# journal
what I have learned everyday

### 2017/8/28
#### 关于端口占用解除后台进程绑定

##### 第一步
通过命令——netstat -ano

+ -a 显示所有连接和监听端口
+ -n以数字形式显示地址和端口号，此选项一般与-a联合使用
+ -o显示与每个连接相关的所属进程ID

运行后记住对应端口的PID，比如你要是想关闭127.0.0.1:8080端口的占用，你就需要记住8080端口对应的PID

##### 第二步
通过命令——tasklist查看占用8080端口的后台进程，然后再任务管理器中终止相对应的进程就可以完美解决问题

-----------------------------------------------------------------------------------------------------

### 2017/9/5
### JavaScript底层方法contains用于判断DOM间是否为父级包含关系
<pre>
  var A = document.createElement('div');
  var B = document.createElement('p');
  A.appendChild(B);
  console.log(A.contains(B));//true
</pre>

### meta标签随屏幕宽度更换对应图片预加载与JS文件预加载
>>[demo示例](https://github.com/ben1205/journal/blob/master/screenBackground.html)

----------------------------------------------------------------------------------------------------

### 2017/9/6
### ES6新方法，新对象，新构造器(Symbol,Object.is)
>>[demo]（https://github.com/ben1205/journal/blob/master/1796mess.js）
