import { Monitor, Volume2, Clock, Settings } from "lucide-react";

const WhatWeOfferSection = () => {
  const features = [
    {
      icon: Monitor,
      title: "Premium Display",
      description: "15.6-inch Full HD digital screens inside the TGSRTC buses, positioned for maximum visibility to all passengers.",
    },
    {
      icon: Volume2,
      title: "Audio-Video Impact",
      description: "Your brand is both seen and heard during the entire commute, creating memorable impressions.",
    },
    {
      icon: Clock,
      title: "Time-Based Targeting",
      description: "Strategic ad delivery across Peak, Semi-Peak, and Late Reach hours for optimal engagement.",
    },
    {
      icon: Settings,
      title: "Centralized Control",
      description: "Our team operates the system, ensuring reliable delivery and earning your trust.",
    },
  ];

  return (
    <section id="what-we-offer" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="order-1 lg:order-1 animate-fade-up">
            <img 
              src="/images/tgsrtc.jpeg" 
              alt="TGSRTC Bus" 
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="order-2 lg:order-2 animate-fade-up animation-delay-200">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-red-100 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              Our Services
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 sm:mb-8">
              What We <span className="text-primary">Offer</span>
            </h2>

            <div className="space-y-4 sm:space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 group animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
