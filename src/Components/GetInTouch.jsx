import { Icon } from "@iconify/react";
import Mail from "../Assets/Mail";

const GetInTouch = () => {
  return (
    <div className="px-3">
      <h2 className="text-center text-4xl py-8 mb-7 uppercase bg-gradient-to-r to-[#525252] from-[#f0f0f0] bg-clip-text text-transparent">
        Tell me about your next project
      </h2>
      <div className="flex flex-col items-center justify-center">
        <button className="px-8 py-5 bg-[#1a1a1a] mt-10 mb-20" onClick={() => window.my_modal_1.showModal()}>
          <h2 className="flex items-center gap-1 text-xs">
            Get In Touch <Icon icon="solar:mailbox-broken" />
          </h2>
        </button>
        <dialog id="my_modal_1" className="modal">
          <form method="dialog" className="modal-box">
            <Mail />
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default GetInTouch;
