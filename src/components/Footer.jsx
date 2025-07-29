import React from 'react';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiScale, FiMail, FiPhone } = FiIcons;

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <SafeIcon icon={FiScale} className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Alabama Custody Laws</span>
            </div>
            <p className="text-gray-400 mb-4">
              Comprehensive information about Alabama parenting and custody laws to help families navigate legal requirements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Important Notice</h3>
            <p className="text-gray-400 text-sm">
              This website provides general information about Alabama custody laws and should not be considered legal advice. 
              Always consult with a qualified attorney for specific legal guidance regarding your situation.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="https://www.alacourt.gov/" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-white transition-colors">
                  Alabama Judicial System
                </a>
              </li>
              <li>
                <a href="https://www.alabar.org/" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-white transition-colors">
                  Alabama State Bar
                </a>
              </li>
              <li>
                <a href="https://www.dhr.alabama.gov/" target="_blank" rel="noopener noreferrer" 
                   className="hover:text-white transition-colors">
                  Alabama DHR
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Alabama Custody Laws Information. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Information based on Alabama Code and legal precedents. Last updated: December 2024
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;