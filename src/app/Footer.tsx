import footerlink from './footer-link.json';
import Image from "next/image";

interface LinkItem {
    name: string;
    link?: string; // Optional if isTitle
}

interface LinkGroup {
    [category: string]: LinkItem[];
}


const genLinkBtn = (linkList: LinkGroup): React.ReactElement[] => {
    const groupList: React.ReactElement[] = [];

    for (const title of Object.keys(linkList)) {
        const children: React.ReactElement[] = [];
        // 分组标题
        children.push(
            <div key={title} className="mb-2 text-lg font-extrabold text-gray-700">
                {title}
            </div>
        );

        // 每个链接
        for (const entry of linkList[title]) {
            children.push(
                <a
                    key={entry.name}
                    href={entry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 italic text-md font-bold"
                >
                    {entry.name}
                </a>
            );
        }

        // 把整组包裹到一个 div 中，推入列表
        groupList.push(
            <div key={`group-${title}`} className="flex flex-col items-start">
                {children}
            </div>
        );
    }

    return groupList
};



export default function Footer() {
    const renderedLinks = genLinkBtn(footerlink);
    return (
        <div className="">
            <div className="flex bg-blue-400 border-black border-t-4">
                <div className="flex mx-20 my-15 px-10 py-10 rounded-2xl border-black border-4 bg-blue-300">
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col items-center">
                            <div className="grid grid-cols-2 gap-8">{renderedLinks}</div>
                            <div className="relative w-[30vw] aspect-[2/1]">
                                <Image fill className="object-contain" src="/assets/Feastables_Rebrand_Non_Tilted(1).png" alt="Logo" />
                            </div>
                            <div className="font-bold text-sm">2025 Feastables</div>

                        </div>
                        <div className="flex flex-col items-center">
                            <div className=""></div>
                            <div className="text-xl font-bold mb-2">Text FEAST to 69420</div>
                            <div className="text-xs leading-none mb-2 mx-35">By signing up via text, you agree to receive recurring automated marketing messages, including cart reminders, at the phone number provided. Consent is not a condition of purchase. Reply STOP to unsubscribe. Reply HELP for help. Message frequency varies. Msg & data rates may apply. View our Privacy Policy and Terms of Service.</div>
                            <div className="text-md font-bold mb-3">GET FEASTABLES CONTENT SENT TO YOU</div>
                            <div className="flex rounded-lg overflow-hidden border-black border-2 w-[25vw] h-[3vw]">
                                <input
                                    type="email"
                                    placeholder="ENTER EMAIL"
                                    className="flex-1 px-6 grow font-extrabold text-gray-600 focus:outline-none bg-white"
                                />
                                <button className="px-4 border-black border-l-2 bg-cyan-700 font-bold text-white hover:bg-cyan-800">
                                    SIGN UP
                                </button>
                            </div>
                        </div>

                    </div>
                    <div className=""></div>

                </div>
                <div className=""></div>

            </div>

        </div>


    )
}