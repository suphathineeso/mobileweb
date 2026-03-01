import type { AccelSample, WorkoutState } from "./types";

export class ArmWorkoutEngine {
  private listeners = new Set<(s: WorkoutState) => void>();

  private peak = -999;
  private valley = 999;
  private phase: "WAIT_UP" | "WAIT_DOWN" = "WAIT_UP";
  private repStartTime = 0;

  private sumRepMsOk = 0;

  state: WorkoutState = {
    status: "IDLE",
    repDisplay: 0,
    stats: {
      repsTotal: 0,
      repsOk: 0,
      repsBad: 0,
      score: 0,
      avgRepMs: 0,
      lastMessage: "พร้อมเริ่ม",
    },
  };

  onChange(cb: (s: WorkoutState) => void) {
    this.listeners.add(cb);
    cb(this.clone());
    return () => this.listeners.delete(cb);
  }

  private emit() {
    const snap = this.clone();
    this.listeners.forEach((cb) => cb(snap));
  }

  private clone(): WorkoutState {
    return JSON.parse(JSON.stringify(this.state));
  }

  start() {
    this.state = {
      status: "RUNNING",
      repDisplay: 0,
      stats: {
        repsTotal: 0,
        repsOk: 0,
        repsBad: 0,
        score: 0,
        avgRepMs: 0,
        lastMessage: "เริ่มได้เลย",
      },
    };

    this.phase = "WAIT_UP";
    this.peak = -999;
    this.valley = 999;
    this.repStartTime = 0;
    this.sumRepMsOk = 0;

    this.emit();
  }

  stop() {
    this.state.status = "STOPPED";
    this.state.stats.lastMessage = "หยุดการทำงาน";
    this.emit();
  }

  reset() {
    this.state.status = "IDLE";
    this.state.repDisplay = 0;
    this.state.stats = {
      repsTotal: 0,
      repsOk: 0,
      repsBad: 0,
      score: 0,
      avgRepMs: 0,
      lastMessage: "รีเซ็ตแล้ว",
    };
    this.phase = "WAIT_UP";
    this.peak = -999;
    this.valley = 999;
    this.repStartTime = 0;
    this.sumRepMsOk = 0;
    this.emit();
  }

  process(sample: AccelSample) {
    if (this.state.status !== "RUNNING") return;

    const y = sample.ay;
    const side = Math.abs(sample.ax) + Math.abs(sample.az);

    const UP_TH = 2.0;
    const DOWN_TH = -1.5;
    const MIN_ROM = 3.0;
    const MIN_MS = 700;
    const MAX_MS = 3500;
    const MAX_SIDE = 5.0;

    this.peak = Math.max(this.peak, y);
    this.valley = Math.min(this.valley, y);

    if (this.phase === "WAIT_UP") {
      if (y > UP_TH) {
        this.phase = "WAIT_DOWN";
        this.repStartTime = sample.t;
      }
      return;
    }

    // WAIT_DOWN
    if (y < DOWN_TH) {
      const repMs = this.repStartTime > 0 ? sample.t - this.repStartTime : 0;
      const rom = this.peak - this.valley;

      this.state.stats.repsTotal++;

      let ok = true;
      let msg = "OK";

      if (rom < MIN_ROM) {
        ok = false;
        msg = "ยกแขนต่ำเกินไป";
      } else if (repMs < MIN_MS) {
        ok = false;
        msg = "เร็วเกินไป";
      } else if (repMs > MAX_MS) {
        ok = false;
        msg = "ช้าเกินไป";
      } else if (side > MAX_SIDE) {
        ok = false;
        msg = "กรุณายกแนวตั้ง";
      }

      if (ok) {
        this.state.repDisplay++;
        this.state.stats.repsOk++;
        this.state.stats.score++;

        this.sumRepMsOk += repMs;
        this.state.stats.avgRepMs = Math.round(
          this.sumRepMsOk / this.state.stats.repsOk
        );
      } else {
        this.state.stats.repsBad++;
      }

      this.state.stats.lastMessage = msg;

      // reset cycle
      this.phase = "WAIT_UP";
      this.peak = -999;
      this.valley = 999;
      this.repStartTime = 0;

      this.emit();
    }
  }

  getPercentOk(): number {
    const total = this.state.stats.repsTotal;
    if (total === 0) return 0;
    return Math.round((this.state.stats.repsOk / total) * 100);
  }
}