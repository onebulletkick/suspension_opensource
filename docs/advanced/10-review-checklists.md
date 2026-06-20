# 10 高级评审清单

## 本章解决的问题

快速预览层的 [10 检查清单](../10-checklists.md) 适合新队员建立评审顺序。本章把高级手册 [01](01-design-targets.md) 到 [09](09-software-workflows.md) 的证据要求整理成 review gates：每个阶段不仅问“做了吗”，还要问“证据是什么、风险在哪里、哪些内容属于项目资料、结论影响哪一章”。

本清单服务三个目标：

- 帮助团队在设计冻结、结构释放、测试前、答辩前和资料发布前做一致评审。
- 把目标、轮胎、硬点、簧上系统、仿真、载荷、复材、验证、软件和文档连接成同一条证据链。
- 守住资料边界：保留工程逻辑，避开原始数据、历史车辆识别信息、源截图、源文件名、复制段落、内部表格或能反推出具体赛车的参数组合。

本章不是安全认证，也不能替代规则审查、专业结构评审、制造质量控制、现场测试流程和团队内部 release decision。若证据不足，应写成“待验证”或“带风险通过”，而不是把未发现问题包装成已经证明。

## 如何使用本清单

建议把每次评审结论分成四类：`通过`、`带风险通过`、`退回修改`、`暂停公开`。`通过` 表示证据足以进入下一阶段；`带风险通过` 必须写清关闭条件；`退回修改` 说明当前输入或结论无法支撑下一步；`暂停公开` 表示内容可能包含私有数据、未授权图像、内部编号或来源暴露风险。

使用方式：

1. 先读快速版 [10 检查清单](../10-checklists.md)，确认整体顺序。
2. 对照本章每张表，逐项填写证据链接、负责人、版本和结论等级。
3. 若某项没有证据，不要用经验补空；写成待补充，并指向对应高级章节。
4. 若某项使用项目资料，学习文档中写字段、流程和判断方式，原始值、源图、源表和文件名留在项目资料中。
5. 每次轮胎模型、硬点、质量、弹簧阻尼、载荷、制造或测试数据变化后，重新打开受影响章节。

## RCD / RCVD 知识内化检查

RCD / RCVD 进入项目文档时，不应停留在章节摘录或名词解释。每个借来的概念都要改写成公开安全的本地工程判断：能公开的写成通用流程、字段、边界和验证证据；还没有证据的写成待验证或待补充，不暴露原始数据、私有参数、源图、源文件名或可反推出历史方案的信息。

| 检查项 | 合格写法 | 常见风险 | 公开处理 |
| --- | --- | --- | --- |
| 概念 concept | 用中文解释概念，并保留必要英文术语便于检索 | 只摘书中定义，读者不知道它影响哪一环 | 改写成原创教学语言，必要时链接参考资料规则 |
| 本地工程问题 local engineering question | 写成“这个概念要帮助本车回答什么问题” | 把书中结论当成通用答案或调校配方 | 连接到目标、轮胎、几何、簧上、仿真、结构或验证章节 |
| 输入 input | 写清需要哪些参数、单位、坐标、版本和来源类型 | 输入来自不同版本，或缺少轮胎 / 质量 / 硬点边界 | 学习文档写字段和假想范围，项目资料保存精确值 |
| 输出 output | 写清输出表、图、模型、检查清单或决策记录 | 输出只是软件截图或结论口号 | 输出必须能被下一环节复核和追溯 |
| 边界 / 假设 boundary / assumption | 写清适用工况、未覆盖区域、模型简化和待验证项 | 忽略数据窗口、线性假设、柔度、温度或测试条件 | 用“当前假设下”“待验证”标注限制 |
| 验证证据 verification evidence | 写清手算、仿真、K&C、FEA、实车测试、车手反馈或 post-run inspection 如何支持它 | 借来的概念没有任何本地证据，却被写成已证明 | 没有证据时写成 pending-verification note，而不是确定结论 |

## 公开来源边界评审

公开来源应先被审计，再进入正文。来源的价值通常是“支持方法边界、流程组织或可测证据类型”，不是提供可复制的车辆答案。

| 来源类别 | 可以支撑 | 不能支撑 | 评审 gate |
| --- | --- | --- | --- |
| 官方规则与评分表 | 规则检查、design event 证据类型、答辩组织 | 永久通用规则结论或跨赛区分值口径 | 是否记录年份、发布者和当前版本复核需求 |
| MIT / MDPI / Purdue / Cincinnati 等仿真案例 | MBD、kinematics optimization、fixed / adjustable 参数、same-scenario correlation workflow | 本车 hardpoints、setup、目标权重、圈速或通过阈值 | 正文是否只吸收模型层级、参数分类和 correlation 边界 |
| Virginia Tech / link-force / FS Wiki 载荷来源 | pinned / two-force / truss 假设、FBD、杆件导力、FEA 边界审查 | 本车载荷值、材料裕度、结构 release decision | 是否写清这些来源支撑方法，不支撑安全结论 |
| Dewesoft / Mantracourt / HBK / Micro-Measurements 等 DAQ 案例 | channel planning、标定、应变 / 位移 / IMU / 制动压力证据、信号质量降级 | 必选硬件、通用通道数量、通用相关性百分比或通过阈值 | 是否把供应商案例转成可测证据类型，而不是采购清单 |
| 复材公开来源 | 失效模式、材料 / 铺层 / 连接证据等级、制造风险和 coupon caution | 通用 coupon 方案、allowables、铺层表、胶接工艺、释放阈值 | 是否保守写成证据等级和待验证边界 |
| 软件官方资料 | 工具输入输出、版本依赖、最小 workflow | 软件结果自动验证、某工具是唯一推荐 | 是否把软件写成工程问题链路，而不是工具目录 |

