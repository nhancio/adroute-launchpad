import { Zap, Eye, PieChart, Brain } from "lucide-react";

const WhyNowSection = () => {
  const highlights = [
    {
      icon: Eye,
      title: "Massive Daily Reach",
      description: "Access millions of commuters across India's busiest travel routes every single day.",
      stat: "1M+",
      statLabel: "Daily Impressions",
    },
    {
      icon: Zap,
      title: "High-Intent Audience",
      description: "Capture attention of active travelers ready to discover and engage with brands.",
      stat: "85%",
      statLabel: "Engagement Rate",
    },
    {
      icon: PieChart,
      title: "Transparent Metrics",
      description: "Real-time dashboards showing exactly how your campaigns perform.",
      stat: "100%",
      statLabel: "Visibility",
    },
    {
      icon: Brain,
      title: "AI-Driven Optimization",
      description: "Smart algorithms that maximize ROI through intelligent ad placement.",
      stat: "3x",
      statLabel: "Better ROI",
    },
  ];

  return (
    <section id="why-now" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-red-200 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 animate-fade-up">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-red-100 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Timing is Everything
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
            Why <span className="text-primary">Now</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            India is in the middle of a massive AI and digital transformation. This is the perfect time to activate your brand across high-impact digital spaces.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-red-100 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl gradient-accent flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <item.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
              </div>

              {/* Stat */}
              <div className="mb-3 sm:mb-4">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{item.stat}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">
                  {item.statLabel}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center animate-fade-up">
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 px-4">
            AdRoute offers massive audience reach directly along the routes people travel every day.
          </p>
          <p className="text-sm sm:text-base text-foreground font-medium px-4">
            Transparent, data-driven campaigns that deliver{" "}
            <span className="text-primary">measurable results</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;
