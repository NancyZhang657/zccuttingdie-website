# 众诚精密模具独立站 — 项目交接文档

> 生成时间：2026-09-10（已更新：本地修复与验证完成，线上待发布）
> 接手方可直接从本文档获取全部上下文，无需查阅历史会话。

---

## 一、项目概览

| 项目 | 内容 |
|------|------|
| 客户 | 济南众诚精密模具（外贸业务公司） |
| 品牌 | Zhongcheng Laser Die |
| 网站定位 | B2B 工业品双语独立站（英文主导 + 中文切换） |
| 技术栈 | React + Vite + TypeScript + Tailwind CSS |
| 本地项目路径 | `D:\acciodirectory\Accio\zhongcheng-cuttingdie-20260725154951` |
| GitHub 仓库 | https://github.com/NancyZhang657/zccuttingdie-website |
| 最新 commit | `93fc4d2` |
| 线上地址（Pages） | https://zccuttingdie-website.583414126.workers.dev |
| **正式域名** | **https://zccuttingdie.com（已上线 ✅）** |
| WhatsApp 联系 | `+86 134 0221 1941` → https://wa.me/8613402211941 |

---

## 二、当前状态（截至 2026-09-10）

### ✅ 已完成
1. React 网站完整开发（9个产品详情页、双语、深色主题）
2. Logo 透明化处理（黑底→透明，黑字→白字，保留蓝色ZC图标）
3. Hero 轮播图渐变遮罩（3张幻灯片，焦点位置优化）
4. 本地源码已移除 Alibaba/Alitalk 动态集成和旧平台联系入口，所有 CTA 统一跳转 WhatsApp
5. 本地源码已统一联系方式为 `+86 134 0221 1941`，当前修复尚未推送线上
6. Cloudflare Workers 部署成功（`zccuttingdie-website.583414126.workers.dev`）
7. 域名 `zccuttingdie.com` 在 Namecheap 购买
8. Namecheap Nameservers 切换为 Cloudflare（`doug` + `virginia`）
9. Cloudflare Workers & Pages → Custom Domain → `zccuttingdie.com` 绑定 Production ✅
10. **DNS 全球传播完成，网站正式上线** ✅
     - 解析 IP：`104.21.8.144` / `172.67.188.122`（均为 Cloudflare）
11. 已加入 SEO 元数据、动态 Canonical/OG、`robots.txt`、`sitemap.xml`
12. 已加入产品页动态元数据和独立 404 页面
13. 已修复跨页面导航、滚动监听重复注册、移动端产品图比例与语言 Context 的 Lint 警告
14. 本地生产构建、Lint 和桌面/375px 移动端/产品页/404 页浏览器验证均通过

### ⏳ 待完成
- 将本地已验证改动提交并推送 GitHub，触发 Cloudflare 自动部署
- 添加 `www.zccuttingdie.com` DNS 记录（需用户授权外部账号操作）
- Google Analytics 接入（需要用户提供 GA 测量 ID）
- 配置 Resend 发信域名与 Cloudflare Worker 密钥，并部署新的询盘后端

---

## 三、技术架构

### 部署架构
```
用户浏览器
    ↓
zccuttingdie.com（Namecheap 注册）
    ↓ Nameservers: doug/virginia.ns.cloudflare.com
Cloudflare DNS（Worker 路由，Proxied）
    ↓
Cloudflare Workers（zccuttingdie-website）
    ↓
React SPA（构建产物托管）
```

### 关键文件清单
```
D:\acciodirectory\Accio\zhongcheng-cuttingdie-20260725154951\
├── src/
│   ├── assets/
│   │   └── zhongcheng-logo-transparent-white.png   # 透明白字Logo
│   ├── components/
│   │   ├── layout/
│   │   │   └── Navbar.tsx          # Logo（240×54px）+ WhatsApp CTA
│   │   ├── hero/
│   │   │   └── Hero.tsx            # 3张轮播图，渐变遮罩
│   │   └── categories/
│   │       └── ProductCategories.tsx  # 9个产品卡片
│   ├── pages/
│   │   └── ProductDetail.tsx       # 产品详情页
│   ├── data/
│   │   └── products.ts             # 9个产品数据
│   └── lib/
│       └── i18n.ts                 # 双语内容
├── DESIGN.md                       # 设计规范文档
├── SETUP.md                        # 本地开发说明
├── public/robots.txt               # 搜索引擎抓取规则
├── public/sitemap.xml              # 公开路由站点地图
└── PROJECT_HANDOVER.md             # 本文件
```

---

## 四、DNS / 部署配置（当前生效状态）