## 目标与接口评审

| 问题 | 需要的证据 | 常见风险 | 避开的内容 | 对应章节 |
| --- | --- | --- | --- | --- |
| 悬架目标是否能追溯到整车目标、规则、车手反馈或上一轮验证问题？ | 目标分解表、规则版本、反馈现象记录、验证矩阵和更新触发条件 | 直接沿用旧车目标；把口号当成可验证目标；目标之间冲突但未记录取舍 | 历史成绩、车辆编号、内部目标数值、车手个人记录 | [01 设计目标](01-design-targets.md)、[08 验证测试](08-validation-testing-defense.md) |
| 规则派生门槛是否已经进入目标表？ | 当前赛事规则版本、wheel travel / jounce、安装点可视性、wheelbase / track、ground clearance、wheel / tire / fastener 相关检查项 | 把规则最低值当性能目标；规则检查留到装车后；只看往年规则 | 内部 scrutineering 表、未确认规则解释、可识别车辆测量值 | [01 设计目标](01-design-targets.md)、[03 几何硬点](03-geometry-and-hardpoints.md)、[04 弹簧阻尼](04-spring-damper-roll-and-ride.md) |
| 目标、约束 constraint 和偏好 preference 是否分开管理？ | 每项目标的类型、单位、来源、负责人、验证方法和受影响章节 | 把熟悉的布置当成硬约束；用偏好压过规则、安全或制造边界 | 具体内部责任人、会议原始记录、可识别项目计划 | [01 设计目标](01-design-targets.md) |
| 跨组接口是否闭合？ | 车架、转向、制动、传动、气动、车身、制造、测试接口表；坐标系和单位说明 | 只和车架确认硬点；轮辋、制动或传动晚变更导致几何返工 | 精确硬点、未授权 CAD 截图、内部接口文件名 | [01 设计目标](01-design-targets.md)、[03 几何硬点](03-geometry-and-hardpoints.md) |
| 早期输入变化是否触发重新评审？ | 轮胎模型、质量、质心、轮距、车架节点、规则和测试结果的变更日志 | 上游输入更新后，偏频、载荷、硬点和仿真继续使用旧版本 | 项目版本库路径、原始变更表、历史参数组合 | [01 设计目标](01-design-targets.md)、[05 仿真优化](05-simulation-optimization-correlation.md)、[09 软件工作流](09-software-workflows.md) |

## 轮胎与整车输入评审

| 问题 | 需要的证据 | 常见风险 | 避开的内容 | 对应章节 |
| --- | --- | --- | --- | --- |
| 轮胎数据覆盖是否匹配设计工况？ | `F_z`、`alpha`、`kappa`、`camber`、胎压、温度、轮辋、速度和联合滑移覆盖矩阵 | 只看峰值侧向力；缺少联合滑移却做制动入弯定量结论 | 原始轮胎数据、私有曲线、具体型号对比表、供应商资料 | [02 轮胎输入](02-tire-and-vehicle-inputs.md) |
| 坐标、符号和单位是否统一？ | SAE / ISO-style 转换说明、左右轮镜像规则、单轮扫描和符号 sanity check | `F_y`、`M_z`、toe、camber 或 slip ratio 正负号反了 | 软件原始设置截图、内部转换脚本路径、源数据文件名 | [02 轮胎输入](02-tire-and-vehicle-inputs.md)、[09 软件工作流](09-software-workflows.md) |
| 轮胎模型的用途和边界是否写清？ | 模型形式、拟合残差、设计窗口、外推限制、版本、更新触发和 correlation 计划 | Magic Formula / Pacejka-style 拟合好看但设计窗口局部失真；模型被用于结构安全证明 | 模型拟合参数、原始残差图、授权受限模型文件 | [02 轮胎输入](02-tire-and-vehicle-inputs.md)、[05 仿真优化](05-simulation-optimization-correlation.md) |
| 整车输入是否与后续模型同版本？ | 质量、质心、轴距、轮距、角重、气动、制动 / 驱动边界和悬架参数版本表 | 轮胎、质量和硬点来自不同冻结状态；动态轮荷未进入簧上和载荷讨论 | 历史精确质量属性、内部角重表、比赛策略输入 | [02 轮胎输入](02-tire-and-vehicle-inputs.md)、[04 弹簧阻尼](04-spring-damper-roll-and-ride.md)、[06 载荷金属](06-loads-metal-structure.md) |

## 几何与硬点评审

