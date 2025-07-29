import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUsers, FiUser, FiHeart, FiClock, FiHome, FiCheck, FiX } = FiIcons;

const CustodyTypes = () => {
  const custodyTypes = [
    {
      icon: FiUsers,
      title: 'Joint Custody',
      subtitle: 'Shared Legal and Physical Custody',
      description: 'Both parents share decision-making authority and parenting time',
      pros: [
        'Child maintains strong relationship with both parents',
        'Shared responsibility for major decisions',
        'More balanced parenting time',
        'Often preferred by Alabama courts'
      ],
      cons: [
        'Requires high level of cooperation between parents',
        'Can be challenging if parents live far apart',
        'May require frequent transitions for children'
      ],
      considerations: 'Works best when parents can communicate effectively and live relatively close to each other.'
    },
    {
      icon: FiUser,
      title: 'Sole Custody',
      subtitle: 'Primary Custody with One Parent',
      description: 'One parent has primary physical custody and decision-making authority',
      pros: [
        'Provides stability and consistency for child',
        'Reduces conflict in high-conflict situations',
        'Clearer decision-making structure',
        'May be necessary for safety reasons'
      ],
      cons: [
        'Limited time with non-custodial parent',
        'Full responsibility on one parent',
        'May strain parent-child relationships',
        'Can be emotionally difficult for all parties'
      ],
      considerations: 'Typically awarded when joint custody is not in the child\'s best interest due to safety concerns or inability to co-parent.'
    },
    {
      icon: FiHeart,
      title: 'Split Custody',
      subtitle: 'Different Arrangements for Multiple Children',
      description: 'Different custody arrangements for different children in the same family',
      pros: [
        'Considers individual needs of each child',
        'May work better for children of different ages',
        'Can accommodate special circumstances',
        'Allows for customized arrangements'
      ],
      cons: [
        'Separates siblings',
        'Complex scheduling and logistics',
        'May create emotional difficulties',
        'Rarely preferred by courts'
      ],
      considerations: 'Only considered when it serves the best interests of the children involved and there are compelling reasons to separate siblings.'
    }
  ];

  const legalVsPhysical = [
    {
      type: 'Legal Custody',
      icon: FiUsers,
      description: 'The right to make important decisions about the child\'s life',
      includes: [
        'Educational decisions and school choice',
        'Medical and healthcare decisions',
        'Religious upbringing and activities',
        'Extracurricular activities',
        'Travel and relocation decisions'
      ]
    },
    {
      type: 'Physical Custody',
      icon: FiHome,
      description: 'Where the child lives and spends their time',
      includes: [
        'Primary residence determination',
        'Daily care and supervision',
        'Overnight stays and living arrangements',
        'Day-to-day parenting decisions',
        'Transportation arrangements'
      ]
    }
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
            Types of Custody in Alabama
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the different custody arrangements available under Alabama law and how they work in practice.
          </p>
        </motion.div>

        {/* Legal vs Physical Custody */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {legalVsPhysical.map((custody, index) => (
            <motion.div
              key={custody.type}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-lg p-3 mr-3">
                  <SafeIcon icon={custody.icon} className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {custody.type}
                </h3>
              </div>
              <p className="text-gray-600 mb-6">{custody.description}</p>
              <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
              <ul className="space-y-2">
                {custody.includes.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <SafeIcon icon={FiCheck} className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Custody Types Detail */}
        <div className="space-y-8">
          {custodyTypes.map((custody, index) => (
            <motion.div
              key={custody.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 border-b">
                <div className="flex items-center mb-2">
                  <div className="bg-blue-100 rounded-lg p-3 mr-4">
                    <SafeIcon icon={custody.icon} className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{custody.title}</h3>
                    <p className="text-blue-600 font-medium">{custody.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-700">{custody.description}</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                      <SafeIcon icon={FiCheck} className="h-5 w-5 mr-2" />
                      Advantages
                    </h4>
                    <ul className="space-y-3">
                      {custody.pros.map((pro, proIndex) => (
                        <li key={proIndex} className="flex items-start">
                          <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-red-700 mb-4 flex items-center">
                      <SafeIcon icon={FiX} className="h-5 w-5 mr-2" />
                      Challenges
                    </h4>
                    <ul className="space-y-3">
                      {custody.cons.map((con, conIndex) => (
                        <li key={conIndex} className="flex items-start">
                          <div className="bg-red-100 rounded-full p-1 mr-3 mt-1">
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                          </div>
                          <span className="text-gray-700">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Important Considerations</h4>
                  <p className="text-blue-800">{custody.considerations}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Factors Influencing Custody Decisions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Court Considerations</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <SafeIcon icon={FiClock} className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                  <span className="text-gray-700">Each parent's work schedule and availability</span>
                </li>
                <li className="flex items-start">
                  <SafeIcon icon={FiHome} className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                  <span className="text-gray-700">Geographic proximity between parents' homes</span>
                </li>
                <li className="flex items-start">
                  <SafeIcon icon={FiUsers} className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                  <span className="text-gray-700">Quality of relationship between child and each parent</span>
                </li>
                <li className="flex items-start">
                  <SafeIcon icon={FiHeart} className="h-5 w-5 text-purple-600 mr-3 mt-1" />
                  <span className="text-gray-700">Child's adjustment to current living situation</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Modification Possibilities</h3>
              <p className="text-gray-700 mb-4">
                Custody arrangements can be modified when there is a material change in circumstances that affects the child's best interests.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Relocation of a parent</li>
                <li>• Changes in work schedules</li>
                <li>• Child's changing needs as they grow</li>
                <li>• Safety concerns or domestic violence</li>
                <li>• Substantial changes in parental circumstances</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustodyTypes;