import assert from 'assert';

type OptionalParams = {
  timezone_name: string | null;
};
const defaultOptionalParams: OptionalParams = {
  timezone_name: null,
};

export class TimeZone {
  gmt_offset: number;
  timezone_name: string | null;

  constructor(gmt_offset: number, optional = defaultOptionalParams) {
    assert(gmt_offset != null);

    const { timezone_name } = optional;

    this.gmt_offset = gmt_offset;
    this.timezone_name = timezone_name;
  }
}
