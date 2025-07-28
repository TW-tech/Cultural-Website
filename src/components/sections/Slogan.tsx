import Image from "next/image";

export default function Slogan() {
  return (
    <section className="w-full px-[30px] py-[30px] box-border bg-[#FAF9EB]">
      
        <div className="grid grid-cols-1 lg:grid-cols-[9fr_7fr] overflow-hidden rounded-lg">

          {/* 左側文字敘述 */}
          <div className="flex items-center h-full p-6 bg-[#103638] ">
          <div className="space-y-3 sm:space-y-4 lg:space-y-6 h-full ">
            <p className="text-sm sm:text-base lg:text-lg text-white-700 leading-relaxed item ">
              文化是人類智慧的結晶，承載著歷史的記憶與文明的傳承。
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-white-700 leading-relaxed">
              透過現代科技與傳統文化的結合，我們能夠以全新的方式體驗和理解這些珍貴的文化遺產。
            </p>
            <p className="text-[40px] sm:text-[40px] lg:text-[40px] text-white-700 leading-relaxed">
              文化記憶與我們
            </p>
          </div>
          </div>

          {/* 右側圖片區域 */}
          <div className="h-full bg-[#103638]">
            <div className=" h-full">
              <div className="relative w-full min-h-[200px] sm:min-h-0 sm:h-full overflow-hidden">
                <Image
                  src="/images/oldpic/hungrycat3.jpg"
                  alt="文化探索"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
            </div>
          </div>
        </div>
      
    </section>
  );
}
