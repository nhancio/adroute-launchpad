import { Clock, TrendingUp, BarChart3 } from "lucide-react";

const AdvertisingStructureSection = () => {
  return (
    <section id="advertising-structure" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-red-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-red-200 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 animate-fade-up">
          <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-red-100 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            Performance Metrics
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4 sm:mb-6">
            Daily Advertising <span className="text-primary">Structure</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Optimized advertising windows designed for maximum engagement and reach
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Left Section - Daily Structure */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-red-100 animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Daily Advertising Structure
              </h3>
            </div>

            <div className="space-y-6">
              {/* 14 Total Hours */}
              <div className="border-l-4 border-primary pl-4">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">14</div>
                <div className="text-sm sm:text-base text-muted-foreground mb-1">
                  Total Hours
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground/70">
                  Operating advertising window per day
                </div>
              </div>

              {/* 12 Business Hours */}
              <div className="border-l-4 border-red-400 pl-4">
                <div className="text-4xl sm:text-5xl font-bold text-red-600 mb-2">12</div>
                <div className="text-sm sm:text-base text-muted-foreground mb-1">
                  Business Hours
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground/70">
                  Prime advertising time
                </div>
              </div>

              {/* 2 Hours */}
              <div className="border-l-4 border-red-200 pl-4">
                <div className="text-4xl sm:text-5xl font-bold text-red-400 mb-2">2</div>
                <div className="text-sm sm:text-base text-muted-foreground mb-1">
                  Hours
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground/70">
                  Non-business window
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Performance Breakdown */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg border border-red-100 animate-fade-up animation-delay-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                12 Hours Performance Breakdown
              </h3>
            </div>

            <div className="space-y-6">
              {/* Peak Hours */}
              <div className="border-l-4 border-primary pl-4">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-2">43%</div>
                <div className="text-sm sm:text-base text-muted-foreground mb-1">
                  Peak Hours
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground/70">
                  6 hours of high engagement
                </div>
              </div>

              {/* Semi-Peak */}
              <div className="border-l-4 border-red-500 pl-4">
                <div className="text-4xl sm:text-5xl font-bold text-red-600 mb-2">29%</div>
                <div className="text-sm sm:text-base text-muted-foreground mb-1">
                  Semi-Peak
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground/70">
                  4 hours of moderate engagement
                </div>
              </div>

              {/* Late Reach */}
              <div className="border-l-4 border-red-300 pl-4">
                <div className="text-4xl sm:text-5xl font-bold text-red-500 mb-2">14%</div>
                <div className="text-sm sm:text-base text-muted-foreground mb-1">
                  Late Reach
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground/70">
                  2 hours of evening coverage
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvertisingStructureSection;
