import React, { useRef } from "react";
import language from "../utlis/Language";
import { useSelector } from "react-redux";
import openai from "../utlis/openai";

const GptSearch = () => {
  const ref = useRef(null);
  const langselector = useSelector((state) => state.translate.lang);

  const handlesearch = () => {
    // const searchquery =
    //   "Act like an movie recommender and suggest movie for the query :" +
    //   ref.current.value +
    //   "suggest only 5 movies in the format of given example  example: guru,don,theri,love today,good night";
    // async function main() {
    //   const completion = await openai.chat.completions.create({
    //     messages: [{ role: "user", content: searchquery }],
    //     model: "gpt-3.5-turbo",
    //   });
    //   console.log(completion);
    // }
    // main();
  };
  return (
    <div className=" h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg')] ">
      <div className="flex items-center justify-center h-2/4 w-full ">
        <div className="bg-black p-4 flex gap-6">
          <input
            ref={ref}
            type="text"
            placeholder={language[langselector].placeholder}
            className="w-96 px-4 py-2 text-white  bg-gray-700 rounded-lg outline-slate-400 bg-opacity-65"
          />
          <button
            onClick={handlesearch}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            {language[langselector].search}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GptSearch;
