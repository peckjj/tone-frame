import { Beats } from "../Enums/Beats";
import { Pitch } from "../Enums/Pitch";

export class Note {
    private pitch: Pitch;
    private beat: Beats;

    constructor(pitch: Pitch, beat: Beats) {
        this.pitch = pitch;
        this.beat = beat;
    }

    getPitch(): Pitch {
        return this.pitch;
    }

    setPitch(pitch: Pitch): void {
        this.pitch = pitch;
    }

    getBeat(): Beats {
        return this.beat;
    }

    setBeat(beat: Beats) {
        this.beat = beat;
    }

    transpose(steps: number) {
        const newPitch: Pitch = this.pitch + steps;

        if (newPitch < Pitch.LOWEST || newPitch > Pitch.HIGHEST) {
            throw new Error(`Cannot transpose beyond pitch range. Current Pitch: ${Pitch[this.pitch]}, transpose: ${steps}`);
        }

        this.setPitch(newPitch);
    }

    copy() : Note {
        return new Note(this.pitch, this.beat);
    }
}