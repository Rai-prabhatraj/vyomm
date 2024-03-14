

export default function Marque2() {
   
    return (
        <section className='flex flex-col relative h-[12rem] pt-6 overflow-hidden'>
            <div className='marquee2 font-clash tracking-widest text-main_primary/50'>
                {Array.from({ length: 3 }).map((_, index) => {
                    return <h4 key={index} className="text font-black">AN ANNUAL POTPOURRI OF CULTURE, TECHNOLOGY & SPORTS</h4>
                })}
            </div>
        
        </section>
    )
}