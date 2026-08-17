// Web Audio API ambient celebration music generator & sound player

class AmbientMusicEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timerId: number | null = null;
  private gainNode: GainNode | null = null;

  // Romantic gentle pentatonic chords: D major / G major / A major / B minor
  private progression = [
    [293.66, 369.99, 440.0, 587.33], // D - F# - A - D5
    [329.63, 392.00, 493.88, 659.25], // Em - G - B - E5
    [246.94, 293.66, 369.99, 440.0],  // Bm - D - F# - A
    [392.00, 493.88, 587.33, 783.99], // G - B - D - G5
    [440.00, 554.37, 659.25, 880.00], // A - C# - E - A5
  ];

  private currentChordIndex = 0;
  private noteStep = 0;

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.12, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playPluck(freq: number, time: number, duration: number = 2.0) {
    if (!this.ctx || !this.gainNode) return;

    // Main oscillator for warm harp/celesta tone
    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sine';
    osc2.type = 'triangle';

    osc.frequency.setValueAtTime(freq, time);
    osc2.frequency.setValueAtTime(freq * 2, time); // warm overtone

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, time);
    filter.frequency.exponentialRampToValueAtTime(300, time + duration);

    // Bell/plucked envelope
    noteGain.gain.setValueAtTime(0.0001, time);
    noteGain.gain.exponentialRampToValueAtTime(0.3, time + 0.03);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.gainNode);

    osc.start(time);
    osc2.start(time);
    osc.stop(time + duration);
    osc2.stop(time + duration);
  }

  private tick = () => {
    if (!this.isPlaying || !this.ctx) return;

    const chord = this.progression[this.currentChordIndex];
    const freq = chord[this.noteStep % chord.length];

    this.playPluck(freq, this.ctx.currentTime, 2.5);

    // Occasionally add high sparkle chime
    if (this.noteStep % 3 === 0) {
      this.playPluck(freq * 2, this.ctx.currentTime + 0.18, 1.8);
    }

    this.noteStep++;
    if (this.noteStep >= chord.length * 2) {
      this.noteStep = 0;
      this.currentChordIndex = (this.currentChordIndex + 1) % this.progression.length;
    }

    this.timerId = window.setTimeout(this.tick, 450);
  };

  public play() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.tick();
  }

  public pause() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public setVolume(vol: number) {
    if (this.gainNode && this.ctx) {
      const clamped = Math.max(0, Math.min(1, vol));
      this.gainNode.gain.setValueAtTime(clamped * 0.25, this.ctx.currentTime);
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const ambientMusic = new AmbientMusicEngine();
