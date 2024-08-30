// content, senderId, receiverId, conversationId, reactions, attachments

export type MessageSchema = {
  content: string,
  receiverId :string,
  senderId: string,
  conversationId : string,
  reactions: string[],
  attachments: string[],
  fileAttachment: string[]
  emoji: string,
  timestamp: number, 

}