import Logo from "../assets/amazon.png";


export default function auth() {
  return (
    <div className="flex flex-col items-center  h-[100vh] gap-[10px]">
      <header className="mt-20">
        <img src={Logo} alt="Logo" className="w-40 mb-4" />
      </header>
      <main className="w-[360px] p-4 border-[2px] border-gray-200 ">
        <form action="" className="flex flex-col justify-center  gap-4 ">
          <label htmlFor="email">
            <span>Email:</span> <br />
            <input
              type="email"
              name="email"
              id="email"
              className=" w-full border-2 p-2 border-gray-400"
            />
          </label>
          <label htmlFor="password">
            <span>Password: </span>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              className=" w-full border-2 p-2 border-gray-400"
            />
          </label>
          <button className="bg-[#FF9900] p-4 text-white font-bold rounded-sm">
            Login
          </button>
        </form>

        <p className="mt-4">
          By Signin Your Agree to amazon's Conditions of use Sale. Please see our privacy Notice, our cookies notices and our best interest-based Ads notice
        </p>
        <footer>
            <a href="" className="text-center border-[2px] border-gray-200 w-full p-3 inline-block mt-4 bg-gray-300" >Create Your amazon Account</a>
        </footer>
      </main>
    </div>
  );
}
