import React from 'react'
import ContentHeader from '../contentHeader/ContentHeader'

export default function ArrivalComp() {
    return (
        <div className="my-20 py-10 border-gray-300 border-b-[1px]">
            <ContentHeader head="Featured" title='New Arrival' />
            <div className="flex flex-row items-start gap-10 my-20">
                <div className="w-1/2 h-[500px]">
                    <div className="w-full h-full bg-contain bg-no-repeat bg-black text-white relative rounded-md" style={{ backgroundImage: `url('/assets/PS.png')` }}>
                        <div className="absolute bottom-0 left-0 p-5 flex flex-col items-start gap-2 w-1/2">
                            <h2 className="text-xl font-semibold">PlayStation 5</h2>
                            <p className="font-thin text-sm">Black and White version of the PS5 coming out on sale.</p>
                            <p className="underline">Shop now</p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 h-[500px] flex flex-col items-start gap-10">
                    <div className="h-1/2 w-full">
                        <div className="w-full h-full bg-contain bg-no-repeat bg-black text-white relative rounded-md" style={{ backgroundImage: `url('/assets/woman.png')` }}>
                            <div className="absolute bottom-0 left-0 p-5 flex flex-col items-start gap-2 w-1/2">
                                <h2 className="text-xl font-semibold">Woman's collections</h2>
                                <p className="font-thin text-sm">Featured woman collections that give you another vibe.</p>
                                <p className="underline">Shop now</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-1/2 w-full flex flex-row gap-10">
                        <div className="w-1/2 h-full">
                            <div className="w-full h-full bg-contain bg-no-repeat bg-black text-white relative rounded-md" style={{ backgroundImage: `url('/assets/speakers.png')` }}>
                                <div className="absolute bottom-0 left-0 p-5 flex flex-col items-start gap-2">
                                    <h2 className="text-xl font-semibold">Speakers</h2>
                                    <p className="font-thin text-sm">Amazon wireless speakers</p>
                                    <p className="underline">Shop now</p>
                                </div>
                            </div></div>
                        <div className="w-1/2 h-full">
                            <div className="w-full h-full bg-contain bg-no-repeat bg-black text-white relative rounded-md" style={{ backgroundImage: `url('/assets/perfume.png')` }}>
                                <div className="absolute bottom-0 left-0 p-5 flex flex-col items-start gap-2">
                                    <h2 className="text-xl font-semibold">Perfume</h2>
                                    <p className="font-thin text-[12px]">GUCCI INTENSE OUD EDP</p>
                                    <p className="underline">Shop now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
