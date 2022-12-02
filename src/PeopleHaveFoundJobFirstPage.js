import { GreyCircle } from '../MiniItems'

function PeopleHaveFoundJobFirstPage() {
  return (
    <div className="relative mobile:h-[348.58px] laptop:w-[960px] laptop:h-[840px]">
      <img
        alt="Line"
        src="images/otherImages/vector1.svg"
        className="absolute mobile:w-[246.63px] mobile:h-[246.45px] laptop:w-[594.32px] laptop:h-[593.88px] mobile:right-[50px] mobile:bottom-[35px] laptop:right-[212.5px]  laptop:bottom-[72px]"
      />
      <img
        alt="Green"
        src="images/otherImages/vector-green.svg"
        className="absolute mobile:w-[228.29px] mobile:h-[228.12px] laptop:w-[550.12px] laptop:h-[549.71px] mobile:right-[68px] mobile:bottom-[35px] laptop:right-[257px] laptop:bottom-[72px] "
      />
      <img
        alt="Green dots"
        src="images/otherImages/green-dots.svg"
        className="absolute mobile:w-[51.12px] mobile:h-[90.1px] laptop:w-[123.19px] laptop:h-[217.13px] mobile:bottom-2 mobile:right-[215.5px] laptop:right-[620px] laptop:bottom-[19.3px]"
      />
      <div className="absolute bg-white shadow-[0px_15px_25px_rgba(0,0,0,0.06)] rounded-full mobile:w-[29.88px] mobile:h-[29.88px] laptop:w-[72px] laptop:h-[72px] flex justify-center items-center mobile:right-[59px] mobile:top-[100px] laptop:right-[226px] laptop:top-[254px]">
        <img
          alt="Check Shield"
          src="images/icons/check-shield.svg"
          className="mobile:w-[9.99px] mobile:h-[10.94px] laptop:w-[24.06px] laptop:h-[26.37px]"
        />
      </div>
      <div className="absolute mobile:w-[118.81px] mobile:h-[63.49px] laptop:w-[286.29px] laptop:h-[153px]  bg-white shadow-[0px_15px_25px_rgba(0,0,0,0.06)] mobile:rounded-[5px] laptop:rounded-[10px] mobile:bottom-[35px] mobile:right-[40px] laptop:right-[190px] laptop:bottom-[72px] flex items-center justify-center">
        <GreyCircle texts="20k+ People have found job!" />
      </div>
    </div>
  )
}

export default PeopleHaveFoundJobFirstPage
