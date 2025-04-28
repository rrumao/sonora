
import { Phone, MessageSquare, BarChart3, Star } from 'lucide-react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Smart Voice Feedback',
      description: 'Our AI agents automatically call customers post-service, conducting natural conversations to gather detailed, meaningful feedback about their experience.',
      icon: <Phone className="h-7 w-7" />,
      delay: 0
    },
    {
      title: 'One-Touch Review Posting',
      description: 'Customers receive their feedback as text, pre-formatted and ready to share. One click posts their review to Google, Yelp, and other platforms.',
      icon: <Star className="h-7 w-7" />,
      delay: 100
    },
    {
      title: 'Customized Questions',
      description: 'Tailor feedback questions to your specific business needs, services, and team members to gather the most relevant insights.',
      icon: <MessageSquare className="h-7 w-7" />,
      delay: 200
    },
    {
      title: 'Business Analytics',
      description: 'Access detailed metrics and trends about customer satisfaction, service quality, and online reputation all in one dashboard.',
      icon: <BarChart3 className="h-7 w-7" />,
      delay: 300
    }
  ];

  return (
    <section id="features" className="section">
      <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Automate Your <span className="gradient-text">Customer Feedback</span>
        </h2>
        <p className="text-lg text-gray-600">
          Let our AI handle the follow-up calls while you focus on delivering great service. 
          Boost your online presence and gain valuable insights without lifting a finger.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            delay={feature.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
