import { Instrument } from "./Classes/Instrument";
import { Melody } from "./Classes/Melody";
import { Note } from "./Classes/Note";
import { TimeSignature } from "./Classes/TimeSignature";
import { TestDriver } from "./Drivers/TestDriver";
import { ToneDriver } from "./Drivers/ToneDriver";
import { Beats } from "./Enums/Beats";
import { Pitch } from "./Enums/Pitch";

let timesig = new TimeSignature(4, 4, 60);

let beat = Beats.t;
let beat2 = Beats.tt;
let beat1 = Beats.tt;
// console.log(timesig.noteTime(new Note(Pitch.MIDDLE_C, beat)));
// console.log(timesig.noteTime(new Note(Pitch.MIDDLE_C, beat2)));
// console.log(timesig.noteTime(new Note(Pitch.MIDDLE_C, beat1)));

let notes: Note[] = [
    new Note(Pitch.C4, Beats.q),
    new Note(Pitch.C4, Beats.q),
    new Note(Pitch.G4, Beats.q),
    new Note(Pitch.G4, Beats.q),
    new Note(Pitch.A4, Beats.q),
    new Note(Pitch.A4, Beats.q),
    new Note(Pitch.G4, Beats.h),
    new Note(Pitch.F4, Beats.q),
    new Note(Pitch.F4, Beats.q),
    new Note(Pitch.E4, Beats.q),
    new Note(Pitch.E4, Beats.q),
    new Note(Pitch.D4, Beats.q),
    new Note(Pitch.D4, Beats.q),
    new Note(Pitch.C4, Beats.h)
];

let melody = new Melody('my first melody', timesig, false, notes);

let testSource = new ToneDriver();

let instrument = new Instrument(testSource);

instrument.armMelody(melody);

instrument.playMelody();