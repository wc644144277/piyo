export type BotType = 'simple' | 'workflow' | 'algorithm' | 'advanced';

export interface Bot {
  name: string;
  description: string;
  type: BotType;
  icon: File | null;
}

export interface BotFormData extends Bot {}

export interface BotTypeInfo {
  id: BotType;
  title: string;
  description: string;
}

export const BOT_TYPES: BotTypeInfo[] = [
  {
    id: 'simple',
    title: '小白模式',
    description: '轻量级大模型能力'
  },
  {
    id: 'workflow',
    title: '工作流模式',
    description: '自定义工作流编排'
  },
  {
    id: 'algorithm',
    title: '算法包模式',
    description: '自定义算法包'
  },
  {
    id: 'advanced',
    title: '高级模式',
    description: '自定义工作流与算法包'
  }
];