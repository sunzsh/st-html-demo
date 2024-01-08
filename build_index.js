const fs = require('fs');

// 同步读取 HTML 文件
const filePath = 'index.html';
let data = fs.readFileSync(filePath, 'utf8');

// 移除 <h1><a href="/">~</a> / </h1>
data = data.replace(/<h1><a href="\/">~<\/a> \/ <\/h1>\s*/, '');

// 移除所有的目录级别链接
data = data.replace(/<li>[\s\S]*?class="icon icon-directory"[\s\S]*?<\/li>/g, '');

// 移除所有以 'build_index' 开头的文件链接
data = data.replace(/<li>[\s\S]*?href="\/?build_index[^"]*"[\s\S]*?<\/li>/g, '');

// 修改所有超链接的 href 为以 "./" 开头的绝对路径
data = data.replace(/href="\/(.*?)"/g, 'href="./$1"');

// 同步写入修改后的内容到文件
fs.writeFileSync(filePath, data, 'utf8');

console.log('index.html 已同步更新。已移除特定的 <h1> 标签、目录级别链接、以及所有以 "build_index" 开头的文件链接，并且修改了所有超链接的 href 属性。');