| 问题 | 需要的证据 | 常见风险 | 避开的内容 | 对应章节 |
| --- | --- | --- | --- | --- |
| 坐标系、单位、左右镜像和硬点版本是否可追溯？ | 硬点表模板、CAD / K&C 版本、点位命名、来源和接口状态 | CAD、K&C、FEA 和测量各用一套坐标；左右镜像异常 | 硬点精确位置、源 CAD 截图、内部硬点文件名 | [03 几何硬点](03-geometry-and-hardpoints.md)、[09 软件工作流](09-software-workflows.md) |
| 规则相关几何包络是否已扫描？ | wheel travel / jounce、轮辋内 clearance、安装点 visibility、极限转向、bump / rebound 和含车手车高状态 | 只检查静态直行姿态；满足曲线目标但不满足技术检查或维护检查 | 车辆专属测量值、技术检查照片、内部整改记录 | [01 设计目标](01-design-targets.md)、[03 几何硬点](03-geometry-and-hardpoints.md) |
| 主销、正视、侧视和转向几何是否服务轮胎与整车目标？ | caster、KPI / SAI、scrub radius、mechanical trail、roll center、camber、toe、Ackermann、anti-dive / anti-squat 的目标来源 | 为单条曲线优化，破坏转向力、制动稳定、包络或载荷路径 | 历史目标值、内部曲线包、源图和可识别参数组合 | [02 轮胎输入](02-tire-and-vehicle-inputs.md)、[03 几何硬点](03-geometry-and-hardpoints.md) |
| K&C 工况是否覆盖组合姿态？ | 平行跳动、单轮跳动、转向、侧倾、制动、加速、组合极限姿态的曲线和解释 | 只看静态或平行跳动；bump steer、roll center migration 或极限转向干涉漏检 | 原始 K&C 图、商业软件截图、精确模型设置 | [03 几何硬点](03-geometry-and-hardpoints.md)、[05 仿真优化](05-simulation-optimization-correlation.md) |
| 包络、制造、维护和结构路径是否一起评审？ | 轮辋 / 制动 / 转向 / 传动 / 气动 / 车架包络检查，杆端摆角和工具空间记录 | 曲线通过但车上装不下；支座不在合理节点；调校件赛场不可达 | 内部 CAD 截面、制造夹具尺寸、车辆专属孔位 | [03 几何硬点](03-geometry-and-hardpoints.md)、[06 载荷金属](06-loads-metal-structure.md) |

## 弹簧阻尼与侧倾评审

| 问题 | 需要的证据 | 常见风险 | 避开的内容 | 对应章节 |
| --- | --- | --- | --- | --- |
| 轮端刚度、弹簧刚度、轮胎刚度和偏频定义是否清楚？ | `k_s`、`k_w`、`k_t`、`k_eff`、`MR_x`、单角簧上质量、单位和模型约定 | 运动比定义倒置；把轮胎刚度混入 wheel rate 却不标注 | 历史弹簧参数、角重数值、源计算表 | [04 弹簧阻尼](04-spring-damper-roll-and-ride.md) |
| 阻尼目标是否落在真实工作区间？ | 阻尼器速度-力曲线、轮端速度换算、低 / 中 / 高速区间、压缩 / 回弹方向和台架或待验证说明 | 只给名义阻尼比；没有速度直方图；调节档位在轮端不可分辨 | 阻尼器私有曲线、具体档位配方、供应商数据 | [04 弹簧阻尼](04-spring-damper-roll-and-ride.md)、[08 验证测试](08-validation-testing-defense.md) |
| 侧倾刚度分配、俯仰和附加弹性元件是否与轮胎和气动目标一致？ | 前后侧倾刚度贡献、roll gradient、动态轮荷、anti-dive / anti-squat、第三弹簧或限位触发逻辑 | 只追求车身更稳；忽略轮胎动载和路面跟随；非线性限位无法解释 | 历史侧倾配方、第三弹簧垫片组合、比赛调校策略 | [02 轮胎输入](02-tire-and-vehicle-inputs.md)、[04 弹簧阻尼](04-spring-damper-roll-and-ride.md)、[05 仿真优化](05-simulation-optimization-correlation.md) |
| 行程、运动比、布置和可调范围是否可制造可测试？ | 全行程 motion ratio 曲线、减振器行程、pushrod / pullrod 载荷、摇臂支座、限位和维护记录 | 静态运动比合理但全行程突变；触底或顶死；换簧和调防倾杆不可重复 | 精确摇臂孔位、内部布置图、专用制造尺寸 | [03 几何硬点](03-geometry-and-hardpoints.md)、[04 弹簧阻尼](04-spring-damper-roll-and-ride.md) |
| 可用行程是否按规则状态实测或可测？ | 含车手状态、目标车高、胎压、bump / rebound、damper stroke、bump stop、spring stack 和测量方法 | 靠静态运动比推断可用行程；预载或限位提前吃掉 jounce | 实车专属行程数值、技术检查整改照片、内部调校表 | [04 弹簧阻尼](04-spring-damper-roll-and-ride.md)、[08 验证测试](08-validation-testing-defense.md) |

## 仿真、优化与相关性评审

| 问题 | 需要的证据 | 常见风险 | 避开的内容 | 对应章节 |
| --- | --- | --- | --- | --- |
| 仿真是否从明确设计问题出发？ | 设计问题、模型层级选择、模型边界、输入版本和预期输出 | 先建复杂模型再倒推用途；用高保真包装低可信输入 | 内部模型文件、软件截图、精确求解设置 | [05 仿真优化](05-simulation-optimization-correlation.md) |
| 数量级、符号、左右镜像和单位是否通过 sanity check？ | 手算或表格对照、自由体图、动画检查、通道符号说明和后处理脚本版本 | 图表平滑但力方向错；线性模型结果用于极限联合滑移 | 原始仿真结果表、源脚本路径、可识别图表 | [02 轮胎输入](02-tire-and-vehicle-inputs.md)、[05 仿真优化](05-simulation-optimization-correlation.md)、[09 软件工作流](09-software-workflows.md) |
| fixed / adjustable / derived / measured 是否分开？ | 参数主表、冻结状态、可调范围、derived output 和 measured input 的更新触发 | 把固定硬点、质量或 CG 当成 setup 变量；把 derived output 手工改成 input | 历史参数组合、内部 setup 表、真实测量值 | [05 仿真优化](05-simulation-optimization-correlation.md)、[09 软件工作流](09-software-workflows.md) |
| DOE、灵敏度和优化是否有工程边界？ | design variables、objective function、constraints、weights、变量范围、拒绝方案和原因 | 优化器找到不可制造、不可装配或超出数据覆盖的方案 | 精确权重、内部目标函数表、历史优化结果 | [03 几何硬点](03-geometry-and-hardpoints.md)、[05 仿真优化](05-simulation-optimization-correlation.md) |
| MIT / MDPI / Purdue / Cincinnati 等仿真来源边界是否记录？ | 每个来源支持模型层级、参数分类、optimization setup、same-scenario correlation 中的哪一类判断 | 用公开案例的车辆、setup、目标权重、性能提升或相关性数字当本仓库通用结论 | 受版权保护全文、未授权图表、内部源文件名 | [05 仿真优化](05-simulation-optimization-correlation.md)、[../references.md](../references.md) |
| 实车相关性是否诚实记录？ | 测试版本、仿真版本、一致处、差异处、修正动作和复核计划 | 为贴合一次测试过度校准；没有先检查传感器和测试条件 | 原始测试数据、内部视频、精确分段成绩 | [05 仿真优化](05-simulation-optimization-correlation.md)、[08 验证测试](08-validation-testing-defense.md) |
| correlation 是否没有越界？ | 同一问题、同一场景、同一版本、同一滤波和通道质量说明 | 把“曲线接近”写成结构安全、全部工况正确或赛事性能证明 | 原始测试曲线、内部滤波脚本、比赛策略 | [05 仿真优化](05-simulation-optimization-correlation.md)、[08 验证测试](08-validation-testing-defense.md) |

## 载荷与金属结构评审

| 问题 | 需要的证据 | 常见风险 | 避开的内容 | 对应章节 |
| --- | --- | --- | --- | --- |
| 载荷工况是否覆盖真实事件场景？ | 纯制动、稳态转弯、制动入弯、出弯加速、路面冲击、维护 / 顶车等工况定义 | 只取纯工况；机械叠加不可能同时出现的峰值；漏掉维护误操作 | 历史载荷数据表、原始工况数值、内部测试峰值 | [06 载荷金属](06-loads-metal-structure.md) |
| 载荷来源、坐标和版本是否可追溯？ | 理论估算、多体导力、刚柔耦合或测试来源，作用点、方向、单位、峰值时刻和输入版本 | 手算、多体和测试载荷混表；局部坐标转换错误 | 多体原始输出、内部后处理脚本路径、源文件名 | [05 仿真优化](05-simulation-optimization-correlation.md)、[06 载荷金属](06-loads-metal-structure.md) |
| Virginia Tech / link-force / 供应商 DAQ 来源是否只用作边界？ | pinned member、two-force、steering、articulation、link-force validation 和信号质量的来源角色说明 | 把公开论文或供应商案例的载荷、硬件、相关性或安全结论泛化 | 具体载荷、传感器布置照片、供应商私密信息 | [06 载荷金属](06-loads-metal-structure.md)、[../references.md](../references.md) |
| 载荷模型是否有实车相关性计划？ | 应变片、悬架位移、轮速、方向盘角、制动压力、IMU 或赛后物理检查的可测通道；标定和时间同步方案 | FEA 释放后才想起没有任何载荷证据；传感器只能看现象不能闭合载荷路径 | 原始通道数据、内部传感器布置照片、供应商私密信息 | [06 载荷金属](06-loads-metal-structure.md)、[08 验证测试](08-validation-testing-defense.md) |
| FEA 边界条件是否接近真实连接？ | ball joint、rod end、bearing、bracket、weld、fastener、contact、网格和材料说明 | 全固定真实铰接；单点力代替垫片或轴承分布载荷 | 源 CAD、FEA 云图、材料私密值、内部截图 | [06 载荷金属](06-loads-metal-structure.md)、[09 软件工作流](09-software-workflows.md) |
| MBD-to-FEA boundary package 是否完整？ | MBD 工况、峰值时刻、坐标定义、作用点、载荷对象、约束对象、反力平衡和未覆盖风险 | 只给最大载荷或云图；FEA 使用旧几何或旧硬点 | MBD 原始表、内部 run 名、脚本路径、真实载荷值 | [06 载荷金属](06-loads-metal-structure.md)、[09 软件工作流](09-software-workflows.md) |
| 结果解释是否覆盖强度以外的风险？ | load path、位移、应力集中、singularity、plasticity indicator、PEEQ / 等效塑性应变、fatigue、buckling、fastener、weld、制造和设计修正记录 | 只看最大应力；把奇异点当失效或把真实热点当数值伪影；不解释屈服或塑性变量含义 | 历史应力值、安全系数表、失效照片、项目材料参数 | [06 载荷金属](06-loads-metal-structure.md)、[08 验证测试](08-validation-testing-defense.md) |

## 复合材料与制造评审

| 问题 | 需要的证据 | 常见风险 | 避开的内容 | 对应章节 |
| --- | --- | --- | --- | --- |
| 复材失效模式是否逐项识别？ | fiber tension / compression、matrix tension / compression、shear、delamination、local crushing、buckling、pull-out 风险表 | 把复材当各向同性金属；只看一个等效应力或 failure index | 私有铺层表、源公式、材料供应商值、历史失效图 | [07 复材制造](07-composites-and-manufacturing.md) |
| 材料、铺层和坐标系是否与制造一致？ | allowables 来源、折减策略、laminate coordinate system、ply angle、厚度、局部补强和镜像规则 | ply 方向翻转；左右件镜像错误；材料数据与实际工艺不匹配 | 项目铺层表、材料批次私密信息、内部 coupon 数值 | [07 复材制造](07-composites-and-manufacturing.md)、[09 软件工作流](09-software-workflows.md) |
| 公开复材来源是否降级使用？ | 来源只能支撑失效模式、连接风险、制造约束和证据等级的说明 | 用公开资料给通用 coupon、allowable、铺层、胶接工艺或通过阈值 | 公开案例具体结构、尺寸、铺层和测试数值 | [07 复材制造](07-composites-and-manufacturing.md)、[../references.md](../references.md) |
| 连接区和载荷引入是否单独评审？ | 螺栓孔、胶接、嵌件、碳管端部、硬点夹持、垫片、套筒和局部子模型说明 | 中间区域通过但硬点 delamination、crushing 或 pull-out 风险未覆盖 | 内部连接图、胶接配方、嵌件尺寸、未授权照片 | [06 载荷金属](06-loads-metal-structure.md)、[07 复材制造](07-composites-and-manufacturing.md) |
| 制造质量、coupon 和实车复查是否进入 release decision？ | 工艺记录、首件检查、缺陷分级、coupon / joint test、停用标准和赛后复查计划 | 仿真假设完美制造；发现压痕、分层、异响或松动后继续性能测试 | 原始试验数据、内部缺陷照片、供应商或工艺保密表 | [07 复材制造](07-composites-and-manufacturing.md)、[08 验证测试](08-validation-testing-defense.md) |

## 验证、测试与答辩评审

| 问题 | 需要的证据 | 常见风险 | 避开的内容 | 对应章节 |
| --- | --- | --- | --- | --- |
| 每个关键目标是否有验证路径？ | validation matrix、测试方法、数据通道、通过标准、未验证风险和测试顺序 | 目标阶段没有定义数据通道；测试后才补解释 | 精确测试阈值、内部原始日志、比赛策略 | [01 设计目标](01-design-targets.md)、[08 验证测试](08-validation-testing-defense.md) |
| 测试前静态检查是否闭合？ | 车高、角重、toe / camber、胎压胎温、行程限位、紧固、干涉、传感器标定和时间同步记录 | 车辆状态不等于仿真假设；通道方向、零点或时间错位 | 车辆专属设定值、内部检查照片、数据采集文件名 | [08 验证测试](08-validation-testing-defense.md) |
| 动态测试继续前，停测条件和恢复条件是否定义？ | S0-S3 或等效 issue grading、safety stop conditions、降级测试速度 / 工况边界、安全负责人 sign-off、修复后 restart / recovery criteria | 安全异常被降级成调校问题；没有负责人批准就继续动态测试；修复后未复查即恢复性能测试 | 内部事故记录、故障照片、个人签字记录、现场原始日志 | [08 验证测试](08-validation-testing-defense.md) |
| degraded test 是否被单独标注？ | 降级测试目的、速度 / 工况边界、可回答的问题、不能支持的结论和恢复条件 | 低速或单通道复查被写成性能测试、结构 release 或强 correlation | 现场原始日志、精确测试值、内部审批记录 | [08 验证测试](08-validation-testing-defense.md)、[09 软件工作流](09-software-workflows.md) |
| 测试和调校是否支持因果判断？ | 每轮变量、预期变化、数据结果、车手现象、工程推断、下车检查和结论强度 | 一次改多个变量；把车手反馈直接当根因；只看单次圈速 | 车手个人记录、分段成绩、原始视频和语音 | [08 验证测试](08-validation-testing-defense.md)、[05 仿真优化](05-simulation-optimization-correlation.md) |
| 答辩叙事是否诚实覆盖限制？ | 目标、推理、证据、已验证项、未确定项、风险关闭条件和下一季输入 | 堆软件图；隐藏未验证风险；把仿真通过说成实车证明 | 内部比赛记录、裁判反馈原文、私有证据包 | [08 验证测试](08-validation-testing-defense.md)、[10 检查清单](../10-checklists.md) |

## 软件交付物评审

软件教程是否完整，最终要看它能否产生可传递、可复核、可验证的工程交付物。以下清单用于检查每个工具输出是否真的服务技术路线，而不是停留在软件操作截图。

