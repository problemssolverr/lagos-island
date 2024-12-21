import React, { useState } from 'react';
import backgroundImage from '../assets/bg-2.jpg';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Discipleship = () => {
    const [isOpenFirst, setIsOpenFirst] = useState(false); // State for first toggleable section
    const [isOpenSecond, setIsOpenSecond] = useState(false); // State for second toggleable section
    const [isOpenThird, setIsOpenThird] = useState(false);
    const [isOpenFourth, setIsOpenFourth] = useState(false);
    const [isOpenFifth, setIsOpenFifth] = useState(false)

    const toggleFirstContent = () => {
        setIsOpenFirst(!isOpenFirst);
    };

    const toggleSecondContent = () => {
        setIsOpenSecond(!isOpenSecond);
    };

    const toggleThirdContent = () => {
        setIsOpenThird(!isOpenThird);
    };

    const toggleFourthContent = () => {
        setIsOpenFourth(!isOpenFourth);
    };

    const toggleFifthContent = () => {
        setIsOpenFifth(!isOpenFifth);
    };

    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-auto pb-10 flex flex-col items-start justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#4361ee] opacity-80"></div>
            

            {/* First Content Container */}
            <div className="relative z-10 w-[90%] md:w-[70%] mx-auto mt-10">
            <div className='items-center justify-center mb-9 bg-white w-[50%] mx-auto px-5 py-4 rounded-full'>
            <h1 className='text-center text-red-800 text-3xl font-bold'>WANT TO BE SAVE?</h1>
            </div>
                {/* Toggle Header */}
                <div
                    className="bg-white px-5 py-3 rounded-t-lg shadow-md flex items-center justify-between cursor-pointer"
                    onClick={toggleFirstContent}
                >
                    <h1 className="text-[#03045e] font-bold text-lg md:text-2xl">
                        {isOpenFirst ? (
                            <FiChevronUp className="inline-block mr-2" />
                        ) : (
                            <FiChevronDown className="inline-block mr-2" />
                        )}
                        Hear the Gospel Romans 10:14 -17
                    </h1>
                </div>

                {/* Toggleable Content */}
                {isOpenFirst && (
                    <div className="relative w-full bg-[#4361ee] text-white px-5 py-6 shadow-md mb-10">
                        <p className="text-sm md:text-lg leading-relaxed">
                        How then shall they call on Him in whom they have not believed?<br />
                            <span className="block my-3"></span>
                            And how shall they believe in Him of whom they have not heard? And how shall they hear without a preacher?
                            <br />
                            <span className="font-bold">
                                17 So then faith comes by hearing, and hearing by the word of God.
                            </span>
                        </p>
                    </div>
                )}
            </div>

            {/* Second Content Container */}
            <div className="relative z-10 w-[90%] md:w-[70%] mx-auto mt-10">
                {/* Toggle Header */}
                <div
                    className="bg-white px-5 py-3 rounded-t-lg shadow-md flex items-center justify-between cursor-pointer"
                    onClick={toggleSecondContent}
                >
                    <h1 className="text-[#03045e] font-bold text-lg md:text-2xl">
                        {isOpenSecond ? (
                            <FiChevronUp className="inline-block mr-2" />
                        ) : (
                            <FiChevronDown className="inline-block mr-2" />
                        )}
                        Believe the Gosple in your Heart - Romans 10:9 
                    </h1>
                </div>

                {/* Toggleable Content */}
                {isOpenSecond && (
                    <div className="relative w-full bg-[#4361ee] text-white px-5 py-6 shadow-md mb-10">
                        <p className="text-sm md:text-lg leading-relaxed">
                        For with the heart one believes unto righteousness. <br />
                            <span className="block my-3"></span>
                            And He said to them, "Go into all the world and preach the gospel to every creature.
                            <br />
                            <span className="font-bold">
                                Acts 8:37 - Then Philip said, "If you believe with all your heart, you may." And he answered and said, "I believe that Jesus Christ is the Son of God."
                            </span>
                        </p>
                    </div>
                )}
            </div>

            {/* Third Content Container */}
            <div className="relative z-10 w-[90%] md:w-[70%] mx-auto mt-10">
                {/* Toggle Header */}
                <div
                    className="bg-white px-5 py-3 rounded-t-lg shadow-md flex items-center justify-between cursor-pointer"
                    onClick={toggleThirdContent}
                >
                    <h1 className="text-[#03045e] font-bold text-lg md:text-2xl">
                        {isOpenSecond ? (
                            <FiChevronUp className="inline-block mr-2" />
                        ) : (
                            <FiChevronDown className="inline-block mr-2" />
                        )}
                        Acknowledge and Repent of all your Sins Acts 2:36 - 38
                    </h1>
                </div>

                {/* Toggleable Content */}
                {isOpenThird && (
                    <div className="relative w-full bg-[#4361ee] text-white px-5 py-6 shadow-md mb-10">
                        <p className="text-sm md:text-lg leading-relaxed">
                            Therefore let all the house of Israel know assuredly, that God hath made the same Jesus,
                            whom ye have crucified, both Lord and Christ. <br />
                            <span className="block my-3"></span>
                            Now when they heard this, they were pricked in their heart, and said unto Peter and to
                            the rest of the apostles, Men and brethren, what shall we do?
                            <br />
                            <span className="font-bold">
                                38 Then Peter said unto them, Repent, and be baptized every one of you in the name of
                                Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy
                                Ghost.
                            </span>
                        </p>
                    </div>
                )}
            </div>

            {/* Fourth Content Container */}
            <div className="relative z-10 w-[90%] md:w-[70%] mx-auto mt-10">
                {/* Toggle Header */}
                <div
                    className="bg-white px-5 py-3 rounded-t-lg shadow-md flex items-center justify-between cursor-pointer"
                    onClick={toggleFourthContent}
                >
                    <h1 className="text-[#03045e] font-bold text-lg md:text-2xl">
                        {isOpenSecond ? (
                            <FiChevronUp className="inline-block mr-2" />
                        ) : (
                            <FiChevronDown className="inline-block mr-2" />
                        )}
                        Confess your Faith In Christ Jesus Romans 10:10
                    </h1>
                </div>

                {/* Toggleable Content */}
                {isOpenFourth && (
                    <div className="relative w-full bg-[#4361ee] text-white px-5 py-6 shadow-md mb-10">
                        <p className="text-sm md:text-lg leading-relaxed">
                        For with the heart one believes unto righteousness, <b> and with the mouth confession is made unto salvation.</b> <br />
                            <span className="block my-3"></span>
                            Acts 8:37 - Then Philip said, "If you believe with all your heart, you may." And he answered and said, <b> "I believe that Jesus Christ is the Son of God."</b>
                            <br />
                            {/* <span className="font-bold">
                                38 Then Peter said unto them, Repent, and be baptized every one of you in the name of
                                Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy
                                Ghost.
                            </span> */}
                        </p>
                    </div>
                )}
            </div>

            {/* Fifth Content Container */}
            <div className="relative z-10 w-[90%] md:w-[70%] mx-auto mt-10">
                {/* Toggle Header */}
                <div
                    className="bg-white px-5 py-3 rounded-t-lg shadow-md flex items-center justify-between cursor-pointer"
                    onClick={toggleFifthContent}
                >
                    <h1 className="text-[#03045e] font-bold text-lg md:text-2xl">
                        {isOpenSecond ? (
                            <FiChevronUp className="inline-block mr-2" />
                        ) : (
                            <FiChevronDown className="inline-block mr-2" />
                        )}
                        Be Immersed (baptized) in Water  1Peter 3:21
                    </h1>
                </div>

                {/* Toggleable Content */}
                {isOpenFifth && (
                    <div className="relative w-full bg-[#4361ee] text-white px-5 py-6 shadow-md mb-10">
                        <p className="text-sm md:text-lg leading-relaxed">
                        There is also an antitype which now saves us--baptism (not the removal of the filth of the flesh, but the answer of a good conscience toward God), through the resurrection of Jesus Christ. <br />
                            <span className="block my-3"></span>
                            For as many of you as were baptized into Christ have put on Christ. (Galatians 3:27)
                            <br />
                            {/* <span className="font-bold">
                                38 Then Peter said unto them, Repent, and be baptized every one of you in the name of
                                Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy
                                Ghost.
                            </span> */}
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Discipleship;
