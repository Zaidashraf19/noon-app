function Img(){
    return(
        <>
            <div className="grid grid-cols-3">
                <div className="bg-[#f9e747] grid gap-20 p-20" style={{gridTemplateColumns: "repeat(2, 1fr)"}}>
                    <img src="https://f.nooncdn.com/mpcms/EN0002/assets/184ca7f5-53e5-4b7c-86a9-c5e861b7fbab.png" alt="heading" />
                    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/58148da9-50f1-49b4-939a-c9e9ffe4b756.png" alt="Ramzan Offer" />
                    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/8510520a-6a55-4871-8e30-00e624dc1218.png" alt="Mobiles" />
                    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/b2bf8759-55be-43c3-a300-260d9ec9540b.png" alt="New Arrivals" />
                    <img src="https://f.nooncdn.com/mpcms/EN0001/assets/abb6921f-7493-4427-889f-08f3a0e48f06.png" alt="Best Sellers" />
                </div>
            </div>
        </>
    )
}

export default Img


