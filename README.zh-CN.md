# 本项目由greatwms二改
原项目地址：https://github.com/GreaterWMS/GreaterWMS



<h4>
    <a href="https://www.56yhz.com/md/nginx_config/zh-CN">官网首页</a>
</h4>





[//]: # (Function)
## :dart: 模块功能

* [x] 多仓
* [x] 供应商管理
* [x] 客户管理
* [x] 订单管理
* [x] 库存管理
* [x] API文档
* [x] IOS APP支持
* [x] Android APP支持
* [x] Electron APP支持
* [x] i18n国际化

[//]: # (Install)
## :compass: 安装所虚环境
python安装
- python 3.8.10

nodejs安装
- nodejs 16.20.2

安装依赖
```shell
pip install -r requirements.txt
```

[//]: # (development)
## :hammer_and_wrench: 怎么启动开发环境:

- 启动后端环境:
- 第一次启动请初始化数据库
  
~~~shell
python3 manage.py makemigrations
python3 manage.py migrate
~~~
- 后续使用
~~~shell
cd GreaterWMS
daphne -p 8008 greaterwms.asgi:application
or
daphne -b 0.0.0.0 -p 8008 greaterwms.asgi:application # 局域网
~~~


- 请求地址修改
~~~shell
templates/public/statics/baseurl.txt
~~~

- API文档

~~~shell
baseurl + '/docs/'
~~~

### 配套的手机APP（仅修改了代码，未实际测试）

- App源码编译
- 需要sdk配置

~~~shell
npm install cordova -g

cd app
yarn install
## 开发环境
quasar d -m cordova -T [android, ios]
## 构建打包
quasar build -m [android, ios]
~~~


[//]: # (publish)
## :trumpet: 怎么修改你的前端网页:

- 网页版构建:

~~~shell
cd templates
quasar build # /templates/dist/spa
~~~

[//]: # (deploy)
## :computer: 怎么部署到服务器:

可参考官网文档教程


# 注意事项
- 记得启用ssl的话，需要额外配置，在前端代码中进行编辑
- 若希望阻止其他人访问，可以将网站部署在服务器内网，设置一个公网网站通过nginx反代跳转，同时对公网网站设置base http authentication
- 本项目采用django+vue，因此总管理员为 admin/，初始情况未设置
- 本项目多仓互联，注册网站上的管理员仅拥有独立的用户及验证码，数据库共用
- 用户的验证码初始为8位数字的随机生成，可根据需要更改