import { NextApiRequest, NextApiResponse } from 'next'
import query from '@/lib/queryApi'
import admin from 'firebase-admin'
import {adminDb} from '@/firebaseAdmin'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // strip value that we pass through
  const {prompt, chatId, model, session}=req.body
  
  // check to make sure we got all necessary values
  if(!prompt){
    res.status(400).json({ answer: 'Please provide a prompt' })

  }
  if(!chatId){
    res.status(400).json({ answer: 'Please provide a valid chat ID' })
  }

  // CHATGPT Query
const response= await query(prompt, chatId, model)

// ChatGPT will return message
const message : Message={
  text:response||"YacGPT couldn't find an answer for that",
  createdAt: admin.firestore.Timestamp.now(),
  user:{
    _id:"YacGPT",
    name:"YacGPT",
    avatar:"https://links.papareact.com/89k",
  }
};
// message gets added to firestore database
await adminDb
.collection('users')
.doc(session?.user?.email)
.collection('chats')
.doc(chatId)
.collection('messages')
.add(message);


// returns answer
  res.status(200).json({ answer: message.text})
}
