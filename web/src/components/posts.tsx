import Block from "./block";
import { useAppSelector } from "../store/hooks";

export const Posts = () => {

  const posts = useAppSelector((state) => state.posts);

  return (
    <Block innerClassName="text-left" outerClassName="mt-10 mb-40">
      {posts && posts.length > 0  && posts.map((post, index) => (
        <div key={index} className="mb-4 even:bg-slate-200 p-4 border border-slate-600 rounded-xl">
          {post}
        </div>
      ))}
    </Block>
  );
};

export default Posts;
