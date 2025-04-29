import Link from "next/link";

export default function Home() {
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center gap-5">
      <div className="flex flex-col items-center text-center font-poppins">
        <div className="text-2xl">My cloud free tier ended on 28 April</div>
        <div className="text-lg text-[#acacac]">So here&apos;s a quick peek through demo videos ↓</div>
        <Link
        className="font-mono text-violet-300 active:text-violet-400 visited:text-violet-500"
          href="https://stirring-lamp-59e.notion.site/s-few-projects-1b9e9513904780d69717c21eae3a16af?pvs=74">
            <span className="underline">Updates</span>
            <span>{" "}←</span>
        </Link>
      </div>
      <video poster="https://res.cloudinary.com/drynqkitl/image/upload/v1745950151/quizai-thumb_g4yw1p.png" width="320" height="240" controls preload="none">
        <source src="https://res.cloudinary.com/drynqkitl/video/upload/v1745949730/Quiz_AI_ajm7i6.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video poster="https://res.cloudinary.com/drynqkitl/image/upload/v1745950151/artify-thumb_xy4bhl.png" width="320" height="240" controls preload="none">
        <source src="https://res.cloudinary.com/drynqkitl/video/upload/v1745949786/Artify_tt0zvw.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
