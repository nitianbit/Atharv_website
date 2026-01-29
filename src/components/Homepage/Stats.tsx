import { useEffect, useRef } from 'react';
import { animate, useInView } from 'framer-motion';

const Counter = ({ from, to }: { from: number; to: number }) => {
    const nodeRef = useRef<HTMLSpanElement>(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        const node = nodeRef.current;
        const controls = animate(from, to, {
            duration: 2.5,
            onUpdate(value) {
                if (node) {
                    node.textContent = value.toFixed(0);
                }
            },
            ease: "easeOut"
        });

        return () => controls.stop();
    }, [from, to, isInView]);

    return <span ref={nodeRef} />;
};

const Stats = () => {
    const statsData = [
        { id: 1, end: 7, label: "Years Of Proven Healthcare" },
        { id: 2, end: 20, label: "States Served Across India" },
        { id: 3, end: 100, label: "Corporate Clients" },
        { id: 4, end: 10, label: "Million+ Lives Impacted" },
    ];

    return (
        <div className="w-full relative py-12 px-4 md:py-16 
            lg:h-[400px] lg:py-0 lg:mb-[50px]
            xl:h-[463px] xl:py-0 xl:mb-[60px]">
            <div
                className="w-full mx-auto relative rounded-[20px] flex flex-col items-center
                py-10 px-4
                md:py-12 md:px-8
                lg:max-w-[940px] lg:px-0 lg:py-0 lg:h-[400px] lg:block
                xl:max-w-[1312px] xl:px-0 xl:py-0 xl:h-[463px] xl:block"
                style={{
                    background: 'linear-gradient(126.19deg, #176EC6 21.84%, #0F58A1 78.16%)',
                }}
            >
                {/* Heading */}
                <h2
                    className="font-['Source_Serif_Pro'] font-semibold text-white capitalize text-center
                    text-[32px] mb-8
                    md:text-[40px] md:mb-12
                    lg:absolute lg:w-[600px] lg:h-[48px] lg:top-[32px] lg:left-[170px] lg:text-[38px] lg:leading-[100%] lg:tracking-[0.02em] lg:mb-0
                    xl:absolute xl:w-[727px] xl:h-[58px] xl:top-[38px] xl:left-[292px] xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:mb-0"
                >
                    Our Statistics
                </h2>

                {/* Cards Container */}
                <div
                    className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-8
                    lg:flex lg:justify-between lg:grid-cols-none lg:absolute lg:w-[890px] lg:h-[245px] lg:top-[115px] lg:left-[25px] lg:gap-0
                    xl:flex xl:justify-between xl:absolute xl:w-[1174px] xl:h-[290px] xl:top-[131px] xl:left-[69px] xl:gap-0"
                >
                    {statsData.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col items-center justify-center mx-auto
                            w-full max-w-[300px] aspect-[249/265]
                            lg:w-[200px] lg:h-[225px] lg:pt-[45px] lg:pb-[45px] lg:mx-0
                            xl:w-[249px] xl:h-[265px] xl:pt-[54px] xl:pb-[54px] xl:mx-0"
                            style={{
                                borderRadius: '20px',
                                background: 'linear-gradient(180deg, rgba(18, 137, 255, 0.1) 0%, rgba(7, 74, 155, 0.1) 49.52%, rgba(3, 23, 73, 0.1) 100%)',
                                border: '2px solid rgba(222, 222, 222, 0.2)',
                                boxShadow: '0px 0px 4px 0px #00000036',
                            }}
                        >
                            {/* Number */}
                            <div
                                className="font-['Poppins'] font-bold text-white text-center flex items-center justify-center
                                text-[60px] leading-tight
                                md:text-[72px]
                                lg:h-[80px] lg:text-[68px] lg:leading-[27px] lg:tracking-[-0.04em] lg:mb-[2px] lg:w-fit
                                xl:h-[95px] xl:text-[84px] xl:leading-[27px] xl:tracking-[-0.04em] xl:mb-[2px] xl:w-fit"
                            >
                                <Counter from={0} to={stat.end} />+
                            </div>

                            {/* Label */}
                            <div
                                className="font-['DM_Sans'] font-bold text-white text-center uppercase
                                text-[16px] leading-tight mt-4 px-4
                                md:text-[18px]
                                lg:w-[180px] lg:h-[52px] lg:text-[17px] lg:leading-[100%] lg:mt-[20px] lg:px-0
                                xl:w-[209px] xl:h-[56px] xl:text-[20px] xl:leading-[100%] xl:mt-[25px] xl:px-0"
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
