import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex justify-center items-center flex-col gap-4 h-[40vh] text-white">
      <div className="flex gap-5 items-center">
        <div className="font-bold text-5xl">Sponsor Space <span></span></div>
        <img className=" text-black mt-4" width={58} src="/logo.gif" alt="" />
      
      </div>
      <p>
        A crowdfunding platform for creators. Get funded by your fans and followers. Start Now!
      </p>
      <div>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
      </div>
    </div>
      <div className="bg-white h-1 opacity-10"></div>
      
      

      <div className="text-white container mx-auto py-12">
        <h1 className="text-2xl font-bold text-center my-8"> Your fans can donate you</h1> 
        <div className="flex gap-5 justify-around">

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-5 text-black" width={88} src="/help.gif" alt="" />
            <p className="font-bold"> Fans want to help</p>
            <p className="text-center">Your fans are available to support you</p>
          </div>

          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-5 text-black" width={88} src="/coin.gif" alt="" />
            <p className="font-bold"> Fans want to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>


          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-5 text-black" width={88} src="/colab.gif" alt="" />
            <p className="font-bold"> Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>

        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>


      <div className="text-white container mx-auto py-12">
        <h1 className="text-2xl font-bold text-center my-8"> Learn more about us</h1> 
        <div className="flex gap-5 justify-around">

        <iframe width="560" height="315" src="https://www.youtube.com/embed/-XwZpYIyCEA?si=tSpTetinSNWvndd5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </div>
      </div>
      </>
  );
}
