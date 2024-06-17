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
  research: string,
  products: string,
  assignment: string,
  addMessage: { (message: IMessage): void },
  setArticle: { (article: string): void }
) => {
  
  const url = `${
    endpoint.endsWith("/") ? endpoint : endpoint + "/"
  }api/article`;

  const configuration = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      research: research,
      products: products,
      assignment: assignment,
    }),
  };

    addMessage({
      type: "message",
      message: "Starting writing task"
    });

  const response = await fetch(url, configuration);
  const data = await response.json();

  setArticle(data.article);
};
