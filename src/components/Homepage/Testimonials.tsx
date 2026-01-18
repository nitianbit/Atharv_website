// import { IoChatbubblesSharp } from 'react-icons/io5';
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
        <section className="w-full xl:w-full xl:max-w-[1512px] mx-auto bg-[#3177E11A] relative py-16 xl:py-[64px] xl:h-[875px]">
            <div className="max-w-[1512px] mx-auto relative flex flex-col items-center xl:block h-full gap-10 xl:gap-0">
                {/* Left Section - Heading */}
                <div className="relative w-full px-4 text-center xl:text-left xl:absolute xl:left-[100px] xl:top-0 xl:w-[616px] xl:px-0 flex flex-col gap-3 xl:gap-[12px]">
                    {/* Heading */}
                    <h2 className="font-['Source_Serif_Pro'] font-semibold text-[#142349] capitalize text-3xl md:text-4xl xl:text-[46px] xl:leading-[100%] xl:tracking-[0.92px] m-0">
                        What <span className="text-[#1566B7]">Our Clients</span> Say
                    </h2>

                    {/* Description */}
                    <p className="font-['DM_Sans'] font-light text-[#142349] text-base md:text-lg xl:text-[18px] xl:leading-[30px] xl:w-[495px] m-0">
                        Real feedback from organizations and communities we support across India.
                    </p>
                </div>

                {/* ClientCircle Image Container */}
                <div className="relative w-[80%] max-w-[500px] aspect-square xl:aspect-auto xl:w-[527px] xl:h-[558.5px] xl:absolute xl:left-[30px] xl:top-[160px] xl:m-0">
                    <img
                        src="/Homepage/ClientCircle.png"
                        alt="Client Circle"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Right Section - Testimonial Cards */}

                {/* A container for cards on mobile to manage grid/stack if needed, 
                    but strict preservation suggests keeping them as direct children for Desktop absolute positioning.
                    We will style them individually as requested. */}

                {/* Card 1 - Top Left */}
                <div className="relative w-full max-w-[340px] h-[270px] xl:absolute xl:w-[328px] xl:left-[626px] xl:top-[163px] xl:max-w-none">
                    {/* Icon */}
                    <div className="absolute left-[22px] top-0 w-[78px] h-[71px] z-[2]">
                        <img
                            src={testimonials[0].image}
                            alt={testimonials[0].name}
                            className="w-full h-full object-cover rounded-[12px]"
                        />
                    </div>

                    {/* White Box */}
                    <div className="absolute top-[32px] left-0 w-full h-[238px] rounded-[12px] bg-white shadow-[0px_0px_25.9px_0px_#0E295105] p-[52px_16px_16px] box-border">
                        {/* Star Rating */}
                        <div className="flex gap-[4px] mb-[12px]">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-[20px] h-[19px] rounded-[0.5px]">
                                    <FaStar
                                        size={20}
                                        color={i < testimonials[0].rating ? '#FF9140' : '#E5E7EB'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="font-['DM_Sans'] font-light text-[14px] leading-[100%] tracking-[0.28px] text-[#142349] mb-4 xl:w-[296px]">
                            {testimonials[0].text}
                        </p>

                        {/* Name */}
                        <h4 className="font-['DM_Sans'] font-medium text-[15px] leading-[100%] text-[#1566B7] mb-1 xl:w-[155px]">
                            {testimonials[0].name}
                        </h4>

                        {/* Role */}
                        <p className="font-['DM_Sans'] font-light text-[12px] leading-[20px] text-[#7688B6] xl:w-[199px]">
                            {testimonials[0].role}
                        </p>
                    </div>
                </div>

                {/* Card 2 - Top Right */}
                <div className="relative w-full max-w-[340px] h-[270px] xl:absolute xl:w-[333px] xl:left-[996px] xl:top-[133px] xl:max-w-none">
                    {/* Icon */}
                    <div className="absolute left-[22px] top-0 w-[78px] h-[71px] z-[2]">
                        <img
                            src={testimonials[1].image}
                            alt={testimonials[1].name}
                            className="w-full h-full object-cover rounded-[12px]"
                        />
                    </div>

                    {/* White Box */}
                    <div className="absolute top-[32px] left-0 w-full h-[238px] rounded-[12px] bg-white shadow-[0px_0px_25.9px_0px_#0E295105] p-[52px_16px_16px] box-border">
                        {/* Star Rating */}
                        <div className="flex gap-[4px] mb-[12px]">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-[20px] h-[19px] rounded-[0.5px]">
                                    <FaStar
                                        size={20}
                                        color={i < testimonials[1].rating ? '#FF9140' : '#E5E7EB'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="font-['DM_Sans'] font-light text-[14px] leading-[100%] tracking-[0.28px] text-[#142349] mb-4 xl:w-[296px]">
                            {testimonials[1].text}
                        </p>

                        {/* Name */}
                        <h4 className="font-['DM_Sans'] font-medium text-[15px] leading-[100%] text-[#1566B7] mb-1 xl:w-[155px]">
                            {testimonials[1].name}
                        </h4>

                        {/* Role */}
                        <p className="font-['DM_Sans'] font-light text-[12px] leading-[20px] text-[#7688B6] xl:w-[199px]">
                            {testimonials[1].role}
                        </p>
                    </div>
                </div>

                {/* Card 3 - Bottom Left */}
                <div className="relative w-full max-w-[340px] h-[270px] xl:absolute xl:w-[328px] xl:left-[626px] xl:top-[463px] xl:max-w-none">
                    {/* Icon */}
                    <div className="absolute left-[22px] top-0 w-[78px] h-[71px] z-[2]">
                        <img
                            src={testimonials[2].image}
                            alt={testimonials[2].name}
                            className="w-full h-full object-cover rounded-[12px]"
                        />
                    </div>

                    {/* White Box */}
                    <div className="absolute top-[32px] left-0 w-full h-[238px] rounded-[12px] bg-white shadow-[0px_0px_25.9px_0px_#0E295105] p-[52px_16px_16px] box-border">
                        {/* Star Rating */}
                        <div className="flex gap-[4px] mb-[12px]">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-[20px] h-[19px] rounded-[0.5px]">
                                    <FaStar
                                        size={20}
                                        color={i < testimonials[2].rating ? '#FF9140' : '#E5E7EB'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="font-['DM_Sans'] font-light text-[14px] leading-[100%] tracking-[0.28px] text-[#142349] mb-4 xl:w-[296px]">
                            {testimonials[2].text}
                        </p>

                        {/* Name */}
                        <h4 className="font-['DM_Sans'] font-medium text-[15px] leading-[100%] text-[#1566B7] mb-1 xl:w-[155px]">
                            {testimonials[2].name}
                        </h4>

                        {/* Role */}
                        <p className="font-['DM_Sans'] font-light text-[12px] leading-[20px] text-[#7688B6] xl:w-[199px]">
                            {testimonials[2].role}
                        </p>
                    </div>
                </div>

                {/* Card 4 - Bottom Right */}
                <div className="relative w-full max-w-[340px] h-[270px] xl:absolute xl:w-[333px] xl:left-[996px] xl:top-[433px] xl:max-w-none">
                    {/* Icon */}
                    <div className="absolute left-[22px] top-0 w-[78px] h-[71px] z-[2]">
                        <img
                            src={testimonials[3].image}
                            alt={testimonials[3].name}
                            className="w-full h-full object-cover rounded-[12px]"
                        />
                    </div>

                    {/* White Box */}
                    <div className="absolute top-[32px] left-0 w-full h-[238px] rounded-[12px] bg-white shadow-[0px_0px_25.9px_0px_#0E295105] p-[52px_16px_16px] box-border">
                        {/* Star Rating */}
                        <div className="flex gap-[4px] mb-[12px]">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className="w-[20px] h-[19px] rounded-[0.5px]">
                                    <FaStar
                                        size={20}
                                        color={i < testimonials[3].rating ? '#FF9140' : '#E5E7EB'}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <p className="font-['DM_Sans'] font-light text-[14px] leading-[100%] tracking-[0.28px] text-[#142349] mb-4 xl:w-[296px]">
                            {testimonials[3].text}
                        </p>

                        {/* Name */}
                        <h4 className="font-['DM_Sans'] font-medium text-[15px] leading-[100%] text-[#1566B7] mb-1 xl:w-[155px]">
                            {testimonials[3].name}
                        </h4>

                        {/* Role */}
                        <p className="font-['DM_Sans'] font-light text-[12px] leading-[20px] text-[#7688B6] xl:w-[199px]">
                            {testimonials[3].role}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
