"use client";
import React, { useRef, useState, useEffect } from "react";
import { TrendingUp, Hammer, Star, Clock, Timer, LucideIcon, Quote, Award } from "lucide-react";
function useInView<T extends HTMLElement>(opts?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2, ...opts }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [opts]);

  return { ref, inView };
}

const images = ["/roof4.webp", "/roof5.webp", "/roof3.webp"]; // carousel images

const From = () => {
  const heading = useInView<HTMLDivElement>();
  const leftCol = useInView<HTMLDivElement>();
  const rightCol = useInView<HTMLDivElement>();
  const [currentImg, setCurrentImg] = useState(0);

  // Carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 4000); // change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
    id="Result"
     className="relative isolate overflow-hidden py-20 bg-white text-white">
      {/* Animated background blobs */}
       <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute -top-28 -left-28 h-[460px] w-[460px] rounded-full bg-blue-300/20 blur-3xl animate-blob" />
        <div className="absolute top-6 -right-28 h-[560px] w-[560px] rounded-full bg-blue-400/20 blur-3xl animate-blob a-delay-200" />
        <div className="absolute -bottom-44 left-1/3 h-[540px] w-[540px] rounded-full bg-blue-500/20 blur-3xl animate-blob a-delay-400" />
      </div> 

      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        {/* Heading */}
        <div
          ref={heading.ref}
          className={`text-center mb-14 transition-all duration-700 ${
            heading.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900">
Roofing Experts Homeowners Trust
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-blue-900/80">
Homeowners trust TopDog Roofing to connect 
them with experienced roofing professionals who deliver reliable service, fast response times, and high quality workmanship.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT COLUMN - Feature Cards */}
        <div
  ref={leftCol.ref}
  className={`grid grid-cols-1 sm:grid-cols-2 gap-6 h-full transition-all duration-700 ${
    leftCol.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
>
           <FeatureCard
  title="1,000+ "
  subtitle="Roofs Repaired & Replaced"
  desc="Trusted roofing services for homeowners across multiple communities."
  icon={Hammer}
  delay={0}
/>

<FeatureCard
  title="4.8★ "
  subtitle="Average Customer Rating"
  desc="Highly rated by homeowners for quality work and reliable service."
  icon={Star}
  delay={100}
/>

<FeatureCard
  title="10+ "
  subtitle="Years Roofing Experience"
  desc="Experienced roofing professionals delivering dependable results."
  icon={Award}
  delay={200}
/>

<FeatureCard
  title="24 Hours"
  subtitle=" Inspection Response"
  desc="Fast inspections to quickly address roofing issues."
  icon={Timer}
  delay={300}
/>
<div className="sm:col-span-2">
      <FeatureCard
      title="ROOFING SUCESS STORY"
      subtitle=""
      desc="When a powerful storm left a homeowner’s roof badly damaged, our contractor network arranged a
       same day inspection and assisted 
       with the insurance claim, helping secure quick approval for a full roof replacement.
        The home is now fully protected with a brand new, durable roofing system..
"
      icon={TrendingUp}
      delay={400}
    />
  </div>
          </div>

          {/* RIGHT IMAGE + Testimonial */}
          <div
            ref={rightCol.ref}
            className={`relative rounded-3xl overflow-hidden h-full min-h-[620px] shadow-lg ring-1 ring-white/20 transition-all duration-700 ${
              rightCol.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <img
              src={images[currentImg]}
              alt="Roof"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 sm:right-auto bg-blue-950 rounded-2xl p-5 shadow-xl ring-1 ring-blue-400 max-w-md floaty">
              <div className="flex items-start gap-3 mb-3">
                <h3 className="text-white text-md">
      A roof built strong is a promise kept, guarding your home while you rest. Every project is crafted with care and trusted by homeowners across the community. With expertise and dedication, we rise to protect, ensuring your peace of mind no matter the call.
                </h3>
          
              
              </div>
            
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%{transform:translate(0,0) scale(1);}
          33%{transform:translate(18px,-22px) scale(1.05);}
          66%{transform:translate(-16px,14px) scale(0.98);}
          100%{transform:translate(0,0) scale(1);}
        }
        .animate-blob {animation:blob 9s ease-in-out infinite;}
        .a-delay-200 {animation-delay:200ms;}
        .a-delay-400 {animation-delay:400ms;}

        @keyframes floaty {0%,100%{transform:translateY(0);}50%{transform:translateY(-6px);}}
        .floaty {animation:floaty 4s ease-in-out infinite;}
      `}</style>
    </section>
  );
};

// Feature card component
const FeatureCard = ({ title,subtitle, desc, icon: Icon, delay = 0 }: { title: string; subtitle:string; desc: string; icon: LucideIcon; delay?: number }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
     className={`group relative rounded-2xl p-6 bg-gradient-to-br  from-blue-900 to-blue-950 text-white shadow-lg ring-2 ring-blue-600 transition-all duration-500 ease-out opacity-0 translate-y-8 ${inView ? "opacity-100 translate-y-0" : ""}`}
    >
      <div className="w-12 h-12 rounded-xl flex items-center justify-start bg-blue-00 text-white mb-4">
        <Icon className="w-6 h-6 " />
      </div>
      <h3 className="text-xl font-semibold ">{title}</h3>
            <h3 className="text-lg xl:text-md font-semibold mt-2">{subtitle}</h3>

      <p className="mt-2 text-sm text-white/90">{desc}</p>
    </div>
  );
};

export default From;