# 🎧 VibeWave – The Weekends Music Experience

**VibeWave** is a sleek, interactive web music player dedicated to showcasing the best of **The Weekend’s** music. With smooth animations, a responsive design, and integrated Spotify playback, VibeWave offers fans a visually rich and immersive listening experience all in the browser.

## 🎵 Spotify Playback Limit

By default, the embedded Spotify player only allows **30-second previews** unless the user:

- Is logged into their Spotify account in the browser, **and**
- Has a valid **Spotify Premium** subscription.

This is a limitation of Spotify's embed service and cannot be changed via JavaScript.

### ✅ Full Playback Instructions

If the user is logged in and has Premium, the full song will play inside the embedded widget.

We recommend adding a message in the interface:

```html
<small class="note">🔓 Log in to Spotify and ensure you have Premium to listen to full tracks.</small>
