###YIcon

>https://github.com/YMFE/YIcon-Docker


>管理员登录帐号为 ```admin```，密码为 ```admin```

#### 启动容器
```bash
docker-compose up --build
```

#### 进入容器
```bash
docker exec -it yicon /bin/sh
```

#### 清理容器
```bash
docker-compose -f docker-compose.yml -p yicon stop
docker-compose -f docker-compose.yml -p yicon rm -f
```

#### 拷贝容器内数据至宿主机
```
docker cp yicon:/yicon ./
```