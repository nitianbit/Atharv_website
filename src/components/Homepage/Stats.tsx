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
        <div className="w-full relative py-12 px-4 md:py-16 xl:h-[463px] xl:py-0 xl:mb-[60px]">
            <div
                className="w-full max-w-[1312px] mx-auto relative rounded-[20px] flex flex-col items-center
                py-10 px-4
                md:py-12 md:px-8
                xl:px-0 xl:py-0 xl:h-[463px] xl:block"
                style={{
                    background: 'linear-gradient(126.19deg, #176EC6 21.84%, #0F58A1 78.16%)',
                }}
            >
                {/* Heading */}
                <h2
                    className="font-['Source_Serif_Pro'] font-semibold text-white capitalize text-center
                    text-[32px] mb-8
                    md:text-[40px] md:mb-12
                    xl:absolute xl:w-[727px] xl:h-[58px] xl:top-[38px] xl:left-[292px] xl:text-[46px] xl:leading-[100%] xl:tracking-[0.02em] xl:mb-0"
                >
                    Our Statistics
                </h2>

                {/* Cards Container */}
                <div
                    className="w-full grid grid-cols-1 md:grid-cols-2 xl:flex xl:justify-between items-center gap-6 md:gap-8
                    xl:absolute xl:w-[1174px] xl:h-[290px] xl:top-[131px] xl:left-[69px] xl:gap-0"
                >
                    {statsData.map((stat) => (
                        <div
                            key={stat.id}
                            className="flex flex-col items-center justify-center mx-auto
                            w-full max-w-[300px] aspect-[249/265]
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
                                xl:h-[95px] xl:text-[84px] xl:leading-[27px] xl:tracking-[-0.04em] xl:mb-[2px] xl:w-fit"
                            >
                                <Counter from={0} to={stat.end} />+
                            </div>

                            {/* Label */}
                            <div
                                className="font-['DM_Sans'] font-bold text-white text-center uppercase
                                text-[16px] leading-tight mt-4 px-4
                                md:text-[18px]
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
