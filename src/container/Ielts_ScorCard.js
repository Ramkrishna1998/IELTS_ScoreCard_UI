import react from "react";

function Ielts_ScorCard() {
    const people = [
        { user: 'You', accuracy: '60%', attempt: '5', score: '6', band: '6' },
        { user: 'Talati Shlok(Topper)', accuracy: '95%', attempt: '8.5', score: '8.5', band: '8.5' },
    ]
    return (
        <div className="border-8 border-green-400 h-full text-blue-900">
            {/* <div className=" ">
                <div className=" grid mt-4 mx-4 pb-4  border-b">
                    <div className="flex">
                        <div>
                            <img className="rounded-md h-28" src='https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/dc/25/ac/dc25acba-80c4-c86f-6c19-30907b3cdf68/source/60x60bb.jpg'></img>
                        </div>
                        <div className="ml-7 mt-7 ">
                            <div className="text-3xl font-medium">Your Progress</div>
                            <div className="text-xl font-light">IELTS Academic</div>
                            <div className="float-right justify-items-end">test</div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="md:flex md:items-end md:justify-between mt-10 mx-10 border-b">
                <div className="flex min-w-0  pb-5 ">
                    <img className="rounded-md h-28" src='https://is1-ssl.mzstatic.com/image/thumb/Purple125/v4/dc/25/ac/dc25acba-80c4-c86f-6c19-30907b3cdf68/source/60x60bb.jpg'></img>
                    <div className="ml-7 mt-7 ">
                        <div className="text-3xl font-medium">Your Progress</div>
                        <div className="text-xl font-light">IELTS Academic</div>
                    </div>
                </div>
                <div className="mt-4 flex md:mt-0 md:ml-4">
                    <div className="  border-b border-blue-900 inline-flex  mx-12 items-center py-5">
                        Listening
                    </div>
                    <div className="text-gray-500 inline-flex items-center mx-12 py-5 border border-transparent">
                        Reading
                    </div>
                    <div className="text-gray-500 inline-flex items-center mx-12 py-5 border border-transparent">
                        Writing
                    </div>
                    <div className="text-gray-500 inline-flex items-center mx-12 py-5 border border-transparent">
                        Speaking
                    </div>
                </div>
            </div>
            <div className="md:flex md:items-center md:justify-center mt-10 border-b-4 border-gray-100  pb-10 pt-5">
                <div className="border border-5 border-gray-100 px-11 py-11 rounded-full opacity-100 ">
                    <div className="text-6xl text-black">
                        6.5
                    </div>
                    <div className="text-xl text-gray-400 ml-5 ">Band</div>
                </div>
                <div className="ml-10 flex text-center text-blue">
                    <div className="w-1/5 px-11 py-4 border-r-4 border-gray-400">Total Questions 40</div>
                    <div className="w-1/5  py-4  px-11 border-r-4 border-gray-400">Questions Attebded 35</div>
                    <div className="w-1/5  py-4  px-11 ">Correct Answers 31</div>
                </div>
            </div>
            <div className="mt-8">
                <div className="mb-4 text-xl  ml-5 ">Trend Ananylis</div>
                <div className="flex flex-col ">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="overflow-hidden sm:rounded-lg mx-5">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="text-gray-400">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                            >
                                                User
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                            >
                                                Accuracy
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                            >
                                                Attempt
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                            >
                                                Score
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                                            >
                                                Band
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white text-green-400">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">Talati Shlok(Topper)</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm ">60%</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm ">5</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm ">6</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm ">6</td>
                                        </tr>
                                        <tr className="bg-white text-gray-400">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">Talati Shlok(Topper)</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm ">95%</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm ">3</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm ">8.5</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm ">8.5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Ielts_ScorCard;