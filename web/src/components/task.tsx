import {
  PaperAirplaneIcon,
  ClipboardDocumentIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { IMessage, startWritingTask } from "../store";
import { useAppDispatch } from "../store/hooks";
import { addMessage } from "../store/messageSlice";
import { addPost } from "../store/postSlice";

export const Task = () => {
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");
  const [audience, setAudience] = useState("");

  const dispatch = useAppDispatch();

  const setExample = () => {
    setDescription(
      "The next AI Show will be about using phi-3 mini in your browser."
    );
    setKeywords(
      "GenAI, LLM's, AI Show, phi-3 mini, browser, AI, machine learning, deep learning, neural networks, artificial intelligence, OpenAI"
    );
    setAudience("Technical audience that wants to build with AI.");
  };


  const reset = () => {
    setDescription("");
    setKeywords("");
    setAudience("");
  };

  const newMessage = (message: IMessage) => {
    dispatch(addMessage(message));
  };

  const newPost = (post: string) => {
    dispatch(addPost(post));
  };

  const startWork = () => {
    if (description === "" || keywords === "" || audience === "") {
      return;
    }
    startWritingTask(description, keywords, audience, newMessage, newPost);
  }

  return (
    <div className="p-3">
      <div className="text-start">
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Description
        </label>
        <p className="mt-1 text-sm leading-6 text-gray-400">
          Describe the nature of the social media posts you would like to
          create.
        </p>
        <div className="mt-2">
          <div className=" flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-600">
            <textarea
              id="description"
              name="description"
              rows={3}
              cols={60}
              className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="text-start mt-3">
        <label
          htmlFor="keywords"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Keywords
        </label>
        <p className="mt-1 text-sm leading-6 text-gray-400">
          Create a list of comma seperated keywords you would like emphasized.
        </p>
        <div className="mt-2">
          <textarea
            id="keywords"
            name="keywords"
            rows={3}
            cols={60}
            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
        </div>
      </div>
      <div className="text-start mt-3">
        <label
          htmlFor="audience"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Audience
        </label>
        <p className="mt-1 text-sm leading-6 text-gray-400">
          Who is the intended audience for this content?
        </p>
        <div className="mt-2">
          <textarea
            id="audience"
            name="audience"
            rows={3}
            cols={60}
            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            value={audience}
            onChange={(e) => setAudience(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-end gap-2 mt-10">
        <button
          type="button"
          className="flex flex-row gap-3 items-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={reset}
        >
          <ArrowPathIcon className="w-6" />
          <span>Reset</span>
        </button>
        <button
          type="button"
          className="flex flex-row gap-3 items-center rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={setExample}
        >
          <ClipboardDocumentIcon className="w-6" />
          <span>Example</span>
        </button>
        <button
          type="button"
          className="flex flex-row gap-3 items-center rounded-md bg-blue-100 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={startWork}
        >
          <PaperAirplaneIcon className="w-6" />
          <span>Start Work</span>
        </button>
      </div>
    </div>
  );
};

export default Task;
