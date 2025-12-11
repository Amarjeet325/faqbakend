const asyncHandler = require("../middleware/asyncHandler");
const faqService = require("../services/faqService");


exports.getFaqs = async (req, res) => {
    try {
        const faqs = await faqService.getFaqs();
        res.json({ success: true, data: faqs });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createFaq = async (req, res) => {
    try {
        const faq = await faqService.createFaq(req.body);
        res.json({ success: true, data: faq });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateFaq = async (req, res) => {
    try {
        const faq = await faqService.updateFaq(req.params.id, req.body);
        res.json({ success: true, data: faq });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.deleteFaq = async (req, res) => {
    try {
        await faqService.deleteFaq(req.params.id);
        res.json({ success: true, message: "FAQ deleted" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