| 项目 | 值 |
|------|-----|
| 域名注册商 | Namecheap |
| DNS 服务商 | Cloudflare |
| Nameservers | `doug.ns.cloudflare.com` / `virginia.ns.cloudflare.com` |
| Cloudflare 项目类型 | Workers（非 Pages） |
| Worker 名称 | `zccuttingdie-website` |
| Worker URL | `zccuttingdie-website.583414126.workers.dev` |
| 自定义域名 | `zccuttingdie.com`（Production，已激活） |
| DNS A 记录 IP | `104.21.8.144` / `172.67.188.122` |
| Cloudflare DNS 记录 | Type: Worker，Name: zccuttingdie.com，Proxied ✅ |

**待补充的 DNS 记录（www 子域名）：**
- Type: `CNAME`
- Name: `www`
- Target: `zccuttingdie-website.583414126.workers.dev`
- Proxy: Proxied（橙色云朵）

---

## 五、本地开发与部署

### 本地开发
```powershell
cd D:\acciodirectory\Accio\zhongcheng-cuttingdie-20260725154951
npm install
npm run dev       # 开发服务器（热更新偶有不稳定）
npm run build     # 构建生产版本

# 预览构建结果（推荐，CSS 改动必用）：
cd dist
python -m http.server 4173
# 访问 http://localhost:4173
```

> 注意：CSS 改动建议 `npm run build` 后用 Python 静态服务器预览，热更新有时不反映变更。

### 推送到 GitHub
```powershell
# 需开启 VPN
git config --global http.proxy socks5://127.0.0.1:10808

cd D:\acciodirectory\Accio\zhongcheng-cuttingdie-20260725154951
git add .
git commit -m "描述变更内容"
git push origin main
# 推送时用 GitHub PAT 作为密码（由用户保管）
```

> GitHub 推送 → 自动触发 Cloudflare Workers 重新部署（已配置 CI/CD）

---

## 六、产品线（9个）

| # | 英文名 | 中文名 | URL Slug |
|---|--------|--------|----------|
| 1 | Wooden Cutting Die | 木板刀模 | wooden-cutting-die |
| 2 | Sandwich Cutting Die | 三明治刀模 | sandwich-cutting-die |
| 3 | Steel Counter Plate | 钢底模 | steel-counter-plate |
| 4 | Pertinax Counter Plate | 树脂底模 | pertinax-counter-plate |
| 5 | Stripping Tool | 清废工具 | stripping-tool |
| 6 | Blanking Tool | 分盒工具 | blanking-tool |
| 7 | Hot Stamping Die | 烫金版 | hot-stamping-die |
| 8 | Embossing Die | 凹凸版 | embossing-die |
| 9 | Engraving Die | 电雕版 | engraving-die |

---

## 七、视觉风格规范

| 属性 | 值 |
|------|-----|
| 背景主色 | `#0E0D0C` ~ `#221E19`（深炭黑） |
| 强调色 | `#E07A2E`（橙色） |
| Hero 渐变 | 左侧纯黑 → 渐变过渡 → 右侧产品/厂房图 |
| 图片风格 | 真实厂房、装配、质检照片（非图库素材） |
| Logo | 透明背景，白色文字，蓝色 ZC 图标，尺寸 240×54px |

---

## 八、联系方式（全站统一）

- WhatsApp：`+86 134 0221 1941`
- 链接格式：`https://wa.me/8613402211941`
- WhatsApp 保留为即时沟通渠道；产品页询盘表单改为提交到网站后端并自动发邮件

---

## 九、品牌命名规范

| 用途 | 品牌名 |
|------|--------|
| 品牌推广 | Zhongcheng Laser Die |
| SEO 优化 | Zhongcheng Laser Cutting Die |
| 高端定位 | Zhongcheng Precision Die & Tooling |
| 注意 | 行业术语用 `Die`，避免 `Mould` |

---

## 十、下一步任务（优先级排序）

| 优先级 | 任务 | 说明 |
|--------|------|------|
| 高 | 推送本地修复 | 提交并推送 GitHub，触发 Cloudflare 自动部署 |
| 高 | 添加 `www` 子域名 | Cloudflare DNS 加一条 CNAME 记录，需用户授权 |
| 中 | Google Analytics | 接入流量监控，需要 GA 测量 ID |
| 低 | 联系表单后端 | 目前仅 WhatsApp 跳转，无邮件收集 |

---

## 十一、相关账号（接手方需向用户确认）

- **Namecheap**：域名管理后台（用户自持账号）
- **Cloudflare**：DNS + Workers 管理（用户自持账号）
- **GitHub**：代码仓库 `NancyZhang657/zccuttingdie-website`（PAT 由用户保管）
