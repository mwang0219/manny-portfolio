import Image from "next/image";

// src/app/page.tsx
export default function Home() {
  const MarqueeWord = ({ text }: { text: string }) => {
    return (
      <span className="mx-4 text-7xl font-extrabold italic text-[#f4f1e6] [style='-webkit-text-stroke:2px_black;text-shadow:0_0_2px_#FF4500,0_0_4px_#FF6347,0_0_6px_#FFA500,0_0_7px_black']">{text} · </span>
    )
  }

  return (
    <div>
      {/* pink hero banner */}
      <div className="m-10">
        <div
          className="w-full h-[96vh] border-4 border-black rounded-2xl
                  bg-[url('/assets/BirthdayCake-hero-web.webp')] 
                  bg-cover bg-center bg-no-repeat"
        >
        </div>
      </div>

      {/* Marquee stores */}
      <div className="w-full overflow-hidden left-0 m-10 h-30 gap-7">
        <div className="animate-marquee whitespace-nowrap">
          <div className="inline-block">
            <MarqueeWord text="WALMART" />
            <MarqueeWord text="TARGET" />
            <MarqueeWord text="7-ELEVEN" />
            <MarqueeWord text="KROGER" />
            <MarqueeWord text="SAMS CLUB" />
            <MarqueeWord text="ALBERTSON" />
          </div>
          <div className="inline-block">
            <MarqueeWord text="WALMART" />
            <MarqueeWord text="TARGET" />
            <MarqueeWord text="7-ELEVEN" />
            <MarqueeWord text="KROGER" />
            <MarqueeWord text="SAMS CLUB" />
            <MarqueeWord text="ALBERTSON" />
          </div>
        </div>
      </div>
    </div>


  );
}


