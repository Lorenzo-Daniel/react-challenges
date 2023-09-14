import Link from "next/link";

export default function Home() {
  return (
    <div className="homepage-container">
      <div className="homepage-title">
        <img src="/react-icon.png" alt="react-icon" />
        <h1>React Challenges</h1>
      </div>
      <div className="homepage-description">
        <p>
          The content of this web application is a series of challenges that I
          have completed as an exercise to improve my skills in React js. The challenges are drawn from
          <a href={"https://www.algochurn.com/frontend"} target="_blanck">
            https://www.algochurn.com/frontend
          </a>
        </p>
      </div>
    </div>
  );
}
