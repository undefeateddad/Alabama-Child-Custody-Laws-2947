import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFileText, FiCalendar, FiClock, FiMapPin, FiPhone, FiDollarSign, FiCheck, FiAlertCircle } = FiIcons;

const ParentingPlans = () => {
  const requiredElements = [
    {
      icon: FiCalendar,
      title: 'Time-Sharing Schedule',
      description: 'Detailed schedule for when the child will be with each parent',
      details: [
        'Regular weekly schedule',
        'Holiday and vacation arrangements',
        'Summer break schedule',
        'Special occasions (birthdays, Mother\'s/Father\'s Day)',
        'Makeup time provisions'
      ]
    },
    {
      icon: FiMapPin,
      title: 'Transportation Arrangements',
      description: 'How the child will travel between parents\' homes',
      details: [
        'Who provides transportation',
        'Meeting locations for exchanges',
        'Travel costs responsibility',
        'Long-distance travel arrangements',
        'Emergency transportation procedures'
      ]
    },
    {
      icon: FiPhone,
      title: 'Communication Guidelines',
      description: 'Rules for communication between parents and with the child',
      details: [
        'Phone/video call schedules',
        'Communication methods and frequency',
        'Emergency contact procedures',
        'School and activity communication',
        'Dispute resolution methods'
      ]
    },
    {
      icon: FiDollarSign,
      title: 'Financial Responsibilities',
      description: 'How costs related to the child will be handled',
      details: [
        'Child support arrangements',
        'Medical and dental expenses',
        'Educational costs',
        'Extracurricular activity expenses',
        'Childcare costs'
      ]
    }
  ];

  const scheduleExamples = [
    {
      title: 'Standard Schedule',
      description: 'Common arrangement for school-age children',
      schedule: 'Every other weekend (Friday evening to Sunday evening) plus one weeknight'
    },
    {
      title: '2-2-3 Schedule',
      description: 'Alternating 2 and 3 day periods',
      schedule: 'Parent A: Mon-Tue, Parent B: Wed-Thu, Parent A: Fri-Sun (alternates weekly)'
    },
    {
      title: 'Week On/Week Off',
      description: 'Equal time sharing for older children',
      schedule: 'Child spends one full week with each parent, alternating'
    },
    {
      title: 'Split Week',
      description: 'Consistent weekly split',
      schedule: 'Monday-Wednesday with one parent, Thursday-Sunday with the other'
    }
  ];

  const holidays = [
    { holiday: 'New Year\'s Day', arrangement: 'Alternates yearly' },
    { holiday: 'Easter/Spring Break', arrangement: 'Alternates yearly' },
    { holiday: 'Memorial Day', arrangement: 'Alternates yearly' },
    { holiday: 'Independence Day', arrangement: 'Alternates yearly' },
    { holiday: 'Labor Day', arrangement: 'Alternates yearly' },
    { holiday: 'Thanksgiving', arrangement: 'Thursday with one parent, Friday-Sunday with other' },
    { holiday: 'Christmas/Winter Break', arrangement: 'Split break or alternate years' },
    { holiday: 'Child\'s Birthday', arrangement: 'Usually with parent having regular time' },
    { holiday: 'Mother\'s Day', arrangement: 'With mother' },
    { holiday: 'Father\'s Day', arrangement: 'With father' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Alabama Parenting Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive guide to creating effective parenting plans that serve the best interests of your child and comply with Alabama law.
          </p>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-12 rounded-r-lg"
        >
          <div className="flex items-start">
            <SafeIcon icon={FiAlertCircle} className="h-6 w-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Parenting Plan Requirement</h3>
              <p className="text-blue-700">
                Alabama law requires all parents involved in custody cases to submit a detailed parenting plan. 
                This plan must address all aspects of the child's care and be approved by the court.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Required Elements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {requiredElements.map((element, index) => (
            <motion.div
              key={element.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-lg p-3 mr-3">
                  <SafeIcon icon={element.icon} className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {element.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{element.description}</p>
              <ul className="space-y-2">
                {element.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <SafeIcon icon={FiCheck} className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Schedule Examples */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Common Parenting Schedule Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scheduleExamples.map((example, index) => (
              <div key={example.title} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {example.title}
                </h3>
                <p className="text-gray-600 mb-3">{example.description}</p>
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-800 font-medium">{example.schedule}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <p className="text-yellow-800">
              <strong>Note:</strong> The best schedule depends on your family's specific circumstances, 
              including the child's age, school schedule, parents' work schedules, and geographic distance.
            </p>
          </div>
        </motion.div>

        {/* Holiday Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Holiday and Special Occasion Schedule
          </h2>
          <p className="text-gray-600 mb-8">
            Holiday schedules typically take precedence over regular parenting time schedules. 
            Here are common arrangements for major holidays:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    Holiday/Occasion
                  </th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">
                    Common Arrangement
                  </th>
                </tr>
              </thead>
              <tbody>
                {holidays.map((holiday, index) => (
                  <tr key={holiday.holiday} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                      {holiday.holiday}
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">
                      {holiday.arrangement}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Tips for Success */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Tips for Creating an Effective Parenting Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Best Practices</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Be specific and detailed to avoid confusion</span>
                </li>
                <li className="flex items-start">
                  <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Consider the child's developmental needs</span>
                </li>
                <li className="flex items-start">
                  <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Include provisions for plan modifications</span>
                </li>
                <li className="flex items-start">
                  <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-600 mr-3 mt-1" />
                  <span className="text-gray-700">Address technology and social media use</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Considerations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <SafeIcon icon={FiClock} className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <span className="text-gray-700">Plan for the child's changing needs as they grow</span>
                </li>
                <li className="flex items-start">
                  <SafeIcon icon={FiMapPin} className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <span className="text-gray-700">Consider geographic constraints and travel time</span>
                </li>
                <li className="flex items-start">
                  <SafeIcon icon={FiPhone} className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <span className="text-gray-700">Establish clear communication protocols</span>
                </li>
                <li className="flex items-start">
                  <SafeIcon icon={FiFileText} className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                  <span className="text-gray-700">Include emergency procedures and contacts</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ParentingPlans;