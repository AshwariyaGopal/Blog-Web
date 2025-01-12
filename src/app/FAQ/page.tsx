"use client"
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const faqs = [
    { question: "What are the latest fashion trends?", answer: "Bold colors, oversized kurta, and sustainable fabrics are trending this season." },
    { question: "How can I style oversized clothing?", answer: "Pair oversized pieces with fitted garments to create a balanced look." },
    { question: "What are some must-have accessories?", answer: "Chunky jewelry, statement handbags, and bucket hats are must-haves this season." },
    { question: "How do I create a capsule wardrobe?", answer: "A capsule wardrobe is made up of timeless, versatile pieces that can be mixed and matched. Focus on quality over quantity and choose neutral colors that complement each other." },
    { question: "What is the best way to accessorize a simple outfit?", answer: "You can elevate a simple outfit by adding bold accessories like a statement necklace, scarf, or a unique handbag. The key is balance—don't overdo it." },
    { question: "What are the benefits of investing in sustainable fashion?", answer: "Sustainable fashion reduces waste, uses eco-friendly materials, and supports ethical production practices. It’s a long-term investment in both the planet and your wardrobe." },
    { question: "How can I incorporate vintage fashion into my modern wardrobe?", answer: "Mix vintage pieces with modern ones for a balanced look. A vintage jacket, for example, can look great with contemporary jeans or a modern dress." },  



];

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4 mt-20">
      <h1 className="text-4xl font-bold text-center mb-8 text-black">Fashion Blog FAQs</h1>
      <p className="text-center text-gray-600 mb-6">Find answers to your most pressing fashion questions!</p>
      <input
        type="text"
        placeholder="Search FAQs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border rounded p-3 mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
      />
      <div className="space-y-6">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <button
                className="w-full text-left text-lg font-semibold flex justify-between items-center text-gray-800 hover:text-pink-500"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="text-gray-500">{openIndex === index ? "-" : "+"}</span>
              </button>
              {openIndex === index && <p className="mt-3 text-gray-700">{faq.answer}</p>}
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center">No FAQs match your search.</p>
        )}
      </div>
    </div>
  );
};

export default FAQ;
