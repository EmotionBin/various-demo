# oneOf

1. 加上 `oneOf` 可以让文件只匹配对应的一种 `loader`，否则每种类型的文件都要在所有 `loader` 中过一遍，找到对应的 `loader` 再使用，这样可以提高效率
2. **注意：不能有两个配置处理同一种类型的文件，一种类型的文件只能用一种loader**