const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// الـ Endpoint الأساسية للترحيب بالمشروع
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to PLANNIT API - AI-Based Event Planning System",
        status: "Running Successfully inside Docker Container!"
    });
});

// Endpoint تجريبية لعرض باقات الحفلات الخاصة بمشروعكم
app.get('/api/packages', (req, res) => {
    res.json([
        { id: 1, name: "Crystal Grand Ballroom Package", price: "Premium" },
        { id: 2, name: "Golden Touch Event Planners", price: "Standard" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});