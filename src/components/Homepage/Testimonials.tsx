import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
    const testimonials = [
        {
            image: '/Homepage/Client1.png',
            name: 'Ritu',
            role: 'Senior HR Manager',
            rating: 4,
            text: 'Online doctor consultation was quick and helpful. I received my e-prescription and ordered medicines online in minutes.'
        },
        {
            image: '/Homepage/Client2.png',
            name: 'Anil',
            role: 'CSR Program Lead',
            rating: 4,
            text: 'We booked a lab test at home for my father. Home sample collection was professional and reports came digitally.'
        },
        {
            image: '/Homepage/Client3.png',
            name: 'Meera',
            role: 'Corporate Officer',
            rating: 4,
            text: 'Emergency ambulance service was arranged faster than expected. Very supportive coordination.'
        },
        {
            image: '/Homepage/Client4.png',
            name: 'Abhishek',
            role: 'EHS Officer',
            rating: 4,
            text: "Atharv Healthcare's ambulance services and medical staff have helped us strengthen our site safety protocols. They respond fast and maintain excellent standards."
        }
    ];

    return (
        <section className="w-full xl:w-full xl:max-w-8xl mx-auto bg-[#3177E11A] relative 
            py-16 
            lg:py-[50px] lg:min-h-[750px] lg:overflow-hidden lg:w-full lg:max-w-8xl
            xl:py-[64px] xl:h-[875px]">
            <div className="max-w-[1512px] mx-auto relative flex flex-col items-center lg:block h-full gap-10 lg:gap-0">
                
                {/* Left Section - Heading */}
                <div className="relative w-full px-4 text-center 
                    lg:text-left lg:absolute lg:left-[40px] lg:top-0 lg:w-[450px] lg:px-0 
                    xl:text-left xl:absolute xl:left-[100px] xl:top-0 xl:w-[616px] xl:px-0 
                    flex flex-col gap-3 lg:gap-[10px] xl:gap-[12px]">
                    {/* Heading */}
                    <h2 className="font-['Source_Serif_Pro'] font-semibold text-[#142349] capitalize 
                        text-3xl 
                        md:text-4xl 
                        lg:text-[36px] lg:leading-[100%] lg:tracking-[0.72px]
                        xl:text-[46px] xl:leading-[100%] xl:tracking-[0.92px] 
                        m-0">
                        What <span className="text-[#1566B7]">Our Clients</span> Say
                    </h2>

                    {/* Description */}
                    <p className="font-['DM_Sans'] font-light text-[#142349] 
                        text-base 
                        md:text-lg 
                        lg:text-[15px] lg:leading-[24px] lg:w-[380px]
                        xl:text-[18px] xl:leading-[30px] xl:w-[495px] 
                        m-0">
                        Real feedback from organizations and communities we support across India.
                    </p>
                </div>

                {/* ClientCircle Image Container */}
                <div className="relative w-[80%] max-w-[500px] aspect-square 
                    lg:aspect-auto lg:w-[360px] lg:h-[380px] lg:absolute lg:left-[20px] lg:top-[120px] lg:m-0
                    xl:aspect-auto xl:w-[527px] xl:h-[558.5px] xl:absolute xl:left-[30px] xl:top-[160px] xl:m-0">
                    <img
                        src="/Homepage/ClientCircle.png"
                        alt="Client Circle"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Card 1 - Top Left */}
                <div className="relative w-full max-w-[340px] h-[270px] 
                    lg:absolute lg:w-[245px] lg:h-[225px] lg:left-[405px] lg:top-[130px] lg:max-w-none
                    xl:absolute xl:w-[328px] xl:h-[270px] xl:left-[626px] xl:top-[163px] xl:max-w-none">
                    {/* Icon */}
                    <div className="absolute left-[22px] top-0 
                        w-[78px] h-[71px]
                        lg:w-[58px] lg:h-[53px]
                        xl:w-[78px] xl:h-[71px]
                        z-[2]">
                        <img
                            src={testimonials[0].image}
                            alt={testimonials[0].name}
                            className="w-full h-full object-cover rounded-[12px]"
                        />
                    </div>

                    {/* White Box */}
                    <div className="absolute 
                        top-[32px] lg:top-[26px] xl:top-[32px]
                        left-0 w-full 
                        h-[238px] lg:h-[199px] xl:h-[238px]
                        rounded-[12px] bg-white shadow-[0px_0px_25.9px_0px_#0E295105] 
                        p-[52px_16px_16px]
                        lg:p-[38px_12px_12px]
                        xl:p-[52px_16px_16px]
                        box-border">
                        {/* Star Rating */}
                        <div className="flex gap-[4px] lg:gap-[3px] xl:gap-[4px] mb-[12px] lg:mb-[8px] xl:mb-[12px]">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-[20px] h-[19px] lg:w-[14px] lg:h-[14px] xl:w-[20px] xl:h-[19px] rounded-[0.5px]">
                                    <FaStar
                                        className="lg:w-[14px] lg:h-[14px] xl:w-[20px] xl:h-[20px]"
                                        color={i < testimonials[0].rating ? '#FF9140' : '#E5E7EB'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="font-['DM_Sans'] font-light 
                            text-[14px] leading-[100%] tracking-[0.28px]
                            lg:text-[12px] lg:leading-[16px] lg:tracking-[0.24px]
                            xl:text-[14px] xl:leading-[100%]
                            text-[#142349] 
                            mb-4 lg:mb-3 xl:mb-4
                            xl:w-[296px]">
                            {testimonials[0].text}
                        </p>

                        {/* Name */}
                        <h4 className="font-['DM_Sans'] font-medium 
                            text-[15px] lg:text-[13px] xl:text-[15px]
                            leading-[100%] text-[#1566B7] 
                            mb-1 lg:mb-[2px] xl:mb-1">
                            {testimonials[0].name}
                        </h4>

                        {/* Role */}
                        <p className="font-['DM_Sans'] font-light 
                            text-[12px] lg:text-[10px] xl:text-[12px]
                            leading-[20px] lg:leading-[16px] xl:leading-[20px]
                            text-[#7688B6]">
                            {testimonials[0].role}
                        </p>
                    </div>
                </div>

                {/* Card 2 - Top Right */}
                <div className="relative w-full max-w-[340px] h-[270px] 
                    lg:absolute lg:w-[245px] lg:h-[225px] lg:left-[670px] lg:top-[100px] lg:max-w-none
                    xl:absolute xl:w-[333px] xl:h-[270px] xl:left-[996px] xl:top-[133px] xl:max-w-none">
                    {/* Icon */}
                    <div className="absolute left-[22px] top-0 
                        w-[78px] h-[71px]
                        lg:w-[58px] lg:h-[53px]
                        xl:w-[78px] xl:h-[71px]
                        z-[2]">
                        <img
                            src={testimonials[1].image}
                            alt={testimonials[1].name}
                            className="w-full h-full object-cover rounded-[12px]"
                        />
                    </div>

                    {/* White Box */}
                    <div className="absolute 
                        top-[32px] lg:top-[26px] xl:top-[32px]
                        left-0 w-full 
                        h-[238px] lg:h-[199px] xl:h-[238px]
                        rounded-[12px] bg-white shadow-[0px_0px_25.9px_0px_#0E295105] 
                        p-[52px_16px_16px]
                        lg:p-[38px_12px_12px]
                        xl:p-[52px_16px_16px]
                        box-border">
                        {/* Star Rating */}
                        <div className="flex gap-[4px] lg:gap-[3px] xl:gap-[4px] mb-[12px] lg:mb-[8px] xl:mb-[12px]">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-[20px] h-[19px] lg:w-[14px] lg:h-[14px] xl:w-[20px] xl:h-[19px] rounded-[0.5px]">
                                    <FaStar
                                        className="lg:w-[14px] lg:h-[14px] xl:w-[20px] xl:h-[20px]"
                                        color={i < testimonials[1].rating ? '#FF9140' : '#E5E7EB'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="font-['DM_Sans'] font-light 
                            text-[14px] leading-[100%] tracking-[0.28px]
                            lg:text-[12px] lg:leading-[16px] lg:tracking-[0.24px]
                            xl:text-[14px] xl:leading-[100%]
                            text-[#142349] 
                            mb-4 lg:mb-3 xl:mb-4
                            xl:w-[296px]">
                            {testimonials[1].text}
                        </p>

                        {/* Name */}
                        <h4 className="font-['DM_Sans'] font-medium 
                            text-[15px] lg:text-[13px] xl:text-[15px]
                            leading-[100%] text-[#1566B7] 
                            mb-1 lg:mb-[2px] xl:mb-1">
                            {testimonials[1].name}
                        </h4>

                        {/* Role */}
                        <p className="font-['DM_Sans'] font-light 
                            text-[12px] lg:text-[10px] xl:text-[12px]
                            leading-[20px] lg:leading-[16px] xl:leading-[20px]
                            text-[#7688B6]">
                            {testimonials[1].role}
                        </p>
                    </div>
                </div>

                {/* Card 3 - Bottom Left */}
                <div className="relative w-full max-w-[340px] h-[270px] 
                    lg:absolute lg:w-[245px] lg:h-[225px] lg:left-[405px] lg:top-[375px] lg:max-w-none
                    xl:absolute xl:w-[328px] xl:h-[270px] xl:left-[626px] xl:top-[463px] xl:max-w-none">
                    {/* Icon */}
                    <div className="absolute left-[22px] top-0 
                        w-[78px] h-[71px]
                        lg:w-[58px] lg:h-[53px]
                        xl:w-[78px] xl:h-[71px]
                        z-[2]">
                        <img
                            src={testimonials[2].image}
                            alt={testimonials[2].name}
                            className="w-full h-full object-cover rounded-[12px]"
                        />
                    </div>

                    {/* White Box */}
                    <div className="absolute 
                        top-[32px] lg:top-[26px] xl:top-[32px]
                        left-0 w-full 
                        h-[238px] lg:h-[199px] xl:h-[238px]
                        rounded-[12px] bg-white shadow-[0px_0px_25.9px_0px_#0E295105] 
                        p-[52px_16px_16px]
                        lg:p-[38px_12px_12px]
                        xl:p-[52px_16px_16px]
                        box-border">
                        {/* Star Rating */}
                        <div className="flex gap-[4px] lg:gap-[3px] xl:gap-[4px] mb-[12px] lg:mb-[8px] xl:mb-[12px]">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-[20px] h-[19px] lg:w-[14px] lg:h-[14px] xl:w-[20px] xl:h-[19px] rounded-[0.5px]">
                                    <FaStar
                                        className="lg:w-[14px] lg:h-[14px] xl:w-[20px] xl:h-[20px]"
                                        color={i < testimonials[2].rating ? '#FF9140' : '#E5E7EB'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="font-['DM_Sans'] font-light 
                            text-[14px] leading-[100%] tracking-[0.28px]
                            lg:text-[12px] lg:leading-[16px] lg:tracking-[0.24px]
                            xl:text-[14px] xl:leading-[100%]
                            text-[#142349] 
                            mb-4 lg:mb-3 xl:mb-4
                            xl:w-[296px]">
                            {testimonials[2].text}
                        </p>

                        {/* Name */}
                        <h4 className="font-['DM_Sans'] font-medium 
                            text-[15px] lg:text-[13px] xl:text-[15px]
                            leading-[100%] text-[#1566B7] 
                            mb-1 lg:mb-[2px] xl:mb-1">
                            {testimonials[2].name}
                        </h4>

                        {/* Role */}
                        <p className="font-['DM_Sans'] font-light 
                            text-[12px] lg:text-[10px] xl:text-[12px]
                            leading-[20px] lg:leading-[16px] xl:leading-[20px]
                            text-[#7688B6]">
                            {testimonials[2].role}
                        </p>
                    </div>
                </div>

                {/* Card 4 - Bottom Right */}
                <div className="relative w-full max-w-[340px] h-[270px] 
                    lg:absolute lg:w-[245px] lg:h-[225px] lg:left-[670px] lg:top-[345px] lg:max-w-none
                    xl:absolute xl:w-[333px] xl:h-[270px] xl:left-[996px] xl:top-[433px] xl:max-w-none">
                    {/* Icon */}
                    <div className="absolute left-[22px] top-0 
                        w-[78px] h-[71px]
                        lg:w-[58px] lg:h-[53px]
                        xl:w-[78px] xl:h-[71px]
                        z-[2]">
                        <img
                            src={testimonials[3].image}
                            alt={testimonials[3].name}
                            className="w-full h-full object-cover rounded-[12px]"
                        />
                    </div>

                    {/* White Box */}
                    <div className="absolute 
                        top-[32px] lg:top-[26px] xl:top-[32px]
                        left-0 w-full 
                        h-[238px] lg:h-[199px] xl:h-[238px]
                        rounded-[12px] bg-white shadow-[0px_0px_25.9px_0px_#0E295105] 
                        p-[52px_16px_16px]
                        lg:p-[38px_12px_12px]
                        xl:p-[52px_16px_16px]
                        box-border">
                        {/* Star Rating */}
                        <div className="flex gap-[4px] lg:gap-[3px] xl:gap-[4px] mb-[12px] lg:mb-[8px] xl:mb-[12px]">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-[20px] h-[19px] lg:w-[14px] lg:h-[14px] xl:w-[20px] xl:h-[19px] rounded-[0.5px]">
                                    <FaStar
                                        className="lg:w-[14px] lg:h-[14px] xl:w-[20px] xl:h-[20px]"
                                        color={i < testimonials[3].rating ? '#FF9140' : '#E5E7EB'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="font-['DM_Sans'] font-light 
                            text-[14px] leading-[100%] tracking-[0.28px]
                            lg:text-[12px] lg:leading-[16px] lg:tracking-[0.24px]
                            xl:text-[14px] xl:leading-[100%]
                            text-[#142349] 
                            mb-4 lg:mb-3 xl:mb-4
                            xl:w-[296px]">
                            {testimonials[3].text}
                        </p>

                        {/* Name */}
                        <h4 className="font-['DM_Sans'] font-medium 
                            text-[15px] lg:text-[13px] xl:text-[15px]
                            leading-[100%] text-[#1566B7] 
                            mb-1 lg:mb-[2px] xl:mb-1">
                            {testimonials[3].name}
                        </h4>

                        {/* Role */}
                        <p className="font-['DM_Sans'] font-light 
                            text-[12px] lg:text-[10px] xl:text-[12px]
                            leading-[20px] lg:leading-[16px] xl:leading-[20px]
                            text-[#7688B6]">
                            {testimonials[3].role}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
