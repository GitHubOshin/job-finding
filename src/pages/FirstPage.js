import HeaderFirstPage from '../components/firstPage/HeaderFirstPage'
import SearchingFirstPage from '../components/firstPage/SearchingFirstPage'
import PeopleHaveFoundJobFirstPage from '../components/firstPage/PeopleHaveFoundJobFirstPage'

function FirstPage() {
  return (
    <div className="bg-[#F9FDFD] laptop:w-[1920px] laptop:h-[960px] mobile:w-[375px] mobile:h-[703.58px] laptop:flex laptop:flex-col mobile:flex mobile:flex-col mobile:justify-between mobile:items-center">
      <HeaderFirstPage />
      <div className="laptop:flex">
        <SearchingFirstPage />
        <PeopleHaveFoundJobFirstPage />
      </div>
    </div>
  )
}

export default FirstPage
