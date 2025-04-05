import React from "react";

function card({
  name = "Eren Yeager",
  designation = "Attack On Titan Character",
  para = "“Eren Yeager is going to be a great Attack On Titan Character.”",
  imgSource,
}) {
  return (
    <div>
      <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-24 h-24 rounded-full mx-auto"
          src={imgSource}
          alt="Image Not Found!"
          width="384"
          height="512"
        />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium ">{para}</p>
          </blockquote>
          <figcaption>
            <div>{name}</div>
            <div>{designation}</div>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}

export default card;
