import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3 w-11/12 mx-auto px-4 py-3">
      <p className="text-base-100 bg-secondary px-3 py-2 ">LatestNews</p>
      <Marquee className="" pauseOnHover={true} speed={60}>
        <p className="font-semibold text-lg text-primary">
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </p>
      </Marquee>
    </div>
  );
}

export default LatestNews