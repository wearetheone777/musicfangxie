## 介绍

1 该项目是仿写网易云音乐的小程序,根据个人兴趣完成的,接口采用了github上面开源的网易云的接口,感兴趣可以自己搜素.

2.目前已完成的页面有1. 主页 2. 视频 video 页 3. 个人中心页 4. 登录页 5. 推荐歌曲页 6. 音乐播放页 7. 搜索页

3.以后还会根据自己的时间完善

## 预览效果

![image-20220710133302574](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20220710133302574.png)![image-20220710133320890](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20220710133320890.png)

![image-20220710133540365](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20220710133540365.png)![image-20220710133556532](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20220710133556532.png)



![image-20220710133604902](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20220710133604902.png)![image-20220710133910053](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20220710133910053.png)



![image-20220710133941798](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20220710133941798.png)![image-20220710134055553](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20220710134055553.png)



![image-20220710134155164](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20220710134155164.png)![image-20220710134238343](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20220710134238343.png)

##  功能模块说明

### 主页

1. Banner 轮播图

2. 图标导航区域

3. 推荐歌曲模块
  a) 需要实现动态滑块效果(左右滑动)

4. 排行榜模块

    a) 排行榜分类类目有 0-20 共 21 种
    b) 需要取前 5 种分类显示
    c) 整体实现轮播效果，当前滑块中显示后一个滑块部分内容

![image-20220710134827241](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20220710134827241.png)

### 视频 video 页

1. 头部搜索区域
  a) 点击跳转至搜索界面

2. 导航模块
  a) 动态获取数据
  b) 点击动态切换视频列表数据，对应下边框动态切换，且有过渡效果

3. 视频列表模块
  a) 用户没有登录直接跳转至登录界面
  b) 用户登录后，动态获取数据
  c) 需要用户 cookie 身份验证
  d) 视频播放

  e) 图片替代 video 标签性能优化

  4. 分享功能
     a) 点击视频列表模块右下角‘三个点区域’实现转发分享

  

### 个人中心页

1. 头部模块
a) 用户未登录显示默认头像图片，及游客姓名，
b) 用户未登录的时候可以跳转至登录界面，登录以后点击不跳转
c) 用户登录显示用户头像及账号名
2. 最近播放模块
a) 用户登录后显示用户最近播放记录
b) 需要实现动态滑动模块

3. 内容区模块
a) 手指滑动内容区跟随移动，只能向下移动，最大移动距离 80rpx
b) 使用技术： transform

![image-20220710135452303](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20220710135452303.png)

### TabBar 模块 

1. 主页, 视频页, 个人中心页通过 TbaBar 实现，可以实现点击切换
2. TabBar 置底

![image-20220710135536723](C:\Users\Lenovo\AppData\Roaming\Typora\typora-user-images\image-20220710135536723.png)

###  登录界面

1. 个人中心，video 视频页可以点击跳转至登录界面
2. 网易云音乐真实接口(手机号 + 密码登录)
3. 前端验证
a) 验证手机号是否合法
4. 后端验证
a) 登录成功后将用户信息存入至本地
b) 登录成功后跳转至个人中心页

### 每日推荐页

1. 头部模块
a) 利用 date 函数显示当前日期
2. 歌曲列表模块
a) 显示推荐歌曲列表
b) 同详情播放页进行交互

### 歌曲详情页 

1. C3 动画功能
  a) 根据音乐播放的状态动态控制摇杆，磁盘进行动画

2. 音乐播放功能
  a) 根据点击按钮控制音乐播放暂停
  b) 根据点击系统控制音乐播放按钮控制音乐播放/暂停/停止
  c) 正确显示音乐的播放状态(页面后退再进入)

3. 切换歌曲功能

   a) 点击切换按钮切换歌曲
   b) 需要同推荐歌曲页面进行交互

4. 进度条控制模块
   a) 显示音乐的总时长和实时播放的时长
   b) 进度条根据音乐的播放进度正确显示

### 搜索界面

1. 页面数据动态显示
  a) 需要访问对应的接口
2. 搜索功能
  a) 根据用户输入的数据进行模糊匹配动态显示数据
3. 历史记录模块
  a) 根据用户的搜索内容显示用户的搜索记录
  b) 数据需要存入至本地 storage