import React from "react";

const SmartTools = () => {
    return (
        <section className="relative py-16   overflow-hidden">
            {/* Header */}
            <div className="text-center mt-16 px-4">

                <h2 className="text-4xl md:text-[48px] font-bold mt-2">
                    Tools for Smarter Management
                </h2>
                <p className=" mt-3 max-w-2xl mx-auto">
                    Empowering you to take charge of your financial future with intuitive
                    tools and personalized insights.
                </p>
            </div>

            {/* Circular layout */}
            <div className="relative flex justify-center items-center h-[900px]">
                {/* Outer Dashed Circle */}
                <div className="absolute w-[700px] h-[700px] rounded-full border-2 border-dashed border-gray-300"></div>

                {/* Phone Image */}
                <div className="relative w-[376px] h-[729px] z-10 overflow-hidden">
                    {/* Phone Image */}
                    <img
                        src="/banner.png"
                        alt="Phone"
                        className="w-full h-full object-cover"
                    />

                    {/* Modern white fade overlay */}
                    
                </div>


                {/* Positioned Items */}
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    {/* Top-left */}
                    <div className="absolute top-[140px] left-80  w-48 text-right">
                        <h3 className="font-bold text-lg">Spending Habits</h3>
                        <p className="text-sm    ">
                            Analyze your spending patterns and receive tips to cut
                        </p>
                    </div>

                    {/* Top-right */}
                    <div className="absolute top-[175px] right-65 w-48 text-left">
                        <h3 className="font-bold text-lg">Stress-Free Budgeting</h3>
                        <p className="text-sm ">
                            Set and maintain budgets effortlessly, with automated tracking
                        </p>
                    </div>

                    {/* Middle-left */}
                    <div className="absolute top-1/2 left-55 -translate-y-1/2 w-48 text-right">
                        <h3 className="font-bold text-lg">Real-Time Alerts</h3>
                        <p className="text-sm ">
                            Get instant notifications on transactions, low balances and bills
                        </p>
                    </div>

                    {/* Middle-right */}
                    <div className="absolute top-[475px] right-55 -translate-y-1/2 w-48 text-left">
                        <h3 className="font-bold text-lg">Goal Achievement</h3>
                        <p className="text-sm ">
                            Set financial goals and monitor your progress with updates
                        </p>
                    </div>

                    {/* Bottom-left */}
                    <div className="absolute bottom-28 left-83 w-48 text-right">
                        <h3 className="font-bold text-lg">Financial Confidence</h3>
                        <p className="text-sm ">
                            Make informed financial decisions with detailed analytics
                        </p>
                    </div>

                    {/* Bottom-right */}
                    <div className="absolute bottom-30 right-87 w-48 text-left">
                        <h3 className="font-bold text-lg">Financial Anxiety</h3>
                        <p className="text-sm ">
                            Feel more in control of your money with tools that simplify
                        </p>
                    </div>


                    {/* Dots around the circle */}
                    <div className="top-0 left-0 w-full h-full flex justify-center items-center ">
                        {/* Top-left dot (Spending Habits) */}
                        <div
                            className="absolute left-1/2 top-1/2 w-3 h-3  rounded-full border border-white"
                            style={{ transform: "rotate(-130deg) translateX(357px)" }}
                        ></div>

                        {/* Top-right dot (Stress-Free Budgeting) */}
                        <div
                            className="absolute left-1/2 top-1/2 w-3 h-3 border border-white rounded-full"
                            style={{ transform: "rotate(-45deg) translateX(349px)" }}
                        ></div>

                        {/* Middle-left dot (Real-Time Alerts) */}
                        <div
                            className="absolute left-1/2 top-1/2 w-3 h-3 border border-white rounded-full"
                            style={{ transform: "rotate(180deg) translateX(355px)" }}
                        ></div>

                        {/* Middle-right dot (Goal Achievement) */}
                        <div
                            className="absolute left-1/2 top-1/2 w-3 h-3 border border-white rounded-full"
                            style={{ transform: "rotate(2.5deg) translateX(343px)" }}
                        ></div>

                        {/* Bottom-left dot (Financial Confidence) */}
                        <div
                            className="absolute left-1/2 top-1/2 w-3 h-3 border border-white rounded-full"
                            style={{ transform: "rotate(130deg) translateX(347px)" }}
                        ></div>

                        {/* Bottom-right dot (Financial Anxiety) */}
                        <div
                            className="absolute left-1/2 top-1/2 w-3 h-3 border border-white rounded-full"
                            style={{ transform: "rotate(53deg) translateX(341px)" }}
                        ></div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default SmartTools;
