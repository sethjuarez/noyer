import { endpoint } from "../endpoint";
export interface IMessage {
  type: "message" | "researcher" | "marketing" | "writer";
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}

export interface IArticleCollection {
  current: number;
  articles: string[];
  currentArticle: string;
}

export interface IChatTurn {
  name: string;
  avatar: string;
  image: string | null;
  message: string;
  status: "waiting" | "done";
  type: "user" | "assistant";
}

export const startWritingTask = async (
  description: string,
  keywords: string,
  audience: string,
  addMessage: { (message: IMessage): void },
  addPost: { (post: string): void }
) => {
  const url = `${endpoint.endsWith("/") ? endpoint : endpoint + "/"}api/posts`;

  const configuration = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      description: description,
      keywords: keywords.split(",").map((keyword: string) => keyword.trim()),
      audience: audience,
    }),
  };

  addMessage({
    type: "message",
    message: "Starting writing task",
  });

  const response = await fetch(url, configuration);
  const data = await response.json();
  console.log(data);

  if(Array.isArray(data)) {
    data.forEach((post: string) => {
      addPost(post);
    });
  }
};
