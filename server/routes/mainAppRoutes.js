const express = require('express');
const path = require('path');

const router = express.Router();
const build_path = path.join(__dirname, '../../client/main-app/build');

// Serve static files for main app
router.use(express.static(build_path));

router.get('*', (req, res) => {
    res.sendFile(path.join(build_path, 'index.html'));
});


// router.get('/archive', (req, res) => {
//     res.sendFile(path.join(build_path, 'index.html'));
// });

module.exports = router;
