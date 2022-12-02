function HeaderFirstPage() {
  return (
    <div className="mobile:w-[355px] laptop:w-full flex items-center justify-between mobile:pt-5 laptop:pt-7 mobile:px-[14px] laptop:px-[250px]">
      <img
        alt="Chakri Logo"
        src="images/logos/chakri-logo.svg"
        className="mobile:w-[77.3px] laptop:w-[121px]"
      />
      <nav>
        <img alt="Menu" src="images/icons/menu.svg" className="" />
      </nav>
    </div>
  )
}

export default HeaderFirstPage
