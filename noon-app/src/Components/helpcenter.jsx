function helpcenter(){
    return(
        <> 
            <br />
            <div className="flex justify-between flex-wrap bg-[#f3f4f8] p-5">
                <div>
                    <h2 className="text-black">We're Always Here To Help </h2>
                    <p className = "font-light">Reach out to us through any of these support channels</p>
                </div>
                <div>
                    <div className="flex flex-wrap gap-10">
                        <div className="flex gap-2">
                            <div>
                                <i class="fa-solid fa-circle-info fa-2xl"></i>
                            </div>
                           <div>
                                <li className="list-none">
                                    <ul>HELP CENTER</ul>
                                    <ul><a href=""><span className="font-bold">help.noon.com</span></a></ul>
                                </li>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div>
                                <i class="fa-solid fa-circle-info fa-2xl"></i>
                            </div>
                           <div>
                                <li className="list-none">
                                    <ul>EMAIL SUPPORT</ul>
                                    <ul><a href=""><span className="font-bold">care@noon.com</span></a></ul>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default helpcenter