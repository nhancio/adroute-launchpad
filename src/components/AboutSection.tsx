import { Target, Cpu, Users, BarChart3 } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: Target,
      title: "Massive Scale",
      description: "Reach millions across India's largest travel network",
    },
    {
      icon: Cpu,
      title: "Smart Technology",
      description: "AI-powered ad delivery and real-time optimization",
    },
    {
      icon: Users,
      title: "Personalization",
      description: "Tailored campaigns for high-intent audiences",
    },
    {
      icon: BarChart3,
      title: "Analytics",
      description: "Transparent metrics and performance tracking",
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="animate-fade-up order-2 lg:order-1">
            <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-red-100 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
              About{" "}
              <span className="text-primary">AdRoute</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              AdRoute is on a mission to amplify brand presence and capture high engaging audience eyeballs across India's largest travel network, buses.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground">
              We are building a powerful technology ecosystem to deliver high-quality impressions for your brand story through personalized campaigns that capture high-intent customers at scale.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 animate-fade-up animation-delay-200">
            <img 
              src="/images/tgsrtc.jpeg" 
              alt="TGSRTC Bus Network" 
              className="w-full h-auto rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card p-4 sm:p-6 rounded-xl sm:rounded-2xl hover:shadow-lg transition-all duration-300 group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-100 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
