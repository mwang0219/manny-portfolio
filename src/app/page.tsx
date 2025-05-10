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
      <div className="m-[2vw] ">
        <div
          className="flex flex-col justify-start items-center
          w-full border-4 border-black rounded-2xl
                  bg-center bg-no-repeat 
                  aspect-[7.6/15] md:aspect-[16/9]
                  bg-[length:var(--hero-image-size)]
                  relative h-full"
          style={{
            backgroundImage: 'var(--hero-image)'
          }}
        >
          <div className="md:hidden h-[50vw]"></div>
          <button className="md:absolute md:bottom-[22%] md:right-[20%] w-[18vw] h-[6vw] max-md:w-[33vw] max-md:h-[11vw] max-md:text-[4vw]
          text-[2vw] md:m-auto
           bg-sky-400 text-white  hover:bg-sky-600  border-white 
           font-extrabold italic uppercase rounded-lg border-4 shadow-md transition
           ">
            BUY NOW
          </button>
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


