export const NavBar = () => {
  return <div className="flex flex-row justify-between pt-[28px] pb-[28px] bg-white border-b-gray-300">
    <div><button className="border border-gray-400 rounded-md px-4 py-2 hover:bg-gray-400 hover:bg-opacity-15">&#x2022; &nbsp;1936 Redcliff</button></div>
    <div className="lg:flex gap-2 hidden ">
        <a className="hover:bg-gray-400 hover:bg-opacity-15 rounded-md px-2 py-2"href="#home">Home</a>
        <a className="hover:bg-gray-400 hover:bg-opacity-15 rounded-md px-2 py-2"href="#overview">Overview</a>
        <a className="hover:bg-gray-400 hover:bg-opacity-15 rounded-md px-2 py-2"href="#gallery">Gallery</a>
        <a className="hover:bg-gray-400 hover:bg-opacity-15 rounded-md px-2 py-2"href="#plan">Plan</a>
        <a className="hover:bg-gray-400 hover:bg-opacity-15 rounded-md px-2 py-2"href="#features">Features</a>
        <a className="hover:bg-gray-400 hover:bg-opacity-15 rounded-md px-2 py-2"href="#realtor">Realtor</a>
    </div>
    <div className="hidden lg:block"><button className="border border-gray-400 rounded-md px-4 py-2 hover:bg-black hover:text-white ">Contact</button></div>
    <div className="lg:hidden border border-gray-400 rounded-lg px-2 flex "><img src="https://assets-global.website-files.com/65c0adcc0da81a6bf7f0d17c/65c0bce8a884445bf824d9ce_Hamburger%20Menu.svg" /></div>
  </div>;
};
