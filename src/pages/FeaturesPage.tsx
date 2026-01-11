import React from 'react';
import { MapPin, Brain, BarChart3, Trophy, Eye, Smartphone } from 'lucide-react';

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: <Smartphone size={48} />,
      title: 'Real-time Reporting',
      description: 'Report issues instantly with photo upload and automatic location capture. Our mobile-optimized platform makes it easy to document problems as they occur.',
      color: 'bg-blue-500',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Brain size={48} />,
      title: 'AI Categorization',
      description: 'Advanced AI automatically categorizes your reports for faster processing. Issues are intelligently routed to the appropriate departments for quicker resolution.',
      color: 'bg-purple-500',
      bgColor: 'bg-purple-50'
    },
    {
      icon: <BarChart3 size={48} />,
      title: 'Live Heatmap Dashboard',
      description: 'Interactive map visualization shows issue density across your city. Track patterns, identify hotspots, and see where improvements are needed most.',
      color: 'bg-green-500',
      bgColor: 'bg-green-50'
    },
    {
      icon: <Trophy size={48} />,
      title: 'Gamification & Rewards',
      description: 'Earn points, badges, and recognition for your contributions. Compete on leaderboards and unlock achievements as you help improve your community.',
      color: 'bg-orange-500',
      bgColor: 'bg-orange-50'
    },
    {
      icon: <Eye size={48} />,
      title: 'Complete Transparency',
      description: 'Track every report from submission to resolution. Get real-time updates on progress and see exactly how your input creates positive change.',
      color: 'bg-indigo-500',
      bgColor: 'bg-indigo-50'
    },
    {
      icon: <MapPin size={48} />,
      title: 'Smart Location Services',
      description: 'Precise GPS tracking and geofencing ensure reports are routed to the correct local authorities. Auto-detect your location or manually pin exact spots.',
      color: 'bg-red-500',
      bgColor: 'bg-red-50'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Powerful Features for Better Communities
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how Spot & Solve transforms civic engagement through innovative technology, 
            making it easier than ever to report issues and track their resolution.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className={`${feature.bgColor} p-8 text-center`}>
                <div className={`inline-flex items-center justify-center w-20 h-20 ${feature.color} text-white rounded-2xl mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{feature.title}</h3>
              </div>
              <div className="p-8">
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to make a big impact</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Report an Issue</h3>
              <p className="text-gray-600">Take a photo, add location, and describe the problem in just a few taps.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Community Votes</h3>
              <p className="text-gray-600">Other citizens can vote on the importance of your report, prioritizing urgent issues.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Track Progress</h3>
              <p className="text-gray-600">Get real-time updates as authorities acknowledge and resolve your report.</p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl shadow-xl p-12 text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Benefits for Everyone</h2>
            <p className="text-xl opacity-90">Making civic engagement rewarding and effective</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">For Citizens</h3>
              <ul className="space-y-3 text-lg opacity-90">
                <li>• Quick and easy issue reporting</li>
                <li>• Track resolution progress in real-time</li>
                <li>• Earn rewards for community participation</li>
                <li>• Voice heard by local authorities</li>
                <li>• Build a stronger, more connected community</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">For Administrators</h3>
              <ul className="space-y-3 text-lg opacity-90">
                <li>• Centralized issue management system</li>
                <li>• Data-driven insights and analytics</li>
                <li>• Prioritize based on community input</li>
                <li>• Improved citizen satisfaction</li>
                <li>• Efficient resource allocation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Experience These Features?</h2>
          <p className="text-xl text-gray-600 mb-8">Join thousands of citizens making their communities better</p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
              Start Reporting
            </button>
            <button className="bg-transparent hover:bg-gray-100 text-gray-800 font-bold py-3 px-8 rounded-full text-lg border-2 border-gray-300 hover:border-gray-400 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;