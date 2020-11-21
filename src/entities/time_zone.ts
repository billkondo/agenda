import assert from 'assert';

type OptionalParams = {
  timezone_name?: string;
};

export class TimeZone {
  gmt_offset: number;
  timezone_name: string;

  constructor(gmt_offset: number, optional: OptionalParams = {}) {
    assert(gmt_offset != null);

    const { timezone_name } = optional;

    this.gmt_offset = gmt_offset;
    this.timezone_name = timezone_name ?? '';
  }
}
