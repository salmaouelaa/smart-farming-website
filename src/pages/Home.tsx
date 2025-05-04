
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChartBar, ChartLine } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-farm-blue/10 to-farm-green/10 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
                Smart Farming for a <span className="text-farm-green">Sustainable</span> Future
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Optimize your farm's resources with AI-driven recommendations for water, fertilizer, and crop management.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-farm-green hover:bg-farm-lightGreen text-white px-8 py-6 text-lg">
                  <Link to="/farm-form">Get Started</Link>
                </Button>
                <Button asChild variant="outline" className="border-farm-green text-farm-green hover:bg-farm-green/10 px-8 py-6 text-lg">
                  <Link to="/resource-dashboard">View Demo Dashboard</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Smart farming with data visualization" 
                className="rounded-lg shadow-xl animate-fade-in" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Smart Farming Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Using advanced algorithms and data analysis to optimize your farm's resource allocation for maximum yield and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-t-farm-green animate-fade-up">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4 h-14 w-14 rounded-full bg-farm-green/10 text-farm-green mx-auto">
                  <ChartLine size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Resource Optimization</h3>
                <p className="text-gray-600 text-center">
                  AI-driven analysis to optimize water, fertilizer, and other resources for each crop and growth stage.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-farm-blue animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4 h-14 w-14 rounded-full bg-farm-blue/10 text-farm-blue mx-auto">
                  <ChartBar size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Algorithm Comparison</h3>
                <p className="text-gray-600 text-center">
                  Compare the efficiency of different optimization algorithms like Greedy, A*, and GA for your specific farm needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-farm-yellow animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4 h-14 w-14 rounded-full bg-farm-yellow/10 text-farm-yellow mx-auto">
                  <ChartLine size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Yield Impact Analysis</h3>
                <p className="text-gray-600 text-center">
                  Visualize how different water and fertilizer usage patterns impact your crop yield over time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our platform uses advanced AI algorithms to analyze your farm's specific needs and provide optimized resource management plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-farm-green text-white text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Input Farm Data</h3>
              <p className="text-gray-600">Enter information about your land, crops, and current resource usage.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-farm-green text-white text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">AI Analysis</h3>
              <p className="text-gray-600">Our algorithms analyze your data using multiple optimization methods.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-farm-green text-white text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Get Recommendations</h3>
              <p className="text-gray-600">Receive detailed resource allocation plans optimized for your farm.</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-farm-green text-white text-xl font-bold mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Implement & Monitor</h3>
              <p className="text-gray-600">Apply the recommendations and track improvements in yield and efficiency.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-farm-green hover:bg-farm-lightGreen text-white px-8 py-6">
              <Link to="/farm-form">Start Your Analysis</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-farm-green to-farm-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Optimize Your Farm?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Join thousands of farmers who are already seeing increased yields and reduced resource consumption with our smart farming solutions.
          </p>
          <Button asChild className="bg-white text-farm-green hover:bg-gray-100 px-8 py-6 text-lg">
            <Link to="/farm-form">Get Started Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
