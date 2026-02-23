import { TextToSpeech } from "@capacitor-community/text-to-speech";

export class TtsService {
  async speak(text: string) {
    try {
      await TextToSpeech.speak({
        text,
        lang: "th-TH",
        rate: 1.0,
      });
    } catch (e) {
      // ใน browser บางครั้ง plugin ไม่ทำงาน ให้ไม่พังแอป
      console.log("TTS not available in this environment:", e);
    }
  }

  async stop() {
    try {
      await TextToSpeech.stop();
    } catch (e) {
      console.log("TTS stop not available:", e);
    }
  }
}