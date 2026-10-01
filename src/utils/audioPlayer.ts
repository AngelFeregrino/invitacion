// Audio player for celebration background music using videoplayback.webm

class BackgroundAudioPlayer {
  private audio: HTMLAudioElement | null = null;
  private _isPlaying: boolean = false;
  private _volume: number = 0.6;
  private listeners: Set<(playing: boolean) => void> = new Set();

  private initAudio(): HTMLAudioElement | null {
    if (typeof window === 'undefined') return null;

    if (!this.audio) {
      const audioUrl = `${import.meta.env.BASE_URL}assets/music/videoplayback.webm`;
      this.audio = new Audio(audioUrl);
      this.audio.loop = true;
      this.audio.volume = this._volume;
      this.audio.preload = 'auto';

      this.audio.addEventListener('play', () => {
        this._isPlaying = true;
        this.notifyListeners();
      });

      this.audio.addEventListener('pause', () => {
        this._isPlaying = false;
        this.notifyListeners();
      });

      this.audio.addEventListener('ended', () => {
        this._isPlaying = false;
        this.notifyListeners();
      });
    }

    return this.audio;
  }

  private notifyListeners() {
    this.listeners.forEach((listener) => {
      try {
        listener(this._isPlaying);
      } catch (e) {
        console.error('Error notifying audio listener', e);
      }
    });
  }

  public subscribe(callback: (playing: boolean) => void): () => void {
    this.listeners.add(callback);
    callback(this._isPlaying);
    return () => {
      this.listeners.delete(callback);
    };
  }

  public async play(): Promise<boolean> {
    const audio = this.initAudio();
    if (!audio) return false;

    try {
      await audio.play();
      this._isPlaying = true;
      this.notifyListeners();
      return true;
    } catch (error) {
      console.warn('Autoplay prevented or audio playback error:', error);
      this._isPlaying = false;
      this.notifyListeners();
      return false;
    }
  }

  public pause(): void {
    if (this.audio) {
      this.audio.pause();
    }
    this._isPlaying = false;
    this.notifyListeners();
  }

  public toggle(): boolean {
    if (this._isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public setVolume(val: number): void {
    const clamped = Math.max(0, Math.min(1, val));
    this._volume = clamped;
    if (this.audio) {
      this.audio.volume = clamped;
    }
  }

  public getVolume(): number {
    return this._volume;
  }

  public isPlaying(): boolean {
    return this._isPlaying;
  }
}

export const backgroundMusic = new BackgroundAudioPlayer();
