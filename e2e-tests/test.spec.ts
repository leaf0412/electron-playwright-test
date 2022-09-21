import { _electron as electron } from 'playwright';
import { test } from '@playwright/test';

test('screenshot', async () => {
  // 启动Electron应用程序
  const electronApp = await electron.launch({
    // 主进程的路径
    args: ['./.webpack/main/index.js', ],
  });

  // 根据 Electron 主进程获取对应程序路径
  const appPath = await electronApp.evaluate(async ({ app }) => {
    return app.getAppPath();
  });
  console.log(appPath);

  // 获取应用程序打开的第一个窗口
  const window = await electronApp.firstWindow();
  // 打印窗口标题
  console.log(await window.title());
  // 关闭程序
  await electronApp.close();
});
