import Img from "./img.png"
function body(){
    return(
        <>
            <div className="grid grid-cols-6">
                <div className="col-span-4 overflow-hidden" >
                    <div style={{width: '62rem'}} id="wrapper">
                        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/2fe1abc5-3e4a-407b-9000-44bedc595178.png" alt="" />
                        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/c073ada9-d673-45a4-bcb3-8c7f4c89e327.png" alt="" />
                        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/5f1e70e9-e52b-474a-a2bf-61d07b63c51c.png" alt="" />
                        <img src="https://f.nooncdn.com/mpcms/EN0001/assets/595f6653-4b82-45f0-9839-db894f81e407.png" alt="" />
                    </div>
                </div>
                <div style={{height: '100%', width: '100%'}} className="col-span-1"><img src="https://f.nooncdn.com/mpcms/EN0001/assets/12d3e1cf-7458-4783-aae2-604ae8126d54.png" alt="" /></div>
                <div style={{height: '100%', width: '100%'}} className="col-span-1"><img src="https://f.nooncdn.com/mpcms/EN0001/assets/8d89fcb2-68e0-4fa7-83a7-11fba284094e.png" alt="" /></div>
            </div>  
            <div className="grid grid-cols-12 gap-5 p-3 bg-[#fff4d0]">
                <div className= "col-span-1"><img src="https://f.nooncdn.com/mpcms/EN0001/assets/2b5a5f4e-5b9d-48f3-ae5d-cd00f52fcc2e.gif" alt="Deals" /> </div>
                <div className="col-span-1"><img src="https://f.nooncdn.com/mpcms/EN0001/assets/c914d754-deb2-4696-9369-2dd9ec230941.png" alt="Clearance store" /></div>
                <div className="col-span-1"><img src="https://f.nooncdn.com/mpcms/EN0001/assets/774ab4c6-2e57-408f-ab63-0947b634a5a9.png" alt="Home Appliances" /></div>
                <div className="col-span-1"><img src="https://f.nooncdn.com/mpcms/EN0001/assets/71e68fed-e518-40ba-91a3-c6eebd40194a.png" alt="Electronics" /></div>
                <div className="col-span-1"><img src="https://f.nooncdn.com/mpcms/EN0001/assets/a901e2cb-4af3-48f3-9231-99f985e6c860.png" alt="Mahali" /></div>
                <div className="col-span-1"><img src="https://f.nooncdn.com/mpcms/EN0001/assets/bfcd38fe-1d54-4800-8df4-c06ccafaa0d2.png" alt="Home & Kitchen" /></div>
                <div className="col-span-1"><img src="https://f.nooncdn.com/mpcms/EN0001/assets/7c6266a1-5948-43fd-9a0d-899f0c0affc1.png" alt="Footwear" /></div>
                <div className="col-span-1"><img src="https://f.nooncdn.com/mpcms/EN0001/assets/49d1511b-6e1b-498b-8cca-e323954f9c02.png" alt="Mobiles" /></div>
                <div className="col-span-1"><img src="https://f.nooncdn.com/mpcms/EN0001/assets/a646a43b-f901-4346-86b8-3b4026cfa8b0.png" alt="Beauty" /></div>
                <div className="col-span-1"><img src="https://f.nooncdn.com/mpcms/EN0001/assets/051f8191-c11a-4adf-955d-4239ece98238.png" alt="Women's Fashion" /></div>
                <div className="col-span-1"><img src="https://f.nooncdn.com/mpcms/EN0001/assets/4144c09a-ff88-45d0-8137-5060ebcc9750.png" alt="Men's Fashion" /></div>
                <div className="col-span-1"><img src="https://f.nooncdn.com/mpcms/EN0001/assets/aecce0d4-c343-4f20-bdda-62b8d1e85e49.png" alt="Global Store" /></div>
            </div>
            <img src={Img} alt="" />
        </>
    )
}


export default body