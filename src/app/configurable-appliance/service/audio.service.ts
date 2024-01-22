import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private mediaRecorder: MediaRecorder | null = null;
  private chunks: Blob[] = [];
  private audioSubject = new Subject<any>();

  startRecording() {
    // ... (unchanged)
  }

  stopRecording() {
    // ... (unchanged)
  }

  playAudio(audioUrl: string) {
    const audio = new Audio(audioUrl);
    audio.play();
  }

  playAudioWithProgress(audioUrl: string): Observable<any> {
    const audio = new Audio(audioUrl);
    audio.controls = false;

    audio.addEventListener('timeupdate', () => {
      this.audioSubject.next({
        type: 'timeupdate',
        currentTime: audio.currentTime,
        duration: audio.duration
      });
    });

    audio.addEventListener('ended', () => {
      this.audioSubject.next({
        type: 'ended'
      });
    });

    audio.play();

    return this.audioSubject.asObservable();
  }
}
