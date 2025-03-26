function Topnavbar() {
  return (
    <>
    <div className=" flex flex-wrap justify-between p-2" style={{backgroundColor: "rgb(254, 238, 0)"}}>
      <div className="m-2">
        <img src="https://f.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg" alt="logo" width={120} />
      </div>
      <div className="flex">
        <img src="https://f.nooncdn.com/s/app/com/common/images/flags/ae.svg" alt="dubai flag" width={50} />
        <p>Deliver to <br /> <strong>Dubai</strong><i class="fa-solid fa-angle-down"></i></p>
      </div>
      <div>
        <input type="text" placeholder="What are you looking for?" className="border border-black rounded-md p-2 w-96 bg-white"  />  
      </div>
      <div className="m-2">
        <p>العربية</p>
      </div>
      <strong className="m-2">|</strong>
      <div className="m-2"> 
        <p><strong>Log in</strong> <i class="fa-solid fa-user fa-lg"></i></p>
      </div>
      <strong className="m-2">|</strong>
      <div className="m-2">
      <i class="fa-solid fa-heart fa-lg"></i>
      </div>
      <div className="m-2">
      <i class="fa-solid fa-cart-shopping fa-lg"></i>
      </div>
    </div>
    </>
  )
}

export default Topnavbar