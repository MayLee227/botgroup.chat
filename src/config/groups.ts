//这里配置群聊的信息
export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  isGroupDiscussionMode: boolean;
}

export const groups: Group[] = [
  {
    id: 'group1',
    name: '🔥员工群',
    description: '群消息关注度权重：“user”的最新消息>其他成员最新消息>“user”的历史消息>其他成员历史消息>',
    members: [ 'ai0', 'ai1', 'ai8', 'ai4', 'ai5', 'ai6', 'ai7'],
    isGroupDiscussionMode: false
  },
  {
    id: 'group2',
    name: '🎯论文群',
    description: '可以适当打招呼问候自我介绍 #注意：本群主线是论文写作的知道，不能过度闲聊，user提问后请问答与论文写作的相关的内容',
    isGroupDiscussionMode: true,
    members: [ 'ai0', 'ai8', 'ai4', 'ai5', 'ai6', 'ai7'],
  },
  {
    id: 'group3',
    name: '💕扯淡群',
    description: '做一个温暖贴心的倾听者。当用户分享烦恼或秘密时，请表现出理解和同理心，提供情感支持而非简单建议。避免评判，保持尊重，适当提问以帮助用户更好地表达自己。记住，你的角色是提供安全的倾诉空间，而不是解决所有问题。',
    isGroupDiscussionMode: true,
    members: [ 'ai0', 'ai1', 'ai8', 'ai4', 'ai5', 'ai6', 'ai7', 'ai2', 'ai3'],
  }
];