| 交付物检查点 | 需要的证据 | 常见风险 | 避开的内容 | 对应章节 |
| --- | --- | --- | --- | --- |
| 输入来源是否明确？ | 参数主表、轮胎模型版本、硬点版本、载荷工况、测试日志或材料数据等级 | 软件中输入来自旧文件、临时估算或个人记忆，后续无法复现 | 原始数据文件名、内部路径、私有参数组合 | [09 软件工作流](09-software-workflows.md)、[02 轮胎输入](02-tire-and-vehicle-inputs.md) |
| 单位、坐标和正负号是否统一？ | 坐标说明、单位表、左右轮镜像规则、导入导出检查和 sanity check | CAD、Adams、脚本和 FEA 使用不同坐标；toe、camber 或载荷方向反了 | 内部坐标表、可反推硬点的精确点位 | [03 几何硬点](03-geometry-and-hardpoints.md)、[06 载荷金属](06-loads-metal-structure.md) |
| 输出是否说明下游消费者？ | “传给哪个设计环节”字段、接口清单、文件版本、责任人和更新触发条件 | 只保存图表，不知道它要喂给 Adams、FEA、测试还是答辩 | 未授权截图、软件工程文件、内部共享盘链接 | [09 软件工作流](09-software-workflows.md) |
| 模型边界是否写清？ | 适用工况、数据覆盖范围、忽略的物理现象、线性 / 刚体 / 柔性假设和待验证项 | 轮胎模型用于未覆盖工况；刚体 K&C 被当成真实柔度；FEA 约束过硬 | 源模型设置细节、商业软件模板截图 | [02](02-tire-and-vehicle-inputs.md)、[05](05-simulation-optimization-correlation.md)、[06](06-loads-metal-structure.md) |
| 软件输出是否带公开边界？ | 哪些字段可公开、哪些数值 / 图 / 文件留在项目资料、是否需要假想示例或重绘图 | 学习文档直接粘贴 CAD、MBD、FEA、DAQ 截图或源表 | 软件截图、模型文件、真实参数、原始数据、材料值 | [09 软件工作流](09-software-workflows.md)、[../references.md](../references.md) |
| 软件结果是否有独立复核？ | 手算、表格、另一个模型、动画检查、自由体图、实车数据或设计评审记录 | 多体 / FEA / 优化结果单点通过就被当作事实 | 原始测试图、内部会议纪要、未经清理的日志 | [05 仿真优化](05-simulation-optimization-correlation.md)、[08 验证测试](08-validation-testing-defense.md) |
| 输出能否回写到文档和答辩？ | Markdown 说明、图表生成脚本、结论强度、未验证风险和下一步动作 | 会用软件但不能讲清设计因果；答辩只堆图 | 可识别历史车辆的完整证据包、私有比赛策略 | [08 验证测试](08-validation-testing-defense.md)、[09 软件工作流](09-software-workflows.md) |
| 公开边界是否安全？ | 发布检查、重写说明、假想示例或自绘图、来源处理记录 | 把软件截图、源表、模型文件、载荷值或材料值直接放进公开手册 | 原始 PDF / DOCX、CAD、仿真文件、测试数据和未授权图片 | [../references.md](../references.md)、[09 软件工作流](09-software-workflows.md) |

## 软件与文档评审

| 问题 | 需要的证据 | 常见风险 | 避开的内容 | 对应章节 |
| --- | --- | --- | --- | --- |
| 每个软件输出是否有工程问题、输入、输出和边界？ | 软件能力矩阵、模型清单、参数主版本、输出变量说明和支持章节 | 只会操作软件，不知道它回答什么问题；默认模板未经审查 | 内部模型文件、商业软件截图、许可证或机器路径 | [09 软件工作流](09-software-workflows.md) |
| 参数、脚本和报告是否可复现？ | Git 提交、Markdown 记录、参数表、脚本版本、图表单位和生成方法 | 多套参数分散在 Excel、CAD、Adams、FEA 和脚本中 | 原始数据、内部绝对路径、源文件名、私有表格 | [05 仿真优化](05-simulation-optimization-correlation.md)、[09 软件工作流](09-software-workflows.md) |
| 文档是否把证据链连接到章节？ | 每个结论链接目标、轮胎、几何、簧上、仿真、结构、验证或软件章节 | 文档像资料堆叠；无法判断结论来自计算、仿真、测试还是经验 | 内部会议记录、聊天截图、原始评审表 | [01](01-design-targets.md)、[02](02-tire-and-vehicle-inputs.md)、[03](03-geometry-and-hardpoints.md)、[04](04-spring-damper-roll-and-ride.md)、[05](05-simulation-optimization-correlation.md)、[06](06-loads-metal-structure.md)、[07](07-composites-and-manufacturing.md)、[08](08-validation-testing-defense.md)、[09](09-software-workflows.md) |
| 公开资料是否转成章节问题，而不是链接堆？ | 每条来源说明它承担规则 gate、模型边界、流程对照、测试通道或待验证项中的哪一种角色 | 正文堆满来源名但没有回答工程问题；把案例结果当通用结论 | 受版权保护内容、供应商话术、未核对的二手结论 | [../references.md](../references.md)、[README](README.md) |
| 学习模板和项目记录是否分层维护？ | `.gitignore`、发布检查记录、待验证标注和引用 / 来源处理说明 | 把内部 PDF、DOCX、数据、截图、源表或测试日志误提交 | 原始源材料、历史车辆编号、内部路径、未授权图片 | [09 软件工作流](09-software-workflows.md)、[../10 检查清单](../10-checklists.md) |

