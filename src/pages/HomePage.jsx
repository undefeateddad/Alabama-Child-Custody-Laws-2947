import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiFileText, FiShield, FiHeart, FiArrowRight, FiAlertCircle } = FiIcons;

const HomePage = () => {
  const features = [
    {
      icon: FiUsers,
      title: 'Custody Types',
      description: 'Understanding joint, sole, and shared custody arrangements in Alabama.',
      link: '/custody-types'
    },
    {
      icon: FiFileText,
      title: 'Parenting Plans',
      description: 'Requirements and guidelines for creating effective parenting plans.',
      link: '/parenting-plans'
    },
    {
      icon: FiShield,
      title: 'Legal Requirements',
      description: 'Court procedures, filing requirements, and legal standards.',
      link: '/legal-requirements'
    },
    {
      icon: FiHeart,
      title: 'Child Support',
      description: 'Alabama child support guidelines and calculation methods.',
      link: '/child-support'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Alabama Parenting & Custody Laws
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Comprehensive guide to Alabama custody laws, parenting plans, and legal requirements for families.
            </p>
            <Link
              to="/legal-requirements"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
              <SafeIcon icon={FiArrowRight} className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-amber-50 border-l-4 border-amber-400 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start">
            <SafeIcon icon={FiAlertCircle} className="h-6 w-6 text-amber-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Legal Notice</h3>
              <p className="text-amber-700">
                This information is for educational purposes only and does not constitute legal advice. 
                Alabama custody laws are complex and each case is unique. Always consult with a qualified 
                Alabama family law attorney for guidance specific to your situation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Information Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Understanding Alabama Custody Laws
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate the legal requirements and processes for child custody and parenting arrangements in Alabama.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-100 rounded-lg p-3 w-fit mb-4">
                  <SafeIcon icon={feature.icon} className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {feature.description}
                </p>
                <Link
                  to={feature.link}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700"
                >
                  Learn More
                  <SafeIcon icon={FiArrowRight} className="ml-1 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Alabama's Best Interest Standard
              </h2>
              <p className="text-gray-600 mb-6">
                Alabama courts use the "best interest of the child" standard when making custody decisions. 
                This comprehensive approach considers multiple factors to ensure the child's wellbeing and development.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Child's physical and emotional needs</strong> - Health, safety, and emotional wellbeing
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Parental fitness and stability</strong> - Each parent's ability to provide care
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    <strong>Existing relationships</strong> - Bonds with parents, siblings, and extended family
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Jurisdiction</h4>
                  <p className="text-gray-600">Alabama state courts handle custody matters</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Residency Requirement</h4>
                  <p className="text-gray-600">6 months Alabama residency required</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Parenting Plans</h4>
                  <p className="text-gray-600">Required in all custody cases</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Mediation</h4>
                  <p className="text-gray-600">Often required before trial</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;