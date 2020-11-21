/* tslint:disable */
import { Record } from './record';
export interface GetManyRecordResponseDto {
  count: number;
  data: Array<Record>;
  page: number;
  pageCount: number;
  total: number;
}