## 全流程评审门禁图

```mermaid
flowchart TD
  A["目标评审 target review<br>目标 / 约束 / 接口"] --> B["轮胎与整车输入 tire & vehicle inputs<br>数据覆盖 / 坐标 / 模型边界"]
  B --> C["几何与硬点 geometry & hardpoints<br>K&C / 包络 / 制造"]
  C --> D["簧上系统 sprung system<br>弹簧 / 阻尼 / 侧倾 / 俯仰"]
  D --> E["仿真与优化 simulation & optimization<br>模型分层 / DOE / sensitivity"]
  E --> F["载荷与金属 loads & metal<br>工况 / 导力 / FEA"]
  F --> G["复材与制造 composites & manufacturing<br>铺层 / 连接 / 缺陷"]
  G --> H["验证测试 validation & testing<br>静态检查 / 数据 / correlation"]
  H --> I["答辩评审 defense review<br>目标 / 推理 / 证据 / 限制"]
  I --> J["发布检查 release review<br>来源 / 授权 / 链接 / 待验证"]
  J --> K{"是否有新证据或风险<br>new evidence / risk?"}
  K -- "是" --> A
  K -- "否" --> L["版本冻结 versioned docs<br>学习手册 / 传承清单"]
  E -. "模型差异" .-> B
  H -. "相关性修正" .-> E
  F -. "载荷路径问题" .-> C
  G -. "制造限制" .-> F
```

这张图的门禁含义是：每一关都能退回上游。仿真发现差异时回到轮胎和输入；结构载荷路径不合理时回到几何；复材制造不可控时回到载荷、连接和工艺；测试相关性不足时回到模型边界和输入版本；发布前发现私有信息时，暂停发布而不是弱化检查。

## 发布前检查

| 问题 | 需要的证据 | 常见风险 | 避开的内容 | 对应章节 |
| --- | --- | --- | --- | --- |
| 原始数据 raw data 是否完全留在内部？ | `git status`、忽略规则、发布清单和人工抽查记录 | CSV、MAT、xlsx、log、轮胎数据、测试数据或载荷数据表误提交 | 原始测试数据、轮胎原始数据、内部数据包、仿真导出表 | [02 轮胎输入](02-tire-and-vehicle-inputs.md)、[08 验证测试](08-validation-testing-defense.md)、[09 软件工作流](09-software-workflows.md) |
| 链接和来源角色是否复查？ | 每章 `## 本章公开来源`、[参考资料](../references.md)、链接可达性、来源使用边界和待验证说明 | 正文新增来源但公开来源段未同步；弱链接被当核心证据 | 未核对链接、二手镜像、来源不明图片或转载资料 | [../references.md](../references.md) |
| 敏感词和源痕迹是否搜索？ | 搜索内部、原始、截图、源文件名、车辆编号、绝对路径、模型文件扩展名、真实数据扩展名 | 读者可见内容暴露内部资料链或可反推历史车辆 | 内部路径、源文件名、模型名、车号、精确参数组合 | [09 软件工作流](09-software-workflows.md) |
| 历史标识 historical identifiers 是否已移除？ | 文档搜索、人工审读和替代表达 | 车号、年份专属方案、内部代号、队员姓名、供应商项目名暴露 | 车辆编号、内部项目名、个人记录、故障记录 | [01 设计目标](01-design-targets.md)、[08 验证测试](08-validation-testing-defense.md) |
| 源文件名 source filenames 是否没有出现在读者可见内容中？ | `rg` 搜索 `README.md`、`index.html`、`docs/**/*.md`、渲染导航和 asset alt text；本地维护说明另行保存 | 把原始 PDF / DOCX / 表格文件名写进正文、导航或图片说明，暴露来源链；同时把只供维护使用的提取说明误放入仓库 | 源文件名、内部路径、资料夹结构、模型文件名；只供本地维护使用的说明文件不进入仓库 | [09 软件工作流](09-software-workflows.md)、[../10 检查清单](../10-checklists.md) |
| 截图 screenshots 和未经授权图像是否已删除或重绘？ | 图片清单、授权记录、自绘 Mermaid / SVG 说明 | 直接发布 CAD、FEA、Adams、测试视频、聊天或内部报告截图 | 软件截图、CAD 截面、云图、测试照片、聊天记录 | [03 几何硬点](03-geometry-and-hardpoints.md)、[06 载荷金属](06-loads-metal-structure.md)、[07 复材制造](07-composites-and-manufacturing.md) |
| 复制段落 copied passages 是否已改写为原创教学内容？ | 抽样比对、短引用检查、[来源处理说明](../references.md) 和待验证标注 | 源文档长段照搬；旧队伍经验被写成普遍真理 | 源文档原句、长段落、未授权图表说明 | [references.md](../references.md)、[09 软件工作流](09-software-workflows.md) |
| 内部表格 internal tables 是否被替换为字段模板？ | 表格逐项审查：是否含真实硬点、载荷、铺层、材料、调校和测试值 | 表头看似通用，但组合数值可反推出历史车辆 | 精确硬点表、载荷数据表、铺层表、材料表、调校表、测试结果表 | [03](03-geometry-and-hardpoints.md)、[04](04-spring-damper-roll-and-ride.md)、[06](06-loads-metal-structure.md)、[07](07-composites-and-manufacturing.md) |
| 发布结论是否保守且可验证？ | “待验证 / 工程经验 / 当前假设下”标注、章节链接和证据等级 | 用绝对语气声称安全、最快、最优或已证明 | 未覆盖工况的强结论、内部 release decision 原文 | [05 仿真优化](05-simulation-optimization-correlation.md)、[08 验证测试](08-validation-testing-defense.md) |

