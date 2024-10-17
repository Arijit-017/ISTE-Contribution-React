import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

function Card({ data }) {
  return (
    <>
      <div className="h-[400px] w-[250px] border-2 bg-[#e6e6fa] rounded-xl cursor-default overflow-hidden">
        {/* avatar */}
        <div className="h-[40%] flex justify-center items-center overflow-hidden">
          <img
            src={data.avatar}
            alt="avatar"
            className="h-[120px] w-[120px] rounded-full border-4 border-[#acace6] p-1"
          />
        </div>

        {/* name and location */}
        <div className="flex justify-center items-center flex-col">
          <p className="text-lg font-semibold">{data.name}</p>
          <p className="text-[13px] text-slate-500 font-medium">
            {data.location}
          </p>
        </div>

        {/* social links */}
        <div className="h-10 flex justify-center items-center py-1">
          <div className="mt-2 py-1 px-3 flex gap-4 border-2 border-[#acace6] rounded-2xl">
            <a href={data.social.GitHub} target="_blank"><Github size={20} /></a>
            <a href={data.social.LinkedIn} target="_blank"><Linkedin size={20} /></a>
            <a href={data.social.Twitter} target="_blank"><Twitter size={20} /></a>
          </div>
        </div>

        {/* bio */}
        <div className="min-h-[20%] w-full flex justify-center items-center line-clamp-2 p-2">
          <p className="text-[12px] text-slate-600 line-clamp-3 hover:line-clamp-12 text-center">
            {data.bio}
          </p>
        </div>

        {/* skills */}
        <div className="-mt-2 h-[74px] w-full flex justify-center items-center flex-wrap gap-1 p-2 overflow-y-scroll">
          {data.skills.map((skill) => (
            <p className="text-[10px] text-slate-600 border-2 border-[#acace6] px-2 rounded-2xl font-medium hover:bg-slate-300">{skill}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
