import Image from "next/image"
import google from '@/public/Images/google.svg'
import background from '@/public/Images/shopping.jpg'
export default function page() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start overflow-hidden ">
        <div className="grid grid-cols-1 gap-4 px-2 pt-12 lg:px-24 md:pt-16">
          <div className="grid items-start gap-1">
            <h1 className="text-3xl font-extrabold">Welcome Back</h1>
            <p className="font-extralight">Please enter your details</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center justify-center  gap-6 border-2 rounded-md">
              <Image src={google} width={50} height={50} alt="google" />
              <button>Sign in with Google</button>
            </div>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="px-3 text-gray-500">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <div className="flex flex-col gap-1">
              <label >Email address</label>
              <input placeholder="Enter Your Email" type="email" className="outline-none border-2 p-2 rounded-md" />
            </div>
            <div className="flex flex-col gap-1">
              <label >Password</label>
              <input placeholder="Enter Your Password" type="password" className="outline-none border-2 p-2 rounded-md" />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox"  />
                <p className="text-sm md:text-base">Remember for 30 days </p>
              </div>
              <h1 className="text-blue-700 underline cursor-pointer text-sm md:text-base">Forgot Password</h1>
            </div>
          </div>
          <button className="bg-black text-white p-3 rounded-md">Sign In</button>
          <div className="flex items-center gap-2 justify-center">
            <p>Don't have an account?</p>
            <p className="text-blue-700 underline font-medium">Sign Up</p>
          </div>
        </div>
        <div className="hiddden md:flex">
          <Image src={background}  className="max-h-screen w-screen hidden md:flex " alt="google"/>
        </div>
      </div>
    </>
  )
}
