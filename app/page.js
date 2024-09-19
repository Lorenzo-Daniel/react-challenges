import { FaReact } from "react-icons/fa";

//-----------------------------------------

export default function Home() {
  return (
    <div className="max-w-lg m-auto main-height">
      <div className="flex flex-col items-center p-2 pt-12">
        <div className="flex flex-col items-center">
          <FaReact size={200} color="#1f2937" />
          <h1 className="mt-3 text-2xl">( React Challenges )</h1>
        </div>
        <div className="text-center mt-3">
          <p>
            The content of this web application consists of a series of
            challenges I have completed as exercises to improve my skills in
            React.js. Most of the challenges are sourced from
            <a
              href={"https://www.algochurn.com/frontend"}
              className="ms-1 text-blue-500"
              target="_blanck"
            >
              https://www.algochurn.com/frontend
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
