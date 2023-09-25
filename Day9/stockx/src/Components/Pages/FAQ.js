import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../Assets/FAQ.css';

function FAQ() {
  const faqData = [
    {
      question: 'What is an Inventory Management System?',
      answer: 'An Inventory Management System is a software solution that helps businesses track and manage their inventory of products, goods, or materials efficiently. It allows organizations to keep real-time records of stock levels, streamline procurement, and optimize order fulfillment processes.',
    },
    {
      question: 'Why do I need an Inventory Management System?',
      answer: 'An Inventory Management System offers several benefits, including better control over inventory levels, reduced carrying costs, minimized stockouts, improved accuracy, enhanced demand forecasting, and increased overall efficiency in managing inventory-related tasks.',
    },
    {
      question: 'How can I choose the right Inventory Management System for my business?',
      answer: 'Choosing the right Inventory Management System involves evaluating your specific business needs, considering factors like scalability, integration capabilities, reporting features, ease of use, and cost. Its important to assess your current inventory processes and select a system that aligns with your objectives.',
    },
    {
      question: 'What are the key features of a good Inventory Management System?',
      answer: 'A good Inventory Management System should include features such as real-time inventory tracking, demand forecasting, order management, barcode scanning, reporting and analytics, multi-location support, and integration with other business software like POS systems and e-commerce platforms.',
    },
    {
      question: 'Is it possible to integrate an Inventory Management System with other business software?',
      answer: 'Yes, many Inventory Management Systems offer integration capabilities with various software solutions, including point-of-sale (POS) systems, e-commerce platforms, accounting software, and supply chain management tools. This integration enhances data flow and overall business efficiency.',
    },
    {
      question: 'How can I train my staff to use an Inventory Management System effectively?',
      answer: 'Effective training is crucial for successful implementation. You can provide training sessions, user manuals, and online resources. Additionally, some Inventory Management System providers offer training and support services to help your team get up to speed.',
    },
  ];

  return (
    <div>
      <Navbar />
      <div className='container'>
        <h1 className='faq-title mt-5'>Inventory Management System FAQs</h1>
        <div className='faq-container'>
          {faqData.map((faq, index) => (
            <div className='faq-item' key={index}>
              <div className='question'>
                <i className='bx bx-help-circle'></i> {faq.question}
              </div>
              <div className='answer'>{faq.answer}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FAQ;
