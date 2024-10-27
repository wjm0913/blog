# FullPageScroll 组件

FullPageScroll 是一个全屏滚动组件，用于创建垂直滚动的全屏页面。它支持循环滚动、导航指示器、滚动提示，以及灵活的背景设置选项。

## 属性

| 属性名 | 类型 | 默认值 | 描述 |
|--------|------|--------|------|
| screens | ScreenProps[] | 必填 | 定义每个屏幕的内容和背景 |
| scrollPromptText | string | "↓ 向下滚动 ↓" | 滚动提示文本 |
| navDotSize | number | 10 | 导航点的大小（像素） |
| navDotSpacing | number | 5 | 导航点之间的间距（像素） |
| transitionDuration | number | 300 | 过渡动画持续时间（毫秒） |

### ScreenProps 接口

| 属性名 | 类型 | 描述 |
|--------|------|------|
| children | ReactNode | 屏幕的内容 |
| background | string | 屏幕的渐变背景（当 useGradient 为 true 时使用） |
| backgroundImage | string | 可选，屏幕的背景图片 URL |
| useGradient | boolean | 可选，是否使用渐变背景（默认为 true） |

## 用法示例

```jsx
import FullPageScroll from './components/FullPageScroll/FullPageScroll';

const App = () => {
  const screens = [
    {
      background: 'linear-gradient(-45deg, #FF6B6B, #4ECDC4, #45B7D1, #FDCB6E, #FF9FF3)',
      children: <h1>第一屏 - 渐变背景</h1>
    },
    {
      backgroundImage: '/path/to/image.jpg',
      useGradient: false,
      children: <h1>第二屏 - 图片背景</h1>
    },
    {
      background: 'linear-gradient(-45deg, #74B9FF, #A29BFE, #FAB1A0, #81ECEC, #FD79A8)',
      children: <h1>第三屏 - 渐变背景</h1>
    }
  ];

  return (
    <FullPageScroll
      screens={screens}
      scrollPromptText="继续向下滚动"
      navDotSize={12}
      navDotSpacing={8}
      transitionDuration={400}
    />
  );
};

export default App;
```

## 特性

1. 全屏滚动：每个屏幕占据整个视口高度。
2. 循环滚动：从最后一屏可以滚动到第一屏，反之亦然。
3. 导航指示器：右侧显示当前屏幕位置。
4. 滚动提示：在底部显示滚动提示文本。
5. 平滑过渡：屏幕之间的切换使用平滑动画。
6. 灵活的背景选项：支持渐变背景和图片背景。
7. 动态渐变：渐变背景支持动画效果。

## 注意事项

1. 确保在使用此组件时，父容器没有设置 `overflow: hidden`，以允许组件正常滚动。
2. 组件使用了 CSS 模块，确保你的项目支持 CSS 模块的导入。
3. 组件内部处理了滚轮事件，可能会影响页面的默认滚动行为。
4. 为了最佳性能，建议限制屏幕数量，通常不超过 5-7 个屏幕。
5. 当使用图片背景时，确保提供正确的图片路径。

## 自定义样式

如果需要自定义样式，可以修改 `FullPageScroll.module.css` 文件。主要的样式类包括：

- `.main`：主容器样式
- `.screen`：单个屏幕样式
- `.gradientBackground`：渐变背景样式
- `.navIndicator` 和 `.navDot`：导航指示器样式
- `.scrollPrompt`：滚动提示样式
- `.overlay`：过渡遮罩层样式

确保在修改样式时保持类名不变，以免影响组件功能。
