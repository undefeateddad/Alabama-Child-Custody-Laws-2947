import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFileText, FiClock, FiMapPin, FiDollarSign, FiUsers, FiCheckCircle } = FiIcons;

const LegalRequirements = () => {
  const requirements = [
    {
      icon: FiMapPin,
      title: 'Residency Requirements',
      items: [
        'At least one parent must be an Alabama resident for 6 months before filing',
        'Child must have lived in Alabama for 6 months (or since birth if younger)',
        'Alabama must have jurisdiction under the Uniform Child Custody Jurisdiction Act'
      ]
    },
    {
      icon: FiFileText,
      title: 'Required Documents',
      items: [
        'Petition for custody or divorce with custody provisions',
        'Parenting plan detailing custody and visitation',
        'Financial statements and income documentation',
        'Certificate of completion for parenting class (if required by court)'
      ]
    },
    {
      icon: FiDollarSign,
      title: 'Filing Fees',
      items: [
        'Initial filing fee varies by county (typically $200-$400)',
        'Service of process fees',
        'Additional fees for mediation or court-appointed evaluators',
        'Fee waivers available for qualifying low-income families'
      ]
    }
  ];

  const courtProcess = [
    {
      step: 1,
      title: 'File Petition',
      description: 'Submit custody petition and required documents to the circuit court'
    },
    {
      step: 2,
      title: 'Serve Papers',
      description: 'Legally serve the other parent with court documents'
    },
    {
      step: 3,
      title: 'Response Period',
      description: 'Other parent has 30 days to respond to the petition'
    },
    {
      step: 4,
      title: 'Mediation',
      description: 'Court may order mediation to resolve disputes outside of trial'
    },
    {
      step: 5,
      title: 'Trial/Hearing',
      description: 'If agreement not reached, court will hold hearing and make decision'
    },
    {
      step: 6,
      title: 'Final Order',
      description: 'Judge issues final custody order with detailed arrangements'
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
            Legal Requirements for Alabama Custody Cases
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the legal prerequisites, procedures, and requirements for filing custody cases in Alabama courts.
          </p>
        </motion.div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {requirements.map((requirement, index) => (
            <motion.div
              key={requirement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-lg p-3 mr-3">
                  <SafeIcon icon={requirement.icon} className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {requirement.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {requirement.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Court Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Court Process Timeline
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courtProcess.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-3">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 ml-11">
                  {step.description}
                </p>
                {index < courtProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-4 left-full w-8 h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Best Interest Factors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Best Interest of the Child Factors
          </h2>
          <p className="text-gray-700 mb-8">
            Alabama courts consider these key factors when determining custody arrangements:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <SafeIcon icon={FiUsers} className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Parental Fitness</h4>
                  <p className="text-gray-700">Physical and mental health, stability, and caregiving ability</p>
                </div>
              </div>
              <div className="flex items-start">
                <SafeIcon icon={FiUsers} className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Child's Needs</h4>
                  <p className="text-gray-700">Physical, emotional, educational, and developmental requirements</p>
                </div>
              </div>
              <div className="flex items-start">
                <SafeIcon icon={FiUsers} className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Existing Relationships</h4>
                  <p className="text-gray-700">Bond with each parent and continuity of relationships</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <SafeIcon icon={FiUsers} className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Home Environment</h4>
                  <p className="text-gray-700">Stability, safety, and suitability of living conditions</p>
                </div>
              </div>
              <div className="flex items-start">
                <SafeIcon icon={FiUsers} className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Child's Preference</h4>
                  <p className="text-gray-700">Considered if child is of sufficient age and maturity</p>
                </div>
              </div>
              <div className="flex items-start">
                <SafeIcon icon={FiUsers} className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Willingness to Co-Parent</h4>
                  <p className="text-gray-700">Ability to facilitate the child's relationship with other parent</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalRequirements;