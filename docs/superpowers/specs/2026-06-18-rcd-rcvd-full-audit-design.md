# RCD / RCVD 全量审核与知识内化设计

## 背景

本仓库已经形成两层公开文档结构：`docs/00-10` 作为快速预览和学习路线层，`docs/advanced/` 作为详细悬架工程手册。此前已在 `docs/01-learning-roadmap.md` 增加 RCD / RCVD 阅读索引，并在 `docs/references.md` 补充引用边界。用户现在要求按照 Derek Seward 的 *Race Car Design* 和 Milliken & Milliken 的 *Race Car Vehicle Dynamics* 全量审核当前知识内容，判断技术正确性和完整性，并把两本书中与 FSAE 悬架设计相关的知识体系内化进公开手册。

这次工作不是把两本书摘抄进仓库，也不是新增一个书摘目录，而是把 RCD / RCVD 的理论框架、设计判断、模型边界和验证习惯转化为本仓库自己的中文工程手册内容。

## 目标

1. 建立 RCD / RCVD 驱动的悬架知识审核基准。
2. 全量检查现有公开文档是否技术正确、体系完整、边界清楚。
3. 把明显缺失或表达不足的知识内化为公开安全的工程判断、流程、检查项和章节回链。
4. 保持 `docs/00-10` 的快速预览定位，并把详细技术解释放入 `docs/advanced/`。
5. 强化 `docs/references.md` 对 RCD / RCVD 的引用方式和版权边界说明。

## 非目标

本次不公开 RCD / RCVD 的扫描页、图片、原表格、长段原文、页码级摘录或任何受版权保护的可替代内容。

本次不把本地忽略源材料目录下的 PDF、DOCX、CAD、仿真、截图、测试数据或内部参数纳入 Git 跟踪。

本次不重排仓库结构，不新增额外文档扩展层；`docs/advanced/` 仍然是唯一计划中的详细技术层。

## 审核资料

主要参考：

- 本地忽略源材料目录中的 Derek Seward *Race Car Design*
- 本地忽略源材料目录中的 Milliken & Milliken *Race Car Vehicle Dynamics* OCR 版本
- 必要时用同目录中的原始版面文件进行核对

辅助对照：

- `docs/01-learning-roadmap.md` 中已有的 RCD / RCVD 章节推荐
- `docs/references.md` 中已有的公开引用规则
- `AGENTS.md` 中的公开发布边界和源材料处理规则

## 审核维度

### 正确性

检查现有文档是否存在概念错误、过度简化、边界不清或绝对化表达。重点包括：

- 轮胎行为、侧偏、载荷敏感性和轮胎数据处理是否写成有边界的模型，而不是万能答案。
- 坐标系、符号、单位、正负方向和参考系是否足够明确。
- 悬架几何、硬点、转向几何、bump steer、camber gain、roll center 和 K&C 的关系是否表述清楚。
- ride rate、roll rate、wheel rate、spring rate、motion ratio、anti-roll bar 和阻尼的相互关系是否避免混淆。
- 载荷转移、轮载、驱动制动载荷、结构导力和 FEA 边界是否保持保守表达。
- 多体仿真、稳态模型、瞬态模型、g-g 图、pair analysis 和实车相关性是否被放在合适的可信度层级。
- set-up、testing、driver feedback 和 data correlation 是否写成验证闭环，而不是经验口号。

### 完整性

检查现有文档是否覆盖一条能从读书走向设计评审的完整链条：

1. 整车目标、规则约束和跨组接口。
2. 轮胎行为、轮胎数据、模型选择和整车输入。
3. 坐标系、几何目标、硬点初始化、优化和包络检查。
4. 弹簧、阻尼、防倾杆、运动比、ride / roll / pitch 参数。
5. 仿真分层、优化、敏感性分析、K&C、整车模型和相关性验证。
6. 轮载、载荷工况、金属结构校核和 FEA 评审。
7. 复合材料校核、铺层假设、连接区、制造和验证边界。
8. 实车测试、调校、故障分级、答辩和下一季传承。
9. 软件学习路线和最低可用工作流。
10. 面向评审的检查清单和证据要求。

## 文件落点

| 知识域 | 主要检查内容 | 主要修改落点 |
|---|---|---|
| 设计目标 | 目标、约束、偏好、接口、可验证性 | `docs/advanced/01-design-targets.md`, `docs/02-design-targets.md` |
| 轮胎与输入 | tire behavior, load sensitivity, tire data treatment | `docs/advanced/02-tire-and-vehicle-inputs.md`, `docs/03-tire-and-vehicle-inputs.md` |
| 几何与硬点 | axis systems, suspension geometry, steering geometry, K&C | `docs/advanced/03-geometry-and-hardpoints.md`, `docs/04-geometry-and-hardpoints.md` |
| 簧上系统 | ride rate, roll rate, springs, dampers, ARB, motion ratio | `docs/advanced/04-spring-damper-roll-and-ride.md`, `docs/05-spring-damper-and-roll.md` |
| 仿真与优化 | steady-state, transient, g-g, pair analysis, model limits | `docs/advanced/05-simulation-optimization-correlation.md`, `docs/06-simulation-and-optimization.md` |
| 载荷与结构 | wheel loads, load transfer, force extraction, FEA review | `docs/advanced/06-loads-metal-structure.md`, `docs/07-loads-and-structure-check.md` |
| 复材与制造 | composite review, manufacturing risk, conservative validation | `docs/advanced/07-composites-and-manufacturing.md`, `docs/07-loads-and-structure-check.md` |
| 测试与调校 | set-up, testing, driver feedback, correlation | `docs/advanced/08-validation-testing-defense.md`, `docs/08-validation-and-iteration.md` |
| 软件路线 | 软件服务工程问题、输入输出、误用边界 | `docs/advanced/09-software-workflows.md`, `docs/09-software-roadmap.md` |
| 评审清单 | 把书本知识转成证据项和门槛项 | `docs/advanced/10-review-checklists.md`, `docs/10-checklists.md` |
| 引用边界 | RCD / RCVD 使用方式、版权边界、引用字段 | `docs/references.md`, `docs/01-learning-roadmap.md` |

## 交付物

1. 一份公开安全的 RCD / RCVD 审核矩阵，记录知识域、当前覆盖、缺口、修改落点和验证状态。
2. 对 `docs/advanced/01-10` 的必要补写和纠偏，使高级手册能吸收 RCD / RCVD 的核心知识框架。
3. 对 `docs/00-10` 的必要摘要更新和章节回链，使快速层能正确引导读者进入高级层。
4. 对 `docs/references.md` 的引用边界加强，说明章节索引、正式引用和版权安全之间的区别。
5. 一次最终质量检查，覆盖 Markdown 格式、链接、构建、源文件名泄露和私有数据泄露风险。

## 审核矩阵字段

审核矩阵应采用可维护的表格结构，至少包含：

- 知识域
- RCD / RCVD 参考角色
- 当前文档落点
- 当前判断
- 缺口或风险
- 修改动作
- 公开安全边界
- 验证方式

矩阵不记录页图、原表格、长引文或扫描内容。若某项需要正式引用，只记录贡献者应补充作者、版次、章节和页码，不在矩阵中复制受版权保护内容。

## 修改原则

正文应避免“某书说了什么”的堆叠写法，优先写成：

- 工程问题：为什么这个知识点影响悬架设计。
- 输入和输出：读者需要准备什么，完成后应该产出什么。
- 判断边界：在哪些假设下成立，哪些情况需要重新验证。
- 常见错误：新人最容易误用的地方。
- 验证方法：计算、仿真、测试、评审或相关性证据。

重要英文术语保留在中文旁边，方便检索和国际协作。例如 tire behavior、load transfer、ride rate、roll rate、motion ratio、hardpoints、K&C、compliance、correlation。

## 安全边界

允许公开：

- 理论框架、设计流程、工程判断、模型边界、软件工作流、评审逻辑、验证方法和学习建议。

禁止公开：

- RCD / RCVD 扫描内容、原图、原表格、长段原文、可替代书籍内容。
- 历史车辆硬点、关键底盘参数、私有轮胎拟合参数、详细载荷表、内部测试数据、未脱敏截图、内部文件名和可识别队伍记录。

## 验证计划

实施完成前需要至少运行：

- `git diff --check`
- Markdown 内链检查
- `mkdocs build --strict`
- 针对 raw source filename、私有数据模式和长引文风险的文本扫描
- 针对 RCD / RCVD 关键术语的覆盖扫描，确认新增内容分布在高级层和快速层

验证结果应在最终回复中说明。若构建或检查失败，必须说明失败命令、失败原因和未完成风险。

## 验收标准

本次工作完成时应满足：

1. 高级手册能体现 RCD / RCVD 中悬架设计相关的主要知识链条，而不是只给出书单。
2. 快速层能指引读者知道读哪部分、为什么读、读完要产出什么。
3. 关键技术概念没有明显错误、绝对化结论或缺少边界的强断言。
4. 每个补充内容都能落到工程问题、输入输出、验证方法或评审清单。
5. 公开内容不泄露扫描书籍内容、私有参数、内部文件名或可反推历史车辆的数据。
6. 构建和基础质量检查通过，或清楚记录无法通过的原因。

## 后续实施计划入口

设计获批后，下一步进入实施计划。实施计划应先建立审核矩阵，再按章节批量修改文档，最后执行质量检查和公开安全扫描。
