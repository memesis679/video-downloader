const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');

const app = express();
app.use(cors());

app.get('/download', (req, res) => {
    const url = req.query.url;

    if (!ytdl.validateURL(url)) {
        return res.send("bad url");
    }

    res.header('Content-Disposition', 'attachment; filename="video.mp4"');

    ytdl(url, { quality: 'highest' }).pipe(res);
});

app.listen(3000, () => {
    console.log("Server running");
});
