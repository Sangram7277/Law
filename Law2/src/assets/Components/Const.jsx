export default function Const() {
    return (
      <>
        <div className="w-full">
          <div>
            <img
              src="./Images/Banner.svg"
              alt=""
              className="w-full h-[200px] md:h-[487px]"
            />
          </div>
          <button className="bg-black h-[50px] w-[100%] md:w-[650px] text-white rounded-2xl relative mx-auto flex flex-wrap justify-center items-center space-x-2 md:space-x-6">
            <span className="text-yellow-300">All</span>
            <span>Taxes & Efficiency</span>
            <span>Investment Banking</span>
            <span>Financial Plan</span>
            <span>Audit & Evaluation</span>
          </button>
  
          <div className="bg-gray-100 relative mx-auto mt-5 rounded-2xl p-5 w-full max-w-screen-md md:max-w-screen-lg">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              <img src="./Images/Svg1.svg" alt="" className="w-full h-auto" />
              <img src="./Images/Svg2.svg" alt="" className="w-full h-auto" />
              <img src="./Images/Svg3.svg" alt="" className="w-full h-auto" />
              <img src="./Images/Svg4.svg" alt="" className="w-full h-auto" />
              <img src="./Images/Svg5.svg" alt="" className="w-full h-auto" />
              <img src="./Images/Svg6.svg" alt="" className="w-full h-auto" />
            </div>
          </div>
  
          <div className="relative mx-auto mt-5 p-5 w-full max-w-screen-md md:max-w-screen-lg">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div>
      <button className="bg-yellow-400 text-black rounded-xl py-1 px-4 mb-5">
        PROCESS
      </button>
      <h1 className="text-2xl font-bold">Contact Us. It is Easy</h1>
      <p className="text-gray-500 mt-3">
        Leverage agile frameworks to provide a robust synopsis for high level overviews.
        Iterative approaches to corporate strategy foster collaborative thinking.
      </p>
      <div className="mt-5">
        <div className="flex items-center space-x-4 mb-5">
          <img src="./Images/Svg7.svg" alt="" className="h-12 w-12" />
          <div>
            <h1 className="text-gray-600">Call Today</h1>
            <h1 className="font-bold">+1 800 100 900</h1>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-5">
          <img src="./Images/Svg8.svg" alt="" className="h-12 w-12" />
          <div>
            <h1 className="text-gray-600">Monday to Friday</h1>
            <h1 className="font-bold">9AM - 5PM</h1>
          </div>
        </div>
        <div className="flex items-center space-x-4 mb-5">
          <img src="./Images/Svg9.svg" alt="" className="h-12 w-12" />
          <div>
            <h1 className="text-gray-600">USA Office</h1>
            <h1 className="font-bold">195 Devonshire St, Boston, MA 02110</h1>
          </div>
        </div>
      </div>
    </div>

    
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block">Full Name</label>
          <input
            type="text"
            className="border border-gray-300 rounded-full w-full h-[50px] px-4"
            placeholder="John David"
          />
        </div>
        <div>
          <label className="block">Email</label>
          <input
            type="text"
            className="border border-gray-300 rounded-full w-full h-[50px] px-4"
            placeholder="consult@mail.com"
          />
        </div>
        <div>
          <label className="block">Phone</label>
          <input
            type="text"
            className="border border-gray-300 rounded-full w-full h-[50px] px-4"
            placeholder="+008 654 231"
          />
        </div>
        <div>
          <label className="block">Company (optional)</label>
          <input
            type="text"
            className="border border-gray-300 rounded-full w-full h-[50px] px-4"
            placeholder="yourcompany.com"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className="block">Message</label>
        <textarea
          className="border border-gray-300 rounded-lg w-full h-[150px] p-4"
          placeholder="Briefly tell us about your project and your current goals. How can I help you?"
        ></textarea>
      </div>

      <button className="bg-black text-white mt-5 py-2 px-4 rounded-full">
        Send Message
      </button>
    </div>
  </div>
</div>

          
          </div>
        
      </>
    );
  }
  