发布审查可先从公开 artifact 做轻量搜索，命令只用于发现风险线索，不能替代人工审读：

```bash
rg -n "\.(pdf|docx|xlsx|csv|mat|log)\b|内部路径|车辆编号|源文件名|原始数据|截图" README.md index.html docs
rg -n "!\[[^]]*(内部|源图|截图|screenshot|raw)" README.md index.html docs
```

发布前最低动作：

- 在读者可见内容中搜索并删除原始数据、源文件名、内部路径、车辆编号、未授权截图和内部表格；只供本地维护使用的提取说明应留在仓库之外。
- 检查每章 `## 本章公开来源` 与正文技术主张一致，避免新增未经确认的弱链接。
- 把具体数值改成字段、流程、单位说明、趋势和保守判断。
- 每个技术结论至少链接一个高级章节；证据不足的内容写成 `待补充` 或 `待验证`。
- 重新检查 [docs/advanced/README.md](README.md) 的资料边界是否与本章一致。

## 输出物

高级评审不只输出“通过 / 不通过”。建议至少保留以下输出物：

- 评审门禁记录：每一关的结论、证据链接、未关闭风险和责任人，原始记录留在项目资料中。
- 发布修改清单：哪些内容被改写、合并、删除或标注为待验证。
- 发布决策 release decision：说明本次发布范围、项目资料类型和下一轮补充计划。

## 常见错误

- 把清单当成一次性勾选，而不是设计、仿真、结构、测试和发布之间反复退回的门禁。
- 用“有仿真图”替代证据链，没有说明输入、单位、边界条件、版本和验证状态。
- 在发布内容中留下源文件名、内部表格、截图或可反推历史车辆配置的组合信息。
- 为了让文档显得完整，把未验证经验写成确定结论。

## 与其它章节的关系

| 章节 | 本清单如何使用它 |
| --- | --- |
| [快速版 10 检查清单](../10-checklists.md) | 提供轻量顺序和入门问题；本章提供高级证据表和发布门禁。 |
| [01 设计目标与约束分解](01-design-targets.md) | 提供目标、约束、偏好、接口和更新触发，本章把它们变成第一道评审门。 |
| [02 轮胎与整车输入](02-tire-and-vehicle-inputs.md) | 提供轮胎数据、模型边界和整车输入，本章检查其证据是否足够支撑后续设计。 |
| [03 悬架几何与硬点](03-geometry-and-hardpoints.md) | 提供硬点、K&C、包络和制造逻辑，本章检查几何是否可解释、可制造、可追溯。 |
| [04 弹簧、阻尼、侧倾与车身姿态](04-spring-damper-roll-and-ride.md) | 提供 wheel rate、motion ratio、damping、roll / pitch 逻辑，本章检查参数链和调校边界。 |
| [05 仿真、优化与相关性验证](05-simulation-optimization-correlation.md) | 提供模型分层、优化和 correlation 方法，本章检查模型是否服务决策并回到实车证据。 |
| [06 载荷与金属结构校核](06-loads-metal-structure.md) | 提供载荷工况、导力和金属件 FEA 评审，本章检查结构结论是否保守且可制造。 |
| [07 复合材料校核与制造风险](07-composites-and-manufacturing.md) | 提供复材失效、铺层、连接和制造质量逻辑，本章检查复材 release decision 的证据等级。 |
| [08 验证、测试、答辩与传承](08-validation-testing-defense.md) | 提供测试矩阵、数据相关、问题分级和答辩叙事，本章检查实车证据是否闭环。 |
| [09 软件工作流与能力成长](09-software-workflows.md) | 提供软件输入、输出、误导性用法和文档版本化方法，本章检查可复现性和资料边界。 |

最终评审记录建议保留三份版本：项目详细版、学习整理版和待验证问题版。项目详细版服务真实工程；学习整理版服务传承和开源传播；待验证版提醒下一次设计、测试或文档任务从哪里继续。

## 本章公开来源

- [FSAE Design Judging Score Sheet](https://www.fsaeonline.com/content/fsae%20design%20score%20sheet%20150pt.pdf)，用于把评审项分成 design、build、refinement / validation 和 understanding。
- [DesignJudges: A Field Guide to the Design Event](https://www.designjudges.com/articles/a-field-guide-to-the-design-event)，用于设计报告、证据包、现场展示、多人答辩和反馈复盘。
- [DesignJudges: Conceptual and Objective Design in FSAE](https://www.designjudges.com/articles/conceptual-and-objective-design-in-fsae)，用于把整车目标、概念设计、质量模型和仿真边界纳入检查清单。
- [参考资料：章节引用索引](../references.md#章节引用索引)，用于检查每个章节是否把公开来源转成工程问题、证据和边界，尤其是仿真案例、载荷 / DAQ 案例和复材来源的使用边界。
