import { DocumentData } from "firebase/firestore";
import Image from "next/image";

type Props = {
  message: DocumentData;
};

function Message({ message }: Props) {
  const isYacGPT = message.user.name === "YacGPT";

  return (
    <div className={`py-5 text-white ${isYacGPT && "bg-[#434654]"}`}>
      <div className="flex space-x-5 px-10 max-w-2xl mx-auto">
        <Image width={15} height={15} src={message.user.avatar} alt="user picture" className="h-8 w-8" />
        <p className="pt-1 text-sm">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
