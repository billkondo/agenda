import assert from 'assert';

export class TimeZone {
  gmt_offset: number;
  timezone_name: string;

  constructor(gmt_offset: number, timezone_name: string) {
    assert(gmt_offset != null);
    assert(timezone_name != null);

    this.gmt_offset = gmt_offset;
    this.timezone_name = timezone_name;
  }
}
