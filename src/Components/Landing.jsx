import { Icon } from "@iconify/react";

const Landing = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <img
          className="w-32 h-32 rounded-full object-cover mt-20"
          src="https://media.licdn.com/dms/image/D4D03AQEzWJEoFUPYCQ/profile-displayphoto-shrink_800_800/0/1686049751490?e=1695859200&v=beta&t=ChvmXhJWa2isszvnfngFs6KluA1rN169S235CtsEHHU"
          alt="Gega Abzianidze"
        />
        <h1 className="text-sm font-thin text-gray-400 flex gap-1 items-center mt-8">
          Hi, I&apos;m Gega <Icon icon="ph:hand-waving-duotone" />
        </h1>
        <h2 className="bg-gradient-to-r to-[#525252] from-[#f0f0f0] bg-clip-text text-transparent text-4xl text-center leading-[3.5rem] mt-10">
          Creating digital <br /> experiences that matter.
        </h2>
        <button className="px-8 py-5 bg-[#1a1a1a] mt-16 mb-20">
          <h2 className="flex items-center gap-1 text-xs">
            Latest Projects <Icon icon="solar:arrow-right-up-broken" />
          </h2>
        </button>
      </div>
    </div>
  );
};

export default Landing;
