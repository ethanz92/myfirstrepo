## 1 初始化

先进入项目文件夹（此处为 4-express）

运行：\$npm init

接下来的问题可以全部回车，然后一个 package.json 会被创建在文件夹中。

快捷方式：\$npm init -y

package.json 如下：

```json
{
  "name": "4-express",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

## 2 安装 express

运行: \$npm i express

会创建 node_modules 文件夹以及 package-lock.json.

package-lock.json 会储存 packages 的版本信息。

特性：如果当前文件夹没有 node_modules，没有 package.json，运行此命令，npm 会向上查找第一个由 npm 管理的文件夹并且在此安装 express。不推荐这样使用。

## 3 版本管理

```json
{
  "version": "^1.0.0"
}
```

^符号锁定 major version（此处：1），下次执行\$npm i 时会安装该 major 版本下的最新版本：major.x.x。

如果执行$npm express@3，则会安装 3 major 下的最新版本，同时会把 package.json 更新为"^3.x.x"。

```json
{
  "version": "~1.0.0"
}
```

~符号锁定 major 和 minor version，下次执行$npm i 时会安装该 major 和 minor 版本下的最新 patch：major.minor.x。

```json
{
  "version": "1.0.0"
}
```

不带任何前缀符号则表示 exact version match。

执行$npm outdated 会给出想要的版本（package.json）和最新版本的比照。

执行$npm i express@latest 可以把 package 升级至最新版本。更新前一定要做好 git control，确保如果出现问题还可以回滚。

## 4 Dependencies

### 4.1 Dependency

项目的成功启动一定要依赖于这些 package。

### 4.2 Dev dependency

在项目开发时一定要依赖的 package。

比如 nodemon 这种 package 只有在开发时使用，但实际 production 环境中并不需要。

使用 flag 来确定安装的 dependency 级别。

```
\$npm i -D nodemon
```

就可以把它安装到 dev dependency 中。

### 4.3 Global dependency

```
\$npm i -g nodemon (sudo for mac)
```

进行全局安装

不建议进行全局安装，因为 npx 可以替换 global installment。npx 进行的是临时安装，不会安装至系统但可以全局使用。npx 还会确保使用的包都是最新版本，避免了 global 下的版本维护的麻烦。
