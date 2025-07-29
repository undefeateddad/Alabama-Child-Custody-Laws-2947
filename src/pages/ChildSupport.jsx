import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiDollarSign, FiCalculator, FiTrendingUp, FiFileText, FiClock, FiAlertTriangle, FiCheck } = FiIcons;

const ChildSupport = () => {
  const supportFactors = [
    {
      icon: FiDollarSign,
      title: 'Combined Gross Income',
      description: 'Total monthly gross income of both parents',
      details: [
        'Wages, salaries, and tips',
        'Self-employment income',
        'Bonuses and commissions',
        'Rental and investment income',
        'Unemployment and disability benefits'
      ]
    },
    {
      icon: FiClock,
      title: 'Parenting Time',
      description: 'Number of overnights each parent has with the child',
      details: [
        'Standard visitation (0-49 overnights)',
        'Shared custody (50-127 overnights)',
        'Split custody (128+ overnights)',
        'Adjustments for extended visitation',
        'Holiday and vacation considerations'
      ]
    },
    {
      icon: FiTrendingUp,
      title: 'Additional Expenses',
      description: 'Other costs that may affect support calculations',
      details: [
        'Health insurance premiums',
        'Childcare expenses',
        'Extraordinary medical expenses',
        'Educational expenses',
        'Other children support obligations'
      ]
    }
  ];

  const modificationReasons = [
    'Significant change in either parent\'s income (15% or more)',
    'Change in parenting time arrangement',
    'Child\'s changing needs (medical, educational)',
    'Loss of employment or disability',
    'Remarriage affecting household income',
    'Birth of additional children',
    'Cost of living adjustments'
  ];

  const enforcementMethods = [
    'Wage garnishment',
    'Asset seizure',
    'Tax refund interception',
    'License suspension (driver\'s, professional)',
    'Contempt of court proceedings',
    'Credit bureau reporting',
    'Passport denial'
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
            Alabama Child Support Guidelines
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding how child support is calculated, modified, and enforced under Alabama law.
          </p>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Alabama Calculates Child Support
          </h2>
          <p className="text-gray-700 mb-6">
            Alabama uses the Income Shares Model to calculate child support. This model is based on the principle 
            that children should receive the same proportion of parental income they would have received if the 
            parents lived together.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">Basic Calculation Process</h3>
            <ol className="list-decimal list-inside space-y-2 text-blue-800">
              <li>Determine both parents' gross monthly income</li>
              <li>Calculate combined gross income</li>
              <li>Find basic support obligation from Alabama guidelines table</li>
              <li>Allocate obligation based on each parent's income percentage</li>
              <li>Adjust for parenting time and additional expenses</li>
              <li>Apply any applicable deviations</li>
            </ol>
          </div>
        </motion.div>

        {/* Support Factors */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {supportFactors.map((factor, index) => (
            <motion.div
              key={factor.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 rounded-lg p-3 mr-3">
                  <SafeIcon icon={factor.icon} className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {factor.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{factor.description}</p>
              <ul className="space-y-2">
                {factor.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <SafeIcon icon={FiCheck} className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Sample Calculation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Sample Calculation Example
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Family Situation</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Parent A Income:</strong> $4,000/month</p>
                <p><strong>Parent B Income:</strong> $2,000/month</p>
                <p><strong>Combined Income:</strong> $6,000/month</p>
                <p><strong>Number of Children:</strong> 1</p>
                <p><strong>Parenting Time:</strong> Standard visitation</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Calculation Steps</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">Basic Support Obligation:</span>
                  <span className="font-semibold">$1,080</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Parent A's Share (67%):</span>
                  <span className="font-semibold">$724</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Parent B's Share (33%):</span>
                  <span className="font-semibold">$356</span>
                </div>
                <div className="border-t pt-2 mt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Support Payment:</span>
                    <span className="text-green-600">$724/month</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    (Parent A pays to Parent B)
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
            <p className="text-yellow-800">
              <strong>Note:</strong> This is a simplified example. Actual calculations may include 
              adjustments for childcare, health insurance, and other factors.
            </p>
          </div>
        </motion.div>

        {/* Modification and Enforcement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 rounded-lg p-3 mr-3">
                <SafeIcon icon={FiFileText} className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Support Modifications
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Child support can be modified when there is a material change in circumstances. 
              Common reasons include:
            </p>
            <ul className="space-y-3">
              {modificationReasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <SafeIcon icon={FiCheck} className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{reason}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-blue-800 text-sm">
                <strong>Important:</strong> Modifications are not automatic and must be requested through the court. 
                Support obligations continue until officially modified.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <div className="flex items-center mb-6">
              <div className="bg-red-100 rounded-lg p-3 mr-3">
                <SafeIcon icon={FiAlertTriangle} className="h-6 w-6 text-red-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Enforcement Methods
              </h2>
            </div>
            <p className="text-gray-600 mb-6">
              Alabama has various enforcement tools available when child support payments are not made:
            </p>
            <ul className="space-y-3">
              {enforcementMethods.map((method, index) => (
                <li key={index} className="flex items-start">
                  <SafeIcon icon={FiCheck} className="h-4 w-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{method}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-red-50 rounded-lg">
              <p className="text-red-800 text-sm">
                <strong>Consequences:</strong> Failure to pay child support can result in serious legal and 
                financial consequences, including jail time for contempt of court.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Child Support Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Official Resources</h3>
              <ul className="space-y-3">
                <li>
                  <a href="https://www.dhr.alabama.gov/services/child-support-enforcement/" 
                     target="_blank" rel="noopener noreferrer"
                     className="text-purple-600 hover:text-purple-700 font-medium">
                    Alabama Child Support Enforcement
                  </a>
                </li>
                <li>
                  <a href="https://www.alacourt.gov/" 
                     target="_blank" rel="noopener noreferrer"
                     className="text-purple-600 hover:text-purple-700 font-medium">
                    Alabama Court System
                  </a>
                </li>
                <li className="text-gray-700">Alabama Child Support Guidelines (Rule 32)</li>
                <li className="text-gray-700">Income Shares Calculator</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Getting Help</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Legal Assistance:</strong> Consider consulting with a family law attorney 
                  for complex cases or disputes.
                </p>
                <p>
                  <strong>Self-Help Resources:</strong> Many courts offer self-help centers and 
                  forms for pro se litigants.
                </p>
                <p>
                  <strong>Mediation:</strong> Alternative dispute resolution can help resolve 
                  support issues outside of court.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChildSupport;