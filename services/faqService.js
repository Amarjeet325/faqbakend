const Faq = require("../models/faqModel");

exports.getFaqs = async () => {
  return await Faq.find({ isPublished: true }).sort("order");
};

exports.createFaq = async (faqData) => {
  return await Faq.create(faqData);
};

exports.updateFaq = async (id, data) => {
  return await Faq.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteFaq = async (id) => {
  return await Faq.findByIdAndDelete(id);
};
