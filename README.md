命令简绍
1. 安装deployer
 npm install --save hexo-deployer-git
 hexo deploy
会生成.deploy_git 和 public 两个文件夹

2.上传部署到码云
 hexo g -d
将 .deploy 文件夹下的文件上传到码云上面（注意需要在项目根目录下配置 _config.yml 文件里面 码云的仓库地址）

