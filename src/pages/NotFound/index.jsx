import ErrorImage from "../../assets/images/not-found.png"
import SocialIcons from "../../assets/images/social-icons.png"

const NotFound = () => {
  return (
    <div className='bg-[#f8f8fa] flex flex-col items-center gap-y-10'>

      <img src={ErrorImage} alt="error-image" />

      <div className="flex flex-col items-center">
        <p className="font-bold text-4xl">Oops!</p>
        <p className="mt-5 ">We can’t seem to find the page you are looking for</p>
        <button className="my-10 bg-[#7848f4] text-white font-bold text-lg py-2 px-3 rounded-full">Back to Homepage</button>
        <p className="mb-2">Follow us on</p>

        <img src={SocialIcons}
          className="w-[405px] h-16"
          alt="social-icons" />

      </div>
    </div>
  )
}

export default NotFound