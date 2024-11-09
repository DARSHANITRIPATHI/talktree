import React from 'react'

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar  online">
          <div className="w-12 rounded-full">
            <img
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between-">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-xl">🌞</span>
          </div>
        </div>
      </div>

      <div className="divider my-0  py-0 h-1" />
    </>
  );
}

export default Conversation
