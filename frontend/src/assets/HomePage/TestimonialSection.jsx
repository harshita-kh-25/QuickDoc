import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    text: `With Anarsik, we quickly identify document risks that used to go unnoticed. It's made our review process faster, more consistent, and far more reliable.`,
    name: 'Maya Torres',
    title: 'Marketing Director at LumiTech',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    text: `We've tried a few risk tools before, but Anarsik stands out. The AI tagging is spot on, and the visual dashboards make it easy to track what matters.`,
    name: 'Sara Cho',
    title: 'Product Manager at Waveform',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    text: `Thanks to Anarsik, we now have a complete risk overview for all vendors and internal docs. It’s streamlined our audits and improved trust across teams.`,
    name: 'Daniel Kun',
    title: 'Risk Analyst Expertise Manager',
    avatar: 'https://randomuser.me/api/portraits/men/66.jpg',
  },
  ,
  {
    text: `We've tried a few risk tools before, but Anarsik stands out. The AI tagging is spot on, and the visual dashboards make it easy to track what matters.`,
    name: 'Sara Cho',
    title: 'Product Manager at Waveform',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    text: `We've tried a few risk tools before, but Anarsik stands out. The AI tagging is spot on, and the visual dashboards make it easy to track what matters.`,
    name: 'Sara Cho',
    title: 'Product Manager at Waveform',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    text: `We've tried a few risk tools before, but Anarsik stands out. The AI tagging is spot on, and the visual dashboards make it easy to track what matters.`,
    name: 'Sara Cho',
    title: 'Product Manager at Waveform',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  }
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#0F0F0F] text-white py-20 px-4 relative">
       {/* Background with Radial Gradient and Blue Blur */}
      <div className="absolute inset-0 bg-[radial-gradient(circle, rgba(3,28,60,1) 0%, rgba(0,0,0,1) 80%)] opacity-70 z-0"></div>
      <div className="absolute inset-0 flex justify-center items-top pointer-events-none z-10">
        <div className="w-[300px] h-[300px] bg-blue-700 opacity-30 rounded-full blur-[160px]" />
      </div>
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="bg-gray-800 text-gray-300 text-xs uppercase px-3 py-1 rounded-full tracking-wider">
          Testimonial
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-2">What They Say?</h2>
        <p className="text-gray-400 text-sm">
          See how Anarsik is helping organizations simplify risk detection
          and stay compliant—faster and smarter.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-2">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
         
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#181818] rounded-xl p-8 shadow-lg text-left h-full flex flex-col justify-between">
                <div>
                  <div className="text-4xl text-gray-500 mb-4 leading-none">“</div>
                  <p className="text-gray-200 text-sm mb-6">{item.text}</p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-700"
                  />
                  <div>
                    <p className="text-sm font-semibold text-white">{item.name}</p>
                    <p className="text-xs text-gray-400">{item.title}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
