# ����Ŀ��greatwms����
ԭ��Ŀ��ַ��https://github.com/GreaterWMS/GreaterWMS



<h4>
    <a href="https://www.56yhz.com/md/nginx_config/zh-CN">������ҳ</a>
</h4>





[//]: # (Function)
## :dart: ģ�鹦��

* [x] ���
* [x] ��Ӧ�̹���
* [x] �ͻ�����
* [x] ��������
* [x] ������
* [x] API�ĵ�
* [x] IOS APP֧��
* [x] Android APP֧��
* [x] Electron APP֧��
* [x] i18n���ʻ�

[//]: # (Install)
## :compass: ��װ���黷��
python��װ
- python 3.8.10

nodejs��װ
- nodejs 16.20.2

��װ����
```shell
pip install -r requirements.txt
```

[//]: # (development)
## :hammer_and_wrench: ��ô������������:

- ������˻���:
- ��һ���������ʼ�����ݿ�
  
~~~shell
python3 manage.py makemigrations
python3 manage.py migrate
~~~
- ����ʹ��
~~~shell
cd GreaterWMS
daphne -p 8008 greaterwms.asgi:application
or
daphne -b 0.0.0.0 -p 8008 greaterwms.asgi:application # ������
~~~


- �����ַ�޸�
~~~shell
templates/public/statics/baseurl.txt
~~~

- API�ĵ�

~~~shell
baseurl + '/docs/'
~~~

### ���׵��ֻ�APP�����޸��˴��룬δʵ�ʲ��ԣ�

- AppԴ�����
- ��Ҫsdk����

~~~shell
npm install cordova -g

cd app
yarn install
## ��������
quasar d -m cordova -T [android, ios]
## �������
quasar build -m [android, ios]
~~~


[//]: # (publish)
## :trumpet: ��ô�޸����ǰ����ҳ:

- ��ҳ�湹��:

~~~shell
cd templates
quasar build # /templates/dist/spa
~~~

[//]: # (deploy)
## :computer: ��ô���𵽷�����:

�ɲο������ĵ��̳�


# ע������
- �ǵ�����ssl�Ļ�����Ҫ�������ã���ǰ�˴����н��б༭
- ��ϣ����ֹ�����˷��ʣ����Խ���վ�����ڷ���������������һ��������վͨ��nginx������ת��ͬʱ�Թ�����վ����base http authentication
- ����Ŀ����django+vue������ܹ���ԱΪ admin/����ʼ���δ����
- ����Ŀ��ֻ�����ע����վ�ϵĹ���Ա��ӵ�ж������û�����֤�룬���ݿ⹲��
- �û�����֤���ʼΪ8λ���ֵ�������ɣ��ɸ�����Ҫ����