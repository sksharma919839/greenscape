import React from "react";

function Blogs() {
  return (
    <>
      <div className="blogs-bg">
        <h1 className="text-[40px] font-semibold text-[#353434] text-center py-[80px]">
          How We do work
        </h1>
        <div className="flex items-center justify-center pb-[120px]">
          <iframe
            width="90%"
            height="400px"
            src="https://www.youtube.com/embed/es4x5R-rV9s?si=WeVBpoMCTEmqgEvH"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Blogs;
