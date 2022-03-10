import Chat from "./components/chat";
import { useMessages } from "./hooks";
import styles from "./App.module.scss";
import { MessageWithoutId } from "./hooks/useMessages";
import dayjs from "dayjs";

const initialMessages: MessageWithoutId[] = [
  {
    content: "你好，我是 Lagom",
    type: "text",
    user: {
      avatar: "https://i.imgur.com/CDE9fbS.jpg",
      name: "lagom",
    },
  },
  {
    content: "以上是打招呼的内容",
    type: "system",
  },
  {
    content: "你已添加了 Lagom，现在可以开始聊天了。",
    type: "system",
  },
  {
    content: "Hello",
    position: "right",
    type: "text",
    user: {
      avatar: "https://i.imgur.com/dl4Ipmm.jpg",
      name: "zxf",
    },
  },
  {
    content: "我是郑贤锋",
    position: "right",
    type: "text",
    user: {
      avatar: "https://i.imgur.com/dl4Ipmm.jpg",
      name: "zxf",
    },
  },
  {
    content: "遇到一个跨域问题，我不知道怎么处理，能帮我看看吗？",
    type: "text",
    user: {
      avatar: "https://i.imgur.com/CDE9fbS.jpg",
      name: "lagom",
    },
  },
  {
    content: "https://i.imgur.com/wJ9iXFC.png",
    type: "image",
    user: {
      avatar: "https://i.imgur.com/CDE9fbS.jpg",
      name: "lagom",
    },
  },
  {
    content: "我帮你找下资料",
    position: "right",
    type: "text",
    user: {
      avatar: "https://i.imgur.com/dl4Ipmm.jpg",
      name: "zxf",
    },
  },
  {
    content: "常见的跨域解决方案有 CORS、反向代理、JSONP 等",
    createdAt: dayjs().add(5.5, "m").toDate(),
    position: "right",
    type: "text",
    user: {
      avatar: "https://i.imgur.com/dl4Ipmm.jpg",
      name: "zxf",
    },
  },
  {
    content:
      "访问这个地址 https://segmentfault.com/a/1190000011145364 可以解决这个问题",
    createdAt: dayjs().add(5.5, "m").toDate(),
    position: "right",
    type: "text",
    user: {
      avatar: "https://i.imgur.com/dl4Ipmm.jpg",
      name: "zxf",
    },
  },
  {
    content: "好的，我研究下，谢谢",
    type: "text",
    user: {
      avatar: "https://i.imgur.com/CDE9fbS.jpg",
      name: "lagom",
    },
  },
];

const App = () => {
  const messages = useMessages(initialMessages);

  return (
    <div className={styles.main}>
      <div className={styles.mainContainer}>
        <Chat className={styles.chat} messages={messages} />
      </div>
    </div>
  );
};

export default App;
