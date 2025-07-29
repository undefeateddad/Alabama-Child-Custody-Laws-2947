import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiExternalLink, FiPhone, FiMail, FiMapPin, FiBook, FiUsers, FiScale, FiHeart } = FiIcons;

const Resources = () => {
  const officialResources = [
    {
      title: 'Alabama Judicial System',
      description: 'Official court system website with forms and procedures',
      url: 'https://www.alacourt.gov/',
      type: 'Government'
    },
    {
      title: 'Alabama State Bar',
      description: 'Find attorneys and legal resources',
      url: 'https://www.alabar.org/',
      type: 'Legal'
    },
    {
      title: 'Alabama Department of Human Resources',
      description: 'Child support enforcement and family services',
      url: 'https://www.dhr.alabama.gov/',
      type: 'Government'
    },
    {
      title: 'Alabama Child Support Enforcement',
      description: 'Support calculation tools and enforcement services',
      url: 'https://www.dhr.alabama.gov/services/child-support-enforcement/',
      type: 'Support'
    }
  ];

  const supportOrganizations = [
    {
      icon: FiHeart,
      title: 'Alabama Coalition Against Domestic Violence',
      description: 'Support for families experiencing domestic violence',
      services: ['24/7 hotline', 'Safety planning', 'Legal advocacy', 'Shelter services'],
      contact: 'Hotline: 1-800-650-6522'
    },
    {
      icon: FiUsers,
      title: 'Children\'s Policy Council',
      description: 'Advocacy and resources for children and families',
      services: ['Policy advocacy', 'Educational resources', 'Community programs', 'Research'],
      contact: 'Contact through local offices'
    },
    {
      icon: FiScale,
      title: 'Legal Aid Society',
      description: 'Free legal assistance for qualifying families',
      services: ['Legal representation', 'Self-help resources', 'Court assistance', 'Document preparation'],
      contact: 'Varies by county'
    }
  ];

  const courtLocations = [
    {
      county: 'Jefferson County',
      courthouse: 'Jefferson County Family Court',
      address: '801 Richard Arrington Jr. Blvd N, Birmingham, AL 35203',
      phone: '(205) 325-5355'
    },
    {
      county: 'Madison County',
      courthouse: 'Madison County Courthouse',
      address: '100 Northside Square, Huntsville, AL 35801',
      phone: '(256) 532-3380'
    },
    {
      county: 'Mobile County',
      courthouse: 'Mobile County Courthouse',
      address: '109 Government St, Mobile, AL 36602',
      phone: '(251) 574-8400'
    },
    {
      county: 'Montgomery County',
      courthouse: 'Montgomery County Courthouse',
      address: '251 S Lawrence St, Montgomery, AL 36104',
      phone: '(334) 832-1240'
    }
  ];

  const helpfulForms = [
    'Petition for Custody',
    'Parenting Plan Template',
    'Motion to Modify Custody',
    'Child Support Calculation Worksheet',
    'Financial Statement Form',
    'Notice of Relocation',
    'Motion for Contempt',
    'Parenting Class Certificate'
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
            Alabama Custody Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential resources, contacts, and support services for families navigating custody and parenting matters in Alabama.
          </p>
        </motion.div>

        {/* Official Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Official Government Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {officialResources.map((resource, index) => (
              <div key={resource.title} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{resource.title}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {resource.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Visit Website
                  <SafeIcon icon={FiExternalLink} className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Support Organizations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Support Organizations
          </h2>
          <div className="space-y-8">
            {supportOrganizations.map((org, index) => (
              <div key={org.title} className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 rounded-lg p-2 mr-3">
                    <SafeIcon icon={org.icon} className="h-5 w-5 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{org.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{org.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Services:</h4>
                    <ul className="space-y-1">
                      {org.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-gray-700 text-sm">• {service}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Contact:</h4>
                    <p className="text-gray-700">{org.contact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Court Locations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Major Court Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {courtLocations.map((court, index) => (
              <div key={court.county} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{court.county}</h3>
                <h4 className="font-medium text-gray-800 mb-3">{court.courthouse}</h4>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <SafeIcon icon={FiMapPin} className="h-4 w-4 text-gray-500 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{court.address}</span>
                  </div>
                  <div className="flex items-center">
                    <SafeIcon icon={FiPhone} className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-gray-700 text-sm">{court.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 text-sm">
              <strong>Note:</strong> Contact your local courthouse for specific filing procedures, 
              fees, and court schedules. Many counties have family court divisions that handle custody matters.
            </p>
          </div>
        </motion.div>

        {/* Forms and Documents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Common Court Forms
          </h2>
          <p className="text-gray-600 mb-6">
            These forms are commonly used in Alabama custody cases. Check with your local court 
            for specific requirements and the most current versions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {helpfulForms.map((form, index) => (
              <div key={form} className="flex items-center p-3 bg-gray-50 rounded-lg">
                <SafeIcon icon={FiBook} className="h-5 w-5 text-gray-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{form}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Emergency Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-red-800 mb-4">Immediate Safety</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <SafeIcon icon={FiPhone} className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="font-semibold text-red-800">Emergency: 911</p>
                    <p className="text-red-700 text-sm">Police, fire, medical emergency</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiPhone} className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <p className="font-semibold text-red-800">Domestic Violence Hotline</p>
                    <p className="text-red-700 text-sm">1-800-799-7233 (24/7)</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Legal Emergencies</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong>Emergency Custody Orders:</strong> Available through family court for 
                  immediate safety concerns.
                </p>
                <p>
                  <strong>Protection from Abuse Orders:</strong> Can be obtained to protect 
                  against domestic violence.
                </p>
                <p>
                  <strong>Emergency Legal Help:</strong> Contact local legal aid or the state 
                  bar's emergency assistance program.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Resources;