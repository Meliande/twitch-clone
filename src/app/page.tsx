import { Bell, Crown, GripVertical, Search, Twitch } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen bg-neutral-950">
      <div className="text-white h-12 px-2 bg-zinc-900 flex items-center justify-between gap-5 ">
        <div className="font-bold flex gap-4">
          <Twitch className="text-purple-400" size={32}/>
          <a href="" className="hover:text-purple-400 transition-colors">Following</a>
          <a href="" className="hover:text-purple-400 transition-colors">Browse</a>
          <a href=""><GripVertical className="hover:bg-zinc-800 rounded-md"/></a> 
        </div>
        <form action="">
          <label className="w-56 relative block items-center">
            <input className="h-9 w-96 px-2 rounded-md bg-zinc-600 overflow-hidden" placeholder="Search" type="text"/>
          </label>
        </form>
        <div className="flex gap-2">
          <Crown/>
          <Bell/>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  )
}
