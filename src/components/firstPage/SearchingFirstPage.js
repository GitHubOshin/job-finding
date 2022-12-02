import { TextHeader, GreyTag } from '../Texts'

function SearchingFirstPage() {
  return (
    <div className="mobile:relative mobile:w-[355px] mobile:h-[215px] mobile:flex mobile:flex-col mobile:justify-between laptop:w-[960px] laptop:h-[840px] laptop:mt-0 laptop:pr-[70px] laptop:flex laptop:flex-col laptop:items-end laptop:justify-center font-dmSans">
      <TextHeader>
        <h1 className="mobile:absolute laptop:static mobile:left-[14px]">
          Find Every Job
          <br />
          in One Platform
        </h1>
      </TextHeader>
      <div className="laptop:mt-10 laptop:mr-[36.56px]  laptop:flex laptop:items-start mobile:gap-y-4 laptop:gap-y-[30px] mobile:flex mobile:flex-col mobile:items-center">
        <div className="bg-white mobile:w-[355px] laptop:w-[600px] mobile:h-[70px] laptop:h-[88px] rounded-[10px] flex items-center justify-between mobile:px-[14px] laptop:pl-[40px] laptop:pr-[12px]">
          <div className="flex justify-between mobile:w-[182.96px] laptop:w-[254px]">
            <input
              className="mobile:w-[92px] laptop:w-[106px]"
              placeholder="Job / Position"
            />
            <img
              alt="Pipe"
              src="images/otherImages/pipe.svg"
              className="mobile:h-[20.53px] laptop:h-[31.5px]"
            />
            <input
              className="mobile:w-[59px] laptop:w-[68px]"
              placeholder="Location"
            />
          </div>
          <button className="bg-green text-white mobile:w-[101.29px] mobile:h-[46.64px] laptop:w-[139px] laptop:h-16 mobile:rounded-[7.29px] laptop:rounded-[10px]">
            Search
          </button>
        </div>
        <div className="flex justify-between items-center mobile:w-[319px] laptop:w-[390px]">
          <span className="text-orange laptop:w-[126px]">Recent Search :</span>
          <div className="flex gap-2">
            <GreyTag tagName="Design" />
            <GreyTag tagName="UI/UX" />
            <GreyTag tagName="Product" />
            <GreyTag tagName="Graphic" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchingFirstPage
